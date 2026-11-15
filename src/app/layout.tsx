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
  title: "RUDALPPK — Komunikasi Taktis Pasca-Kuantum & Pertahanan Biner Capture-Then-Heal",
  description:
    "RUDALPPK (Kartika Cyber Hackathon 2026) — Sistem terpadu PERISAI-AEGIS: Field Comms Engine Zero-PII, Kriptografi Pasca-Kuantum PERISAI-Q (X25519 + ML-KEM & ML-DSA), serta Resiliensi Biner Aegis-Guard Capture-Then-Heal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060a0f] text-slate-100 font-sans selection:bg-emerald-400/25 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
