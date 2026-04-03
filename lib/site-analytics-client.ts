const SESSION_KEY = "portfolio_analytics_sid";

export function getPortfolioSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}

function analyticsPostUrl(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return new URL("/api/analytics", window.location.href).href;
  } catch {
    return null;
  }
}

/** Fire-and-forget; uses keepalive where supported for navigation clicks. */
export function logSiteEvent(event: string, detail: string): void {
  if (typeof window === "undefined") return;
  const sessionId = getPortfolioSessionId();
  if (!sessionId) return;

  const url = analyticsPostUrl();
  if (!url) return;

  const body = JSON.stringify({ sessionId, event, detail });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      const ok = navigator.sendBeacon(url, blob);
      if (ok) return;
    }
  } catch {
    /* fall through to fetch */
  }

  void fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}
