"use client";

import { useState } from "react";

interface CopyableCodeBlockProps {
  title?: string;
  code: string;
}

export function CopyableCodeBlock({ title, code }: CopyableCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#05080d]">
      <div className="flex items-center justify-between gap-2 border-b border-slate-800/90 bg-slate-900/70 px-3.5 py-2">
        <span className="font-mono text-[11px] font-semibold text-slate-400">
          {title ?? "TERMINAL"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
        >
          {copied ? "Tersalin!" : "Salin"}
        </button>
      </div>
      <pre className="overflow-x-auto p-3.5 font-mono text-xs leading-relaxed text-sky-200">
        {code}
      </pre>
    </div>
  );
}
