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

export const metadata: Metadata = {
  title: "Supriya Site",
  description: "Personal website",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

// ✅ import client components after metadata
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import FooterWrapper from "./FooterWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layout-wrapper">
          <Navbar />
          <main className="main-content">{children}</main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
