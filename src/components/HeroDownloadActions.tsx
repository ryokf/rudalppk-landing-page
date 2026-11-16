"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RELEASE_PACKAGES } from "@/data/rudalppk";

export function HeroDownloadActions() {
  const defaultPkg = RELEASE_PACKAGES[0];
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!downloaded) return;
    const t = window.setTimeout(() => setDownloaded(false), 5500);
    return () => window.clearTimeout(t);
  }, [downloaded]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-stretch gap-3.5">
        <a
          href={defaultPkg.href}
          download={defaultPkg.filename}
          onClick={() => setDownloaded(true)}
          className="inline-flex items-center gap-3.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:bg-emerald-400"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
            <path
              d="M10 2.5v10m0 0l-4-4m4 4l4-4M3.5 16h13"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex flex-col text-left leading-tight">
            <strong className="text-sm font-extrabold sm:text-base">Unduh Proyek RUDALPPK (.ZIP)</strong>
            <span className="font-mono text-[11px] font-semibold text-slate-900/80">
              Repositori Lengkap (Backend • Web • Flutter • Docs)
            </span>
          </span>
        </a>

        <Link
          href="/download"
          className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-400/35 bg-emerald-500/10 px-5 py-3.5 text-sm font-bold text-emerald-300 transition hover:border-emerald-400/60 hover:bg-emerald-500/15"
        >
          <span>Pilihan Paket &amp; .TAR.GZ</span>
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
            <path
              d="M7 5l6 5-6 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <a
          href="#simulasi"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-sky-400" aria-hidden="true">
            <path d="M6 4l10 6-10 6V4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
          <span>Simulasi PERISAI-Lab &amp; Sign</span>
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span>Komponen rilis:</span>
        {RELEASE_PACKAGES.map((pkg) => (
          <Link
            key={pkg.id}
            href={`/download?platform=${pkg.id}`}
            className="rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-1 font-mono text-[11px] text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
          >
            {pkg.shortName}
          </Link>
        ))}
        <span className="text-slate-600">•</span>
        <a
          href="/downloads/SHA256SUMS.txt"
          download="SHA256SUMS.txt"
          className="font-mono text-[11px] text-sky-400 underline-offset-4 hover:underline"
        >
          SHA256SUMS.txt
        </a>
      </div>

      {downloaded && (
        <div
          role="status"
          aria-live="polite"
          className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-400/40 bg-emerald-500/10 px-3.5 py-2 text-xs text-emerald-200"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>
            Mengunduh <strong>{defaultPkg.filename}</strong> • SHA-256:{" "}
            <code className="font-mono">{defaultPkg.sha256.slice(0, 16)}...</code>
          </span>
        </div>
      )}
    </div>
  );
}
