import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelsalam Muhammed — Systems & Operations",
  description:
    "Systems builder and business operator. Operations, logistics, growth, and internal tools.",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${inter.variable} dark`}
    >
      <body className="font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
