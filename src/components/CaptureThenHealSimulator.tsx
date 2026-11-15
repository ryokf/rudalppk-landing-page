"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertBugIcon,
  HealPulseIcon,
  LockQuantumIcon,
  TerminalIcon,
} from "@/components/Icons";
import { SHOR_SIM_JSON_PREVIEW, SIGN_VERIFY_JSON_PREVIEW } from "@/data/rudalppk";

type SimScenario = "idle" | "shor" | "sign";
type StageStatus = "idle" | "running" | "done";
type ArtifactTab = "log" | "shor" | "sign";

export function CaptureThenHealSimulator() {
  const [scenario, setScenario] = useState<SimScenario>("idle");
  const [stage1, setStage1] = useState<StageStatus>("idle");
  const [stage2, setStage2] = useState<StageStatus>("idle");
  const [stage3, setStage3] = useState<StageStatus>("idle");
  const [activeTab, setActiveTab] = useState<ArtifactTab>("log");
  const [logs, setLogs] = useState<string[]>([
    "[PERISAI-Q] Mesin PQC siap — mendukung ML-KEM-(512/768/1024) & ML-DSA-(44/65/87).",
    "[LAB & SIGN] Pilih simulasi serangan kuantum Shor RSA atau verifikasi ML-DSA di atas...",
  ]);

  const timersRef = useRef<number[]>([]);

  function clearTimers() {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }

  useEffect(() => {
    return () => clearTimers();
  }, []);

  function runSimulation(type: "shor" | "sign") {
    clearTimers();
    setScenario(type);
    setStage1("running");
    setStage2("idle");
    setStage3("idle");
    setActiveTab("log");

    if (type === "shor") {
      setLogs([
        "[POST /api/v1/perisai/lab/simulate-rsa] Memulai simulasi Shor & QUBO pada RSA (N=3233, e=17)...",
        "[TAHAP 1] Mencari periode kuantum & memfaktorkan modulus RSA...",
      ]);

      const t1 = window.setTimeout(() => {
        setStage1("done");
        setStage2("running");
        setLogs((prev) => [
          ...prev,
          "[RSA BROKEN] Faktor ditemukan: p=53, q=61 -> kunci privat d=2753 berhasil direkonstruksi!",
          "[TAHAP 2] Menguji ketahanan ML-KEM-768 (FIPS 203) & ML-DSA-65 (FIPS 204) terhadap serangan...",
        ]);
      }, 550);

      const t2 = window.setTimeout(() => {
        setStage2("done");
        setStage3("running");
        setLogs((prev) => [
          ...prev,
          "[PQC SAFE] Masalah Module-LWE pada ML-KEM-768 & ML-DSA-65 tidak dapat difaktorkan algoritma Shor.",
          "[TAHAP 3] Menyimpan event QUANTUM_SIMULATION_RUN ke tabel pqc_audit_logs...",
        ]);
      }, 1250);

      const t3 = window.setTimeout(() => {
        setStage3("done");
        setLogs((prev) => [
          ...prev,
          "[SELESAI] Status: RSA_BROKEN_PQC_SAFE • Lihat tab JSON /perisai/lab/simulate-rsa.",
        ]);
      }, 1900);

      timersRef.current.push(t1, t2, t3);
    } else {
      setLogs([
        "[POST /api/v1/perisai/sign] Menandatangani artefak command_instruction dengan ML-DSA-65...",
        "[TAHAP 1] Menghitung hash SHA-256 kanonik & membungkus payload menggunakan ML-KEM-768...",
      ]);

      const t1 = window.setTimeout(() => {
        setStage1("done");
        setStage2("running");
        setLogs((prev) => [
          ...prev,
          "[SIGNED] Artefak tersimpan di tabel signed_artifacts (signature 3309 byte).",
          "[TAHAP 2] Memverifikasi tanda tangan via POST /api/v1/perisai/sign/verify...",
        ]);
      }, 550);

      const t2 = window.setTimeout(() => {
        setStage2("done");
        setStage3("running");
        setLogs((prev) => [
          ...prev,
          "[VALID] Tanda tangan ML-DSA-65 terverifikasi otentik.",
          "[TAHAP 3] Menguji modifikasi 1-bit pada teks komando (uji anti-tampering)...",
        ]);
      }, 1250);

      const t3 = window.setTimeout(() => {
        setStage3("done");
        setLogs((prev) => [
          ...prev,
          "[TAMPER REJECTED] Modifikasi terdeteksi! Verifikasi otomatis menolak artefak yang diubah.",
        ]);
      }, 1900);

      timersRef.current.push(t1, t2, t3);
    }
  }

  function resetSimulation() {
    clearTimers();
    setScenario("idle");
    setStage1("idle");
    setStage2("idle");
    setStage3("idle");
    setActiveTab("log");
    setLogs([
      "[PERISAI-Q] Mesin PQC siap — mendukung ML-KEM-(512/768/1024) & ML-DSA-(44/65/87).",
      "[LAB & SIGN] Pilih simulasi serangan kuantum Shor RSA atau verifikasi ML-DSA di atas...",
    ]);
  }

  function statusBadge(state: StageStatus) {
    if (state === "running") {
      return (
        <span className="rounded-full border border-amber-400/40 bg-amber-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-300">
          Berjalan...
        </span>
      );
    }
    if (state === "done") {
      return (
        <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-300">
          Selesai
        </span>
      );
    }
    return (
      <span className="rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-0.5 font-mono text-[11px] text-slate-400">
        Siaga
      </span>
    );
  }

  const overallStatus =
    scenario === "idle"
      ? "SIAGA // PERISAI-LAB & PERISAI-SIGN"
      : stage3 === "done"
        ? scenario === "shor"
          ? "SELESAI // RSA_BROKEN_PQC_SAFE"
          : "SELESAI // ML-DSA-65 VALID & TAMPER REJECTED"
        : "SIMULASI KRIPTOGRAFI PASCA-KUANTUM BERJALAN...";

  const inspectorContent =
    activeTab === "log"
      ? logs.join("\n")
      : activeTab === "shor"
        ? SHOR_SIM_JSON_PREVIEW
        : SIGN_VERIFY_JSON_PREVIEW;

  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-7">
      <div className="flex flex-col gap-4 border-b border-slate-800/80 pb-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold ${
              scenario !== "idle" && stage3 !== "done"
                ? "border-amber-400/40 bg-amber-500/15 text-amber-300"
                : "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {overallStatus}
          </span>
          <span className="font-mono text-xs text-slate-400">
            ML-KEM-768 • ML-DSA-65 • AES-256-GCM
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => runSimulation("shor")}
            className="rounded-lg border border-rose-500/45 bg-rose-500/10 px-3.5 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/20"
          >
            Simulasi Shor RSA (N=3233) vs ML-KEM
          </button>
          <button
            type="button"
            onClick={() => runSimulation("sign")}
            className="rounded-lg border border-sky-500/45 bg-sky-500/10 px-3.5 py-2 text-xs font-semibold text-sky-200 transition hover:bg-sky-500/20"
          >
            Uji Tanda Tangan PERISAI-Sign (ML-DSA-65)
          </button>
          <button
            type="button"
            onClick={resetSimulation}
            className="rounded-lg border border-slate-700 bg-slate-900/70 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <div className="space-y-3.5 lg:col-span-6">
          <div
            className={`rounded-xl border p-4 transition ${
              stage1 === "done"
                ? "border-emerald-500/40 bg-emerald-500/5"
                : stage1 === "running"
                  ? "border-amber-400/50 bg-amber-500/10"
                  : "border-slate-800 bg-slate-900/50"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                <AlertBugIcon className="h-4 w-4 text-rose-400" />
                <span>TAHAP 1 • EKSEKUSI ALGORITMA</span>
              </span>
              {statusBadge(stage1)}
            </div>
            <h4 className="mt-1.5 text-sm font-bold text-white">
              Faktorisasi Shor RSA / Penandatanganan Artefak
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Memfaktorkan modulus RSA uji (<code className="text-slate-200">N=3233, e=17</code>) atau membuat
              tanda tangan kanonik <code className="text-slate-200">ML-DSA-65</code> pada instruksi komando.
            </p>
          </div>

          <div
            className={`rounded-xl border p-4 transition ${
              stage2 === "done"
                ? "border-emerald-500/40 bg-emerald-500/5"
                : stage2 === "running"
                  ? "border-amber-400/50 bg-amber-500/10"
                  : "border-slate-800 bg-slate-900/50"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                <LockQuantumIcon className="h-4 w-4 text-sky-400" />
                <span>TAHAP 2 • VERIFIKASI PQC</span>
              </span>
              {statusBadge(stage2)}
            </div>
            <h4 className="mt-1.5 text-sm font-bold text-white">
              Ketahanan Kisi ML-KEM-768 &amp; Validasi ML-DSA
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Membuktikan keamanan enkapsulasi kunci <code className="text-slate-200">ML-KEM-768</code> dan
              memvalidasi keaslian tanda tangan artefak pada endpoint backend.
            </p>
          </div>

          <div
            className={`rounded-xl border p-4 transition ${
              stage3 === "done"
                ? "border-emerald-500/40 bg-emerald-500/5"
                : stage3 === "running"
                  ? "border-amber-400/50 bg-amber-500/10"
                  : "border-slate-800 bg-slate-900/50"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                <HealPulseIcon className="h-4 w-4 text-emerald-400" />
                <span>TAHAP 3 • AUDIT LOG &amp; ANTI-TAMPER</span>
              </span>
              {statusBadge(stage3)}
            </div>
            <h4 className="mt-1.5 text-sm font-bold text-white">
              Pencatatan Audit Armada &amp; Penolakan Modifikasi
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Mencatat hasil ke tabel <code className="text-slate-200">pqc_audit_logs</code> serta menolak
              eksekusi apabila terdapat modifikasi 1-bit pada payload.
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-[#05080d] lg:col-span-6">
          <div className="flex flex-wrap items-center gap-1 border-b border-slate-800 bg-slate-900/70 px-3 py-2">
            <TerminalIcon className="mr-1.5 h-4 w-4 text-emerald-400" />
            {(
              [
                { id: "log", label: "Log Eksekusi" },
                { id: "shor", label: "/perisai/lab/simulate-rsa" },
                { id: "sign", label: "/perisai/sign/verify" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition ${
                  activeTab === tab.id
                    ? "bg-emerald-500/15 font-semibold text-emerald-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <pre className="flex-1 overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap">
            {inspectorContent}
          </pre>
        </div>
      </div>
    </div>
  );
}
