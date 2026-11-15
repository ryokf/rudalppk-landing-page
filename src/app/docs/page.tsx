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
  { href: "#backend", label: "02. Jalankan Backend (Docker)" },
  { href: "#org-console", label: "03. Organization Web Console" },
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
              <section id="backend" className="glass-panel rounded-2xl p-6 scroll-mt-24 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/35 bg-emerald-500/10 text-emerald-400">
                    <ServerStackIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-400">02 // BACKEND RELAI &amp; PQC</span>
                    <h2 className="text-xl font-bold text-white">Jalankan Stack Backend (Docker Compose)</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Backend berjalan di <code className="text-emerald-300">http://localhost:8000</code>, menerapkan
                      migrasi PostgreSQL secara otomatis, dan melakukan bootstrap organisasi awal.
                    </p>
                  </div>
                </div>

                <CopyableCodeBlock
                  title="MobileApp_and_Web/Backend"
                  code={`cd MobileApp_and_Web/Backend
docker compose up --build -d
docker compose logs -f api`}
                />

                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200">
                  <strong>Kredensial Bootstrap Default (Development):</strong> Organisasi{" "}
                  <code>Kartika Operations</code> • Email <code>admin@kartika.local</code> • Password{" "}
                  <code>ChangeThisAdminPassword123!</code>. Ganti seluruh secret (<code>SYSTEM_ADMIN_API_KEY</code>,{" "}
                  <code>JWT_SECRET_KEY</code>, dan password) di <code>Backend/.env</code> sebelum produksi.
                </div>
              </section>

              {/* 03. Organization Web Console */}
              <section id="org-console" className="glass-panel rounded-2xl p-6 scroll-mt-24 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/35 bg-sky-500/10 text-sky-400">
                    <ConsoleAdminIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-400">03 // ADMIN CONSOLE</span>
                    <h2 className="text-xl font-bold text-white">Jalankan Organization Web Console</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Konsol web admin bersifat statis tanpa langkah build. Sajikan langsung folder{" "}
                      <code className="text-slate-200">organization_web/</code> lalu buka{" "}
                      <code className="text-emerald-300">http://localhost:8080</code>.
                    </p>
                  </div>
                </div>

                <CopyableCodeBlock
                  title="MobileApp_and_Web/organization_web"
                  code={`cd MobileApp_and_Web/organization_web
python3 -m http.server 8080`}
                />

                <ol className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
                  <li>1. Login menggunakan email &amp; password administrator bootstrap.</li>
                  <li>2. Buat akun <em>field agent</em> baru dan terbitkan kode aktivasi sekali pakai (berlaku 72 jam).</li>
                  <li>3. Buat grup organisasi jika diperlukan (perubahan anggota otomatis menaikkan <code>key_epoch</code>).</li>
                </ol>
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
                          GET /api/v1/perisai/lab/backends • Endpoint perisai_sign &amp; perisai_lab
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
