import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/providers/ThemeProvider";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
