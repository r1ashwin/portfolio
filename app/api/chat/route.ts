import { NextRequest } from "next/server";
import OpenAI from "openai";
import { screenUserMessage } from "@/lib/chat-safety";
import { buildSystemPrompt } from "@/lib/digital-twin-system";
import { loadKnowledgeForModel } from "@/lib/profile-for-model";
import { appendGithubTwinLog } from "@/lib/github-log";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_MESSAGES = 28;

let cachedSystem: { text: string; loadedAt: number } | null = null;
const CACHE_TTL_MS = 5 * 60 * 1000;

async function systemPrompt(): Promise<string> {
  const now = Date.now();
  if (cachedSystem && now - cachedSystem.loadedAt < CACHE_TTL_MS) {
    return cachedSystem.text;
  }
  const knowledge = await loadKnowledgeForModel();
  const text = buildSystemPrompt(knowledge);
  cachedSystem = { text, loadedAt: now };
  return text;
}

type ClientMessage = { role: string; content: string };

function normalizeMessages(raw: unknown): ClientMessage[] | null {
  if (!Array.isArray(raw)) return null;
  const out: ClientMessage[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") return null;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;
    out.push({ role, content });
  }
  if (out.length > MAX_MESSAGES) {
    return out.slice(-MAX_MESSAGES);
  }
  return out;
}

function lastUserContent(messages: ClientMessage[]): string | null {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return messages[i].content;
  }
  return null;
}

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return Response.json(
      { error: "Chat is not configured (missing OPENAI_API_KEY)." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const messages = normalizeMessages(
    (body as { messages?: unknown })?.messages,
  );
  if (!messages?.length) {
    return Response.json({ error: "Send a non-empty messages array." }, { status: 400 });
  }

  for (const m of messages) {
    if (m.role === "user") {
      const gate = screenUserMessage(m.content);
      if (!gate.ok) {
        return Response.json(
          { error: gate.userMessage, code: gate.code },
          { status: 400 },
        );
      }
    }
  }

  const system = await systemPrompt();
  const openaiMessages = [
    { role: "system" as const, content: system },
    ...messages.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ];

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const stream = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: openaiMessages,
      stream: true,
      max_tokens: 700,
      temperature: 0.35,
    });

    const encoder = new TextEncoder();
    const userLogged = lastUserContent(messages);

    const readable = new ReadableStream({
      async start(controller) {
        let assistantFull = "";
        try {
          for await (const part of stream) {
            const c = part.choices[0]?.delta?.content ?? "";
            if (c) {
              assistantFull += c;
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ c })}\n\n`),
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
          if (userLogged != null) {
            void appendGithubTwinLog(userLogged, assistantFull);
          }
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Upstream error";
    return Response.json({ error: msg }, { status: 502 });
  }
}
