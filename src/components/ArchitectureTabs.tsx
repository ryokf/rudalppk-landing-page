"use client";

import { useState, type ReactNode } from "react";
import {
  ConsoleAdminIcon,
  KeyEpochIcon,
  LockQuantumIcon,
  MessageEncryptedIcon,
  RadarPulseIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "@/components/Icons";

type PillarId = "flutter" | "orgweb" | "backend" | "perisai";

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
    tagline: "Aplikasi agen lapangan (flutter_application_chat) dengan 4 tab utama & Hybrid E2EE.",
    icon: <SmartphoneIcon className="h-5 w-5" />,
    specs: ["Flutter 3.x", "Hybrid Envelope v2", "18/18 Tests"],
    items: [
      {
        title: "4 Tab Navigasi Utama",
        summary: "Personal, Grup (key_epoch), PERISAI-Q (Vault, Sign, Lab), serta Profil & Recovery Phrase.",
        icon: <MessageEncryptedIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "Hybrid E2EE Envelope v2",
        summary: "Kunci pesan AES-256-GCM dibungkus dengan X25519 + ML-KEM-(512/768/1024) + HKDF-SHA256.",
        icon: <LockQuantumIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "12-Word Phrase & Outbox",
        summary: "Aktivasi kode sekali pakai (72 jam), 12-word BIP-39 phrase, & antrean pesan offline.",
        icon: <KeyEpochIcon className="h-4 w-4 text-emerald-400" />,
      },
    ],
  },
  {
    id: "orgweb",
    badge: "02 // ADMIN CONSOLE",
    title: "Organization Web Console",
    tagline: "Konsol web statis independen (organization_web) dengan 6 menu administrasi & PQC.",
    icon: <ConsoleAdminIcon className="h-5 w-5" />,
    specs: ["Static SPA", "6 Menu Admin", "PBKDF2-HMAC-SHA256"],
    items: [
      {
        title: "Pengguna, Grup & Admin",
        summary: "Provisioning agen, kode aktivasi 72 jam (SHA-256), rotasi key_epoch grup, & revokasi.",
        icon: <KeyEpochIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "Menu PERISAI-Sign (ML-DSA)",
        summary: "Tanda tangani command_instruction, firmware_package, & field_report dengan ML-DSA-44/65/87.",
        icon: <ShieldCheckIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "Menu PERISAI-Lab (PQC)",
        summary: "Jalankan simulator serangan Shor RSA, benchmark PQC, & audit kesiapan armada organisasi.",
        icon: <RadarPulseIcon className="h-4 w-4 text-emerald-400" />,
      },
    ],
  },
  {
    id: "backend",
    badge: "03 // PYTHON BACKEND",
    title: "Python 3.12 + FastAPI Backend",
    tagline: "Server relai zero-knowledge (FastAPI + Uvicorn + PostgreSQL 16 + SeaweedFS S3).",
    icon: <ServerStackIcon className="h-5 w-5" />,
    specs: ["Python 3.12", "14 API Routers", "87/87 Tests"],
    items: [
      {
        title: "Pluggable PQC_BACKEND",
        summary: "Pilih mode custom (ring-LWE n=64, q=3329 untuk Flutter) atau pqcrypto 1.0.0 (PQClean).",
        icon: <LockQuantumIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "Zero-Knowledge Relay + WS",
        summary: "Server hanya menyimpan ciphertext & metadata; tanpa akses ke plaintext maupun private key.",
        icon: <ShieldCheckIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "PostgreSQL 16 + SeaweedFS",
        summary: "Migrasi skema idempoten otomatis saat startup & penyimpanan objek S3 via Docker Compose.",
        icon: <ServerStackIcon className="h-4 w-4 text-sky-400" />,
      },
    ],
  },
  {
    id: "perisai",
    badge: "04 // POST-QUANTUM SUITE",
    title: "PERISAI-Q (Vault • Sign • Lab)",
    tagline: "Tiga modul kriptografi pasca-kuantum terintegrasi di backend Python, Web Console, & Flutter.",
    icon: <LockQuantumIcon className="h-5 w-5" />,
    specs: ["ML-KEM-512/768/1024", "ML-DSA-44/65/87", "AES-256-GCM"],
    items: [
      {
        title: "PERISAI-Vault",
        summary: "Enkripsi lokal & pembungkusan file per-agen/grup dengan ML-KEM + AES-256-GCM + ML-DSA.",
        icon: <LockQuantumIcon className="h-4 w-4 text-emerald-400" />,
      },
      {
        title: "PERISAI-Sign",
        summary: "Otentikasi instruksi komando & paket firmware OT/IoT dengan verifikasi kanonik SHA-256.",
        icon: <ShieldCheckIcon className="h-4 w-4 text-sky-400" />,
      },
      {
        title: "PERISAI-Lab",
        summary: "Simulasi faktorisasi Shor pada RSA (N=3233), benchmark latensi/ukuran, & skor kesiapan PQC.",
        icon: <RadarPulseIcon className="h-4 w-4 text-emerald-400" />,
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
