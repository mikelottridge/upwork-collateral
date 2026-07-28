# Claude Opus expanded-calculation review

Reasoning-only review. Do not use tools or inspect files. Evaluate the supplied evidence and design, then return a complete verdict.

## User direction

The financial self-running presentation should demonstrate broader calculation, modeling, validation, and automation skill rather than sell one financial-data solution. The user has now explicitly authorized adding more sophisticated calculations and modifying the spreadsheet itself.

## Evidence boundary

- The current repository has no financial spreadsheet—only a presentation and table-like application screenshot.
- A machine-wide search found a Wall Street Prep sample workbook, but its cover explicitly prohibits alteration or redistribution. It will not be used.
- The new workbook will be original and formula-driven.
- Source data comes from Netflix's official SEC-filed Q1 2026 shareholder letter and Form 10-Q for the three months ended March 31, 2026 and March 31, 2025.
- Source values, in USD thousands:
  - Revenue: 12,249,757 / 10,542,801
  - Cost of revenues: 5,888,238 / 5,263,147
  - Sales and marketing: 842,217 / 688,370
  - Technology and development: 959,696 / 822,823
  - General and administrative: 602,609 / 421,462
  - Operating income: 3,956,997 / 3,346,999
- Official filing URLs will be included on a Sources sheet and in comments on source inputs.

## Proposed original workbook

1. `Cover`: purpose, “self-built demonstration using public SEC data; not investment advice or client work,” model status, version, and calculation map.
2. `Source_Data`: source-backed Q1 2026 and Q1 2025 values, units, periods, source IDs, and notes.
3. `Calculation_Lab`: all outputs are formulas:
   - Revenue growth: about 16.2%
   - Operating-income growth: about 18.2%
   - Operating margin: about 32.3% vs 31.7%
   - Margin expansion: about 55.5 basis points
   - Expense ratios and basis-point movement
   - Revenue change: 1,706,956
   - Expense change: 1,096,958
   - Operating-income change: 609,998
   - Incremental margin: about 35.7%
   - Reconciliation: revenue change minus expense change equals operating-income change
4. `Scenario_Sensitivity`: assumption cells for forward revenue growth and incremental margin; projected revenue, operating income, and operating margin; a formula-driven 3x3 sensitivity matrix varying growth and incremental margin. Every cell recalculates from the same underlying mechanics; no pasted outputs.
5. `Checks`: one assertion per row with actual, expected, difference, tolerance, status, and fix location; overall model status aggregates the checks. Checks cover source completeness, expense-to-operating-income tie-out, bridge reconciliation, units/period consistency, and sensitivity formula integrity.
6. `Sources`: source log with item, units, period, source name, official URL, filing reference, and notes.

## Presentation revision

Use the workbook as the primary early proof and retain the old pipeline screenshot only if it helps explain lineage. Proposed narrated story:

1. The risk: arithmetic is easy; definitions, inputs, periods, and controls are harder.
2. Early proof: original self-built calculation workbook using public SEC data, not client work.
3. Calculation contract and source-linked inputs.
4. Historical calculation pattern: growth, margins, and basis-point change.
5. Reconciled driver bridge: revenue growth minus expense growth equals operating-income change; incremental margin.
6. Scenario/sensitivity pattern: assumptions drive projected outputs and every grid cell.
7. Validation: visible checks and a model status.
8. AI boundary: AI may assist bounded extraction, but formulas and checks own math; recovered PDF rows are review-required and do not feed this workbook.
9. Transferability and CTA: the same contract applies to pricing, KPI definitions, reconciliations, and other recurring calculations; start with one bounded calculation contract.

## Review questions

1. Does this add meaningful complexity without reverting to a specific financial-solution pitch?
2. Are any calculations misleading, redundant, or insufficiently supported?
3. Is the scenario model mathematically coherent and appropriately labeled as illustrative?
4. Is the workbook structure auditable and presentation-ready?
5. What minimum load-bearing changes are required?

End exactly with:

`CONSENSUS VERDICT: PROCEED`

or

`CONSENSUS VERDICT: REVISE`
