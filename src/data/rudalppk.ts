export type PlatformId =
  | "full-project"
  | "pqc-backend"
  | "org-console"
  | "field-client"
  | "field-web";

export interface ReleasePackage {
  id: PlatformId;
  tabLabel: string;
  tabSub: string;
  title: string;
  shortName: string;
  archBadge: string;
  osSupport: string;
  description: string;
  filename: string;
  href: string;
  bundleSize: string;
  binaryFootprint: string;
  minSpec: string;
  sha256: string;
  recommended?: boolean;
  includedModules: string[];
  cliSnippet: string;
}

export const RELEASE_PACKAGES: ReleasePackage[] = [
  {
    id: "full-project",
    tabLabel: "Full Repository",
    tabSub: "Lengkap (Backend + Web + App + Docs)",
    title: "Proyek Lengkap RUDALPPK (Full Repository v2.0)",
    shortName: "Full Project",
    archBadge: "Complete Tree • Backend + Web + Flutter + Docs",
    osSupport: "Windows, Linux, macOS (Semua Platform)",
    description:
      "Arsip lengkap seluruh repositori proyek RUDALPPK dari folder C:\\Users\\ryokh\\Data\\Coding\\rudalppk: Backend Python 3.12 (FastAPI + PostgreSQL 16 + SeaweedFS), Organization Web Console (Admin SPA), Flutter Field Client (Android/Web), seluruh dokumen PRD/SAD, laporan pengujian, dan konfigurasi Docker Compose.",
    filename: "rudalppk-full-project-v2.0.zip",
    href: "/downloads/rudalppk-full-project-v2.0.zip",
    bundleSize: "14,0 MB (.zip) / 13,9 MB (.tar.gz)",
    binaryFootprint: "100% Repositori Proyek Asli",
    minSpec: "Docker Compose / Python 3.12 / Flutter 3.x",
    sha256: "bdef7cc500b0b2b38875ad2c178863fd698933aaff219590771f163505b1f168",
    recommended: true,
    includedModules: [
      "MobileApp_and_Web/Backend: Python 3.12, FastAPI, Docker Compose, 14 Routers, PQC Engine",
      "MobileApp_and_Web/organization_web: Static Admin SPA 6 Menu (app.js terbaru)",
      "MobileApp_and_Web/flutter_application_chat: Flutter 3.x Source & Web Release (build/web)",
      "AntiPostQuantum, Documentation_and_Report, & SelfRecover: Dokumen PRD, SAD, Status Report HTML",
    ],
    cliSnippet: `# Opsi A (Windows PowerShell - Ekstrak ZIP):
Expand-Archive -Path rudalppk-full-project-v2.0.zip -DestinationPath .

# Opsi B (Linux / macOS - Ekstrak TAR.GZ):
tar -xzf rudalppk-full-project-v2.0.tar.gz
cd rudalppk/MobileApp_and_Web/Backend && docker compose up -d`,
  },
  {
    id: "pqc-backend",
    tabLabel: "Python Backend",
    tabSub: "FastAPI + PostgreSQL 16 + SeaweedFS",
    title: "Python 3.12 (FastAPI) + PostgreSQL 16 + SeaweedFS & PQC",
    shortName: "Python Backend",
    archBadge: "Python 3.12 • FastAPI • pqcrypto 1.0.0",
    osSupport: "Docker Compose (api, db, storage) / Python venv",
    description:
      "Kode sumber lengkap backend Python 3.12 (FastAPI + Uvicorn + SQLAlchemy async + Alembic) beserta 14 router API, fasad PQC_BACKEND (custom | pqcrypto), skrip seed_demo.py, dan 3 suite pengujian otomatis (87 checks).",
    filename: "rudalppk-python-backend-v2.0.tar.gz",
    href: "/downloads/rudalppk-python-backend-v2.0.tar.gz",
    bundleSize: "236 KB (.tar.gz backend)",
    binaryFootprint: "87 / 87 Backend Tests Lulus",
    minSpec: "Docker Compose / Python 3.12",
    sha256: "d447035a06019a76ced28146b665a3ab68672e0b44bab95868cfaf81da693d50",
    includedModules: [
      "14 Router FastAPI termasuk perisai_sign, perisai_lab, relay, groups, & auth",
      "Pluggable PQC_BACKEND: custom (ring-LWE n=64, q=3329) atau pqcrypto 1.0.0",
      "Suite uji lengkap: test_pqc_backend.py (49), test_full_platform.py (27), test_auth_flow.py (11)",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-python-backend-v2.0.tar.gz
cd rudalppk-python-backend-v2.0 && cp .env.example .env && docker compose up --build -d`,
  },
  {
    id: "org-console",
    tabLabel: "Org Web Console",
    tabSub: "Admin SPA (6 Menu + PERISAI-Q)",
    title: "Organization Web Console — Static Admin SPA (SAD v2.0)",
    shortName: "Org Console",
    archBadge: "Static HTML/CSS/JS • Zero Build Step",
    osSupport: "Browser Modern • Terhubung ke FastAPI /api/v1",
    description:
      "Konsol web statis independen untuk administrator organisasi dengan 6 menu: Pengguna, Grup, Administrator, PERISAI-Sign (ML-DSA-44/65/87 & enkripsi file ML-KEM), PERISAI-Lab (simulator Shor & audit armada), serta Pengaturan.",
    filename: "rudalppk-org-console-v2.0.tar.gz",
    href: "/downloads/rudalppk-org-console-v2.0.tar.gz",
    bundleSize: "21,7 KB (.tar.gz SPA penuh)",
    binaryFootprint: "Zero Build • 6 Modul Admin",
    minSpec: "Python 3 http.server / Nginx",
    sha256: "a4689c54d9b17e90d0b8cd5cfb907996e1ecd541413e18df5e6a8ee39992ec3b",
    includedModules: [
      "Provisioning agen, kode aktivasi 72 jam (SHA-256), & revokasi akses",
      "PERISAI-Sign: tanda tangan command_instruction, firmware_package, field_report",
      "PERISAI-Lab: simulasi Shor RSA, benchmark PQC, & Fleet Readiness Audit",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-org-console-v2.0.tar.gz
cd rudalppk-org-console-v2.0 && python3 -m http.server 8080`,
  },
  {
    id: "field-client",
    tabLabel: "Flutter Field Client",
    tabSub: "Source Code (Android, Web & Desktop)",
    title: "Secure Field Comms — Flutter Client Source (v1.0.0+1)",
    shortName: "Flutter Source",
    archBadge: "Flutter 3.x • Dart ^3.13.7 • cryptography 2.7",
    osSupport: "Android, Web, Desktop (MobileApp_and_Web/flutter_application_chat)",
    description:
      "Kode sumber lengkap aplikasi agen lapangan Flutter dengan 4 tab utama (Personal, Grup, PERISAI-Q, Profil), enkripsi hibrida Envelope v2 (X25519 + ML-KEM + AES-256-GCM), autentikasi Ed25519 + ML-DSA, serta 12-word recovery phrase.",
    filename: "rudalppk-field-client-v1.0.0.tar.gz",
    href: "/downloads/rudalppk-field-client-v1.0.0.tar.gz",
    bundleSize: "162 KB (.tar.gz source)",
    binaryFootprint: "18 / 18 Flutter Tests Lulus",
    minSpec: "Flutter SDK 3.x (Dart ^3.13.7)",
    sha256: "26532990fab03657573e34032ff3915ea3555995dac93342c56d622a7a8a1152",
    includedModules: [
      "4 Tab Utama: Personal, Grup (key_epoch), PERISAI-Q, & Profil",
      "Sub-tab PERISAI-Vault, PERISAI-Sign (ML-DSA), & PERISAI-Lab",
      "Hybrid Envelope v2 (X25519 || ML-KEM -> HKDF-SHA256 -> AES-256-GCM)",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-field-client-v1.0.0.tar.gz
cd rudalppk-field-client-v1.0.0 && flutter pub get && flutter run -d chrome`,
  },
  {
    id: "field-web",
    tabLabel: "Flutter Web Build",
    tabSub: "Siap Pakai (Tanpa Flutter SDK)",
    title: "Secure Field Comms — Precompiled Web Release (v1.0.0+1)",
    shortName: "Web Release",
    archBadge: "Compiled JS + perisai_agent_bridge.js",
    osSupport: "Semua Browser Modern via Static HTTP Server",
    description:
      "Hasil kompilasi rilis web (build/web) yang dilengkapi perisai_agent_bridge.js untuk menjalankan PERISAI-Vault, PERISAI-Sign (verifikasi & dekripsi file ML-KEM), serta PERISAI-Lab langsung di browser tanpa instalasi Flutter SDK.",
    filename: "rudalppk-field-web-release-v1.0.0.tar.gz",
    href: "/downloads/rudalppk-field-web-release-v1.0.0.tar.gz",
    bundleSize: "13,4 MB (.tar.gz build/web)",
    binaryFootprint: "Ready-to-Serve Web Bundle",
    minSpec: "Python 3 http.server / Nginx",
    sha256: "829dd1141a98ed0b537c311253a73f39480b4d16d2574643958344429a4d8293",
    includedModules: [
      "Bundel terkompilasi main.dart.js + flutter_bootstrap.js",
      "Terintegrasi perisai_agent_bridge.js untuk fitur penuh PERISAI-Q",
      "Dapat disajikan langsung tanpa perlu menginstal Flutter SDK",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-field-web-release-v1.0.0.tar.gz
cd rudalppk-field-web-release-v1.0.0 && python3 -m http.server 3001`,
  },
];

export interface BenchmarkRow {
  id: string;
  category: "verified" | "pqc" | "matrix";
  parameter: string;
  component: string;
  method: string;
  resultBadge: string;
  resultKind: "ok" | "metric";
  detail: string;
}

export const BENCHMARKS: BenchmarkRow[] = [
  {
    id: "pqc-suite",
    category: "verified",
    parameter: "Suite Kriptografi PQC",
    component: "test_pqc_backend.py",
    method: "Uji ML-KEM-(512/768/1024), ML-DSA-(44/65/87), simulasi RSA, & audit",
    resultBadge: "49 / 49 Lulus",
    resultKind: "ok",
    detail: "Berjalan dengan pqcrypto 1.0.0 aktif; verifikasi tanda tangan VALID & deteksi tamper.",
  },
  {
    id: "platform-suite",
    category: "verified",
    parameter: "Integrasi Platform SAD v2.0",
    component: "test_full_platform.py",
    method: "Aktivasi agen, direktori organisasi, grup key_epoch, & WebSocket relay",
    resultBadge: "27 / 27 Lulus",
    resultKind: "ok",
    detail: "Teruji di atas FastAPI + PostgreSQL 16 + SeaweedFS S3.",
  },
  {
    id: "flutter-suite",
    category: "verified",
    parameter: "Klien Lapangan Flutter",
    component: "flutter_application_chat",
    method: "flutter analyze & flutter test pada model, crypto_service, & UI",
    resultBadge: "18 / 18 Lulus",
    resultKind: "ok",
    detail: "Mendukung Hybrid Envelope v2 & 12-word BIP-39 recovery phrase.",
  },
  {
    id: "auth-suite",
    category: "verified",
    parameter: "Autentikasi Perangkat & Aktivasi",
    component: "test_auth_flow.py",
    method: "Challenge/response Ed25519, kode aktivasi 72 jam (SHA-256), & revokasi",
    resultBadge: "11 / 11 Lulus",
    resultKind: "ok",
    detail: "Self-registration dinonaktifkan; pencabutan user memutus semua perangkat & sesi.",
  },
  {
    id: "kem-specs",
    category: "pqc",
    parameter: "Spesifikasi NIST FIPS 203",
    component: "ML-KEM-512 / 768 / 1024",
    method: "Key encapsulation untuk E2EE chat, grup, & enkripsi file per-agen",
    resultBadge: "Kategori NIST 1 / 3 / 5",
    resultKind: "metric",
    detail: "Ukuran kunci publik 800 / 1184 / 1568 byte; shared secret 32 byte.",
  },
  {
    id: "dsa-specs",
    category: "pqc",
    parameter: "Spesifikasi NIST FIPS 204",
    component: "ML-DSA-44 / 65 / 87",
    method: "Penandatanganan command_instruction, firmware_package, & field_report",
    resultBadge: "Kategori NIST 2 / 3 / 5",
    resultKind: "metric",
    detail: "Ukuran signature 2420 / 3309 / 4627 byte; deteksi modifikasi 1-bit.",
  },
  {
    id: "rsa-shor-matrix",
    category: "matrix",
    parameter: "Simulasi Serangan Kuantum",
    component: "POST /perisai/lab/simulate-rsa",
    method: "Faktorisasi Shor & QUBO pada RSA (N=3233, e=17) vs ML-KEM-768 + ML-DSA-65",
    resultBadge: "RSA_BROKEN_PQC_SAFE",
    resultKind: "ok",
    detail: "Faktor p=53 & q=61 berhasil ditemukan; skema kisi ML-KEM/DSA tetap aman.",
  },
  {
    id: "legacy-audit-matrix",
    category: "matrix",
    parameter: "Audit Kesiapan Armada PQC",
    component: "GET /perisai/lab/audit",
    method: "Pemindaian perangkat aktif, distribusi algoritma, & persentase Hybrid v2",
    resultBadge: "Readiness Score %",
    resultKind: "metric",
    detail: "Mendeteksi perangkat legacy-only yang berisiko Harvest-Now-Decrypt-Later.",
  },
];

export const SHOR_SIM_JSON_PREVIEW = `{
  "event_type": "QUANTUM_SIMULATION_RUN",
  "status": "RSA_BROKEN_PQC_SAFE",
  "rsa_target": {
    "modulus_n": 3233,
    "public_exponent_e": 17,
    "recovered_factors": [53, 61],
    "private_d_recovered": 2753,
    "sample_message": 42,
    "decrypted_plaintext": 42
  },
  "pqc_comparison": {
    "kem_algorithm": "ML-KEM-768 (NIST FIPS 203)",
    "dsa_algorithm": "ML-DSA-65 (NIST FIPS 204)",
    "quantum_resistance": "SAFE_AGAINST_SHOR_AND_GROVER"
  }
}`;

export const SIGN_VERIFY_JSON_PREVIEW = `{
  "endpoint": "POST /api/v1/perisai/sign/verify",
  "artifact_type": "command_instruction",
  "title": "Perintah Pergeseran Frekuensi Relai Sektor Utara",
  "classification": "RAHASIA",
  "algorithm": "ML-DSA-65",
  "kem_algorithm": "ML-KEM-768",
  "recipient_scope": "group",
  "verification": {
    "valid": true,
    "status": "VALID",
    "content_hash_sha256": "8f3c91d2e7a40519c6b12f90e84d3a7c119e5b24d07a6c83f120e49b7d6c5a21"
  }
}`;

// ============================================================================
// KONFIGURASI VIDEO DEMO YOUTUBE
// Ganti `youtubeUrlOrId` dengan URL YouTube (watch / youtu.be / embed) atau
// langsung 11 karakter Video ID milik Anda sendiri.
// ============================================================================
export const DEMO_VIDEO_CONFIG = {
  youtubeUrlOrId: "https://youtu.be/gR8LXbpmHdE?si=m6h_a3FjnZyII-Jr",
  badge: "VIDEO DEMONSTRASI // RUDALPPK & PERISAI-Q",
  title: "Tonton Alur Kerja Lengkap Sistem RUDALPPK",
  description:
    "Cuplikan demonstrasi end-to-end mulai dari menyalakan backend Python 3.12 (FastAPI + Docker), penerbitan kode aktivasi di Organization Web Console, chat E2EE pasca-kuantum di Flutter Field Client, hingga tanda tangan ML-DSA & simulasi Shor di PERISAI-Lab.",
  highlights: [
    {
      time: "01",
      title: "Provisioning & Aktivasi 72 Jam",
      detail: "Admin membuat akun agen di Organization Web Console & menerbitkan kode aktivasi sekali pakai.",
    },
    {
      time: "02",
      title: "Obrolan E2EE Hybrid Envelope v2",
      detail: "Pertukaran kunci X25519 + ML-KEM-(512/768/1024) di aplikasi Flutter dengan 12-word recovery phrase.",
    },
    {
      time: "03",
      title: "PERISAI-Sign & PERISAI-Lab",
      detail: "Verifikasi instruksi komando ML-DSA-65 dan simulasi serangan kuantum Shor RSA vs PQC.",
    },
  ],
};
