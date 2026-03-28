/**
 * Proves the home page does not load slideshow photos.
 *
 * Default: `playwright.config.ts` uses http://localhost:3000 and reuses `npm run dev` if it is
 * already running (Next allows only one dev server per project folder).
 *
 * If your dev server is only on 3001, PowerShell:
 *   $env:PLAYWRIGHT_NO_SERVER="1"
 *   $env:PLAYWRIGHT_BASE_URL="http://localhost:3001"
 *   npx playwright test e2e/home-no-photos.spec.ts
 *
 * If this test fails on 3001, that process is not serving this repo’s current build.
 */
import { test, expect } from "@playwright/test";

test.describe("Home: no /images/ slideshow", () => {
  test("hub backdrop is present and no public /images/ assets load", async ({
    page,
  }) => {
    const badUrls: string[] = [];
    page.on("response", (response) => {
      const u = response.url();
      if (
        u.includes("/images/") ||
        u.includes("%2Fimages%2F") ||
        u.includes("%2fimages%2f")
      ) {
        badUrls.push(u);
      }
    });

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page.getByTestId("hub-backdrop")).toBeVisible();

    await expect(page.locator('img[src*="/images/"]')).toHaveCount(0);

    await page.waitForLoadState("networkidle").catch(() => {
      /* some SPAs never idle; dom checks above are primary */
    });

    expect(
      badUrls,
      `Unexpected network requests to /images/ — slideshow or wrong build. Got: ${badUrls.join(", ")}`,
    ).toEqual([]);
  });

  test("hub UI still navigates (About)", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
  });
});
