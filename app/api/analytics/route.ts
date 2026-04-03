import { NextRequest } from "next/server";
import { SITE_ANALYTICS_EVENTS } from "@/lib/analytics-events";
import {
  analyticsLoggingConfigured,
  appendGithubAnalyticsEvent,
} from "@/lib/github-log";

export const runtime = "nodejs";

const MAX_DETAIL = 600;

function validSessionId(s: string): boolean {
  if (s.length < 10 || s.length > 128) return false;
  const uuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const timeRandom = /^[0-9]{10,}-[0-9a-z]+$/i;
  return uuid.test(s) || timeRandom.test(s);
}

export async function POST(req: NextRequest) {
  if (!analyticsLoggingConfigured()) {
    return new Response(null, { status: 204 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const o = body as {
    sessionId?: unknown;
    event?: unknown;
    detail?: unknown;
  };

  const sessionId =
    typeof o.sessionId === "string" ? o.sessionId.trim() : "";
  const event = typeof o.event === "string" ? o.event.trim() : "";
  const detailRaw = typeof o.detail === "string" ? o.detail : "";
  const detail =
    detailRaw.length > MAX_DETAIL
      ? `${detailRaw.slice(0, MAX_DETAIL)}…`
      : detailRaw;

  if (!validSessionId(sessionId) || !SITE_ANALYTICS_EVENTS.has(event)) {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }

  await appendGithubAnalyticsEvent(sessionId, event, detail);
  return new Response(null, { status: 204 });
}
