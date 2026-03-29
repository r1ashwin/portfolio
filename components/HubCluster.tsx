"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Avatar from "@/components/Avatar";
import DigitalTwinChat from "@/components/DigitalTwinChat";
import HubIcon from "@/components/HubIcon";
import { HUB_SECTIONS } from "@/lib/hub-sections";

const CYCLE_MS = 1500;
const RESUME_AFTER_LEAVE_MS = 1500;

type LayoutTier = "sm" | "md" | "xl" | "2xl";

const LAYOUT: Record<
  LayoutTier,
  { box: string; radius: number }
> = {
  sm: { box: "min(92vw, 500px)", radius: 120 },
  md: { box: "min(88vw, 620px)", radius: 198 },
  xl: { box: "min(78vw, 760px)", radius: 248 },
  "2xl": { box: "min(70vw, 860px)", radius: 278 },
};

function tierFromWidth(w: number): LayoutTier {
  if (w >= 1800) return "2xl";
  if (w >= 1280) return "xl";
  if (w >= 768) return "md";
  return "sm";
}

export default function HubCluster() {
  const [tier, setTier] = useState<LayoutTier>("sm");
  const [twinOpen, setTwinOpen] = useState(false);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [cyclePaused, setCyclePaused] = useState(false);
  const pointerDepthRef = useRef(0);
  const resumeTimeoutRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    setTier(tierFromWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const sync = () => setTier(tierFromWidth(window.innerWidth));
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimeoutRef.current != null) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (cyclePaused) return;
    const id = window.setInterval(() => {
      setCycleIndex((i) => (i + 1) % HUB_SECTIONS.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [cyclePaused]);

  useEffect(() => () => clearResumeTimer(), [clearResumeTimer]);

  const onHubPointerEnter = useCallback(() => {
    clearResumeTimer();
    pointerDepthRef.current += 1;
    setCyclePaused(true);
  }, [clearResumeTimer]);

  const onHubPointerLeave = useCallback(() => {
    pointerDepthRef.current = Math.max(0, pointerDepthRef.current - 1);
    window.setTimeout(() => {
      if (pointerDepthRef.current > 0) return;
      clearResumeTimer();
      resumeTimeoutRef.current = window.setTimeout(() => {
        resumeTimeoutRef.current = null;
        if (pointerDepthRef.current === 0) {
          setCyclePaused(false);
        }
      }, RESUME_AFTER_LEAVE_MS);
    }, 0);
  }, [clearResumeTimer]);

  const { box, radius } = LAYOUT[tier];

  return (
    <div
      className="relative overflow-visible"
      style={{
        width: box,
        height: box,
      }}
    >
      <DigitalTwinChat open={twinOpen} onClose={() => setTwinOpen(false)} />
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <Avatar onTalkClick={() => setTwinOpen(true)} />
      </div>
      {HUB_SECTIONS.map((s, i) => (
        <HubIcon
          key={s.id}
          icon={s.icon}
          label={s.label}
          angle={s.angle}
          radius={radius}
          href={s.href}
          pulseActive={!cyclePaused && cycleIndex === i}
          onHubPointerEnter={onHubPointerEnter}
          onHubPointerLeave={onHubPointerLeave}
        />
      ))}
    </div>
  );
}
