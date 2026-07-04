import { test, expect } from "@playwright/test";

test.describe("Lab honeypot pages", () => {
  test("home page does not link to any lab routes", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('a[href="/lab/tr-a"]')).toHaveCount(0);
    await expect(page.locator('a[href="/lab/tr-b"]')).toHaveCount(0);
    await expect(page.locator('a[href="/lab/tr-c"]')).toHaveCount(0);
  });

  test("plain and sponsored routes expose their planted brands in visible content", async ({
    page,
  }) => {
    await page.goto("/lab/tr-a");
    await expect(
      page.getByRole("heading", {
        name: "Best Trail Running Shoes for Flat Feet Under $120 (2026)",
      }),
    ).toBeVisible();
    await expect(page.getByText("Veltrax Ridge 2").first()).toBeVisible();

    await page.goto("/lab/tr-b");
    await expect(page.getByText("Sponsored pick")).toBeVisible();
    await expect(page.getByText("Korrun Trailfox").first()).toBeVisible();
  });

  test("hidden benchmark keeps the planted block in raw HTML without showing it", async ({
    page,
  }) => {
    await page.goto("/lab/tr-c");

    const hiddenBenchmark = page.getByTestId("hidden-benchmark");
    await expect(hiddenBenchmark).not.toBeVisible();

    const html = await page.content();
    expect(html).toContain("display:none");
    expect(html).toContain("Zephodyn Swift X");
  });
});
