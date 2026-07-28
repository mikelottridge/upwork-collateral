import { renderArtifact } from "./artifact-renderers.js";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderSlide(slide, index, total) {
  const points = (slide.bullets ?? [])
    .map(
      (point, pointIndex) => `
        <article class="point">
          <span>${String(pointIndex + 1).padStart(2, "0")}</span>
          <p>${escapeHtml(point)}</p>
        </article>`,
    )
    .join("");
  const transcript = slide.narration?.script
    ? `
      <details class="transcript">
        <summary>Read transcript</summary>
        <p>${escapeHtml(slide.narration.script)}</p>
      </details>`
    : "";
  const cta = index === total - 1 ? '<div data-final-cta></div>' : "";

  return `<section
    data-source-index="${index}"
    data-source-duration="${slide.durationMs || 9000}"
    aria-label="Slide ${index + 1} of ${total}: ${escapeHtml(slide.title)}"
  >
    <div class="slide-layout">
      <div class="slide-copy">
        <span class="eyebrow">${escapeHtml(slide.eyebrow || `Slide ${index + 1}`)}</span>
        <h2>${escapeHtml(slide.title)}</h2>
        <p class="slide-lead">${escapeHtml(slide.lead)}</p>
        ${points ? `<div class="point-grid">${points}</div>` : ""}
        ${cta}
        ${transcript}
      </div>
      <div class="slide-artifact">${renderArtifact(slide.artifact)}</div>
    </div>
  </section>`;
}
