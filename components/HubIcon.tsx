import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface HubIconProps {
  icon: LucideIcon;
  label: string;
  angle: number;
  radius: number;
  href: string;
  pulseActive?: boolean;
  onHubPointerEnter?: () => void;
  onHubPointerLeave?: () => void;
}

const ringIdle =
  "border-zinc-500 bg-zinc-800/95 shadow-[0_2px_16px_rgba(0,0,0,0.5)] backdrop-blur-sm";
const ringGlow =
  "border-red-500 bg-zinc-800/95 shadow-[0_0_24px_rgba(239,68,68,0.45)] backdrop-blur-sm";

export default function HubIcon({
  icon: Icon,
  label,
  angle,
  radius,
  href,
  pulseActive = false,
  onHubPointerEnter,
  onHubPointerLeave,
}: HubIconProps) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.round(radius * Math.sin(rad));
  const y = Math.round(-radius * Math.cos(rad));
  const ringClass = pulseActive ? ringGlow : ringIdle;

  return (
    <Link
      href={href}
      onPointerEnter={onHubPointerEnter}
      onPointerLeave={onHubPointerLeave}
      className="group absolute top-1/2 left-1/2 z-10 flex flex-col items-center gap-1.5 md:gap-2 xl:gap-2.5"
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 md:h-14 md:w-14 xl:h-16 xl:w-16 ${ringClass} group-hover:border-red-500 group-hover:shadow-[0_0_22px_rgba(239,68,68,0.4)]`}
      >
        <Icon
          className={`h-5 w-5 transition-colors duration-300 md:h-6 md:w-6 xl:h-7 xl:w-7 ${
            pulseActive ? "text-red-400" : "text-zinc-200"
          } group-hover:text-red-400`}
        />
      </div>
      <span
        className={`inline-block max-w-22 text-center text-[10px] leading-tight transition-all duration-300 md:max-w-26 md:text-xs xl:max-w-32 xl:text-sm ${
          pulseActive
            ? "font-medium text-zinc-50 ring-2 ring-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            : "text-zinc-200 ring-1 ring-zinc-600/80 shadow-md"
        } rounded-md bg-zinc-900/85 px-1.5 py-0.5 backdrop-blur-sm group-hover:text-white group-hover:ring-red-500 group-hover:shadow-[0_0_18px_rgba(239,68,68,0.35)]`}
      >
        {label}
      </span>
    </Link>
  );
}
