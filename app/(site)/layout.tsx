import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AmbientMouseGlow from "@/components/ui/AmbientMouseGlow";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ContactProvider } from "@/components/context/ContactContext";
import { ContactOverlay } from "@/components/ui/ContactOverlay";

// Public pages read admin-managed content (team, site settings, product) from
// the shared DB. Without this they are prerendered once at build time and never
// reflect admin edits until a redeploy. Revalidating every 60s makes edits
// appear within a minute while keeping pages CDN-cached and fast.
export const revalidate = 60;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <ContactProvider>
        {/* Global ambient mouse tracker */}
        <AmbientMouseGlow />

        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        <ContactOverlay />
      </ContactProvider>
    </SmoothScrollProvider>
  );
}
