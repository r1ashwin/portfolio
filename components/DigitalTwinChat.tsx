"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { X, Send, Loader2 } from "lucide-react";
import ChatMarkdown from "@/components/ChatMarkdown";

type Msg = { role: "user" | "assistant"; content: string };

interface DigitalTwinChatProps {
  open: boolean;
  onClose: () => void;
}

const OPENING_GREETING =
  "Hi! I'm Ashwin's digital twin. Ask me anything!";

export default function DigitalTwinChat({ open, onClose }: DigitalTwinChatProps) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    setMessages([{ role: "assistant", content: OPENING_GREETING }]);
    setError(null);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open, scrollToBottom]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const send = async () => {
    const text = input.trim();
    if (!text || pending) return;
    setError(null);
    setInput("");
    const history: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(history);
    setPending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const ct = res.headers.get("content-type") ?? "";

      if (!res.ok && ct.includes("application/json")) {
        const j = (await res.json()) as { error?: string };
        setError(j.error ?? "Could not get a reply.");
        setPending(false);
        return;
      }

      if (!res.ok) {
        setError("Something went wrong. Try again in a moment.");
        setPending(false);
        return;
      }

      if (!res.body) {
        setPending(false);
        return;
      }

      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistant = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() ?? "";
        for (const chunk of chunks) {
          for (const line of chunk.split("\n")) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data) as { c?: string };
              if (parsed.c) {
                assistant += parsed.c;
                const acc = assistant;
                setMessages((prev) => {
                  const copy = [...prev];
                  copy[copy.length - 1] = { role: "assistant", content: acc };
                  return copy;
                });
              }
            } catch {
              /* partial JSON */
            }
          }
        }
      }
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="digital-twin-title"
      data-testid="digital-twin-panel"
    >
      <button
        type="button"
        aria-label="Close chat"
        className="animate-twin-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="animate-twin-panel relative flex h-[min(88dvh,680px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-zinc-700/90 bg-zinc-950 shadow-2xl shadow-black/60 sm:rounded-2xl"
        style={{ contain: "layout style" }}
      >
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-800 px-4 py-3">
          <div>
            <h2
              id="digital-twin-title"
              className="text-sm font-semibold text-zinc-100"
            >
              Digital twin
            </h2>
            <p className="text-[11px] text-zinc-500">
              AI assistant · English · Ashwin&apos;s public profile only
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {error && (
          <div className="shrink-0 border-b border-red-900/40 bg-red-950/40 px-4 py-2 text-xs text-red-200">
            {error}
          </div>
        )}

        <div
          ref={listRef}
          className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4 [scrollbar-gutter:stable]"
        >
          {messages.map((m, i) => (
            <div
              key={`${i}-${m.role}`}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-red-600/25 text-zinc-100"
                    : "bg-zinc-800/80 text-zinc-200"
                }`}
              >
                {m.role === "user" ? (
                  <span className="whitespace-pre-wrap">{m.content}</span>
                ) : pending &&
                  i === messages.length - 1 &&
                  !m.content.trim() ? (
                  <span className="text-zinc-500">…</span>
                ) : (
                  <ChatMarkdown content={m.content} />
                )}
              </div>
            </div>
          ))}
        </div>

        <footer className="shrink-0 border-t border-zinc-800 p-3">
          <div className="flex items-end gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 p-2 focus-within:border-zinc-500">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send();
                }
              }}
              placeholder="Message in English…"
              className="max-h-32 min-h-[40px] w-full resize-none bg-transparent px-2 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
              disabled={pending}
              aria-label="Message"
            />
            <button
              type="button"
              onClick={() => void send()}
              disabled={pending || !input.trim()}
              className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white transition-colors hover:bg-red-500 disabled:opacity-40"
              aria-label="Send"
            >
              {pending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
