(function () {
  "use strict";

  const context = window.PresentationContext;
  const analytics = window.PresentationAnalytics;
  if (!context || !analytics) return;

  const client = analytics.start("financial");
  const finalTitle = "Start with a client-specific pilot, then scale the same evidence contract across the company universe.";
  let finalTracked = false;
  let cueInstalled = false;

  function findFinalHeading() {
    return Array.from(document.querySelectorAll("h1, h2, h3, [role='heading']")).find(
      (node) => node.textContent.trim() === finalTitle
    );
  }

  function syncNarrationCue() {
    if (cueInstalled) return;
    const button = Array.from(document.querySelectorAll("button")).find((node) =>
      /start narrated tour/i.test(node.textContent)
    );
    if (!button) return;
    cueInstalled = true;
    context.installNarrationCue(button);
  }

  function syncResponsiveTargets() {
    if (!style.isConnected && document.body) document.body.append(style);
    const heroHeading = Array.from(document.querySelectorAll("h1")).find((node) =>
      /fragmented financial disclosures/i.test(node.textContent)
    );
    const hero = heroHeading && heroHeading.closest("header");
    if (hero) {
      hero.classList.add("pmr-financial-hero");
      if (heroHeading.parentElement && heroHeading.parentElement.parentElement) {
        heroHeading.parentElement.parentElement.classList.add("pmr-financial-hero-grid");
      }
      const metric = Array.from(hero.querySelectorAll("*")).find(
        (node) => node.children.length === 0 && node.textContent.trim() === "4 source types"
      );
      if (metric && metric.parentElement && metric.parentElement.parentElement) {
        metric.parentElement.parentElement.classList.add("pmr-financial-metrics-grid");
      }
    }
    const nav = Array.from(document.querySelectorAll("nav")).find((node) =>
      /presentation flow/i.test(node.textContent)
    );
    if (nav && nav.parentElement) {
      nav.classList.add("pmr-financial-nav");
      nav.parentElement.classList.add("pmr-financial-presentation-grid");
      if (nav.nextElementSibling) nav.nextElementSibling.classList.add("pmr-financial-card");
    }
  }

  function syncFinalSlide() {
    syncResponsiveTargets();
    syncNarrationCue();
    const heading = findFinalHeading();
    const existing = document.querySelector(".presentation-cta[data-financial-cta]");
    if (!heading) {
      if (existing) existing.remove();
      return;
    }
    if (!finalTracked) {
      finalTracked = true;
      client.track("final_slide");
    }
    if (existing) return;
    const target = heading.parentElement;
    if (!target) return;
    const cta = context.renderCta(target, {
      search: window.location.search,
      onClick: () => client.track("cta_click"),
    });
    if (cta) cta.dataset.financialCta = "true";
  }

  const style = document.createElement("style");
  style.textContent = [
    ".presentation-cta{margin-top:24px;padding:22px;border:1px solid rgba(22,33,29,.14);border-radius:12px;background:#fffdf8;color:#16211d}",
    ".presentation-cta h2{font-family:'Newsreader',Georgia,serif;font-size:26px;margin:4px 0 8px}",
    ".presentation-cta p{margin:0 0 16px;color:#4a544e}",
    ".presentation-cta-link{display:inline-flex;align-items:center;padding:12px 18px;border-radius:999px;background:#173a67;color:#fff!important;font-weight:700;text-decoration:none}",
    ".guided-flash{position:relative;z-index:1;animation:pmrGuidedPulse 1s ease-in-out 5}",
    "@keyframes pmrGuidedPulse{0%,100%{transform:scale(1)}45%{transform:scale(1.04);box-shadow:0 0 0 7px rgba(216,162,74,.22)}}",
    "@media(max-width:760px){.pmr-financial-hero{padding:38px 20px 34px!important}.pmr-financial-hero h1{font-size:42px!important}.pmr-financial-hero-grid{grid-template-columns:minmax(0,1fr)!important;gap:30px!important}.pmr-financial-metrics-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:22px 14px!important}.pmr-financial-metrics-grid>div{padding-right:12px!important}.pmr-financial-presentation-grid{grid-template-columns:minmax(0,1fr)!important;gap:24px!important}.pmr-financial-nav{position:static!important}.pmr-financial-card{min-width:0!important;width:100%!important}.pmr-financial-card>div:last-child{padding:28px 20px 32px!important}.pmr-financial-card [style*='grid-template-columns: repeat(3']{grid-template-columns:minmax(0,1fr)!important}.pmr-financial-card [style*='grid-template-columns: repeat(4']{grid-template-columns:minmax(0,1fr)!important}.pmr-financial-card table{font-size:12px!important}}",
    "@media (prefers-reduced-motion:reduce){.guided-flash{animation:none!important}}",
  ].join("");
  document.body.append(style);

  const observer = new MutationObserver(syncFinalSlide);
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  document.addEventListener("click", () => requestAnimationFrame(syncFinalSlide), true);
  const cueDeadline = performance.now() + 5000;
  function awaitNarrationCue() {
    syncNarrationCue();
    syncResponsiveTargets();
    if (!cueInstalled && performance.now() < cueDeadline) requestAnimationFrame(awaitNarrationCue);
  }
  requestAnimationFrame(awaitNarrationCue);
  syncFinalSlide();
})();
