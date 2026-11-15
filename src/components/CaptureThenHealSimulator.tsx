"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertBugIcon,
  HealPulseIcon,
  LockQuantumIcon,
  TerminalIcon,
} from "@/components/Icons";
import { EVIDENCE_JSON_PREVIEW, YARA_RULE_PREVIEW } from "@/data/rudalppk";

type SimScenario = "idle" | "byte" | "debugger";
type StageStatus = "idle" | "running" | "done";
type ArtifactTab = "log" | "json" | "yara";

export function CaptureThenHealSimulator() {
  const [scenario, setScenario] = useState<SimScenario>("idle");
  const [stage1, setStage1] = useState<StageStatus>("idle");
  const [stage2, setStage2] = useState<StageStatus>("idle");
  const [stage3, setStage3] = useState<StageStatus>("idle");
  const [activeTab, setActiveTab] = useState<ArtifactTab>("log");
  const [logs, setLogs] = useState<string[]>([
    "[AEGIS-GUARD] Stub loader Rust aktif — eksekusi RAM anonim via memfd_create + fexecve.",
    "[RASP] Pengawasan ptrace aktif. Menunggu anomali atau simulasi serangan...",
  ]);

  const timersRef = useRef<number[]>([]);

  function clearTimers() {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }

  useEffect(() => {
    return () => clearTimers();
  }, []);

  function runSimulation(type: "byte" | "debugger") {
    clearTimers();
    setScenario(type);
    setStage1("running");
    setStage2("idle");
    setStage3("idle");
    setActiveTab("log");

    const triggerMsg =
      type === "byte"
        ? "[ALERT] Sabotase biner terdeteksi pada offset 0x0004F2A0 (0x74 -> 0x75)!"
        : "[ALERT] Upaya injeksi debugger GDB / manipulasi pustaka LD_PRELOAD terdeteksi!";

    setLogs([
      triggerMsg,
      "[TAHAP 1 // <1 ms] RASP ptrace membekukan eksekusi thread secara atomik (tanpa restart)...",
    ]);

    const t1 = window.setTimeout(() => {
      setStage1("done");
      setStage2("running");
      setLogs((prev) => [
        ...prev,
        "[TAHAP 2 // <5 ms] Forensic Vault ISO/IEC 27037 mengekstrak evidence_metadata.json, injected_payload.bin & rule_generated.yar...",
        "[SEAL] Hashing ganda BLAKE3 + SHA-256 selesai. Aturan YARA siap disebar ke SIEM militer.",
      ]);
    }, 550);

    const t2 = window.setTimeout(() => {
      setStage2("done");
      setStage3("running");
      setLogs((prev) => [
        ...prev,
        "[TAHAP 3 // 14,2 ms] Mesin Reed-Solomon GF(2^8) merekonstruksi segmen byte rusak (toleransi 20-30%)...",
      ]);
    }, 1250);

    const t3 = window.setTimeout(() => {
      setStage3("done");
      setLogs((prev) => [
        ...prev,
        "[HEALED] Hash integritas biner kembali 100% identik. Aplikasi melanjutkan eksekusi normal di RAM.",
      ]);
    }, 1950);

    timersRef.current.push(t1, t2, t3);
  }

  function resetSimulation() {
    clearTimers();
    setScenario("idle");
    setStage1("idle");
    setStage2("idle");
    setStage3("idle");
    setActiveTab("log");
    setLogs([
      "[AEGIS-GUARD] Stub loader Rust aktif — eksekusi RAM anonim via memfd_create + fexecve.",
      "[RASP] Pengawasan ptrace aktif. Menunggu anomali atau simulasi serangan...",
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
      ? "SIAGA // INTEGRITAS BINER 100%"
      : stage3 === "done"
        ? "PULIH 100% // BUKTI TERSEGEL ISO/IEC 27037"
        : "ANOMALI TERDETEKSI // SIKLUS CAPTURE-THEN-HEAL AKTIF";

  const inspectorContent =
    activeTab === "log"
      ? logs.join("\n")
      : activeTab === "json"
        ? EVIDENCE_JSON_PREVIEW
        : YARA_RULE_PREVIEW;

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
            BLAKE3 + SHA-256 • memfd_create + fexecve
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => runSimulation("byte")}
            className="rounded-lg border border-rose-500/45 bg-rose-500/10 px-3.5 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/20"
          >
            Sabotase Byte (0x0004F2A0: 0x74 → 0x75)
          </button>
          <button
            type="button"
            onClick={() => runSimulation("debugger")}
            className="rounded-lg border border-amber-500/45 bg-amber-500/10 px-3.5 py-2 text-xs font-semibold text-amber-200 transition hover:bg-amber-500/20"
          >
            Injeksi Debugger (GDB / LD_PRELOAD)
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
        {/* Pipeline stages */}
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
                <span>TAHAP 1 • &lt; 1 ms</span>
              </span>
              {statusBadge(stage1)}
            </div>
            <h4 className="mt-1.5 text-sm font-bold text-white">Deteksi RASP &amp; Pembekuan Atomik</h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Mekanisme <code className="text-slate-200">ptrace</code> mendeteksi debugger jahat (GDB/LLDB) dan
              manipulasi <code className="text-slate-200">LD_PRELOAD</code>, membekukan eksekusi tanpa <em>restart</em>.
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
                <span>TAHAP 2 • &lt; 5 ms</span>
              </span>
              {statusBadge(stage2)}
            </div>
            <h4 className="mt-1.5 text-sm font-bold text-white">
              Penyegelan Bukti Forensic Vault (ISO/IEC 27037)
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Mengekstrak <code className="text-slate-200">evidence_metadata.json</code>,{" "}
              <code className="text-slate-200">injected_payload.bin</code>, dan{" "}
              <code className="text-slate-200">rule_generated.yar</code> dengan segel ganda BLAKE3 + SHA-256.
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
                <span>TAHAP 3 • 14,2 ms</span>
              </span>
              {statusBadge(stage3)}
            </div>
            <h4 className="mt-1.5 text-sm font-bold text-white">
              Pemulihan Biner Mandiri via Reed-Solomon GF(2⁸)
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Merekonstruksi byte yang dirusak (toleransi 20–30% kerusakan) tanpa cadangan penuh hingga nilai hash
              integritas kembali 100% identik.
            </p>
          </div>
        </div>

        {/* Artifact Inspector */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-[#05080d] lg:col-span-6">
          <div className="flex flex-wrap items-center gap-1 border-b border-slate-800 bg-slate-900/70 px-3 py-2">
            <TerminalIcon className="mr-1.5 h-4 w-4 text-emerald-400" />
            {(
              [
                { id: "log", label: "Log Eksekusi" },
                { id: "json", label: "evidence_metadata.json" },
                { id: "yara", label: "rule_generated.yar" },
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
