"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  ConsoleAdminIcon,
  LockQuantumIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TerminalIcon,
} from "@/components/Icons";
import { PlatformId, RELEASE_PACKAGES, ReleasePackage } from "@/data/rudalppk";

interface DownloadCenterProps {
  initialPlatform?: PlatformId;
  compact?: boolean;
}

const PLATFORM_ICONS: Record<PlatformId, ReactNode> = {
  "full-project": <ServerStackIcon className="h-5 w-5" />,
  "field-client": <SmartphoneIcon className="h-5 w-5" />,
  "field-web": <LockQuantumIcon className="h-5 w-5" />,
  "org-console": <ConsoleAdminIcon className="h-5 w-5" />,
  "pqc-backend": <TerminalIcon className="h-5 w-5" />,
};

export function DownloadCenter({
  initialPlatform = "full-project",
  compact = false,
}: DownloadCenterProps) {
  const [selectedId, setSelectedId] = useState<PlatformId>(initialPlatform);
  const [copiedKey, setCopiedKey] = useState<"hash" | "cli" | null>(null);
  const [toastPkg, setToastPkg] = useState<ReleasePackage | null>(null);

  const activePkg =
    RELEASE_PACKAGES.find((item) => item.id === selectedId) ?? RELEASE_PACKAGES[0];

  useEffect(() => {
    if (!toastPkg) return;
    const timer = window.setTimeout(() => setToastPkg(null), 6000);
    return () => window.clearTimeout(timer);
  }, [toastPkg]);

  async function copyText(text: string, kind: "hash" | "cli") {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(kind);
      window.setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <div className="space-y-6">
      <div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
        role="tablist"
        aria-label="Pilih komponen atau paket rilis RUDALPPK"
      >
        {RELEASE_PACKAGES.map((pkg) => {
          const isActive = pkg.id === activePkg.id;
          return (
            <button
              key={pkg.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedId(pkg.id)}
              className={`group flex flex-col items-start rounded-xl border p-3.5 text-left transition ${
                isActive
                  ? "border-emerald-400/60 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80"
              }`}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg border ${
                      isActive
                        ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
                        : "border-slate-800 bg-slate-900 text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {PLATFORM_ICONS[pkg.id]}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      isActive ? "text-emerald-300" : "text-white group-hover:text-emerald-200"
                    }`}
                  >
                    {pkg.tabLabel}
                  </span>
                </div>
                {pkg.recommended && (
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                    UTAMA
                  </span>
                )}
              </div>
              <span className="mt-1.5 text-xs text-slate-400">{pkg.tabSub}</span>
            </button>
          );
        })}
      </div>

      <div className="glass-panel-accent rounded-2xl p-6 sm:p-7">
        <div className="grid gap-7 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-0.5 font-mono text-xs font-bold text-emerald-300">
                SAD v2.0 • PERISAI-Q
              </span>
              <span className="rounded-full border border-sky-400/35 bg-sky-500/10 px-3 py-0.5 font-mono text-xs text-sky-300">
                {activePkg.archBadge}
              </span>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/15 text-emerald-300">
                {PLATFORM_ICONS[activePkg.id]}
              </span>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  {activePkg.title}
                </h3>
                {!compact && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {activePkg.description}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-3 rounded-xl border border-slate-800/90 bg-slate-900/45 p-3.5 sm:grid-cols-3">
              <div>
                <span className="block font-mono text-[11px] text-slate-400">Berkas Rilis</span>
                <code className="mt-0.5 block truncate font-mono text-xs text-white">
                  {activePkg.filename}
                </code>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-slate-400">Status / Uji</span>
                <strong className="mt-0.5 block text-xs text-emerald-300">
                  {activePkg.binaryFootprint}
                </strong>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-slate-400">Lingkungan</span>
                <strong className="mt-0.5 block text-xs text-slate-200">{activePkg.minSpec}</strong>
              </div>
            </div>

            {!compact && (
              <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
                {activePkg.includedModules.map((mod) => (
                  <li key={mod} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={activePkg.href}
                download={activePkg.filename}
                onClick={() => setToastPkg(activePkg)}
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:bg-emerald-400"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M10 2.5v10m0 0l-4-4m4 4l4-4M3.5 16h13"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  {activePkg.id === "full-project"
                    ? "Unduh Proyek (.ZIP)"
                    : `Unduh ${activePkg.filename}`}
                </span>
              </a>

              {activePkg.id === "full-project" && (
                <a
                  href="/downloads/rudalppk-full-project-v2.0.tar.gz"
                  download="rudalppk-full-project-v2.0.tar.gz"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M10 2.5v10m0 0l-4-4m4 4l4-4M3.5 16h13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Unduh Format .TAR.GZ</span>
                </a>
              )}

              <a
                href="/downloads/SHA256SUMS.txt"
                download="SHA256SUMS.txt"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white sm:text-sm"
              >
                <ShieldCheckIcon className="h-4 w-4 text-sky-400" />
                <span>SHA256SUMS.txt</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3.5 lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-[#05080d] p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  <ShieldCheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                  <span>SHA-256 Checksum</span>
                </span>
                <button
                  type="button"
                  onClick={() => copyText(activePkg.sha256, "hash")}
                  className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  {copiedKey === "hash" ? "Tersalin!" : "Salin"}
                </button>
              </div>
              <code className="mt-2 block break-all rounded-lg border border-slate-800/80 bg-slate-950 p-2.5 font-mono text-[11px] leading-relaxed text-emerald-300">
                {activePkg.sha256}
              </code>
              <p className="mt-2 text-[11px] text-slate-400">
                Ukuran arsip: {activePkg.bundleSize}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#05080d] p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  <TerminalIcon className="h-3.5 w-3.5 text-sky-400" />
                  <span>Verifikasi &amp; Jalankan (CLI)</span>
                </span>
                <button
                  type="button"
                  onClick={() => copyText(activePkg.cliSnippet, "cli")}
                  className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  {copiedKey === "cli" ? "Tersalin!" : "Salin"}
                </button>
              </div>
              <pre className="mt-2 overflow-x-auto rounded-lg border border-slate-800/80 bg-slate-950 p-2.5 font-mono text-[11px] leading-relaxed text-sky-200">
                {activePkg.cliSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {!compact && (
        <div>
          <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            Semua Paket Rilis Langsung
          </h4>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {RELEASE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="glass-panel flex flex-col justify-between gap-4 rounded-xl p-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-emerald-400">
                        {PLATFORM_ICONS[pkg.id]}
                      </span>
                      <strong className="text-sm text-white">{pkg.tabLabel}</strong>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-400">
                      {pkg.bundleSize.split(" ")[0]}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{pkg.tabSub}</p>
                  <code className="mt-2 block truncate font-mono text-[11px] text-slate-400">
                    SHA256: {pkg.sha256.slice(0, 12)}...{pkg.sha256.slice(-8)}
                  </code>
                </div>

                <a
                  href={pkg.href}
                  download={pkg.filename}
                  onClick={() => {
                    setSelectedId(pkg.id);
                    setToastPkg(pkg);
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-500/15 px-3 py-2 text-xs font-bold text-emerald-300 transition hover:bg-emerald-500 hover:text-slate-950"
                >
                  <span>Unduh ({pkg.shortName})</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {toastPkg && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 bottom-4 z-50 flex max-w-md items-start gap-3 rounded-xl border border-emerald-400/50 bg-[#081219]/95 p-4 shadow-2xl shadow-black/80 backdrop-blur-md"
        >
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M16.5 5.5L8 14l-4.5-4.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <strong className="block text-sm text-white">Mengunduh {toastPkg.filename}</strong>
            <p className="mt-1 break-all font-mono text-[11px] text-emerald-300/90">
              SHA-256: {toastPkg.sha256}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setToastPkg(null)}
            className="text-slate-400 transition hover:text-white"
            aria-label="Tutup notifikasi unduhan"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
