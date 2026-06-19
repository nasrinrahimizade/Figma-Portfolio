import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasrin Rahimizadeh - AI Engineer | Computer Vision & LLM Systems",
  description: "AI Engineer and Researcher specializing in Computer Vision, Multimodal AI and LLM Systems. Nearly 2 years of industry and research experience at Politecnico di Torino.",
  keywords: [
    "Nasrin Rahimizadeh",
    "AI Engineer",
    "Computer Vision",
    "Multimodal AI",
    "LLM Systems",
    "Deep Learning",
    "Python Developer",
    "Politecnico di Torino",
    "Portfolio",
  ],
  authors: [{ name: "Nasrin Rahimizadeh" }],
  creator: "Nasrin Rahimizadeh",
  publisher: "Nasrin Rahimizadeh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nasrinrahimizadeh.vercel.app",
    title: "Nasrin Rahimizadeh - AI Engineer | Computer Vision & LLM Systems",
    description: "AI Engineer and Researcher specializing in Computer Vision, Multimodal AI and LLM Systems. Nearly 2 years of industry and research experience at Politecnico di Torino.",
    siteName: "Nasrin Rahimizadeh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasrin Rahimizadeh - AI Engineer | Computer Vision & LLM Systems",
    description: "AI Engineer and Researcher specializing in Computer Vision, Multimodal AI and LLM Systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nasrinrahimizadeh.vercel.app" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}