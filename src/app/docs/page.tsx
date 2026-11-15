import type { Metadata } from "next";
import Link from "next/link";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";
import { Footer } from "@/components/Footer";
import {
  BookDocsIcon,
  ConsoleAdminIcon,
  CpuBinaryIcon,
  LockQuantumIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TerminalIcon,
} from "@/components/Icons";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dokumentasi Menjalankan Proyek — RUDALPPK (PERISAI-Q & Secure Field Comms)",
  description:
    "Panduan langkah demi langkah menjalankan proyek RUDALPPK: Backend FastAPI + PostgreSQL + SeaweedFS (Docker), Organization Web Console, Flutter Field Client, switching PQC_BACKEND, serta pengujian otomatis.",
};

const QUICK_LINKS = [
  { href: "#prasyarat", label: "01. Prasyarat Sistem" },
  { href: "#backend", label: "02. Backend Python (FastAPI)" },
  { href: "#org-console", label: "03. Web Konsol Organisasi" },
  { href: "#flutter-client", label: "04. Flutter Field Client" },
  { href: "#pqc-switch", label: "05. Mode PQC (custom vs pqcrypto)" },
  { href: "#pengujian", label: "06. Menjalankan 105 Uji Otomatis" },
  { href: "#api-ringkas", label: "07. Ringkasan Endpoint API" },
];

export default function DocsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="pointer-events-none fixed inset-0 tactical-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <Navbar currentPath="/docs" />

      <main className="relative z-10 flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
              <Link href="/" className="transition hover:text-emerald-300">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-emerald-400">Dokumentasi</span>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>PANDUAN MENJALANKAN PROYEK RUDALPPK</span>
                </div>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Dokumentasi Instalasi &amp; Eksekusi
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Ikuti urutan di bawah untuk menyalakan stack backend relai, konsol admin organisasi, dan aplikasi
                  agen lapangan Flutter hingga siap diuji secara lokal.
                </p>
              </div>

              <Link
                href="/download"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-extrabold text-slate-950 transition hover:bg-emerald-400 sm:text-sm"
              >
                <span>Unduh Paket Proyek</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-3">
              <div className="glass-panel sticky top-24 rounded-2xl p-4">
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Daftar Panduan
                </div>
                <nav className="mt-3 flex flex-col gap-1.5" aria-label="Navigasi dokumentasi">
                  {QUICK_LINKS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-4 border-t border-slate-800 pt-4 font-mono text-[11px] text-slate-400">
                  <div>API: localhost:8000/api/v1</div>
                  <div className="mt-1">Admin UI: localhost:8080</div>
                  <div className="mt-1">S3 Filer: localhost:8888</div>
                </div>
              </div>
            </aside>

            {/* Main Documentation Content */}
            <div className="space-y-8 lg:col-span-9">
              {/* 01. Prasyarat */}
              <section id="prasyarat" className="glass-panel rounded-2xl p-6 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/35 bg-emerald-500/10 text-emerald-400">
                    <CpuBinaryIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-400">01 // PRASYARAT SISTEM</span>
                    <h2 className="text-xl font-bold text-white">Alat yang Dibutuhkan</h2>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center gap-2">
                      <ServerStackIcon className="h-4 w-4 text-sky-400" />
                      <strong className="text-sm text-white">Docker &amp; Compose</strong>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400">
                      Menjalankan API FastAPI (Python 3.12), PostgreSQL 16, dan SeaweedFS S3.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="h-4 w-4 text-emerald-400" />
                      <strong className="text-sm text-white">Python 3.12+</strong>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400">
                      Menyajikan konsol statis <code className="text-slate-200">organization_web</code> &amp; menjalankan
                      suite uji backend.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center gap-2">
                      <SmartphoneIcon className="h-4 w-4 text-sky-400" />
                      <strong className="text-sm text-white">Flutter SDK 3.x</strong>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400">
                      Kompatibel Dart <code className="text-slate-200">^3.13.7</code> untuk menjalankan/build{" "}
                      <code className="text-slate-200">flutter_application_chat</code>.
                    </p>
                  </div>
                </div>
              </section>

              {/* 02. Backend */}
              <section id="backend" className="glass-panel rounded-2xl p-6 scroll-mt-24 space-y-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/35 bg-emerald-500/10 text-emerald-400">
                    <ServerStackIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-400">02 // PYTHON 3.12 BACKEND (FASTAPI)</span>
                    <h2 className="text-xl font-bold text-white">Panduan Menjalankan Backend Python</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Backend RUDALPPK dibangun dengan <strong className="text-white">Python 3.12 (FastAPI + SQLAlchemy Async + Uvicorn)</strong>{" "}
                      didukung basis data <strong className="text-white">PostgreSQL 16</strong> dan kluster penyimpanan objek{" "}
                      <strong className="text-white">SeaweedFS S3</strong>.
                    </p>
                  </div>
                </div>

                {/* Arsitektur Stack 3 Container */}
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>securechat-api</span>
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Port <code className="text-slate-200">8000</code>: REST API 14 router, WebSocket relai, &amp; Swagger UI di <code className="text-slate-200">/docs</code>.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      <span>securechat-db</span>
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Port <code className="text-slate-200">5432</code>: PostgreSQL 16 + ekstensi <code className="text-slate-200">pgcrypto</code> untuk identitas &amp; kunci publik.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-300">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span>securechat-storage</span>
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Port <code className="text-slate-200">8333</code> (S3) &amp; <code className="text-slate-200">8888</code> (Filer UI): SeaweedFS media terenkripsi.
                    </div>
                  </div>
                </div>

                {/* Langkah Eksekusi Docker */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">A</span>
                    <span>Menjalankan via Docker Compose (Metode Rekomendasi)</span>
                  </h3>
                  <p className="text-xs text-slate-300">
                    Ini adalah cara termudah dan paling stabil karena mengotomatisasi inisialisasi basis data dan storage sekaligus.
                  </p>
                  <CopyableCodeBlock
                    title="Terminal / PowerShell (Folder MobileApp_and_Web/Backend)"
                    code={`cd MobileApp_and_Web/Backend

# 1. Nyalakan seluruh stack 3 service (API, PostgreSQL, SeaweedFS) di background:
docker compose up --build -d

# 2. Periksa status kesehatan ketiga container (pastikan db berstatus healthy):
docker compose ps

# 3. Pantau log real-time dari container API:
docker compose logs -f api`}
                  />
                </div>

                {/* Langkah Alternatif Python Venv */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-xs font-mono">B</span>
                    <span>Menjalankan Langsung secara Lokal (Python venv + Uvicorn)</span>
                  </h3>
                  <p className="text-xs text-slate-300">
                    Gunakan metode ini jika Anda ingin melakukan debugging kode Python secara langsung tanpa container API.
                    Pastikan PostgreSQL lokal sudah aktif dan terhubung dengan <code className="text-slate-200">DATABASE_URL</code> pada file <code className="text-slate-200">.env</code>.
                  </p>
                  <CopyableCodeBlock
                    title="Terminal / PowerShell (Folder MobileApp_and_Web/Backend/backend)"
                    code={`cd MobileApp_and_Web/Backend/backend

# Linux / macOS:
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# Windows PowerShell:
python -m venv .venv
.venv\\Scripts\\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload`}
                  />
                </div>

                {/* Auto-Migration & Bootstrap Notes */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                    Mekanisme Otomatis Saat Startup (Lifecycle)
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>
                      • <strong className="text-white">Auto-Migration Database:</strong> Saat API dijalankan, fungsi <code className="text-slate-200">_run_idempotent_migrations</code> akan otomatis membuat ekstensi <code className="text-slate-200">pgcrypto</code> serta seluruh tabel skema (termasuk artefak PERISAI-Q) tanpa perlu migrasi manual.
                    </li>
                    <li>
                      • <strong className="text-white">Auto-Bootstrap Organisasi:</strong> API otomatis mendaftarkan organisasi awal <code className="text-emerald-300">Kartika Operations</code> beserta akun Administrator Owner awal.
                    </li>
                    <li>
                      • <strong className="text-white">Bucket SeaweedFS:</strong> Bucket <code className="text-slate-200">securechat-media</code> otomatis dibuat di SeaweedFS S3 saat startup.
                    </li>
                  </ul>
                </div>

                {/* Kredensial Callout */}
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200 space-y-1">
                  <div className="font-bold uppercase tracking-wider">Kredensial Bootstrap Default (Development)</div>
                  <div>
                    • <strong>Organisasi:</strong> <code>Kartika Operations</code> | <strong>Role:</strong> Organization Owner
                  </div>
                  <div>
                    • <strong>Email Admin:</strong> <code>admin@kartika.local</code> | <strong>Password:</strong> <code>ChangeThisAdminPassword123!</code>
                  </div>
                  <div className="pt-1 text-[11px] text-amber-300/80">
                    Ganti seluruh secret (<code>SYSTEM_ADMIN_API_KEY</code>, <code>JWT_SECRET_KEY</code>, password database) di file <code>Backend/.env</code> sebelum digunakan pada lingkungan produksi.
                  </div>
                </div>

                {/* Verifikasi Backend */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-2">
                  <div className="text-xs font-bold text-sky-400 font-mono uppercase tracking-wider">
                    Verifikasi Kesehatan Backend
                  </div>
                  <p className="text-xs text-slate-300">
                    Setelah container aktif, buka endpoint berikut di browser atau terminal untuk memastikan layanan siap melayani request:
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs">
                    <div className="rounded-lg border border-slate-800/80 bg-slate-900/50 p-2.5">
                      <div className="font-bold text-white">Healthcheck Endpoint</div>
                      <code className="text-[11px] text-emerald-300">GET http://localhost:8000/health</code>
                      <div className="text-[11px] text-slate-400 mt-1">Mengembalikan status database dan penyimpanan S3.</div>
                    </div>
                    <div className="rounded-lg border border-slate-800/80 bg-slate-900/50 p-2.5">
                      <div className="font-bold text-white">Swagger UI &amp; OpenAPI</div>
                      <code className="text-[11px] text-sky-300">http://localhost:8000/docs</code>
                      <div className="text-[11px] text-slate-400 mt-1">Dokumentasi interaktif untuk seluruh 14 modul router API.</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 03. Organization Web Console */}
              <section id="org-console" className="glass-panel rounded-2xl p-6 scroll-mt-24 space-y-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/35 bg-sky-500/10 text-sky-400">
                    <ConsoleAdminIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-sky-400">03 // ADMIN CONSOLE</span>
                    <h2 className="text-xl font-bold text-white">Panduan Menjalankan &amp; Mengoperasikan Web Organisasi</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      <strong className="text-white">Organization Web Console</strong> adalah portal manajemen berbasis web untuk
                      Administrator Organisasi yang berjalan terpisah dari aplikasi klien agen lapangan.
                    </p>
                  </div>
                </div>

                {/* Karakteristik Web Console */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      <span>Pure Static SPA (Tanpa Langkah Build)</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      Dibangun dengan HTML5, JavaScript ES6, dan CSS murni di folder <code className="text-slate-200">organization_web/</code>. Tidak memerlukan <code className="text-slate-200">npm install</code> atau proses compile Node.js.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>Zero-Knowledge Plaintext</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      Konsol admin hanya mengelola provisioning user, grup, dan kunci publik. Konsol ini <strong className="text-slate-200">tidak pernah</strong> dapat membaca plaintext pesan obrolan maupun kunci privat agen.
                    </p>
                  </div>
                </div>

                {/* Cara Menjalankan */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <TerminalIcon className="h-4 w-4 text-emerald-400" />
                    <span>Langkah Menjalankan Static Web Server</span>
                  </h3>
                  <p className="text-xs text-slate-300">
                    Sajikan folder <code className="text-slate-200">MobileApp_and_Web/organization_web</code> menggunakan server statis apa pun pilihan Anda:
                  </p>

                  <CopyableCodeBlock
                    title="Opsi 1: Menggunakan Python (Praktis di Semua OS)"
                    code={`cd MobileApp_and_Web/organization_web
python -m http.server 8080`}
                  />

                  <CopyableCodeBlock
                    title="Opsi 2: Menggunakan Node.js / npx serve"
                    code={`# Di direktori proyek atau dari folder organization_web:
npx serve -l 8080 MobileApp_and_Web/organization_web`}
                  />
                </div>

                {/* Akses & Login */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">1</span>
                    <span>Akses Portal &amp; Konfigurasi URL Backend</span>
                  </div>
                  <ol className="space-y-1.5 text-xs text-slate-300 list-decimal list-inside">
                    <li>Buka browser dan akses <code className="text-emerald-300">http://localhost:8080</code>.</li>
                    <li>
                      Secara default, konsol otomatis terhubung ke <code className="text-slate-200">http://localhost:8000/api/v1</code>.
                      Jika backend Anda berjalan di alamat host atau port lain, masuk ke menu <strong>Pengaturan</strong> dan perbarui Backend Base URL (disimpan di <code className="text-slate-200">localStorage</code>).
                    </li>
                    <li>
                      Login menggunakan kredensial admin: Email <code className="text-slate-200">admin@kartika.local</code> dan password <code className="text-slate-200">ChangeThisAdminPassword123!</code>.
                    </li>
                  </ol>
                </div>

                {/* Alur Kerja & SOP 6 Menu Konsol */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">
                    Alur Operasional Administrator (SOP 6 Menu)
                  </div>

                  <div className="space-y-2.5">
                    {/* Menu 1: Pengguna & Aktivasi */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                      <div className="flex items-center justify-between gap-2">
                        <strong className="text-sm text-white">1. Menu Pengguna: Provisioning &amp; Kode Aktivasi 72 Jam</strong>
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300 border border-emerald-500/30">WAJIB</span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                        Sistem RUDALPPK menonaktifkan pendaftaran publik bebas (*closed organization*).
                        Setiap akun agen lapangan harus dibuat terlebih dahulu oleh Admin di menu ini.
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-slate-400 list-disc list-inside">
                        <li>Klik <strong>Tambah Pengguna</strong>: Isi Nama Tampilan dan Callsign/Nomor Panggil unik.</li>
                        <li>Klik <strong>Terbitkan Kode Aktivasi</strong>: Sistem membuat token 1x pakai (hash SHA-256) berlaku 72 jam.</li>
                        <li>Berikan kode aktivasi tersebut kepada personel lapangan untuk dimasukkan ke aplikasi klien Flutter saat registrasi perangkat.</li>
                        <li>Tombol <strong>Revoke / Cabut Kunci</strong>: Digunakan jika perangkat personel hilang, langsung memutus token JWT dan memblokir perangkat secara permanen.</li>
                      </ul>
                    </div>

                    {/* Menu 2: Grup */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                      <strong className="text-sm text-white">2. Menu Grup: Komunikasi Terenkripsi &amp; Rotasi Key Epoch</strong>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                        Admin dapat membentuk grup operasi (misal: <em>Regu Taktis Alpha</em>) dan mengatur anggotanya.
                        Setiap penambahan atau penghapusan anggota secara otomatis meningkatkan parameter <code className="text-emerald-300">key_epoch</code> grup untuk menjamin kerahasiaan pesan di masa depan (*Forward Secrecy*).
                      </p>
                    </div>

                    {/* Menu 3: PERISAI-Sign */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                      <strong className="text-sm text-white">3. Menu PERISAI-Sign: Tanda Tangan Pasca-Kuantum (ML-DSA-65)</strong>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                        Gunakan menu ini untuk menandatangani instruksi komando (<code className="text-slate-200">command_instruction</code>), paket pembaruan firmware (<code className="text-slate-200">firmware_package</code>), atau laporan intelijen dengan tanda tangan digital tahan-kuantum <strong className="text-white">ML-DSA-65 (NIST FIPS 204)</strong> dan verifikasi hash SHA3-256.
                      </p>
                    </div>

                    {/* Menu 4: PERISAI-Lab */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                      <strong className="text-sm text-white">4. Menu PERISAI-Lab: Audit Kesiapan Armada &amp; Simulasi Shor</strong>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                        Memantau kesiapan seluruh armada perangkat aktif terhadap ancaman pasca-kuantum (*Harvest Now, Decrypt Later*), melihat matriks kerentanan algoritma klasik (RSA, ECDH), serta menjalankan simulasi faktorisasi kuantum Shor lokal.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 04. Flutter Field Client */}
              <section id="flutter-client" className="glass-panel rounded-2xl p-6 scroll-mt-24 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/35 bg-emerald-500/10 text-emerald-400">
                    <SmartphoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-400">04 // FIELD AGENT APP</span>
                    <h2 className="text-xl font-bold text-white">Jalankan Aplikasi Flutter Field Client</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Jalankan aplikasi agen lapangan untuk web Chrome, Android, atau desktop. Setelah terbuka, masukkan
                      kode aktivasi dari Konsol Organisasi dan simpan <em>12-word recovery phrase</em> lokal Anda.
                    </p>
                  </div>
                </div>

                <CopyableCodeBlock
                  title="MobileApp_and_Web/flutter_application_chat"
                  code={`cd MobileApp_and_Web/flutter_application_chat
flutter pub get
flutter run -d chrome

# Atau build rilis web / Android APK:
flutter build web --release
flutter build apk --release`}
                />
              </section>

              {/* 05. PQC Backend Switching */}
              <section id="pqc-switch" className="glass-panel rounded-2xl p-6 scroll-mt-24 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/35 bg-sky-500/10 text-sky-400">
                    <LockQuantumIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-sky-400">05 // DUAL PQC ENGINE</span>
                    <h2 className="text-xl font-bold text-white">
                      Mengubah Backend PQC (<code className="text-emerald-300">custom</code> vs{" "}
                      <code className="text-sky-300">pqcrypto</code>)
                    </h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Secara default <code>PQC_BACKEND=custom</code> aktif agar kompatibel dengan format wire klien Flutter.
                      Untuk mengaktifkan referensi PQClean FIPS 203 (ML-KEM) &amp; FIPS 204 (ML-DSA), ubah{" "}
                      <code>.env</code> lalu <em>recreate</em> container API.
                    </p>
                  </div>
                </div>

                <CopyableCodeBlock
                  title="Switch ke pqcrypto & Smoke Check"
                  code={`cd MobileApp_and_Web/Backend
# Ubah PQC_BACKEND=pqcrypto di file .env, lalu recreate container:
docker compose up -d --force-recreate api

# Verifikasi backend aktif via endpoint lab:
TOKEN=$(curl -s -X POST http://localhost:8000/api/v1/organizations/auth/login \\
  -H 'Content-Type: application/json' \\
  -d '{"email":"admin@kartika.local","password":"ChangeThisAdminPassword123!"}' \\
  | python3 -c 'import sys,json;print(json.load(sys.stdin)["data"]["access_token"])')

curl -s -H "Authorization: Bearer $TOKEN" \\
  http://localhost:8000/api/v1/perisai/lab/backends | python3 -m json.tool`}
                />

                <p className="text-xs text-slate-400">
                  Catatan: Mode <code>pqcrypto</code> menyediakan implementasi referensi PQClean (belum bersertifikasi
                  ACVP/CMVP), dan alur <em>server-derived keys</em> sengaja mengembalikan <code>501 PQC_OPERATION_UNSUPPORTED</code>.
                </p>
              </section>

              {/* 06. Automated Tests */}
              <section id="pengujian" className="glass-panel rounded-2xl p-6 scroll-mt-24 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/35 bg-emerald-500/10 text-emerald-400">
                    <ShieldCheckIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-400">06 // VERIFIKASI</span>
                    <h2 className="text-xl font-bold text-white">Menjalankan 105 Uji Otomatis</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Pastikan container Docker stack sudah berjalan sebelum mengeksekusi suite integrasi backend.
                    </p>
                  </div>
                </div>

                <CopyableCodeBlock
                  title="Backend Suites (87 Checks) & Flutter Suite (18 Checks)"
                  code={`# 1. Uji Backend (Auth 11/11, Platform 27/27, PQC)
cd MobileApp_and_Web/Backend
bash run_tests.sh

# Untuk menjalankan 49/49 uji PQC penuh dengan pqcrypto:
python3 -m venv /tmp/pqcvenv
/tmp/pqcvenv/bin/pip install -r backend/requirements.txt requests cryptography
/tmp/pqcvenv/bin/python test_pqc_backend.py

# 2. Uji Klien Flutter (18/18)
cd ../flutter_application_chat
flutter analyze
flutter test`}
                />
              </section>

              {/* 07. Key API Endpoints */}
              <section id="api-ringkas" className="glass-panel rounded-2xl p-6 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/35 bg-sky-500/10 text-sky-400">
                    <BookDocsIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-sky-400">07 // REFERENSI RINGKAS</span>
                    <h2 className="text-xl font-bold text-white">Kelompok Endpoint API Utama</h2>
                  </div>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 font-mono text-[11px] uppercase text-slate-400">
                        <th className="py-2.5 pr-4">Area</th>
                        <th className="py-2.5">Endpoints</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70 text-slate-300">
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-white">Aktivasi &amp; Auth</td>
                        <td className="py-2.5 font-mono text-[11px]">
                          POST /api/v1/activation/verify, /complete • POST /api/v1/auth/challenge, /verify
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-white">Organisasi &amp; User</td>
                        <td className="py-2.5 font-mono text-[11px]">
                          POST /api/v1/organizations/auth/login • GET/POST /api/v1/organizations/users
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-white">Pesan &amp; Grup E2EE</td>
                        <td className="py-2.5 font-mono text-[11px]">
                          POST/GET /api/v1/conversations/direct • /api/v1/groups • /api/v1/messages
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-white">PERISAI-Q Sign &amp; Lab</td>
                        <td className="py-2.5 font-mono text-[11px]">
                          POST /api/v1/perisai/sign/sign, /verify • POST /api/v1/perisai/lab/simulate-rsa • GET
                          /api/v1/perisai/lab/readiness, /benchmark, /backends
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
