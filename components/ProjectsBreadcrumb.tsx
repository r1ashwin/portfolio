import Link from "next/link";
import { PROJECTS_FEATURED_PATH } from "@/lib/project-routes";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type ProjectsBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function ProjectsBreadcrumb({ items }: ProjectsBreadcrumbProps) {
  const crumbs: BreadcrumbItem[] = [
    { label: "Projects", href: PROJECTS_FEATURED_PATH },
    ...items,
  ];

  return (
    <nav
      aria-label="Projects breadcrumb"
      className="mb-5"
      data-testid="projects-breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-400">
        {crumbs.map((item, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <span className="text-zinc-600" aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-zinc-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "font-medium text-zinc-200" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
