import type { Metadata } from "next";
import "./globals.css";
import ClientLogger from "@/components/ClientLogger";

export const metadata: Metadata = {
  title: "Minal & Rohit Wedding | 8th February 2026",
  description: "Join us in celebrating the wedding of Minal and Rohit. February 6-8, 2026 at Golmuri Club, Jamshedpur. Haldi, Mehendi, Sangeet & Wedding celebrations.",
  keywords: ["wedding", "indian wedding", "Minal Rohit wedding", "Jamshedpur wedding", "2026 wedding"],
  authors: [{ name: "Minal & Rohit" }],
  openGraph: {
    title: "Minal & Rohit Wedding | 8th February 2026",
    description: "Join us in celebrating the wedding of Minal and Rohit. February 6-8, 2026 at Golmuri Club, Jamshedpur.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minal & Rohit Wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minal & Rohit Wedding | 8th February 2026",
    description: "Join us in celebrating the wedding of Minal and Rohit.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ClientLogger />
        {children}
      </body>
    </html>
  );
}
