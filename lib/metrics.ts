/**
 * Live MechAfrica platform metrics.
 *
 * The MechAfrica backend publishes rounded-down counts on a public, unauthenticated
 * endpoint (see `roundDown` in its public_metrics_service.go) so exact figures stay
 * private. Each number is therefore a floor, which is why they render with "+".
 *
 * These override the stats stored on the Product row so the site tracks the platform
 * without anyone editing the CMS. If the endpoint is unavailable, the stored values
 * are used unchanged.
 */
const METRICS_URL =
  process.env.MECHAFRICA_METRICS_URL ??
  "https://mechafrica-backend.up.railway.app/api/v1/public/metrics";

const REVALIDATE_SECONDS = 3600;

export type Stat = { label: string; value: string };

type MetricsPayload = {
  farmers_count?: number;
  providers_count?: number;
};

function withPlus(value: number): string {
  return `${value.toLocaleString("en-US")}+`;
}

async function fetchMetrics(): Promise<MetricsPayload | null> {
  try {
    const res = await fetch(METRICS_URL, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    const body = await res.json();
    return (body?.data ?? null) as MetricsPayload | null;
  } catch {
    return null;
  }
}

/**
 * Returns the product's stats with the live farmer and provider counts substituted
 * in. Labels the backend does not publish (Regions) pass through untouched.
 */
export async function withLiveMetrics(stats: Stat[]): Promise<Stat[]> {
  const live = await fetchMetrics();
  if (!live) return stats;

  return stats.map((stat) => {
    const label = stat.label.toLowerCase();
    if (label.includes("farmer") && typeof live.farmers_count === "number") {
      return { ...stat, value: withPlus(live.farmers_count) };
    }
    if (label.includes("provider") && typeof live.providers_count === "number") {
      return { ...stat, value: withPlus(live.providers_count) };
    }
    return stat;
  });
}
