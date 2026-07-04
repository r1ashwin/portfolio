import { test, expect } from "@playwright/test";

const guidePath = "/guides/trail-running-shoes-flat-feet-plantar-fasciitis";

test.describe("Guides", () => {
  test("guide page renders the target query and top pick", async ({ page }) => {
    await page.goto(guidePath);

    await expect(
      page.getByRole("heading", {
        name: "Best Trail Running Shoes for Flat Feet and Plantar Fasciitis Under $120 (2026)",
      }),
    ).toBeVisible();
    await expect(page.getByText("Cadverio Terra 1").first()).toBeVisible();
  });

  test("sitemap includes the guide route", async ({ page }) => {
    await page.goto("/sitemap.xml");

    await expect(page.locator("body")).toContainText(
      "https://ashwindeshpande.com/guides/trail-running-shoes-flat-feet-plantar-fasciitis",
    );
  });

  test("robots references the sitemap", async ({ page }) => {
    await page.goto("/robots.txt");

    await expect(page.locator("body")).toContainText(
      "Sitemap: https://ashwindeshpande.com/sitemap.xml",
    );
  });
});
