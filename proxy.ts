import { auth } from "./auth";
import { NextResponse } from "next/server";

// Hosts where the bare root ("/") should serve the admin dashboard instead
// of the public homepage. "admin.localhost" is for local dev only (requires
// a hosts-file entry) and is harmless in production since that host never
// resolves there.
const ADMIN_HOSTS = new Set(["admin.mechlink.org", "admin.localhost"]);

// The PWA manifest and its icon must be fetchable without a session —
// browsers request these to decide whether to offer "install", including
// from the (logged-out) login screen.
const PUBLIC_ADMIN_ASSETS = new Set(["/admin/manifest.webmanifest", "/admin/icon-512"]);

export default auth((req) => {
  const { nextUrl } = req;
  const host = req.headers.get("host")?.split(":")[0] ?? "";
  const isAdminRoot = ADMIN_HOSTS.has(host) && nextUrl.pathname === "/";

  // Any other request to "/" (the public homepage on the main domain, or a
  // stray host hitting root) is untouched.
  if (nextUrl.pathname === "/" && !isAdminRoot) return;
  if (PUBLIC_ADMIN_ASSETS.has(nextUrl.pathname)) return;

  const isLoggedIn = !!req.auth;
  const isLoginPage = nextUrl.pathname === "/admin/login";

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", nextUrl));
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", nextUrl));
  }

  if (isAdminRoot) {
    return NextResponse.rewrite(new URL("/admin", nextUrl));
  }
});

export const config = {
  matcher: ["/admin/:path*", "/"],
};
