import { Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const ringIdle =
  "border-zinc-500 bg-zinc-800/95 shadow-[0_2px_16px_rgba(0,0,0,0.5)] backdrop-blur-sm";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.113.825-.258.825-.575 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.225.694.825.575C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.07 2.07 0 01-2.063 2.065zM6.119 20.452H3.555V9h2.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.382-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

type SocialIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

const SOCIAL_LINKS: { label: string; href: string; Icon: SocialIcon }[] = [
  { label: "Email", href: "mailto:r1ashwindeshpande@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/r1ashwin", Icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/r1ashwin",
    Icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/r1ashwin/",
    Icon: InstagramIcon,
  },
];

export default function SocialLinksRow({ className }: { className?: string }) {
  return (
    <nav
      className={className}
      aria-label="Email and social profiles"
    >
      <div className="-mx-1 overflow-x-auto overflow-y-hidden pb-0.5 [scrollbar-width:thin]">
        <ul className="flex flex-nowrap items-end justify-center gap-3 sm:gap-4 lg:justify-start lg:gap-5">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => {
            const external = !href.startsWith("mailto:");
            return (
              <li key={label} className="shrink-0">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-1"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${ringIdle} group-hover:border-red-500 group-hover:shadow-[0_0_18px_rgba(239,68,68,0.35)]`}
                  >
                    <Icon
                      className="h-3.5 w-3.5 text-zinc-200 transition-colors duration-300 sm:h-4 sm:w-4 group-hover:text-red-400"
                      aria-hidden
                    />
                  </div>
                  <span className="inline-block whitespace-nowrap rounded-md bg-zinc-900/85 px-1 py-0.5 text-center text-[9px] leading-tight text-zinc-200 ring-1 ring-zinc-600/80 shadow-md backdrop-blur-sm transition-all duration-300 sm:text-[10px] group-hover:text-white group-hover:ring-red-500 group-hover:shadow-[0_0_14px_rgba(239,68,68,0.3)]">
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
