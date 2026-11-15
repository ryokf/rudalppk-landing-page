export type PlatformId =
  | "field-client"
  | "org-console"
  | "pqc-backend"
  | "aegis-tier3";

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
    tabLabel: "Field Client (Flutter)",
    tabSub: "Android, Web & Desktop Agen",
    title: "Secure Field Comms — Flutter Client (v1.0.0+1)",
    shortName: "Field Client",
    archBadge: "Flutter 3.x • Android / Web / Linux",
    osSupport: "flutter_application_chat • cryptography 2.7 • WebSocket",
    description:
      "Aplikasi komunikasi taktis untuk agen lapangan: aktivasi kode sekali pakai + 12-word recovery phrase, autentikasi perangkat Ed25519, E2EE personal & grup (X25519 + HKDF-SHA256, key_epoch), antrean offline, serta tab PERISAI-Vault, PERISAI-Sign, dan PERISAI-Lab.",
    filename: "rudalppk-field-client-v1.0.0.tar.gz",
    href: "/downloads/rudalppk-field-client-v1.0.0.tar.gz",
    bundleSize: "10,8 KB (.tar.gz bundle)",
    binaryFootprint: "v1.0.0+1 • 18/18 Flutter Tests",
    minSpec: "Flutter SDK 3.x / Android / Browser Modern",
    sha256: "62070ead1300d4e7fe8c0e4da77127037eec120405308ac715f1f9a09729b337",
    recommended: true,
    includedModules: [
      "Aktivasi akun 1-time code + 12-word recovery phrase lokal",
      "Chat Personal & Grup E2EE (X25519 + HKDF-SHA256 + key_epoch)",
      "Modul PERISAI-Q terintegrasi: Vault, Sign & Lab (perisai_agent_bridge.js)",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-field-client-v1.0.0.tar.gz
cd rudalppk-field-client-v1.0.0 && cat DEPLOY.txt`,
  },
  {
    id: "org-console",
    tabLabel: "Org Web Console",
    tabSub: "Admin Organisasi (Static SPA)",
    title: "Organization Web Console — Static Admin SPA (SAD v2.0)",
    shortName: "Org Console",
    archBadge: "Static HTML/CSS/JS • Zero Build Step",
    osSupport: "Browser Modern • Terhubung ke FastAPI /api/v1",
    description:
      "Konsol web statis independen untuk administrator organisasi: login PBKDF2-HMAC-SHA256, provisioning agen lapangan, penerbitan kode aktivasi sekali pakai (72 jam), pengelolaan grup key_epoch, dan pencabutan perangkat.",
    filename: "rudalppk-org-console-v2.0.tar.gz",
    href: "/downloads/rudalppk-org-console-v2.0.tar.gz",
    bundleSize: "21,9 KB (.tar.gz SPA penuh)",
    binaryFootprint: "Zero Build • Zero Plaintext Access",
    minSpec: "Static HTTP Server / Nginx",
    sha256: "e2760b628c791b412c582452e073d66897cb748a5301beb954e77a6a162461a5",
    includedModules: [
      "Provisioning user & kode aktivasi 72 jam (hash SHA-256)",
      "Manajemen grup organisasi dengan rotasi key_epoch otomatis",
      "Revokasi user & perangkat seketika tanpa akses kunci privat",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-org-console-v2.0.tar.gz
cd rudalppk-org-console-v2.0 && python3 -m http.server 8080`,
  },
  {
    id: "pqc-backend",
    tabLabel: "FastAPI + PQC Stack",
    tabSub: "Docker Relay & SeaweedFS",
    title: "FastAPI + PostgreSQL 16 + SeaweedFS & PQC Backend",
    shortName: "PQC Backend",
    archBadge: "Python 3.12 • Docker Compose • FIPS 203/204 Option",
    osSupport: "Linux / Docker Compose (api, db, storage)",
    description:
      "Server relai ciphertext FastAPI dengan PostgreSQL 16 dan SeaweedFS S3. Mendukung PQC_BACKEND=custom (default wire Flutter) maupun PQC_BACKEND=pqcrypto 1.0.0 (PQClean ML-KEM & ML-DSA).",
    filename: "rudalppk-pqc-backend-v2.0.tar.gz",
    href: "/downloads/rudalppk-pqc-backend-v2.0.tar.gz",
    bundleSize: "3,0 KB (.tar.gz config & test)",
    binaryFootprint: "87/87 Backend Tests Passing",
    minSpec: "Docker Engine + Docker Compose",
    sha256: "aa20ab3e4165f6d2910e00dfb652638a4d64b099cd0e055da211a0dea50e10bc",
    includedModules: [
      "Zero-Knowledge ciphertext relay via REST & WebSocket",
      "Selectable PQC engine: custom atau pqcrypto (ML-KEM / ML-DSA)",
      "Suite uji otomatis: test_pqc_backend, test_auth_flow, test_full_platform",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf rudalppk-pqc-backend-v2.0.tar.gz
cd rudalppk-pqc-backend-v2.0 && docker compose up -d`,
  },
  {
    id: "aegis-tier3",
    tabLabel: "AEGIS-GUARD Tier 3",
    tabSub: "Self-Healing DFIR Spec",
    title: "PERISAI-AEGIS Tier 3 — AEGIS-GUARD DFIR Blueprint",
    shortName: "AEGIS Tier 3",
    archBadge: "Rust Builder Spec • AES-256-GCM • Reed-Solomon",
    osSupport: "Linux x86_64 / ARMv8 (Spesifikasi PRD PA-T3-PRD-001)",
    description:
      "Cetak biru dan sampel artefak forensik Tier 3 (SelfRecover): pembungkusan biner AES-256-GCM, pembekuan anomali, penyegelan bukti ISO/IEC 27037 (BLAKE3 + SHA-256), serta rekonstruksi paritas Reed-Solomon GF(2^8).",
    filename: "perisai-aegis-tier3-v1.0.tar.gz",
    href: "/downloads/perisai-aegis-tier3-v1.0.tar.gz",
    bundleSize: "8,6 KB (.tar.gz spec & artefak)",
    binaryFootprint: "Draft Baseline PRD/SAD Tier 3",
    minSpec: "Linux Kernel 4.14+ (Target Spesifikasi)",
    sha256: "05b8157f51e21ee21a7cd05e47bb21538f8270f33e891ec9b2ea5936fb6bb99c",
    includedModules: [
      "Dokumen PRD resmi PERISAI-AEGIS Tier 3 (PA-T3-PRD-001)",
      "Sampel evidence_metadata.json (offset 0x0004F2A0: 0x74 -> 0x75)",
      "Sampel aturan deteksi rule_generated.yar berstandar ISO/IEC 27037",
    ],
    cliSnippet: `sha256sum -c SHA256SUMS.txt --ignore-missing
tar -xzf perisai-aegis-tier3-v1.0.tar.gz
cd perisai-aegis-tier3-v1.0 && ls -la`,
  },
];

export interface BenchmarkRow {
  id: string;
  category: "verified" | "pqc" | "tier3";
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
    method: "Uji ML-KEM, ML-DSA, simulasi RSA, & audit endpoint (pqcrypto 1.0.0)",
    resultBadge: "49 / 49 Lulus",
    resultKind: "ok",
    detail: "Verifikasi live signature VALID & penolakan artefak yang dimodifikasi.",
  },
  {
    id: "platform-suite",
    category: "verified",
    parameter: "Integrasi Platform Penuh",
    component: "test_full_platform.py",
    method: "E2E aktivasi, provisioning organisasi, grup key_epoch, & relay",
    resultBadge: "27 / 27 Lulus",
    resultKind: "ok",
    detail: "Teruji pada stack FastAPI + PostgreSQL 16 + SeaweedFS.",
  },
  {
    id: "flutter-suite",
    category: "verified",
    parameter: "Klien Lapangan Flutter",
    component: "flutter_application_chat",
    method: "flutter test & analisis UI/crypto/state klien",
    resultBadge: "18 / 18 Lulus",
    resultKind: "ok",
    detail: "Total 105 automated checks lulus di seluruh workspace.",
  },
  {
    id: "auth-suite",
    category: "verified",
    parameter: "Autentikasi Perangkat",
    component: "test_auth_flow.py",
    method: "Challenge/response Ed25519 & validasi device_session JWT",
    resultBadge: "11 / 11 Lulus",
    resultKind: "ok",
    detail: "Self-registration dinonaktifkan; aktivasi wajib 1-time code 72 jam.",
  },
  {
    id: "pqc-modes",
    category: "pqc",
    parameter: "Dual PQC Backend",
    component: "pqc_backend.py",
    method: "Switching PQC_BACKEND=custom vs PQC_BACKEND=pqcrypto",
    resultBadge: "PQClean FIPS 203/204",
    resultKind: "metric",
    detail: "Mode pqcrypto menyediakan ML-KEM & ML-DSA referensi (belum sertifikasi CMVP).",
  },
  {
    id: "vault-sign-lab",
    category: "pqc",
    parameter: "PERISAI-Vault / Sign / Lab",
    component: "perisai_screen.dart",
    method: "Simulasi serangan Shor pada RSA, skor crypto-agility, & verifikasi tanda tangan",
    resultBadge: "Aktif di Klien",
    resultKind: "ok",
    detail: "Tersedia langsung di tab PERISAI-Q pada aplikasi Flutter & bridge web.",
  },
  {
    id: "aegis-dfir",
    category: "tier3",
    parameter: "Target Isolasi Bukti DFIR",
    component: "AEGIS-GUARD Tier 3",
    method: "Deteksi modifikasi byte (0x74 JE → 0x75 JNE) & segel ISO/IEC 27037",
    resultBadge: "Target < 5 ms",
    resultKind: "metric",
    detail: "Menghasilkan evidence_metadata.json, injected_payload.bin, & rule_generated.yar.",
  },
  {
    id: "aegis-rs",
    category: "tier3",
    parameter: "Target Pemulihan Biner",
    component: "Reed-Solomon GF(2^8)",
    method: "Rekonstruksi paritas biner terenkripsi AES-256-GCM",
    resultBadge: "Target 14,2 ms",
    resultKind: "metric",
    detail: "Spesifikasi arsitektur PA-T3-PRD-001 (tahap baseline desain Tier 3).",
  },
];

export const EVIDENCE_JSON_PREVIEW = `{
  "document_id": "PA-T3-PRD-001",
  "standard": "ISO/IEC 27037",
  "virtual_memory_offset": "0x0004F2A0",
  "pre_healing_byte_diff": "0x74 (JE) -> 0x75 (JNE)",
  "artifacts": [
    "evidence_metadata.json",
    "injected_payload.bin",
    "rule_generated.yar"
  ],
  "seals": {
    "blake3": "7f9c12b4e8d01a49a21e6c54d11800b3",
    "sha256": "05b8157f51e21ee21a7cd05e47bb21538f8270f33e891ec9b2ea5936fb6bb99c"
  }
}`;

export const YARA_RULE_PREVIEW = `rule AEGIS_GUARD_Auth_Branch_Tamper {
    meta:
        source = "PA-T3-PRD-001 (SelfRecover)"
        standard = "ISO/IEC 27037"
        integrity_seal = "BLAKE3 + SHA-256"
    strings:
        $offset_0004F2A0_patch = { 75 ?? ?? ?? }
    condition:
        $offset_0004F2A0_patch
}`;
