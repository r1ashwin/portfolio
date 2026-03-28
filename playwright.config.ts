import { defineConfig, devices } from "@playwright/test";

/**
 * Reuses your existing `npm run dev` on port 3000 when it is already running
 * (Next.js allows only one dev server per project directory).
 *
 * If nothing is listening on 3000, Playwright starts `npm run dev` for you.
 *
 * To test a server on another port (e.g. 3001), use:
 *   PowerShell:
 *     $env:PLAYWRIGHT_NO_SERVER="1"
 *     $env:PLAYWRIGHT_BASE_URL="http://localhost:3001"
 *     npx playwright test
 */
const noServer = !!process.env.PLAYWRIGHT_NO_SERVER;
const baseURL = noServer
  ? (process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3001")
  : (process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: 1,
  ...(noServer
    ? {}
    : {
        webServer: {
          command: "npm run dev",
          url: baseURL,
          reuseExistingServer: true,
        },
      }),
  use: {
    baseURL,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
