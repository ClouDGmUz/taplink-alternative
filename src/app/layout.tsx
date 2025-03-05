import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff'
};

export const metadata: Metadata = {
  title: 'DEW - Premium Motor Oil',
  themeColor: '#ffffff',
  description: "DEW motor oil — avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "DEW - Premium Motor Oil",
    description: "DEW motor oil — avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
