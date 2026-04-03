/**
 * Session analytics: one CSV row per action. Same `session_id` + sort by `timestamp`
 * = chronological tail from landing to exit.
 *
 * Hub “Competitions” maps to event `competitions` (achievements / CP on that page).
 * Featured MDPI card → `latest_research_paper`; hub Research → `research_page`.
 * Featured Journi card → `latest_project`; hub Projects → `projects_page`.
 */

export const HUB_ID_TO_EVENT = {
  about: "about_me",
  experience: "experience",
  competitions: "competitions",
  contact: "contact",
  research: "research_page",
  projects: "projects_page",
} as const;

export type HubAnalyticsId = keyof typeof HUB_ID_TO_EVENT;

export function hubIdToAnalyticsEvent(hubId: string): string | null {
  return hubId in HUB_ID_TO_EVENT
    ? HUB_ID_TO_EVENT[hubId as HubAnalyticsId]
    : null;
}

export const SITE_ANALYTICS_EVENTS = new Set<string>([
  "home_page",
  "latest_research_paper",
  "latest_project",
  "talk_to_me",
  ...Object.values(HUB_ID_TO_EVENT),
]);
