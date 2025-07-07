import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free and Fast YouTube MP3 Downloader",
  description:
    "Easily convert YouTube videos to high-quality MP3s. Free, no registration, and compatible with all devices.",
  keywords: "youtube mp3, download mp3, youtube converter, free mp3, youtube to mp3",
  authors: [{ name: "YouTube MP3 Downloader" }],
  creator: "YouTube MP3 Downloader",
  publisher: "YouTube MP3 Downloader",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youtube-mp3-downloader.vercel.app",
    siteName: "YouTube MP3 Downloader",
    title: "Free and Fast YouTube MP3 Downloader",
    description:
      "Easily convert YouTube videos to high-quality MP3s. Free, no registration, and compatible with all devices.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouTube MP3 Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free and Fast YouTube MP3 Downloader",
    description:
      "Easily convert YouTube videos to high-quality MP3s. Free, no registration, and compatible with all devices.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://youtube-mp3-downloader.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {children}
        </div>
      </body>
    </html>
  );
}
