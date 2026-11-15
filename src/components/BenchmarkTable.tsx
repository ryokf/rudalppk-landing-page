"use client";

import { useState, type ReactNode } from "react";
import {
  CpuBinaryIcon,
  KeyEpochIcon,
  LockQuantumIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "@/components/Icons";
import { BENCHMARKS } from "@/data/rudalppk";

type FilterCat = "all" | "verified" | "pqc" | "tier3";

const KPI_HIGHLIGHTS: {
  value: string;
  label: string;
  sub: string;
  accent: string;
  icon: ReactNode;
}[] = [
  {
    value: "105 / 105",
    label: "Total Uji Otomatis Lulus",
    sub: "87 backend (pqcrypto aktif) + 18 Flutter test",
    accent: "text-emerald-400",
    icon: <ShieldCheckIcon className="h-5 w-5 text-emerald-400" />,
  },
  {
    value: "49 / 49",
    label: "Uji Backend PQC",
    sub: "test_pqc_backend.py (ML-KEM & ML-DSA)",
    accent: "text-sky-400",
    icon: <LockQuantumIcon className="h-5 w-5 text-sky-400" />,
  },
  {
    value: "27 / 27",
    label: "Uji Platform Terpadu",
    sub: "test_full_platform.py (FastAPI + PG + S3)",
    accent: "text-emerald-400",
    icon: <ServerStackIcon className="h-5 w-5 text-emerald-400" />,
  },
  {
    value: "18 / 18",
    label: "Uji Klien Flutter",
    sub: "flutter_application_chat (UI & crypto)",
    accent: "text-sky-400",
    icon: <SmartphoneIcon className="h-5 w-5 text-sky-400" />,
  },
  {
    value: "11 / 11",
    label: "Uji Alur Autentikasi",
    sub: "test_auth_flow.py (Ed25519 + JWT)",
    accent: "text-emerald-400",
    icon: <KeyEpochIcon className="h-5 w-5 text-emerald-400" />,
  },
  {
    value: "Tier 3 Spec",
    label: "AEGIS-GUARD DFIR",
    sub: "AES-256-GCM • BLAKE3 + SHA-256 • Reed-Solomon",
    accent: "text-sky-400",
    icon: <CpuBinaryIcon className="h-5 w-5 text-sky-400" />,
  },
];

export function BenchmarkTable() {
  const [showTable, setShowTable] = useState(false);
  const [filter, setFilter] = useState<FilterCat>("all");

  const rows =
    filter === "all"
      ? BENCHMARKS
      : BENCHMARKS.filter((row) => row.category === filter);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {KPI_HIGHLIGHTS.map((item) => (
          <div key={item.label} className="glass-panel flex items-start justify-between gap-3 rounded-2xl p-5">
            <div>
              <div className={`font-mono text-2xl font-extrabold ${item.accent}`}>{item.value}</div>
              <div className="mt-1 text-sm font-bold text-white">{item.label}</div>
              <div className="mt-1 text-xs text-slate-400">{item.sub}</div>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80">
              {item.icon}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setShowTable((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
        >
          <span>{showTable ? "Sembunyikan Rincian Verifikasi" : "Lihat Rincian 8 Verifikasi & Target"}</span>
          <span aria-hidden="true">{showTable ? "↑" : "↓"}</span>
        </button>
        <span className="hidden font-mono text-xs text-slate-400 sm:inline">
          Sumber: Documentation_and_Report/README[2026-11-13,1].md
        </span>
      </div>

      {showTable && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori verifikasi">
            {(
              [
                { id: "all", label: "Semua (8)" },
                { id: "verified", label: "Suite Terverifikasi (105)" },
                { id: "pqc", label: "Modul PERISAI-Q" },
                { id: "tier3", label: "Target Tier 3 AEGIS" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full border px-3.5 py-1 text-xs font-semibold transition ${
                  filter === item.id
                    ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-300"
                    : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="glass-panel overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/70 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <th className="px-4 py-3">Parameter</th>
                  <th className="px-4 py-3">Komponen</th>
                  <th className="px-4 py-3">Metode Uji / Sumber</th>
                  <th className="px-4 py-3">Status &amp; Hasil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {rows.map((row) => (
                  <tr key={row.id} className="transition hover:bg-slate-800/25">
                    <td className="px-4 py-3 font-semibold text-white">{row.parameter}</td>
                    <td className="px-4 py-3">
                      <code className="rounded bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-sky-300">
                        {row.component}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-slate-300">{row.method}</td>
                    <td className="px-4 py-3 text-slate-300">
                      <span
                        className={`mr-2 inline-flex rounded-full border px-2 py-0.5 font-mono text-[11px] font-bold ${
                          row.resultKind === "ok"
                            ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
                            : "border-sky-400/40 bg-sky-500/15 text-sky-300"
                        }`}
                      >
                        {row.resultBadge}
                      </span>
                      <span>{row.detail}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
