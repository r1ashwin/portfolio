import Image from "next/image";

interface AvatarProps {
  onTalkClick?: () => void;
}

export default function Avatar({ onTalkClick }: AvatarProps) {
  return (
    <button
      type="button"
      onClick={onTalkClick}
      aria-label="Open digital twin, Talk to me"
      data-testid="avatar-digital-twin-trigger"
      className="group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-transparent p-2 text-center -m-2 transition-colors hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 xl:gap-4"
    >
      <div className="animate-float relative rounded-xl border border-zinc-600 bg-zinc-800/90 px-3 py-1.5 text-left text-xs text-zinc-200 shadow-lg shadow-black/40 transition-colors group-hover:border-red-500 group-hover:text-white group-focus-visible:border-red-500 group-focus-visible:text-white md:px-4 md:py-2 md:text-sm xl:px-5 xl:py-2.5 xl:text-base">
        Talk to me
        {/* Caret uses border-t as fill; match bubble’s red border on hover/focus */}
        <span
          className="pointer-events-none absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-zinc-800/90 transition-colors duration-200 group-hover:border-t-red-500 group-focus-visible:border-t-red-500"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none relative h-20 w-20 overflow-hidden rounded-full border-2 border-zinc-600 bg-zinc-800 shadow-lg shadow-black/40 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-44 xl:w-44 2xl:h-52 2xl:w-52">
        <Image
          src="/images/website_photo.jpg"
          alt="Ashwin S Deshpande"
          fill
          className="object-cover object-[center_20%]"
          sizes="(max-width: 768px) 80px, (max-width: 1024px) 128px, (max-width: 1280px) 144px, (max-width: 1536px) 176px, 208px"
          priority
        />
      </div>

      <div className="pointer-events-none text-center">
        <span className="block text-sm font-semibold tracking-tight text-zinc-100 md:text-lg xl:text-xl">
          Ashwin S Deshpande
        </span>
        <p className="mt-0.5 text-[10px] text-red-400/90 md:text-xs xl:text-sm">
          Builder. Engineer.
        </p>
      </div>
    </button>
  );
}
