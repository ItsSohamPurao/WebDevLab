import type { Metadata } from "next";
// 1. Import new fonts
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// 2. Configure the fonts
const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Soham Purao // [Digital Craftsman]",
  description: "Portfolio of Soham Purao. Exploring the intersection of Machine Learning, Photography, and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the font variables to the body */}
      <body
        className={`${pressStart.variable} ${vt323.variable} antialiased font-sans`}
      >
        <Header />
        {/* Add padding to account for the fixed header */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
