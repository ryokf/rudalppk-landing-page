import { PlayVideoIcon, ShieldCheckIcon } from "@/components/Icons";
import { DEMO_VIDEO_CONFIG } from "@/data/rudalppk";

function extractYouTubeId(input: string): string {
  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return "gR8LXbpmHdE";
}

export function VideoDemoSection() {
  const videoId = extractYouTubeId(DEMO_VIDEO_CONFIG.youtubeUrlOrId);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-12">
      {/* Main 16:9 YouTube Player Frame */}
      <div className="glass-panel overflow-hidden rounded-2xl border border-emerald-500/25 lg:col-span-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/85 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-1 font-mono text-[11px] font-semibold text-slate-300">
              YOUTUBE // RUDALPPK DEMO PLAYER
            </span>
          </div>

          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/70 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-300 transition hover:border-emerald-400/50 hover:text-emerald-200"
          >
            <PlayVideoIcon className="h-3.5 w-3.5" />
            <span>Buka di YouTube ↗</span>
          </a>
        </div>

        <div className="relative aspect-video w-full bg-slate-950">
          <iframe
            src={embedUrl}
            title={DEMO_VIDEO_CONFIG.title}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Column: Highlights & Easy Swap Note */}
      <div className="space-y-3.5 lg:col-span-4">
        {DEMO_VIDEO_CONFIG.highlights.map((item) => (
          <div key={item.time} className="glass-panel rounded-xl p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/35 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-300">
                <PlayVideoIcon className="h-3.5 w-3.5" />
                <span>BAGIAN {item.time}</span>
              </span>
              <ShieldCheckIcon className="h-4 w-4 text-emerald-400/70" />
            </div>
            <h3 className="mt-2.5 text-sm font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
