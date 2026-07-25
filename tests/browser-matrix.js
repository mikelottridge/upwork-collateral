async page => {
  const endpoint = "https://productmanagementresources.pro/api/presentation-events";
  const events = [];
  await page.route(endpoint, async route => {
    events.push(route.request().postData() || "");
    await route.fulfill({ status: 204 });
  });
  const cases = [
    { id: "google-sheets", path: "/google-sheets-project-reporting/site/index.html", final: "Bring the Google Sheet" },
    { id: "medical", path: "/medical-project/site/index.html", final: "Built for physician-in-the-loop" },
    { id: "psychologist", path: "/psychologist-project/site/index.html", final: "Built for data-to-report workflows" },
    { id: "financial", path: "/financial-metrics-pipeline/site/index.html", final: "07 Client delivery" },
  ];
  const getField = (value, name) => {
    const match = value.match(new RegExp("(?:^|&)" + name + "=([^&]*)"));
    return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : null;
  };
  const results = [];
  for (const item of cases) {
    const url = "http://127.0.0.1:8765" + item.path
      + "?upwork=1&utm_source=linkedin&utm_medium=social&utm_campaign=portfolio";
    await page.goto(url);
    const narrationButton = page.locator("button").filter({ hasText: /Start (audio\/guided mode|narrated tour)/i }).first();
    const cueVisible = await narrationButton.evaluate(el => el.classList.contains("guided-flash")).catch(() => false);
    await page.waitForTimeout(2100);
    const finalButton = page.locator("button").filter({ hasText: item.final }).last();
    await finalButton.click();
    await page.waitForTimeout(150);
    const cta = page.locator(".presentation-cta").first();
    const ctaText = await cta.innerText();
    const href = await cta.locator("a").getAttribute("href");
    await cta.locator("a").evaluate(el => el.addEventListener("click", event => event.preventDefault(), { once: true }));
    await cta.locator("a").click();
    await page.waitForTimeout(100);
    const presentationEvents = events.filter(value => value.includes("presentation=" + encodeURIComponent(item.id)));
    results.push({
      id: item.id,
      cueVisible,
      href,
      hasEmail: /@|mailto:/i.test(ctaText + " " + href),
      eventCount: presentationEvents.length,
      eventNames: presentationEvents.map(value => getField(value, "event")),
      sourceValues: presentationEvents.map(value => getField(value, "source")),
    });
  }
  return results;
}
