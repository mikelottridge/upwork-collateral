async page => {
  await page.route("https://productmanagementresources.pro/api/presentation-events", route =>
    route.fulfill({ status: 204 })
  );
  const cases = [
    { id: "google-sheets", path: "/google-sheets-project-reporting/site/index.html", final: "Bring the Google Sheet" },
    { id: "medical", path: "/medical-project/site/index.html", final: "Built for physician-in-the-loop" },
    { id: "psychologist", path: "/psychologist-project/site/index.html", final: "Built for data-to-report workflows" },
    { id: "financial", path: "/financial-metrics-pipeline/site/index.html", final: "The contract transfers; the financial example does not have to." },
  ];
  const results = [];
  for (const item of cases) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://127.0.0.1:8765" + item.path + "?upwork=1&utm_source=upwork");
    await page.locator("button").filter({ hasText: item.final }).last().click();
    await page.waitForTimeout(150);
    const mobileMetrics = await page.evaluate(() => ({
      viewport: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      ctaVisible: Boolean(document.querySelector(".presentation-cta")),
    }));
    await page.screenshot({
      path: "output/playwright/" + item.id + "-mobile-final.png",
      fullPage: true,
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("http://127.0.0.1:8765" + item.path + "?utm_source=direct-qa");
    await page.waitForTimeout(150);
    const desktopMetrics = await page.evaluate(() => ({
      viewport: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      narrationButtonVisible: Array.from(document.querySelectorAll("button")).some(
        button => /Start (audio\/guided mode|narrated tour)/i.test(button.textContent)
      ),
    }));
    await page.screenshot({
      path: "output/playwright/" + item.id + "-desktop-opening.png",
      fullPage: true,
    });
    results.push({ id: item.id, mobileMetrics, desktopMetrics });
  }
  return results;
}
