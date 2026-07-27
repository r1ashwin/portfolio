"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { WALL_CLOCK_MEDIA } from "@/lib/wall-clock-media";

type WallClockGalleryProps = {
  onBack: () => void;
};

export default function WallClockGallery({ onBack }: WallClockGalleryProps) {
  return (
    <div className="space-y-6" data-testid="wall-clock-gallery">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Electromechanical Wall Clock
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-300">
            28-flap electromechanical clock: ESP32/ATmega, custom PCBs, shift
            registers, interrupt-driven control. Built for INR 28k, sold for INR
            40k; 11+ months continuous run.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-rose-400/35 hover:bg-rose-500/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden strokeWidth={2} />
          All projects
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {WALL_CLOCK_MEDIA.map((item) => (
          <figure
            key={item.src}
            className="overflow-hidden rounded-2xl border border-white/12 bg-zinc-900/60"
          >
            {item.type === "image" ? (
              <div className="relative aspect-[4/3] w-full bg-zinc-950">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>
            ) : (
              <video
                className="aspect-[4/3] w-full bg-black object-contain"
                controls
                preload="metadata"
                playsInline
                aria-label={item.alt}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
