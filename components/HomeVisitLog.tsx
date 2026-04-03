"use client";

import { useEffect } from "react";
import { logSiteEvent } from "@/lib/site-analytics-client";

const FLAG = "portfolio_home_visit_logged";

/** One `home_page` row per tab session (tail starts here). */
export default function HomeVisitLog() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(FLAG) === "1") return;
      sessionStorage.setItem(FLAG, "1");
    } catch {
      /* sessionStorage blocked — still try one log */
    }
    logSiteEvent("home_page", "/");
  }, []);
  return null;
}
