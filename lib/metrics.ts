/**
 * Live MechAfrica platform metrics.
 *
 * The MechAfrica backend publishes rounded-down counts on a public, unauthenticated
 * endpoint (see `roundDown` in its public_metrics_service.go) so exact figures stay
 * private. Each number is therefore a floor, which is why they render with "+".
 *
 * These override the stats stored on the Product row so the site tracks the platform
 * without anyone editing the CMS. If the endpoint is unavailable or returns anything
 * that does not validate, the stored values are used unchanged.
 *
 * Everything coming back is treated as untrusted input: these figures are published
 * as fact, so a corrupted or hostile response must degrade rather than render.
 */
const METRICS_URL =
  process.env.MECHAFRICA_METRICS_URL ??
  "https://mechafrica-backend.up.railway.app/api/v1/public/metrics";

const REVALIDATE_SECONDS = 3600;

/** A hung backend must not stall a page render or block a deploy. */
const REQUEST_TIMEOUT_MS = 5000;

/** Above this, a value is not a real count — it is corruption or an attack. */
const MAX_PLAUSIBLE_COUNT = 50_000_000;

export type Stat = { label: string; value: string };

type MetricsPayload = {
  farmers_count?: unknown;
  providers_count?: unknown;
};

/**
 * Accepts a value only if it is a real, positive, plausibly-sized integer.
 * Zero is rejected: for a headline reach figure it means a failed query far more
 * often than it means the truth, and "0+ farmers" is worse than a stale number.
 * Note `typeof NaN === "number"`, so a bare typeof check would render "NaN+".
 */
function readCount(value: unknown): number | null {
  if (typeof value !== "number") return null;
  if (!Number.isInteger(value)) return null;
  if (value <= 0 || value > MAX_PLAUSIBLE_COUNT) return null;
  return value;
}

function withPlus(value: number): string {
  return `${value.toLocaleString("en-US")}+`;
}

async function fetchMetrics(): Promise<MetricsPayload | null> {
  try {
    const res = await fetch(METRICS_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    if (!res.headers.get("content-type")?.includes("application/json")) return null;

    const body: unknown = await res.json();
    if (typeof body !== "object" || body === null) return null;

    const data = (body as { data?: unknown }).data;
    if (typeof data !== "object" || data === null) return null;

    return data as MetricsPayload;
  } catch {
    return null;
  }
}

/**
 * Returns the product's stats with the live farmer and provider counts substituted
 * in. Labels the backend does not publish (Regions) pass through untouched, as does
 * any figure that fails validation.
 */
export async function withLiveMetrics(stats: Stat[]): Promise<Stat[]> {
  const live = await fetchMetrics();
  if (!live) return stats;

  const farmers = readCount(live.farmers_count);
  const providers = readCount(live.providers_count);

  return stats.map((stat) => {
    const label = stat.label.toLowerCase();
    if (label.includes("farmer") && farmers !== null) {
      return { ...stat, value: withPlus(farmers) };
    }
    if (label.includes("provider") && providers !== null) {
      return { ...stat, value: withPlus(providers) };
    }
    return stat;
  });
}
