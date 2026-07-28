---
outline:
  supplied_by_user: true
  approved: true
  supersedes: revision-outline-calculation-example.md
  approval_record:
    approver: Mike Lottridge
    date: 2026-07-28
    scope:
      - canonical-spec
      - assets
      - audio
      - html
      - pdf
      - deploy
---
# Trustworthy Calculations Service Reframe — Expanded Revision Outline

## Approval status

Mike Lottridge explicitly authorized adding more sophisticated financial calculations and modifying the spreadsheet itself, and clarified that the deliverable is a Google Sheet. On 2026-07-28, he also explicitly approved the remaining controlled production scopes: `canonical-spec`, `assets`, `audio`, `html`, `pdf`, and `deploy`. This authorizes the Reveal.js migration, narration and presentation assets, review outputs, PDF export, deployment, and controlled replacement of the live presentation URL described below.

Claude Opus and Codex reached `CONSENSUS VERDICT: PROCEED` on 2026-07-28 for the expanded model after a prior two-round consensus on the broader calculation-led narrative. The expanded consensus requires exact bridge language, two-decimal margins where basis points appear, explicit scenario-period and assumption labeling, formula-driven model status, human source attestation, decomposed expense bridges, closure checks, and transferability cues throughout the story.

## Concept and purpose

- **One-sentence concept:** Demonstrate how Mike turns source data and business definitions into calculations that are explicit, reproducible, validated, and easy to review, using an original Google Sheet built from public SEC data as one concrete example.
- **Revision purpose:** Replace the SEC-pipeline product pitch with a transferable calculation-design and modeling story backed by a shareable, formula-driven Google Sheet.
- **Positioning boundary:** This is not a packaged financial-data product, investment advice, client work, a Netflix forecast, or a claim that AI should perform arithmetic.
- **Why financial data:** Public SEC filings provide independently reviewable inputs. The artifact being demonstrated is the calculation contract and control pattern, not the subject company.

## Evidence and source boundary

- The original presentation repository contained no financial spreadsheet; its table-like application screenshot was not a Google Sheet.
- A Wall Street Prep sample workbook found elsewhere prohibits alteration and redistribution. It will not be modified, copied, cited, or shipped.
- The new native Google Sheet is original and formula-driven. A locally generated `.xlsx` was used only as a controlled import source and is not the canonical or buyer-facing artifact.
- Historical inputs come from Netflix’s official SEC-filed Q1 2026 shareholder letter and Form 10-Q for the three months ended March 31, 2026 and March 31, 2025.
- Source values are stored once on `Source_Data`, in USD thousands:
  - Revenue: `12,249,757` / `10,542,801`
  - Cost of revenues: `5,888,238` / `5,263,147`
  - Sales and marketing: `842,217` / `688,370`
  - Technology and development: `959,696` / `822,823`
  - General and administrative: `602,609` / `421,462`
  - Operating income: `3,956,997` / `3,346,999`
- Official SEC URLs, filing references, units, periods, and access date are recorded on `Sources` and in comments on source inputs.
- Formula checks prove internal consistency; source accuracy remains a separately labeled human attestation with verifier, date, and filing reference.

## Authorized Google Sheet specification

- **Canonical title:** `Trustworthy Financial Calculations — Example Model`
- **Canonical spreadsheet ID:** `17iLgTFtRTJGNlXX2I28mwz8THpAsdQl23Jeo4F2nE04`
- **Canonical URL:** `https://docs.google.com/spreadsheets/d/17iLgTFtRTJGNlXX2I28mwz8THpAsdQl23Jeo4F2nE04/edit`
- **Import-source boundary:** `trustworthy-financial-calculations-demo.xlsx` is retained only as the reproducible local build/import source. The presentation must link to the native Google Sheet, never to the `.xlsx`.
- **Label:** `Self-built demonstration using public SEC data — not client work or investment advice`
- **Single-source-of-truth rule:** `Source_Data` is the only sheet containing typed historical financial values. `Scenario_Sensitivity` contains the only designated assumption inputs. All other calculation outputs are formulas.
- **Period convention:** Historical comparison is Q1 2026 versus Q1 2025. Illustrative mechanics project Q1 2027 versus Q1 2026; they do not incorporate Netflix guidance and are not a forecast.

### Sheets

1. **Cover**
   - Purpose, evidence label, period and units, version, calculation map, formatting legend, and visible formula-driven model status.
2. **Source_Data**
   - Source-backed Q1 2026 and Q1 2025 values, units, periods, source IDs, and notes.
3. **Calculation_Lab**
   - Revenue growth `16.19%`; operating-income growth `18.23%`.
   - Operating margin `32.30%` versus `31.75%`; expansion `55.6 bps`.
   - Expense ratios and basis-point movement.
   - Revenue change `1,706,956`.
   - Expense changes: cost of revenues `625,091`; sales and marketing `153,847`; technology and development `136,873`; general and administrative `181,147`.
   - Total expense change `1,096,958`; operating-income change `609,998`.
   - Incremental margin `35.74%`, labeled as one historical observation rather than a sustained estimate.
   - Exact bridge: revenue **change** minus expense **change** equals operating-income change.
   - Finding: cost-of-revenues leverage drove the margin expansion, partly offset by G&A and sales-and-marketing pressure.
4. **Scenario_Sensitivity**
   - Assumption register distinguishing derived inputs from chosen scenario inputs.
   - Projected Q1 2027 revenue, operating income, and operating margin using Q1 2026 as the base.
   - Formula-driven sensitivity grid centered on approximately `16.2%` growth and `35.74%` incremental margin, with symmetric wings.
   - Explicit label: `Illustrative mechanics — not a forecast. No Netflix forward guidance is incorporated.`
   - Base identity at zero growth and plausibility flags outside `0%–60%` projected margin.
5. **Checks**
   - `Check | Actual | Expected | Difference | Tolerance | Status | Where to fix | Notes`.
   - Exact checks for income-statement tie-out, expense bridge, ratio closure, basis-point closure, units, periods, sensitivity identity, and formula integrity.
   - Human source-accuracy attestation is visibly separate from computed checks.
6. **Sources**
   - `Item | Value | Units | Period | Source type | Source name | URL | Filing reference | Notes | Accessed`.

## Proposed narrative after remaining approval

- **Narrative arc:** Calculation risk → early Google Sheet proof → contract and sources → historical calculations → decomposed bridge → scenario sensitivity → validation → AI boundary → transferability and next step.
- **Proposed slide count:** Nine narrated stages plus an untimed hero.
- **Target runtime:** Approximately 115–135 seconds.

| Stage | Provisional headline | Evidence / visual | Transferability cue |
| --- | --- | --- | --- |
| Hero | Calculations you can explain, check, and reuse | Input → formula → checks → result; native Google Sheet link | Financial data is the example, not the offer |
| 1 | The arithmetic is usually easy. Trusting the inputs and definitions is harder. | Fragile versus controlled calculation | Any recurring business calculation |
| 2 | An original Google Sheet makes every input, formula, assumption, and check inspectable | Rendered `Cover`; self-built/public-data/not-client-work label | The artifact is the control pattern |
| 3 | Define the calculation before automating it | `Source_Data` plus calculation contract | Pricing, KPI, and reconciliation work |
| 4 | One source block supports growth, margin, and basis-point analysis | `Calculation_Lab`: growth, 32.30% vs 31.75%, +55.6 bps | Rate, margin, conversion, utilization |
| 5 | Revenue change minus expense change reconciles exactly to operating-income change | Decomposed bridge and basis-point closure | Price/volume/mix and budget variance |
| 6 | Assumptions change the mechanics—not pasted outputs | Q1 2027 illustrative sensitivity grid | Fee, volume, cost, and capacity scenarios |
| 7 | A result is not verified until checks and source attestation pass | `Checks` and formula-driven model status | Reusable control layer |
| 8 | AI can recover structure. It should not own the math. | Bounded Disney PDF recovery as secondary proof only | Faster inputs; deterministic outputs |
| 9 | The contract transfers; the financial example does not have to | Illustrative applications plus channel-selected CTA | Start with one bounded calculation contract |

## Material approvals

| Requested change | Status | Approval scope |
| --- | --- | --- |
| Create the original public-data native Google Sheet | Authorized and completed | `google-sheet`, `calculations` |
| Add historical, bridge, sensitivity, and validation calculations | Authorized and completed | `google-sheet`, `calculations` |
| Replace the financial-pipeline thesis with the calculation/modeling thesis | Pending | `canonical-spec`, `html`, `static`, `deploy` |
| Use the Google Sheet as primary presentation evidence and linked collateral | Pending | `assets`, `html`, `static`, `deploy` |
| Migrate the legacy presentation to Reveal.js | Pending | `migration`, `html`, `static` |
| Replace stale narration with nine aligned clips | Pending | `audio` |
| Apply complete self-running presentation and style certification | Pending | `review` |
| Preserve base/Upwork content parity so only contact information changes | Required invariant | Channel regression verification |
| Replace the live production bundle after certification | Pending | `deploy` |
