import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { DownloadCenter } from "@/components/DownloadCenter";
import { DownloadCenterFromQuery } from "@/components/DownloadCenterFromQuery";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Unduh RUDALPPK — Halaman Unduhan Resmi Secure Field Comms & PERISAI-Q",
  description:
    "Unduh paket Flutter Field Client, Precompiled Web Release, Organization Web Console, dan Backend Python 3.12 (FastAPI + PQC) dengan verifikasi SHA-256.",
};

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="pointer-events-none fixed inset-0 tactical-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <Navbar currentPath="/download" />

      <main className="relative z-10 flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
              <Link href="/" className="transition hover:text-emerald-300">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-emerald-400">Unduh RUDALPPK</span>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>RILIS PROYEK RUDALPPK • 105/105 CHECKS PASSING</span>
                </div>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Unduh Paket Aplikasi RUDALPPK
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Pilih paket yang Anda butuhkan: repositori lengkap RUDALPPK (<code>.zip</code> / <code>.tar.gz</code>),
                  backend Python 3.12 (FastAPI + PostgreSQL + SeaweedFS), konsol admin web statis, atau klien agen lapangan Flutter.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/docs"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-2.5 font-mono text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  <span>Baca Dokumentasi (/docs) →</span>
                </Link>
                <a
                  href="/downloads/SHA256SUMS.txt"
                  download="SHA256SUMS.txt"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-sky-400/40 bg-sky-500/10 px-4 py-2.5 font-mono text-xs font-semibold text-sky-300 transition hover:bg-sky-500/20"
                >
                  <span>Unduh SHA256SUMS.txt</span>
                </a>
              </div>
            </div>
          </div>

          <Suspense fallback={<DownloadCenter />}>
            <DownloadCenterFromQuery />
          </Suspense>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="glass-panel rounded-2xl p-6 sm:p-7">
              <span className="font-mono text-xs font-bold text-emerald-400">
                STATUS PROYEK // 2026-11-13
              </span>
              <h2 className="mt-1.5 text-xl font-bold text-white">Ringkasan Modul &amp; Uji Otomatis</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    <strong>Backend &amp; PQC:</strong> FastAPI + PostgreSQL 16 + SeaweedFS dengan mode{" "}
                    <code>custom</code> dan <code>pqcrypto 1.0.0</code> (87/87 uji backend lulus).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    <strong>Field Client &amp; Org Console:</strong> Flutter MVP (18/18 test lulus) &amp; konsol
                    admin statis independen untuk provisioning agen dan grup <code>key_epoch</code>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <span>
                    <strong>Catatan Keamanan:</strong> Prototipe fungsional dengan dokumentasi audit terbuka di{" "}
                    <code>SECURITY_AUDIT.md</code> (belum tervalidasi ACVP / belum bersertifikat CMVP).
                  </span>
                </li>
              </ul>
            </article>

            <article className="glass-panel rounded-2xl p-6 sm:p-7">
              <span className="font-mono text-xs font-bold text-sky-400">
                PANDUAN DEPLOYMENT CEPAT
              </span>
              <h2 className="mt-1.5 text-xl font-bold text-white">Verifikasi &amp; Jalankan Stack</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <strong className="text-white">1. Verifikasi Berkas:</strong> Cocokkan arsip{" "}
                  <code>.tar.gz</code> dengan <code>SHA256SUMS.txt</code> menggunakan{" "}
                  <code className="text-emerald-300">sha256sum -c SHA256SUMS.txt --ignore-missing</code>.
                </li>
                <li>
                  <strong className="text-white">2. Jalankan Backend Relai:</strong> Ekstrak paket backend lalu
                  jalankan <code className="text-emerald-300">docker compose up -d</code> (API di port 8000).
                </li>
                <li>
                  <strong className="text-white">3. Buka Konsol &amp; Klien:</strong> Sajikan{" "}
                  <code>organization_web</code> di port 8080 untuk membuat agen &amp; kode aktivasi, lalu
                  hubungkan Flutter Field Client.
                </li>
              </ol>
            </article>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
