import { Mail, ExternalLink } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:r1ashwindeshpande@gmail.com",
    value: "r1ashwindeshpande@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/r1ashwin",
    value: "linkedin.com/in/r1ashwin",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: "https://github.com/r1ashwin",
    value: "github.com/r1ashwin",
    icon: ExternalLink,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/r1ashwin/",
    value: "leetcode.com/u/r1ashwin",
    icon: ExternalLink,
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/r1ashwin",
    value: "codeforces.com/profile/r1ashwin",
    icon: ExternalLink,
  },
];

export default function Contact() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-300">
        Open to collaborations, startup conversations, and opportunities.
      </p>
      <div className="space-y-3">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] p-3 shadow-lg shadow-black/20 transition-colors hover:border-rose-400/30 hover:bg-white/[0.06]"
            >
              <Icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-rose-400" />
              <div>
                <p className="text-xs text-zinc-400">{item.label}</p>
                <p className="text-sm text-zinc-100">{item.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
