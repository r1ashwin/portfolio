import { Mail, ExternalLink } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:r1ashwindeshpande@gmail.com",
    value: "r1ashwindeshpande@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/r1ashwin",
    value: "github.com/r1ashwin",
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/r1ashwin",
    value: "linkedin.com/in/r1ashwin",
    icon: ExternalLink,
  },
];

export default function Contact() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-400">
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
              className="group flex items-center gap-3 rounded-lg border border-zinc-700/80 bg-zinc-900/40 p-3 shadow-lg shadow-black/20 transition-colors hover:border-zinc-600"
            >
              <Icon className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-red-400" />
              <div>
                <p className="text-xs text-zinc-500">{item.label}</p>
                <p className="text-sm text-zinc-100">{item.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
