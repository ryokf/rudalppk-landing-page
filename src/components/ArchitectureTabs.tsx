"use client";

import { useState, type ReactNode } from "react";
import {
  ConsoleAdminIcon,
  CpuBinaryIcon,
  KeyEpochIcon,
  LockQuantumIcon,
  MessageEncryptedIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "@/components/Icons";

type PillarId = "flutter" | "orgweb" | "backend" | "aegis";

const PILLARS: {
  id: PillarId;
  badge: string;
  title: string;
  tagline: string;
  icon: ReactNode;
  specs: string[];
  items: { title: string; summary: string; icon: ReactNode }[];
}[] = [
  {
    id: "flutter",
    badge: "01 // MOBILE & WEB CLIENT",
    title: "Flutter Field Client",
    tagline: "Aplikasi agen lapangan (flutter_application_chat) dengan E2EE & modul PERISAI-Q.",
    icon: <SmartphoneIcon className="h-5 w-5" />,
    specs: ["Flutter 3.x", "Ed25519 + X25519", "18/18 Tests"],
    items: [
      {
        title: "Aktivasi & 12-Word Phrase",
        summary: "Aktivasi kode sekali pakai (72 jam) & recovery phrase lokal tanpa self-registration.",
        icon: <KeyEpochIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "E2EE Chat & Offline Outbox",
        summary: "Pesan personal & grup (X25519 + HKDF-SHA256 + key_epoch) dengan antrean offline.",
        icon: <MessageEncryptedIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "Tab PERISAI-Q Terintegrasi",
        summary: "PERISAI-Vault, PERISAI-Sign, dan PERISAI-Lab langsung di dalam aplikasi klien.",
        icon: <LockQuantumIcon className="h-4 w-4 text-emerald-400" />,
      },
    ],
  },
  {
    id: "orgweb",
    badge: "02 // ADMIN CONSOLE",
    title: "Organization Web Console",
    tagline: "Konsol web statis independen (organization_web) untuk administrator organisasi.",
    icon: <ConsoleAdminIcon className="h-5 w-5" />,
    specs: ["Static SPA", "PBKDF2-HMAC-SHA256", "Zero Plaintext"],
    items: [
      {
        title: "Provisioning Agen",
        summary: "Admin membuat akun agen dan menerbitkan kode aktivasi sekali pakai (hash SHA-256).",
        icon: <KeyEpochIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "Manajemen Grup & Epoch",
        summary: "Perubahan keanggotaan grup otomatis menaikkan key_epoch di server.",
        icon: <ShieldCheckIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "Revokasi Seketika",
        summary: "Mencabut user langsung memutus sesi perangkat, kredensial, dan keanggotaan grup.",
        icon: <LockQuantumIcon className="h-4 w-4 text-emerald-400" />,
      },
    ],
  },
  {
    id: "backend",
    badge: "03 // RELAY & PQC API",
    title: "FastAPI + PQC Backend",
    tagline: "Server relai zero-knowledge (FastAPI + PostgreSQL 16 + SeaweedFS) dalam Docker.",
    icon: <ServerStackIcon className="h-5 w-5" />,
    specs: ["FastAPI + WS", "pqcrypto 1.0.0", "87/87 Tests"],
    items: [
      {
        title: "Dual PQC Backend",
        summary: "Pilih PQC_BACKEND=custom (wire Flutter) atau pqcrypto (PQClean ML-KEM & ML-DSA).",
        icon: <LockQuantumIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "Zero-Knowledge Relay",
        summary: "Backend hanya meneruskan ciphertext & metadata; tanpa pesan plaintext/private key.",
        icon: <ShieldCheckIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "SeaweedFS S3 Storage",
        summary: "Penyimpanan objek terenkripsi terintegrasi via Docker Compose (api, db, storage).",
        icon: <ServerStackIcon className="h-4 w-4 text-sky-400" />,
      },
    ],
  },
  {
    id: "aegis",
    badge: "04 // TIER 3 SPEC",
    title: "AEGIS-GUARD (SelfRecover)",
    tagline: "Cetak biru pertahanan biner Rust Capture-Then-Heal (PA-T3-PRD-001).",
    icon: <CpuBinaryIcon className="h-5 w-5" />,
    specs: ["AES-256-GCM", "BLAKE3 + SHA-256", "Reed-Solomon GF(2^8)"],
    items: [
      {
        title: "Proteksi Biner Rust",
        summary: "Pembungkus biner terenkripsi AES-256-GCM dengan verifikasi integritas sebelum eksekusi.",
        icon: <CpuBinaryIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "Forensic Vault ISO/IEC 27037",
        summary: "Menangkap evidence_metadata.json, injected_payload.bin, & rule_generated.yar.",
        icon: <ShieldCheckIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "Pemulihan Reed-Solomon",
        summary: "Rekonstruksi paritas GF(2^8) terhadap sabotase byte (mis. 0x74 JE → 0x75 JNE).",
        icon: <KeyEpochIcon className="h-4 w-4 text-emerald-400" />,
      },
    ],
  },
];

export function ArchitectureTabs() {
  const [activeId, setActiveId] = useState<PillarId>("flutter");
  const active = PILLARS.find((p) => p.id === activeId) ?? PILLARS[0];

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Komponen proyek RUDALPPK">
        {PILLARS.map((pillar) => {
          const isActive = pillar.id === active.id;
          return (
            <button
              key={pillar.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(pillar.id)}
              className={`rounded-xl border p-4 text-left transition ${
                isActive
                  ? "border-emerald-400/60 bg-emerald-500/10"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-bold text-emerald-400">{pillar.badge}</span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                    isActive
                      ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
                      : "border-slate-800 bg-slate-900 text-slate-400"
                  }`}
                >
                  {pillar.icon}
                </span>
              </div>
              <h3 className="mt-2 text-base font-bold text-white">{pillar.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{pillar.tagline}</p>
            </button>
          );
        })}
      </div>

      <div className="glass-panel rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/35 bg-emerald-500/10 text-emerald-300">
              {active.icon}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{active.title}</h3>
              <p className="mt-0.5 text-sm text-slate-300">{active.tagline}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {active.specs.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-300"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {active.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-slate-900">
                  {item.icon}
                </span>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
