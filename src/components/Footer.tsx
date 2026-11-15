import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#05080d] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <strong className="text-sm font-bold tracking-wide text-white">
              RUDALPPK • Kartika Cyber Hackathon 2026
            </strong>
          </div>
          <p className="mt-1.5 text-xs text-slate-400">
            Secure Field Communication (SAD v2.0) • PERISAI-Q (Vault • Sign • Lab) • Python 3.12 (FastAPI) &amp; Flutter 3.x
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-400">
          <Link href="/#masalah" className="transition hover:text-white">
            Latar Belakang
          </Link>
          <Link href="/#arsitektur" className="transition hover:text-white">
            Arsitektur
          </Link>
          <Link href="/#benchmark" className="transition hover:text-white">
            Tolok Ukur
          </Link>
          <Link href="/#dwiguna" className="transition hover:text-white">
            Dwiguna
          </Link>
          <Link href="/docs" className="text-sky-300 transition hover:text-sky-200">
            Dokumentasi
          </Link>
          <Link href="/download" className="font-semibold text-emerald-400 transition hover:text-emerald-300">
            Unduh Aplikasi
          </Link>
        </div>
      </div>
    </footer>
  );
}
