"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Avatar from "@/components/Avatar";
import HubIcon from "@/components/HubIcon";
import { HUB_SECTIONS } from "@/lib/hub-sections";

const MOBILE_RADIUS = 120;
const DESKTOP_RADIUS = 180;
const CYCLE_MS = 1500;
const RESUME_AFTER_LEAVE_MS = 1500;

export default function HubCluster() {
  const [cycleIndex, setCycleIndex] = useState(0);
  const [cyclePaused, setCyclePaused] = useState(false);
  const pointerDepthRef = useRef(0);
  const resumeTimeoutRef = useRef<number | null>(null);

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

  return (
    <div
      className="relative overflow-visible"
      style={{
        width: `min(90vw, 500px)`,
        height: `min(90vw, 500px)`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <Avatar />
      </div>
      {HUB_SECTIONS.map((s, i) => (
        <div key={s.id} className="contents">
          <div className="md:hidden">
            <HubIcon
              icon={s.icon}
              label={s.label}
              angle={s.angle}
              radius={MOBILE_RADIUS}
              href={s.href}
              pulseActive={!cyclePaused && cycleIndex === i}
              onHubPointerEnter={onHubPointerEnter}
              onHubPointerLeave={onHubPointerLeave}
            />
          </div>
          <div className="hidden md:block">
            <HubIcon
              icon={s.icon}
              label={s.label}
              angle={s.angle}
              radius={DESKTOP_RADIUS}
              href={s.href}
              pulseActive={!cyclePaused && cycleIndex === i}
              onHubPointerEnter={onHubPointerEnter}
              onHubPointerLeave={onHubPointerLeave}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
