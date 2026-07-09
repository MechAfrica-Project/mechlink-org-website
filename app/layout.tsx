import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AmbientMouseGlow from "../components/ui/AmbientMouseGlow";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import { SmoothScrollProvider } from "../components/providers/SmoothScrollProvider";
import { ContactProvider } from "../components/context/ContactContext";
import { ContactOverlay } from "../components/ui/ContactOverlay";

const ttnorms = localFont({
  src: [
    {
      path: "./fonts/TTNorms-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TTNorms-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/TTNorms-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ttnorms",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://mechlink.africa" // TODO: confirm the real production domain
      : "http://localhost:3000"
  ),
  title: "MechLink — Africa's Agricultural Infrastructure Engine",
  description: "MechLink builds MechAfrica and the digital infrastructure that connects farmers, agribusinesses, and communities across Africa to mechanization, crop care, and logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ttnorms.variable} antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-cloud min-h-screen selection:bg-surface-variant selection:text-cloud flex flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
