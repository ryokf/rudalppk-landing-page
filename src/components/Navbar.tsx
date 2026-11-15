"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  currentPath?: "/" | "/download" | "/docs";
}

export function Navbar({ currentPath = "/" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navPrefix = currentPath === "/" ? "" : "/";

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#060a0f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/35 bg-emerald-500/10 text-emerald-400 transition group-hover:border-emerald-400/60 group-hover:bg-emerald-500/15">
            <svg viewBox="0 0 36 36" fill="none" className="h-5 w-5" aria-hidden="true">
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
            <span className="text-sm font-extrabold tracking-wide text-white sm:text-base">RUDALPPK</span>
            <span className="font-mono text-[10px] tracking-wider text-emerald-400/90 sm:text-[11px]">
              SAD v2.0 • PERISAI-Q
            </span>
          </span>
        </Link>

        {/* Desktop Navigation: Ringkas, Rapi & Terstruktur */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <Link
            href={`${navPrefix}#arsitektur`}
            className="transition hover:text-white"
          >
            Arsitektur
          </Link>

          <Link
            href={`${navPrefix}#simulasi`}
            className="transition hover:text-white"
          >
            Simulasi PQC
          </Link>

          <Link
            href={`${navPrefix}#video-demo`}
            className="inline-flex items-center gap-1.5 transition hover:text-white"
          >
            <span>Video Demo</span>
            <span className="rounded bg-sky-500/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-sky-300">
              HD
            </span>
          </Link>

          <Link
            href="/docs"
            className={`transition ${
              currentPath === "/docs"
                ? "font-semibold text-emerald-400"
                : "hover:text-emerald-300"
            }`}
          >
            Dokumentasi
          </Link>

          {/* Dropdown Menu: Bagian Tambahan */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              className={`inline-flex items-center gap-1 py-1 transition ${
                dropdownOpen ? "text-white" : "hover:text-white"
              }`}
            >
              <span>Lainnya</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-emerald-400" : "text-slate-400"
                }`}
                aria-hidden="true"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full pt-2 w-64 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="glass-panel overflow-hidden rounded-xl border border-slate-800 bg-[#080d14]/95 p-1.5 shadow-2xl shadow-black/80">
                  <Link
                    href={`${navPrefix}#benchmark`}
                    onClick={() => setDropdownOpen(false)}
                    className="flex flex-col gap-0.5 rounded-lg px-3 py-2 text-left transition hover:bg-slate-800/60"
                  >
                    <span className="text-xs font-semibold text-white">Tolok Ukur (105 Checks)</span>
                    <span className="text-[11px] text-slate-400">Hasil uji otomatis &amp; spesifikasi PQC</span>
                  </Link>

                  <Link
                    href={`${navPrefix}#masalah`}
                    onClick={() => setDropdownOpen(false)}
                    className="flex flex-col gap-0.5 rounded-lg px-3 py-2 text-left transition hover:bg-slate-800/60"
                  >
                    <span className="text-xs font-semibold text-white">Latar Belakang Operasi</span>
                    <span className="text-[11px] text-slate-400">Tantangan HNDL &amp; Zero-Trust SAD v2.0</span>
                  </Link>

                  <Link
                    href={`${navPrefix}#dwiguna`}
                    onClick={() => setDropdownOpen(false)}
                    className="flex flex-col gap-0.5 rounded-lg px-3 py-2 text-left transition hover:bg-slate-800/60"
                  >
                    <span className="text-xs font-semibold text-white">Manfaat Dwiguna</span>
                    <span className="text-[11px] text-slate-400">Operasi lapangan taktis &amp; industri</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 sm:px-3.5 sm:py-2 sm:text-sm"
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
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 text-slate-200 transition hover:text-white md:hidden"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? (
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

      {/* Mobile Drawer: Dikelompokkan Rapi */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-[#080d14]/98 px-4 py-4 md:hidden">
          <div className="space-y-4">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Fitur Utama
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
                <Link
                  href={`${navPrefix}#arsitektur`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
                >
                  Arsitektur Sistem
                </Link>
                <Link
                  href={`${navPrefix}#simulasi`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
                >
                  Simulasi PQC
                </Link>
                <Link
                  href={`${navPrefix}#video-demo`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
                >
                  Video Demo
                </Link>
                <Link
                  href={`${navPrefix}#benchmark`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
                >
                  Tolok Ukur (105)
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-800/70 pt-3">
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Dokumentasi &amp; Info
              </div>
              <div className="mt-2 flex flex-col gap-1 text-xs">
                <Link
                  href="/docs"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-lg px-2.5 py-2 text-sky-300 transition hover:bg-slate-900"
                >
                  <span className="font-semibold">Dokumentasi Menjalankan (/docs)</span>
                  <span className="font-mono text-[11px] text-slate-400">Panduan →</span>
                </Link>
                <Link
                  href="/download"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-lg px-2.5 py-2 text-emerald-300 transition hover:bg-slate-900"
                >
                  <span className="font-semibold">Pusat Unduhan (/download)</span>
                  <span className="font-mono text-[11px] text-slate-400">4 Paket →</span>
                </Link>
                <Link
                  href={`${navPrefix}#masalah`}
                  onClick={() => setMobileOpen(false)}
                  className="px-2.5 py-1.5 text-slate-400 transition hover:text-slate-200"
                >
                  Latar Belakang &amp; Tantangan Operasi
                </Link>
                <Link
                  href={`${navPrefix}#dwiguna`}
                  onClick={() => setMobileOpen(false)}
                  className="px-2.5 py-1.5 text-slate-400 transition hover:text-slate-200"
                >
                  Manfaat Dwiguna &amp; Catatan Teknis
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
