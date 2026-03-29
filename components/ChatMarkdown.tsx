"use client";

import Link from "next/link";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const mdComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mt-3 border-b border-zinc-700/80 pb-1 text-base font-semibold text-zinc-50 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-3 text-sm font-semibold tracking-tight text-zinc-100 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-2 text-sm font-semibold text-zinc-100 first:mt-0">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-2 text-sm leading-relaxed text-zinc-200 first:mt-0 [&+&]:mt-2">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-zinc-200 first:mt-0">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-sm text-zinc-200 first:mt-0">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-50">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-zinc-300">{children}</em>,
  a: ({ href, children }) => {
    const h = href ?? "";
    const className =
      "font-medium text-red-400 underline decoration-red-400/35 underline-offset-2 hover:text-red-300";
    if (h.startsWith("/") && !h.startsWith("//")) {
      return (
        <Link href={h} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={h}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  },
  hr: () => <hr className="my-3 border-zinc-700/80" />,
  blockquote: ({ children }) => (
    <blockquote className="mt-2 border-l-2 border-zinc-600 pl-3 text-sm text-zinc-400">
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }) => {
    const inline = !className;
    if (inline) {
      return (
        <code
          className="rounded bg-zinc-900 px-1 py-0.5 font-mono text-[0.85em] text-red-300"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mt-2 overflow-x-auto rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-xs leading-relaxed text-zinc-300">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="mt-2 overflow-x-auto rounded-lg border border-zinc-700">
      <table className="w-full border-collapse text-left text-sm text-zinc-200">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-zinc-900/80">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-zinc-700 px-2 py-1.5 font-semibold text-zinc-100">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-zinc-800 px-2 py-1.5 align-top text-zinc-300">
      {children}
    </td>
  ),
};

interface ChatMarkdownProps {
  content: string;
}

export default function ChatMarkdown({ content }: ChatMarkdownProps) {
  return (
    <div className="twin-md wrap-break-word">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
