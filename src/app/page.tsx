import Link from "next/link";
import { ArchitectureTabs } from "@/components/ArchitectureTabs";
import { BenchmarkTable } from "@/components/BenchmarkTable";
import { CaptureThenHealSimulator } from "@/components/CaptureThenHealSimulator";
import { DownloadCenter } from "@/components/DownloadCenter";
import { Footer } from "@/components/Footer";
import { HeroDownloadActions } from "@/components/HeroDownloadActions";
import {
  AlertBugIcon,
  BookDocsIcon,
  ConsoleAdminIcon,
  CpuBinaryIcon,
  FactoryGridIcon,
  KeyEpochIcon,
  LockQuantumIcon,
  MessageEncryptedIcon,
  RadarPulseIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "@/components/Icons";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="pointer-events-none fixed inset-0 tactical-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <Navbar currentPath="/" />

      <main className="relative z-10 flex-1">
        {/* HERO SECTION */}
        <section className="border-b border-slate-800/70 py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span>SECURE FIELD COMMS • PERISAI-Q • AEGIS-GUARD</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
                Komunikasi Lapangan <span className="text-emerald-400">E2EE &amp; Pasca-Kuantum</span> dengan
                Pertahanan Biner <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Capture-Then-Heal</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-300">
                <strong className="text-white">RUDALPPK</strong> memadukan aplikasi agen Flutter, konsol organisasi
                statis, relai FastAPI + PostgreSQL + SeaweedFS berkemampuan <code className="text-emerald-300">pqcrypto</code>{" "}
                (ML-KEM &amp; ML-DSA), serta cetak biru DFIR AEGIS-GUARD Tier 3.
              </p>

              <HeroDownloadActions />

              {/* Key Verified Metrics with Icons */}
              <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-4">
                <div className="glass-panel rounded-xl p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-lg font-extrabold text-emerald-400">105 / 105</span>
                    <ShieldCheckIcon className="h-4 w-4 text-emerald-400/80" />
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">Automated Checks</div>
                </div>
                <div className="glass-panel rounded-xl p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-lg font-extrabold text-sky-400">E2EE</span>
                    <KeyEpochIcon className="h-4 w-4 text-sky-400/80" />
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">Ed25519 + X25519</div>
                </div>
                <div className="glass-panel rounded-xl p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-lg font-extrabold text-emerald-400">ML-KEM</span>
                    <LockQuantumIcon className="h-4 w-4 text-emerald-400/80" />
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">PQClean Backend</div>
                </div>
                <div className="glass-panel rounded-xl p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-lg font-extrabold text-white">Tier 3</span>
                    <CpuBinaryIcon className="h-4 w-4 text-sky-400/80" />
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">Reed-Solomon DFIR</div>
                </div>
              </div>
            </div>

            {/* Right Telemetry Console matched to real repo */}
            <aside className="glass-panel overflow-hidden rounded-2xl lg:col-span-5" aria-label="Ringkasan Stack RUDALPPK">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[11px] font-semibold text-slate-400">
                  RUDALPPK // WORKSPACE STACK
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="space-y-2.5 rounded-xl border border-slate-800/90 bg-[#05080d] p-4 font-mono text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-slate-400">
                      <SmartphoneIcon className="h-3.5 w-3.5 text-emerald-400" />
                      <span>FIELD CLIENT</span>
                    </span>
                    <span className="text-emerald-300">Flutter 3.x (18/18)</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-slate-400">
                      <ConsoleAdminIcon className="h-3.5 w-3.5 text-sky-400" />
                      <span>ORG CONSOLE</span>
                    </span>
                    <span className="text-slate-200">Static SPA (PBKDF2)</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-slate-400">
                      <ServerStackIcon className="h-3.5 w-3.5 text-sky-400" />
                      <span>RELAY API</span>
                    </span>
                    <span className="text-sky-300">FastAPI + PG 16 + S3</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-slate-400">
                      <LockQuantumIcon className="h-3.5 w-3.5 text-emerald-400" />
                      <span>PQC ENGINE</span>
                    </span>
                    <span className="text-emerald-300">custom | pqcrypto 1.0</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-slate-400">
                      <CpuBinaryIcon className="h-3.5 w-3.5 text-slate-300" />
                      <span>TIER 3 SPEC</span>
                    </span>
                    <span className="text-slate-200">AEGIS-GUARD (Rust)</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                    <div className="font-bold text-emerald-300">49 / 49</div>
                    <div className="mt-0.5 text-slate-400">PQC Suite</div>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                    <div className="font-bold text-sky-300">27 / 27</div>
                    <div className="mt-0.5 text-slate-400">Platform</div>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                    <div className="font-bold text-emerald-300">11 / 11</div>
                    <div className="mt-0.5 text-slate-400">Auth Flow</div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-3 font-mono text-[11px]">
                  <code className="text-slate-400">$ docker compose up -d</code>
                  <Link href="/docs" className="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:underline">
                    <BookDocsIcon className="h-3.5 w-3.5" />
                    <span>Panduan /docs →</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SECTION 1: MASALAH -> SOLUSI */}
        <section id="masalah" className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                01 // MASALAH &amp; SOLUSI
              </span>
              <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Tiga Celah Kritis yang Diatasi
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="glass-panel flex flex-col justify-between rounded-2xl p-5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/35 bg-sky-500/10 text-sky-400">
                      <MessageEncryptedIcon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-sky-300">SAD v2.0 // ZERO-TRUST</span>
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-white">Komunikasi Terisolasi &amp; Terkendali</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Tanpa registrasi bebas. Admin menerbitkan kode aktivasi 72 jam &amp; server tak pernah melihat plaintext.
                  </p>
                </div>
                <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">
                  Ed25519 + X25519 + key_epoch
                </div>
              </article>

              <article className="glass-panel flex flex-col justify-between rounded-2xl p-5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/35 bg-amber-500/10 text-amber-400">
                      <LockQuantumIcon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-amber-300">PERISAI-Q // HNDL</span>
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-white">Risiko Kuantum &amp; Spoofing Komando</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    RSA/ECC rentan algoritma Shor; instruksi komando dan firmware OT/IoT butuh tanda tangan tahan kuantum.
                  </p>
                </div>
                <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">
                  Vault, Sign (ML-DSA) &amp; Lab Qiskit
                </div>
              </article>

              <article className="glass-panel flex flex-col justify-between rounded-2xl p-5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-500/35 bg-rose-500/10 text-rose-400">
                      <AlertBugIcon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-rose-300">AEGIS-GUARD // TIER 3</span>
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-white">Sabotase Biner &amp; Hilangnya Bukti</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Restart paksa menghapus bukti forensik RAM saat terjadi patch ilegal (mis. <code>0x74 → 0x75</code>).
                  </p>
                </div>
                <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">
                  Capture-Then-Heal (Reed-Solomon)
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 2: ARSITEKTUR TERPADU */}
        <section id="arsitektur" className="border-y border-slate-800/70 bg-[#080d14]/70 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                02 // ARSITEKTUR REPOSITORI RUDALPPK
              </span>
              <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Empat Komponen Utama dalam Ekosistem
              </h2>
            </div>

            <ArchitectureTabs />
          </div>
        </section>

        {/* SECTION 3: SIMULASI INTERAKTIF TIER 3 */}
        <section id="simulasi" className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                03 // SIMULASI DESAIN TIER 3 (PA-T3-PRD-001)
              </span>
              <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Simulasi Siklus Capture-Then-Heal AEGIS-GUARD
              </h2>
            </div>

            <CaptureThenHealSimulator />
          </div>
        </section>

        {/* SECTION 4: HASIL VERIFIKASI & UJI OTOMATIS */}
        <section id="benchmark" className="border-y border-slate-800/70 bg-[#080d14]/70 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                04 // HASIL PENGUJIAN &amp; VERIFIKASI
              </span>
              <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                105 Pemeriksaan Otomatis Lulus
              </h2>
            </div>

            <BenchmarkTable />
          </div>
        </section>

        {/* SECTION 5: MANFAAT DWIGUNA & STACK TEKNOLOGI */}
        <section id="dwiguna" className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                05 // PENERAPAN &amp; STACK TEKNOLOGI
              </span>
              <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Operasi Lapangan, Organisasi &amp; Infrastruktur Kritis
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="glass-panel rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/35 bg-emerald-500/10 text-emerald-400">
                    <RadarPulseIcon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-400">OPERASI TAKTIS &amp; ORGANISASI</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Komunikasi personel lapangan terisolasi per organisasi (<em>no cross-org</em>)</li>
                  <li>• Sinkronisasi offline outbox &amp; relai WebSocket untuk area sinyal lemah</li>
                  <li>• Pengesahan instruksi komando &amp; firmware OT/IoT via <strong>PERISAI-Sign</strong></li>
                </ul>
              </article>

              <article className="glass-panel rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/35 bg-sky-500/10 text-sky-400">
                    <FactoryGridIcon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-sky-400">AUDIT KUANTUM &amp; INFRASTRUKTUR</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Uji kesiapan kriptografi lokal &amp; simulasi Shor RSA lewat <strong>PERISAI-Lab</strong></li>
                  <li>• Penyimpanan file &amp; ciphertext terenkripsi pada <strong>SeaweedFS S3</strong></li>
                  <li>• Roadmap Tier 3 <strong>AEGIS-GUARD</strong> untuk perlindungan biner &amp; DFIR</li>
                </ul>
              </article>
            </div>

            <div className="glass-panel mt-5 grid gap-4 rounded-2xl p-5 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-emerald-400">
                  <SmartphoneIcon className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-mono text-[11px] font-bold text-emerald-400">CLIENT &amp; CONSOLE</span>
                  <p className="mt-0.5 text-sm font-semibold text-white">Flutter 3.x &amp; Static SPA</p>
                  <p className="text-xs text-slate-400">Android, Web, Desktop + organization_web</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-sky-400">
                  <ServerStackIcon className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-mono text-[11px] font-bold text-emerald-400">BACKEND &amp; DATA</span>
                  <p className="mt-0.5 text-sm font-semibold text-white">FastAPI + PostgreSQL 16 + SeaweedFS</p>
                  <p className="text-xs text-slate-400">Dikemas via Docker Compose</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-emerald-400">
                  <LockQuantumIcon className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-mono text-[11px] font-bold text-emerald-400">PQC &amp; CATATAN</span>
                  <p className="mt-0.5 text-sm font-semibold text-white">custom | pqcrypto 1.0.0</p>
                  <p className="text-xs text-slate-400">Prototipe fungsional (non-CMVP certified)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: PUSAT UNDUHAN APLIKASI */}
        <section id="download" className="border-t border-slate-800/80 bg-[#070c12] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  06 // UNDUH KOMPONEN RUDALPPK
                </span>
                <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Unduh Aplikasi Klien, Konsol Web &amp; Backend
                </h2>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/docs"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-sky-300 transition hover:border-sky-400/50"
                >
                  <BookDocsIcon className="h-4 w-4" />
                  <span>Dokumentasi (/docs)</span>
                </Link>
                <Link
                  href="/download"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  <span>Halaman Unduhan Lengkap</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <DownloadCenter compact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
