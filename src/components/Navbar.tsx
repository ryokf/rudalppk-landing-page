"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  currentPath?: "/" | "/download" | "/docs";
}

export function Navbar({ currentPath = "/" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navPrefix = currentPath === "/" ? "" : "/";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#060a0f]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/35 bg-emerald-500/10 text-emerald-400 transition group-hover:border-emerald-400/60 group-hover:bg-emerald-500/15">
            <svg viewBox="0 0 36 36" fill="none" className="h-6 w-6" aria-hidden="true">
              <path
                d="M18 3L31 8.5V17.5C31 25.4 25.4 31.6 18 33.5C10.6 31.6 5 25.4 5 17.5V8.5L18 3Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M18 9L25 12V17.5C25 22.1 22 25.8 18 27.1C14 25.8 11 22.1 11 17.5V12L18 9Z"
                fill="currentColor"
                fillOpacity="0.18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="18" cy="18" r="2.6" fill="#34d399" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-wide text-white">RUDALPPK</span>
            <span className="font-mono text-[11px] tracking-wider text-emerald-400/90">
              PERISAI-AEGIS • KCH 2026
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <Link href={`${navPrefix}#masalah`} className="transition hover:text-white">
            Latar Belakang
          </Link>
          <Link href={`${navPrefix}#arsitektur`} className="transition hover:text-white">
            Arsitektur
          </Link>
          <Link href={`${navPrefix}#simulasi`} className="transition hover:text-white">
            Simulasi DFIR
          </Link>
          <Link href={`${navPrefix}#benchmark`} className="transition hover:text-white">
            Tolok Ukur
          </Link>
          <Link href={`${navPrefix}#dwiguna`} className="transition hover:text-white">
            Dwiguna
          </Link>
          <Link
            href="/docs"
            className={`transition ${
              currentPath === "/docs"
                ? "text-emerald-400 font-semibold"
                : "text-slate-300 hover:text-emerald-300"
            }`}
          >
            Dokumentasi
          </Link>
          <Link
            href="/download"
            className={`transition ${
              currentPath === "/download"
                ? "text-emerald-400 font-semibold"
                : "text-slate-300 hover:text-emerald-300"
            }`}
          >
            Halaman Unduh
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 sm:text-sm"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M10 3v9m0 0l-3.5-3.5M10 12l3.5-3.5M4 15.5h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Unduh Aplikasi</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 text-slate-200 md:hidden"
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-800/80 bg-[#080d14] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            <Link href={`${navPrefix}#masalah`} onClick={() => setOpen(false)} className="py-1 hover:text-white">
              Latar Belakang
            </Link>
            <Link href={`${navPrefix}#arsitektur`} onClick={() => setOpen(false)} className="py-1 hover:text-white">
              Arsitektur PERISAI-AEGIS
            </Link>
            <Link href={`${navPrefix}#simulasi`} onClick={() => setOpen(false)} className="py-1 hover:text-white">
              Simulasi Capture-Then-Heal
            </Link>
            <Link href={`${navPrefix}#benchmark`} onClick={() => setOpen(false)} className="py-1 hover:text-white">
              Tolok Ukur Kinerja
            </Link>
            <Link href={`${navPrefix}#dwiguna`} onClick={() => setOpen(false)} className="py-1 hover:text-white">
              Manfaat Dwiguna &amp; Spesifikasi
            </Link>
            <Link href="/docs" onClick={() => setOpen(false)} className="py-1 font-semibold text-sky-300">
              Dokumentasi (/docs)
            </Link>
            <Link href="/download" onClick={() => setOpen(false)} className="py-1 font-semibold text-emerald-400">
              Pusat Unduhan (/download)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
