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
  title: "Yamuna Green Cruise | National Waterway 110 (NW-110) Delhi",
  description:
    "Official portal for Delhi's eco-friendly electric-solar ferry & river cruise service under NW-110. 6-7 km round-trip between Sonia Vihar and Jagatpur upstream of Wazirabad Barrage.",
  keywords: [
    "Yamuna Ferry",
    "Delhi River Cruise",
    "National Waterway 110",
    "NW-110",
    "Sonia Vihar to Jagatpur",
    "Electric Solar Boat Delhi",
    "IWAI Delhi Cruise",
    "Delhi Water Tourism"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-200 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
