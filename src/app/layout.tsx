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
  title: "RUDALPPK — Secure Field Communication (SAD v2.0) & PERISAI-Q Post-Quantum Cryptosuite",
  description:
    "RUDALPPK (Kartika Cyber Hackathon 2026) — Platform komunikasi lapangan E2EE hibrida pasca-kuantum (X25519 + ML-KEM & Ed25519 + ML-DSA) dengan Flutter Field Client, Organization Web Console, dan Backend Python 3.12 (FastAPI).",
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
