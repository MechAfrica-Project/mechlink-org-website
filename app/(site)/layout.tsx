import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AmbientMouseGlow from "@/components/ui/AmbientMouseGlow";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ContactProvider } from "@/components/context/ContactContext";
import { ContactOverlay } from "@/components/ui/ContactOverlay";

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
