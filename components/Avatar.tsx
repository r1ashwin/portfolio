interface AvatarProps {
  onTalkClick?: () => void;
}

export default function Avatar({ onTalkClick }: AvatarProps) {
  return (
    <div className="flex flex-col items-center gap-3 xl:gap-4">
      <button
        type="button"
        onClick={onTalkClick}
        className="animate-float relative cursor-pointer rounded-xl border border-zinc-600 bg-zinc-800/90 px-3 py-1.5 text-left text-xs text-zinc-200 shadow-lg shadow-black/40 transition-colors hover:border-red-500 hover:text-white md:px-4 md:py-2 md:text-sm xl:px-5 xl:py-2.5 xl:text-base"
      >
        Talk to me
        <div className="pointer-events-none absolute -bottom-2 left-1/2 w-0 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-zinc-800/90" />
      </button>

      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-600 bg-zinc-800 shadow-lg shadow-black/40 md:h-24 md:w-24 xl:h-28 xl:w-28">
        <span className="select-none text-xl font-bold text-white md:text-2xl xl:text-3xl">
          AD
        </span>
      </div>

      <div className="text-center">
        <h1 className="text-sm font-semibold tracking-tight text-zinc-100 md:text-lg xl:text-xl">
          Ashwin Deshpande
        </h1>
        <p className="mt-0.5 text-[10px] text-red-400/90 md:text-xs xl:text-sm">
          Builder. Engineer. Maker of things.
        </p>
      </div>
    </div>
  );
}
