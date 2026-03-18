(function () {
  const deck = window.CASE_STUDY;
  if (!deck) {
    throw new Error("CASE_STUDY payload missing");
  }

  const state = {
    index: 0,
    autoplay: false,
    timer: null,
    audio: null,
  };

  const params = new URLSearchParams(window.location.search);
  const queryRate = Number(params.get("rate"));
  const defaultAudioRate = Number.isFinite(queryRate) && queryRate > 0 ? queryRate : (deck.audioRate || 1);

  if (deck.theme) {
    Object.entries(deck.theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }

  const els = {
    projectEyebrow: document.querySelector("[data-project-eyebrow]"),
    projectTitle: document.querySelector("[data-project-title]"),
    projectLead: document.querySelector("[data-project-lead]"),
    projectHeroVisual: document.querySelector("[data-project-hero-visual]"),
    projectHeroImage: document.querySelector("[data-project-hero-image]"),
    projectHeroCaption: document.querySelector("[data-project-hero-caption]"),
    projectTags: document.querySelector("[data-project-tags]"),
    projectSignals: document.querySelector("[data-project-signals]"),
    projectAbout: document.querySelector("[data-project-about]"),
    projectApproach: document.querySelector("[data-project-approach]"),
    projectQuote: document.querySelector("[data-project-quote]"),
    metricGrid: document.querySelector("[data-metric-grid]"),
    slideIndex: document.querySelector("[data-slide-index]"),
    slideCanvas: document.querySelector("[data-slide-canvas]"),
    progressFill: document.querySelector("[data-progress-fill]"),
    progressCopy: document.querySelector("[data-progress-copy]"),
    autoplayButton: document.querySelector("[data-action='autoplay']"),
    prevButton: document.querySelector("[data-action='prev']"),
    nextButton: document.querySelector("[data-action='next']"),
    footerNote: document.querySelector("[data-footer-note]"),
  };

  let guidedFlashTimer = null;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function stopAudio() {
    if (!state.audio) return;
    state.audio.pause();
    state.audio.currentTime = 0;
    state.audio = null;
  }

  function stopTimer() {
    if (state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }
  }

  function haltPlayback() {
    stopAudio();
    stopTimer();
  }

  function clearGuidedFlash() {
    if (guidedFlashTimer) {
      window.clearTimeout(guidedFlashTimer);
      guidedFlashTimer = null;
    }
    els.autoplayButton.classList.remove("guided-flash");
  }

  function triggerGuidedFlash() {
    clearGuidedFlash();
    if (!deck.slides.some((slide) => slide.audio)) return;
    if (state.autoplay) return;
    els.autoplayButton.classList.add("guided-flash");
    guidedFlashTimer = window.setTimeout(() => {
      els.autoplayButton.classList.remove("guided-flash");
      guidedFlashTimer = null;
    }, 4200);
  }

  function queueAdvance(slide) {
    if (!state.autoplay) return;
    const duration = slide.durationMs || deck.defaultDurationMs || 9000;
    state.timer = window.setTimeout(() => {
      if (state.index < deck.slides.length - 1) {
        goTo(state.index + 1);
      } else {
        state.autoplay = false;
        syncControls();
      }
    }, duration);
  }

  function trySlideAudio(slide) {
    if (!state.autoplay || !slide.audio) return false;
    try {
      state.audio = new Audio(slide.audio);
      state.audio.playbackRate = slide.audioRate || defaultAudioRate;
      state.audio.addEventListener("ended", () => {
        if (state.index < deck.slides.length - 1) {
          goTo(state.index + 1);
        } else {
          state.autoplay = false;
          syncControls();
        }
      }, { once: true });
      state.audio.play().catch(() => {
        state.audio = null;
        queueAdvance(slide);
      });
      return true;
    } catch (err) {
      state.audio = null;
      return false;
    }
  }

  function renderMetricGrid() {
    els.metricGrid.innerHTML = "";
    (deck.metrics || []).forEach((metric) => {
      const card = el("div", "metric-card");
      card.append(el("div", "metric-value", metric.value));
      card.append(el("div", "metric-label", metric.label));
      els.metricGrid.append(card);
    });
  }

  function renderHeader() {
    els.projectEyebrow.textContent = deck.eyebrow || "Case Study";
    els.projectTitle.textContent = deck.title;
    els.projectLead.textContent = deck.lead;
    els.footerNote.textContent = deck.footerNote || "";

    if (els.projectHeroVisual && els.projectHeroImage && deck.heroVisual && deck.heroVisual.src) {
      els.projectHeroVisual.hidden = false;
      els.projectHeroImage.src = deck.heroVisual.src;
      els.projectHeroImage.alt = deck.heroVisual.alt || "";
      if (els.projectHeroCaption) {
        els.projectHeroCaption.textContent = deck.heroVisual.caption || "";
      }
    } else if (els.projectHeroVisual) {
      els.projectHeroVisual.hidden = true;
    }

    els.projectTags.innerHTML = "";
    (deck.tags || []).forEach((tag) => els.projectTags.append(el("span", "tag", tag)));

    els.projectSignals.innerHTML = "";
    (deck.signals || []).forEach((tag) => els.projectSignals.append(el("span", "signal-pill", tag)));

    if (els.projectAbout) {
      els.projectAbout.textContent = deck.about || "";
    }

    if (els.projectApproach) {
      els.projectApproach.textContent = deck.approach || "";
    }

    if (els.projectQuote) {
      els.projectQuote.innerHTML = "";
      if (deck.quote && deck.quote.text) {
        const card = el("div", "quote-card");
        const quote = document.createElement("blockquote");
        quote.textContent = deck.quote.text;
        card.append(quote);
        if (deck.quote.attribution) {
          card.append(el("div", "quote-attrib", deck.quote.attribution));
        }
        els.projectQuote.append(card);
      }
    }
  }

  function renderSlideIndex() {
    els.slideIndex.innerHTML = "";
    deck.slides.forEach((slide, index) => {
      const button = el("button", "slide-jump");
      button.type = "button";
      button.dataset.index = String(index);
      button.append(document.createTextNode(slide.title));
      button.append(el("small", "", slide.eyebrow || `Slide ${index + 1}`));
      button.addEventListener("click", () => {
        state.autoplay = false;
        goTo(index);
      });
      els.slideIndex.append(button);
    });
  }

  function renderWorkflow(artifact) {
    const frame = el("div", "artifact-workflow");
    frame.append(el("div", "artifact-label", artifact.label || "Workflow"));
    const steps = el("div", "workflow-steps");
    artifact.steps.forEach((step, index) => {
      const card = el("div", "workflow-step");
      card.append(el("strong", "", step.title));
      card.append(el("div", "", step.copy));
      steps.append(card);
      if (index < artifact.steps.length - 1) {
        steps.append(el("div", "workflow-arrow"));
      }
    });
    frame.append(steps);
    return frame;
  }

  function renderPipeline(artifact) {
    const frame = el("div", "artifact-pipeline");
    frame.append(el("div", "artifact-label", artifact.label || "Process flow"));
    const steps = el("div", "pipeline-steps");
    (artifact.steps || []).forEach((step, index) => {
      const card = el("div", "pipeline-step");
      const icon = el("div", "pipeline-icon", step.icon || String(index + 1));
      card.append(icon);
      card.append(el("strong", "", step.title));
      card.append(el("div", "", step.copy));
      steps.append(card);
      if (index < artifact.steps.length - 1) {
        steps.append(el("div", "pipeline-arrow", "\u2192"));
      }
    });
    frame.append(steps);
    return frame;
  }

  function renderReport(artifact) {
    const frame = el("div", "artifact-report");
    frame.append(el("div", "artifact-label", artifact.label || "Report Preview"));
    const sheet = el("div", "report-sheet");
    artifact.blocks.forEach((block) => {
      const card = el("div", "report-card");
      card.append(el("strong", "", block.title));
      card.append(el("div", "", block.copy));
      sheet.append(card);
    });
    frame.append(sheet);
    return frame;
  }

  function toolbar(label) {
    const bar = el("div", "table-toolbar");
    const dots = el("div", "traffic-dots");
    dots.append(el("span"), el("span"), el("span"));
    bar.append(dots);
    bar.append(el("div", "", label || "Synthetic example"));
    bar.append(el("div", "toolbar-chip", "mock"));
    return bar;
  }

  function renderTable(artifact) {
    const frame = el("div", "artifact-table");
    frame.append(el("div", "artifact-label", artifact.label || "Structured view"));
    const shell = el("div", "table-card");
    shell.append(toolbar(artifact.toolbar || "Structured extraction view"));

    const colClass = artifact.columns && artifact.columns.length === 2 ? "table-grid table-2col" : "table-grid";
    const grid = el("div", colClass);
    (artifact.columns || []).forEach((column) => grid.append(el("div", "table-cell table-head", column)));
    (artifact.rows || []).forEach((row) => {
      row.forEach((cell) => {
        const cellNode = el("div", "table-cell");
        if (cell && typeof cell === "object") {
          if (cell.type === "status") {
            cellNode.append(el("span", "status-pill", cell.value));
          } else {
            cellNode.textContent = cell.value || "";
            if (cell.muted) cellNode.classList.add("table-muted");
          }
        } else {
          cellNode.textContent = String(cell);
        }
        grid.append(cellNode);
      });
    });
    shell.append(grid);
    frame.append(shell);
    return frame;
  }

  function renderClusterMap(artifact) {
    const frame = el("div", "artifact-cluster-map");
    frame.append(el("div", "artifact-label", artifact.label || "Cluster review"));

    const shell = el("div", "cluster-shell");

    const left = el("div", "cluster-column");
    left.append(el("div", "cluster-column-label", artifact.leftLabel || "Result clusters"));
    (artifact.clusters || []).forEach((cluster) => {
      const card = el("div", "cluster-card");
      card.append(el("strong", "", cluster.title));
      const list = el("ul", "cluster-list");
      (cluster.items || []).forEach((item) => list.append(el("li", "", item)));
      card.append(list);
      left.append(card);
    });

    const middle = el("div", "cluster-middle");
    const middleCard = el("div", "cluster-middle-card");
    middleCard.append(el("strong", "", artifact.middleTitle || "Clinical review"));
    middleCard.append(el("div", "", artifact.middleCopy || "Patterns are compared, contextualized, and queued for targeted research."));
    middle.append(middleCard);
    middle.append(el("div", "cluster-arrow", "\u2192"));

    const right = el("div", "cluster-column");
    right.append(el("div", "cluster-column-label", artifact.rightLabel || "Differential research"));
    (artifact.differentials || []).forEach((item) => {
      const card = el("div", "cluster-card cluster-card--result");
      card.append(el("strong", "", item.title));
      card.append(el("div", "", item.copy));
      right.append(card);
    });

    shell.append(left, middle, right);
    frame.append(shell);

    if (artifact.summary) {
      const summary = el("div", "cluster-summary");
      summary.append(el("strong", "", artifact.summary.title));
      summary.append(el("div", "", artifact.summary.copy));
      frame.append(summary);
    }

    return frame;
  }

  function renderDecisionTree(artifact) {
    const frame = el("div", "artifact-decision-tree");
    frame.append(el("div", "artifact-label", artifact.label || "Decision tree"));

    const shell = el("div", "decision-tree-shell");
    const root = el("div", "decision-root");
    root.append(el("strong", "", artifact.root?.title || "Case review"));
    root.append(el("div", "", artifact.root?.copy || ""));
    shell.append(root);

    const branches = el("div", "decision-branches");
    (artifact.branches || []).forEach((branch) => {
      const branchNode = el("div", "decision-branch");
      const stem = el("div", "decision-node decision-node--branch");
      stem.append(el("small", "", branch.label || "Branch"));
      stem.append(el("strong", "", branch.title || ""));
      if (branch.copy) stem.append(el("div", "", branch.copy));
      branchNode.append(stem);

      const children = el("div", "decision-children");
      (branch.children || []).forEach((child) => {
        const childNode = el("div", "decision-node");
        childNode.append(el("strong", "", child.title));
        childNode.append(el("div", "", child.copy));
        children.append(childNode);
      });
      branchNode.append(children);
      branches.append(branchNode);
    });

    shell.append(branches);

    if (artifact.footer) {
      const footer = el("div", "decision-footer");
      footer.append(el("strong", "", artifact.footer.title));
      footer.append(el("div", "", artifact.footer.copy));
      shell.append(footer);
    }

    frame.append(shell);
    return frame;
  }

  function renderChart(artifact) {
    const frame = el("div", "artifact-chart");
    frame.append(el("div", "artifact-label", artifact.label || "Trend Snapshot"));
    if (artifact.axis) {
      frame.append(el("div", "", `${artifact.axis.y} by ${artifact.axis.x}`));
    }
    const bars = el("div", "mini-bars");
    (artifact.values || []).forEach((value) => {
      const bar = document.createElement("span");
      bar.style.height = `${Math.max(16, value)}px`;
      bars.append(bar);
    });
    frame.append(bars);
    if (artifact.caption) frame.append(el("div", "", artifact.caption));
    return frame;
  }

  function renderLineChart(artifact) {
    const frame = el("div", "line-chart");
    frame.append(el("div", "artifact-label", artifact.label || "Trend view"));
    if (artifact.axis) {
      frame.append(el("div", "axis-copy", `${artifact.axis.y} by ${artifact.axis.x}`));
    }

    const values = artifact.values || [];
    const width = 560;
    const height = 220;
    const padding = { top: 18, right: 16, bottom: 30, left: 38 };
    const usableWidth = width - padding.left - padding.right;
    const usableHeight = height - padding.top - padding.bottom;
    const max = Math.max(...values, 1);
    const min = Math.min(...values, 0);
    const range = max - min || 1;
    const points = values.map((value, index) => {
      const x = padding.left + (usableWidth * index) / Math.max(values.length - 1, 1);
      const y = padding.top + usableHeight - ((value - min) / range) * usableHeight;
      return { x, y, value };
    });
    const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
    const areaString = [`${padding.left},${padding.top + usableHeight}`, ...points.map((point) => `${point.x},${point.y}`), `${padding.left + usableWidth},${padding.top + usableHeight}`].join(" ");
    const axisLabels = artifact.labels || values.map((_, index) => `T${index + 1}`);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    const gridGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
      const y = padding.top + usableHeight * ratio;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", String(padding.left));
      line.setAttribute("x2", String(padding.left + usableWidth));
      line.setAttribute("y1", String(y));
      line.setAttribute("y2", String(y));
      line.setAttribute("stroke", "rgba(30,27,24,0.1)");
      line.setAttribute("stroke-width", "1");
      gridGroup.append(line);
    });
    svg.append(gridGroup);

    const area = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    area.setAttribute("points", areaString);
    area.setAttribute("fill", "rgba(36,106,115,0.14)");
    svg.append(area);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    path.setAttribute("points", pointString);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "var(--accent-2)");
    path.setAttribute("stroke-width", "4");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.append(path);

    points.forEach((point, index) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", String(point.x));
      circle.setAttribute("cy", String(point.y));
      circle.setAttribute("r", "5");
      circle.setAttribute("fill", "var(--accent)");
      svg.append(circle);

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", String(point.x));
      label.setAttribute("y", String(height - 8));
      label.setAttribute("fill", "rgba(30,27,24,0.55)");
      label.setAttribute("font-size", "11");
      label.setAttribute("text-anchor", "middle");
      label.textContent = axisLabels[index];
      svg.append(label);
    });

    frame.append(svg);
    if (artifact.caption) frame.append(el("div", "chart-caption", artifact.caption));
    return frame;
  }

  function renderStack(artifact) {
    const frame = el("div", "artifact-stack");
    frame.append(el("div", "artifact-label", artifact.label || "Implementation"));
    const grid = el("div", "stack-grid");
    (artifact.items || []).forEach((item) => {
      const card = el("div", "stack-card");
      card.append(el("small", "", item.label));
      card.append(el("div", "", item.value));
      grid.append(card);
    });
    frame.append(grid);
    return frame;
  }

  function renderWireframe(artifact) {
    const frame = el("div", "artifact-wireframe");
    frame.append(el("div", "artifact-label", artifact.label || "Application flow"));
    const shell = el("div", "browser-shell");
    const grid = el("div", "browser-grid");
    (artifact.panels || []).forEach((panel) => {
      const card = el("div", "browser-panel");
      const toolbarNode = el("div", "browser-toolbar");
      const dots = el("div", "traffic-dots");
      dots.append(el("span"), el("span"), el("span"));
      toolbarNode.append(dots);
      toolbarNode.append(el("div", "", panel.label || "View"));
      card.append(toolbarNode);

      const body = el("div", "browser-body");
      body.append(el("strong", "", panel.title));
      (panel.blocks || []).forEach((block) => {
        const section = el("div", "browser-section");
        if (block.title) section.append(el("div", "table-muted", block.title));
        if (block.copy) section.append(el("div", "browser-copy", block.copy));
        (block.lines || [0.92, 0.74, 0.58]).forEach((width) => {
          const line = el("div", "wire-line");
          line.style.width = `${Math.max(28, width * 100)}%`;
          section.append(line);
        });
        if (block.pill) {
          const pill = el("div", "wire-pill");
          pill.style.width = `${block.pill}%`;
          section.append(pill);
        }
        body.append(section);
      });
      card.append(body);
      grid.append(card);
    });
    shell.append(grid);
    frame.append(shell);
    return frame;
  }

  function renderCompare(artifact) {
    const frame = el("div", "artifact-compare");
    frame.append(el("div", "artifact-label", artifact.label || "Before and after"));
    const shell = el("div", "compare-shell");
    (artifact.panels || []).forEach((panel) => {
      const card = el("div", `compare-panel ${panel.tone || ""}`.trim());
      card.append(el("strong", "", panel.title));
      if (panel.stat) card.append(el("div", "compare-stat", panel.stat));
      (panel.lines || []).forEach((line) => card.append(el("div", "", line)));
      shell.append(card);
    });
    frame.append(shell);
    return frame;
  }

  function renderDocument(artifact) {
    const frame = el("div", "artifact-document");
    frame.append(el("div", "artifact-label", artifact.label || "Document mockup"));
    const grid = el("div", "doc-grid");
    (artifact.pages || []).forEach((page) => {
      const doc = el("div", "doc-page");
      const top = el("div", "doc-toolbar");
      const dots = el("div", "traffic-dots");
      dots.append(el("span"), el("span"), el("span"));
      top.append(dots);
      top.append(el("div", "", page.label || "Synthetic page"));
      doc.append(top);
      const body = el("div", "doc-body");
      body.append(el("strong", "", page.title));
      (page.sections || []).forEach((section) => {
        const card = el("div", "doc-card");
        if (section.title) card.append(el("div", "table-muted", section.title));
        if (section.copy) card.append(el("div", "doc-copy", section.copy));
        (section.lines || ["", "", ""]).forEach((size) => {
          const line = el("div", `doc-line ${size}`.trim());
          card.append(line);
        });
        body.append(card);
      });
      doc.append(body);
      grid.append(doc);
    });
    frame.append(grid);
    return frame;
  }

  function renderMetrics(artifact) {
    const frame = el("div", "artifact-metrics");
    frame.append(el("div", "artifact-label", artifact.label || "Highlights"));
    const grid = el("div", "metrics-grid");
    (artifact.items || []).forEach((item) => {
      const card = el("div", "metrics-card");
      card.append(el("small", "", item.label));
      card.append(el("div", "", item.value));
      grid.append(card);
    });
    frame.append(grid);
    return frame;
  }

  function renderQuote(artifact) {
    const frame = el("div", "artifact-quote");
    frame.append(el("div", "artifact-label", artifact.label || "Client signal"));

    const quoteShell = el("div", "quote-shell");
    const quoteMark = el("div", "quote-mark", "“");
    const quoteText = document.createElement("blockquote");
    quoteText.className = "quote-shell-copy";
    quoteText.textContent = artifact.text || "";
    quoteShell.append(quoteMark, quoteText);

    if (artifact.attribution) {
      quoteShell.append(el("div", "quote-shell-attrib", artifact.attribution));
    }

    if (artifact.supporting) {
      quoteShell.append(el("div", "quote-shell-support", artifact.supporting));
    }

    frame.append(quoteShell);

    if (artifact.pills && artifact.pills.length) {
      const pills = el("div", "stack-list");
      artifact.pills.forEach((pill) => pills.append(el("span", "stack-pill", pill)));
      frame.append(pills);
    }

    return frame;
  }

  function renderArtifact(artifact) {
    const frame = el("div", "artifact-frame");
    if (!artifact) {
      frame.append(el("div", "artifact-label", "Artifact"));
      frame.append(el("div", "", "Replace this panel with a screenshot, diagram, or short annotated mockup."));
      return frame;
    }

    let content;
    if (artifact.type === "workflow") content = renderWorkflow(artifact);
    else if (artifact.type === "pipeline") content = renderPipeline(artifact);
    else if (artifact.type === "report") content = renderReport(artifact);
    else if (artifact.type === "table") content = renderTable(artifact);
    else if (artifact.type === "cluster-map") content = renderClusterMap(artifact);
    else if (artifact.type === "decision-tree") content = renderDecisionTree(artifact);
    else if (artifact.type === "chart") content = renderChart(artifact);
    else if (artifact.type === "line-chart") content = renderLineChart(artifact);
    else if (artifact.type === "stack") content = renderStack(artifact);
    else if (artifact.type === "wireframe") content = renderWireframe(artifact);
    else if (artifact.type === "compare") content = renderCompare(artifact);
    else if (artifact.type === "document") content = renderDocument(artifact);
    else if (artifact.type === "metrics") content = renderMetrics(artifact);
    else if (artifact.type === "quote") content = renderQuote(artifact);
    else {
      content = el("div", "");
      content.append(el("div", "artifact-label", artifact.label || "Artifact"));
      content.append(el("div", "", artifact.copy || "Replace with project-specific visual collateral."));
    }
    frame.append(content);
    return frame;
  }

  function syncControls() {
    const hasAudio = deck.slides.some((slide) => slide.audio);
    const onLabel = hasAudio ? "Pause Guided Mode" : "Pause Auto-Advance";
    const offLabel = hasAudio ? "Start Guided Mode" : "Auto-Advance Slides";
    els.autoplayButton.textContent = state.autoplay ? onLabel : offLabel;
    els.prevButton.disabled = state.index === 0;
    els.nextButton.disabled = state.index === deck.slides.length - 1;

    Array.from(els.slideIndex.querySelectorAll(".slide-jump")).forEach((button, index) => {
      button.classList.toggle("is-active", index === state.index);
    });

    const progress = ((state.index + 1) / deck.slides.length) * 100;
    els.progressFill.style.width = `${progress}%`;
    els.progressCopy.textContent = `Slide ${state.index + 1} of ${deck.slides.length}`;
  }

  function renderSlide() {
    const slide = deck.slides[state.index];
    els.slideCanvas.innerHTML = "";

    const slideNode = el("section", "slide");
    if (slide.tone) {
      slideNode.classList.add(`slide-${slide.tone}`);
    }
    const copyCol = el("div", "slide-copy");
    const head = el("div", "slide-head");
    head.append(el("div", "eyebrow", slide.eyebrow || `Slide ${state.index + 1}`));
    head.append(el("h1", "", slide.title));
    head.append(el("p", "slide-lead", slide.lead));
    copyCol.append(head);

    if (slide.bullets && slide.bullets.length) {
      const list = el("ul", "slide-list");
      slide.bullets.forEach((item) => {
        const li = el("li");
        li.textContent = item;
        list.append(li);
      });
      copyCol.append(list);
    }

    if (slide.tags && slide.tags.length) {
      const tags = el("div", "stack-list");
      slide.tags.forEach((tag) => tags.append(el("span", "stack-pill", tag)));
      copyCol.append(tags);
    }

    const artifactCol = el("div", "slide-artifact");
    artifactCol.append(renderArtifact(slide.artifact));

    slideNode.append(copyCol, artifactCol);
    els.slideCanvas.append(slideNode);
    syncControls();
  }

  function goTo(index) {
    state.index = Math.max(0, Math.min(index, deck.slides.length - 1));
    haltPlayback();
    renderSlide();
    const current = deck.slides[state.index];
    if (!trySlideAudio(current)) {
      queueAdvance(current);
    }
  }

  function next() {
    clearGuidedFlash();
    state.autoplay = false;
    goTo(state.index + 1);
  }

  function prev() {
    clearGuidedFlash();
    state.autoplay = false;
    goTo(state.index - 1);
  }

  function toggleAutoplay() {
    clearGuidedFlash();
    state.autoplay = !state.autoplay;
    haltPlayback();
    syncControls();
    if (state.autoplay) {
      const current = deck.slides[state.index];
      if (!trySlideAudio(current)) {
        queueAdvance(current);
      }
    }
  }

  els.prevButton.addEventListener("click", prev);
  els.nextButton.addEventListener("click", next);
  els.autoplayButton.addEventListener("click", toggleAutoplay);
  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag && /INPUT|TEXTAREA|SELECT/.test(tag)) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    } else if (event.key === " " && !event.repeat) {
      event.preventDefault();
      toggleAutoplay();
    }
  });

  renderHeader();
  renderMetricGrid();
  renderSlideIndex();
  goTo(0);
  triggerGuidedFlash();

  if (params.get("autoplay") === "1") {
    toggleAutoplay();
  }
})();
