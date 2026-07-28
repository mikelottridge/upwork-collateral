import { assetUrl } from "./asset-url.js";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPills(pills = []) {
  if (!pills.length) return "";
  return `<div class="artifact-pills">${pills
    .map((pill) => `<span>${escapeHtml(pill)}</span>`)
    .join("")}</div>`;
}

function renderSteps(artifact) {
  const steps = artifact.steps ?? [];
  return `
    <figure class="artifact artifact-steps">
      <figcaption>${escapeHtml(artifact.label)}</figcaption>
      <div class="steps-grid steps-${steps.length}">
        ${steps
          .map(
            (step, index) => `
              <article class="step">
                <span class="step-index">${escapeHtml(step.icon || index + 1)}</span>
                <h3>${escapeHtml(step.title)}</h3>
                <p>${escapeHtml(step.copy)}</p>
              </article>`,
          )
          .join("")}
      </div>
    </figure>`;
}

function renderCompare(artifact) {
  return `
    <figure class="artifact artifact-compare">
      <figcaption>${escapeHtml(artifact.label)}</figcaption>
      <div class="compare-grid">
        ${(artifact.panels ?? [])
          .map(
            (panel) => `
              <article class="compare-panel compare-${escapeHtml(panel.tone)}">
                <span class="compare-label">${escapeHtml(panel.title)}</span>
                <strong>${escapeHtml(panel.stat)}</strong>
                <ul>${(panel.lines ?? [])
                  .map((line) => `<li>${escapeHtml(line)}</li>`)
                  .join("")}</ul>
              </article>`,
          )
          .join("")}
      </div>
    </figure>`;
}

function renderCell(cell) {
  if (cell && typeof cell === "object") {
    return `<span class="status-value">${escapeHtml(cell.value)}</span>`;
  }
  return escapeHtml(cell);
}

function renderTable(artifact) {
  return `
    <figure class="artifact artifact-table">
      <figcaption>
        <span>${escapeHtml(artifact.label)}</span>
        ${artifact.toolbar ? `<small>${escapeHtml(artifact.toolbar)}</small>` : ""}
      </figcaption>
      <div class="data-table" role="table" aria-label="${escapeHtml(artifact.label)}">
        <div class="data-row data-header" role="row">
          ${(artifact.columns ?? [])
            .map((column) => `<div role="columnheader">${escapeHtml(column)}</div>`)
            .join("")}
        </div>
        ${(artifact.rows ?? [])
          .map(
            (row) => `
              <div class="data-row" role="row">
                ${row
                  .map((cell) => `<div role="cell">${renderCell(cell)}</div>`)
                  .join("")}
              </div>`,
          )
          .join("")}
      </div>
    </figure>`;
}

function renderMedia(artifact) {
  const media =
    artifact.kind === "video"
      ? `
        <picture class="mobile-proof">
          <source media="(max-width: 640px)" srcset="${assetUrl(artifact.mobileSrc)}">
          <img src="${assetUrl(artifact.poster)}" alt="${escapeHtml(artifact.mobileAlt || artifact.alt)}">
        </picture>
        <video
          src="${assetUrl(artifact.src)}"
          poster="${assetUrl(artifact.poster)}"
          aria-label="${escapeHtml(artifact.alt)}"
          muted
          playsinline
          ${artifact.loop ? "loop" : ""}
          ${artifact.autoplay ? "data-autoplay" : ""}
        ></video>`
      : `<img
          src="${assetUrl(artifact.src)}"
          alt="${escapeHtml(artifact.alt)}"
          style="object-position:${escapeHtml(artifact.objectPosition || "center center")};object-fit:${escapeHtml(artifact.objectFit || "cover")}"
        >`;

  return `
    <figure class="artifact artifact-media ${artifact.compact ? "is-compact" : ""}">
      <figcaption>${escapeHtml(artifact.label)}</figcaption>
      <div class="media-frame">${media}</div>
      ${artifact.caption ? `<p class="media-caption">${escapeHtml(artifact.caption)}</p>` : ""}
      ${renderPills(artifact.pills)}
    </figure>`;
}

export function renderArtifact(artifact = {}) {
  switch (artifact.type) {
    case "steps":
    case "pipeline":
    case "workflow":
      return renderSteps(artifact);
    case "compare":
      return renderCompare(artifact);
    case "table":
      return renderTable(artifact);
    case "media":
      return renderMedia(artifact);
    default:
      return `<p class="artifact-unsupported">Unsupported artifact: ${escapeHtml(artifact.type || "unknown")}</p>`;
  }
}

