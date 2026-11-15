export type PlatformId =
  | "field-client"
  | "field-web"
  | "org-console"
  | "pqc-backend";

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
    bundleSize: "99,2 KB (.tar.gz source)",
    binaryFootprint: "18 / 18 Flutter Tests Lulus",
    minSpec: "Flutter SDK 3.x (Dart ^3.13.7)",
    sha256: "96e2e4c31853486f98d32382f4d95fbaba690d3f7aeb44a9634e934d16e56f4f",
    recommended: true,
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
    bundleSize: "1,02 MB (.tar.gz build/web)",
    binaryFootprint: "Ready-to-Serve Web Bundle",
    minSpec: "Python 3 http.server / Nginx",
    sha256: "84104bd4f49a351a7befc6cd4f11d1cfe18e455904ace7b08038a0b56c8e4f40",
    includedModules: [
      "Bundel terkompilasi main.dart.js + flutter_bootstrap.js",
      "Terintegrasi perisai_agent_bridge.js untuk fitur penuh PERISAI-Q",
      "Dapat disajikan langsung tanpa perlu menginstal Flutter SDK",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-field-web-release-v1.0.0.tar.gz
cd rudalppk-field-web-release-v1.0.0 && python3 -m http.server 3001`,
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
    bundleSize: "22,4 KB (.tar.gz SPA penuh)",
    binaryFootprint: "Zero Build • 6 Modul Admin",
    minSpec: "Python 3 http.server / Nginx",
    sha256: "3aff834ad452618ef26c4d3f4fd8232b9cb2f8e1b087425efcacc1f0cb643877",
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
    bundleSize: "69,9 KB (.tar.gz full backend)",
    binaryFootprint: "87 / 87 Backend Tests Lulus",
    minSpec: "Docker Compose / Python 3.12",
    sha256: "f57373e5ac0e96eb2c41ca0c2cd320b66cc60e08c6a924151c49a942e9c9dd4e",
    includedModules: [
      "14 Router FastAPI termasuk perisai_sign, perisai_lab, relay, groups, & auth",
      "Pluggable PQC_BACKEND: custom (ring-LWE n=64, q=3329) atau pqcrypto 1.0.0",
      "Suite uji lengkap: test_pqc_backend.py (49), test_full_platform.py (27), test_auth_flow.py (11)",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-python-backend-v2.0.tar.gz
cd rudalppk-python-backend-v2.0 && cp .env.example .env && docker compose up --build -d`,
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
