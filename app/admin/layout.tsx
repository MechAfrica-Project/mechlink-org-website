import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "MechLink Admin",
    template: "%s · MechLink Admin",
  },
  manifest: "/admin/manifest.webmanifest",
  appleWebApp: {
    title: "MechLink Admin",
    // Not "black-translucent": that draws white status-bar text over the page
    // and lets content slide under it, which is unreadable on the admin
    // panel's white (light-theme) background.
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E5C43",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
