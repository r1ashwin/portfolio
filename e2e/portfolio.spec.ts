import { test, expect } from "@playwright/test";

test.describe("Portfolio", () => {
  test("page loads with avatar and name", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Ashwin S Deshpande").last()).toBeVisible();
    await expect(
      page.getByRole("img", { name: /Ashwin S Deshpande/i }).last(),
    ).toBeVisible();
  });

  test("speech bubble shows talk to me", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Talk to me").last()).toBeVisible();
  });

  test("intro text is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("home-intro")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Well, hi there/ }),
    ).toBeVisible();
  });

  const sections = [
    { name: "About", path: "/about", content: "SWE Intern" },
    {
      name: "Projects",
      path: "/projects",
      content: "Electromechanical Wall Clock",
    },
    {
      name: "Experience",
      path: "/experience",
      content: "Software Engineering Intern",
    },
    { name: "Research", path: "/research", content: "~93.3%" },
    { name: "Competitions", path: "/competitions", content: "2036" },
    {
      name: "Contact",
      path: "/contact",
      content: "r1ashwindeshpande@gmail.com",
    },
  ];

  for (const section of sections) {
    test(`${section.name}: navigates and shows content`, async ({ page }) => {
      await page.goto("/");
      await page
        .getByRole("link", { name: section.name })
        .first()
        .click();
      await expect(page).toHaveURL(section.path);
      await expect(page.locator("h1", { hasText: section.name })).toBeVisible();
      await expect(
        page.getByText(section.content).first(),
      ).toBeVisible();
    });
  }

  test("close returns to hub", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.getByRole("heading", { name: "About" }),
    ).toBeVisible();
    await page.getByTestId("section-close").click();
    await expect(page).toHaveURL("/");
    await expect(page.getByText("Ashwin S Deshpande").last()).toBeVisible();
  });

  test("responsive: mobile hub layout works", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await expect(
      page.getByText("Ashwin S Deshpande").first(),
    ).toBeVisible();
    await page
      .getByRole("link", { name: "About" })
      .first()
      .click();
    await expect(page).toHaveURL("/about");
    await expect(
      page.getByRole("heading", { name: "About" }),
    ).toBeVisible();
  });
});
