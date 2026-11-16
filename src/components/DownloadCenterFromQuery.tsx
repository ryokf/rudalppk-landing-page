"use client";

import { useSearchParams } from "next/navigation";
import { DownloadCenter } from "@/components/DownloadCenter";
import { PlatformId, RELEASE_PACKAGES } from "@/data/rudalppk";

export function DownloadCenterFromQuery() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("platform");
  const isValid = RELEASE_PACKAGES.some((pkg) => pkg.id === raw);
  const initialPlatform: PlatformId = isValid ? (raw as PlatformId) : "full-project";

  return <DownloadCenter key={initialPlatform} initialPlatform={initialPlatform} />;
}
