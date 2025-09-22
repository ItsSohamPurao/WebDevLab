import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 1. Import the Header

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 2. Update metadata
  title: "Soham Purao | Web Developer",
  description: "The professional portfolio of Soham Purao.",
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
        <Header /> {/* 3. Render the Header */}
        <div className="pt-20"> {/* 4. Add padding to avoid content hiding under the fixed header */}
          {children}
        </div>
      </body>
    </html>
  );
}