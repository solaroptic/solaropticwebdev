import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const nasal = localFont({ src: "./nasalization-rg.ttf" });

export const metadata: Metadata = {
  title: "Solar Optic",
  description: "Looking outside the box, FROM outside the box.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nasal.className}>{children}</body>
    </html>
  );
}
