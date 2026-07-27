import { test, expect } from "@playwright/test";

test.describe("Projects routes", () => {
  test("hub Projects redirects into featured work", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Projects" }).first().click();
    await expect(page).toHaveURL("/projects/featured");
    await expect(page.getByTestId("projects-breadcrumb")).toContainText(
      "Featured work",
    );
  });

  test("github tab updates the URL", async ({ page }) => {
    await page.goto("/projects/featured");
    await page.getByRole("tab", { name: /^GitHub$/ }).click();
    await expect(page).toHaveURL("/projects/github");
    await expect(page.getByText("GitHub repositories")).toBeVisible();
  });

  test("wall clock detail is shareable", async ({ page }) => {
    await page.goto("/projects/featured");
    await page.getByTestId("wall-clock-project").click();
    await expect(page).toHaveURL(
      "/projects/featured/electromechanical-wall-clock",
    );
    await expect(page.getByTestId("wall-clock-gallery")).toBeVisible();
    await expect(page.getByTestId("projects-breadcrumb")).toContainText(
      "Electromechanical Wall Clock",
    );
  });
});
