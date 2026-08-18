import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#151512",
};

export const metadata: Metadata = {
  title: "ISRO — Indian Space Research Organisation | Editorial Experience Concept",
  description:
    "An independent, modern aerospace editorial redesign concept for the Indian Space Research Organisation (ISRO). Exploring authentic missions (Chandrayaan-3, Aditya-L1, Gaganyaan), launch vehicles (LVM3, PSLV, GSLV), and nationwide space infrastructure.",
  keywords: [
    "ISRO",
    "Indian Space Research Organisation",
    "Chandrayaan-3",
    "Aditya-L1",
    "Gaganyaan",
    "LVM3",
    "PSLV",
    "GSLV",
    "SSLV",
    "Department of Space",
    "Aerospace India"
  ],
  authors: [{ name: "Independent Engineering Redesign" }],
  openGraph: {
    title: "ISRO — Indian Space Research Organisation | Editorial Experience Concept",
    description:
      "A premium editorial digital concept for the Indian Space Research Organisation (ISRO), grounded in real public records.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#151512] text-[#f3e9d5] antialiased selection:bg-[#c95a20] selection:text-white font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#c95a20] focus:text-white focus:rounded focus:shadow-md focus:outline-none text-xs font-mono"
        >
          Skip to main content
        </a>
        <div className="relative flex-1 flex flex-col min-w-0 overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
