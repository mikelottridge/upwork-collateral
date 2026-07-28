# Claude Opus outline review prompt

Reasoning-only review. Do not use tools, inspect files, or request more context. Evaluate only this bounded record and return the complete review now.

The user wants a portfolio presentation to demonstrate how Mike builds trustworthy calculations, not sell a specific financial solution.

Evidence:

- A self-built public-data demonstration visibly contains source-linked Netflix revenue of $12,250M and operating income of $3,957M.
- It also demonstrates normalized inputs, lineage, visible conflicts, confidence states, and one bounded AI-assisted recovery from a difficult PDF page.
- It does not include a formula library or prove a comprehensive financial model.
- The current deck incorrectly pitches an SEC financial-metrics pipeline, client pilot, and 40–50-company rollout.

Proposed eight-stage story:

1. Calculation risk: arithmetic is easy; trusting definitions, inputs, periods, units, and overrides is harder.
2. Early proof: explicitly label the existing artifact as a self-built public-data example, not client work or a product being sold.
3. Calculation contract: business definition, allowed inputs, formula, units/period, rounding, missing-data behavior, and acceptance checks.
4. Transparent deterministic example: $3,957M / $12,250M = 32.3% operating margin, showing numerator and denominator lineage, formula, unit, rounding, and result.
5. Validation: required inputs, same-period and unit compatibility, recomputation, range/reasonableness, conflict status, and refusal to calculate when checks fail.
6. AI boundary: AI may recover structure from a bounded failed page; deterministic formulas own arithmetic and validation.
7. Transferability: clearly illustrative—not completed-client-work—applications in pricing/fees, KPI definitions, scenario logic, reconciliations, and operational reporting.
8. CTA: “Show me the calculation your team still rebuilds or checks by hand.”

Constraints:

- No cross-company comparison, investment advice, client-work claim, or comprehensive-model claim.
- The simple calculation is intentionally chosen because it is fully traceable to visible inputs.
- The legacy runtime will be migrated to Reveal.js only after explicit approval and then audited under the self-running presentation style/format/QA process.
- Base and `?upwork=1` must contain the same story; only contact information changes.

Review tasks:

1. Identify only load-bearing strategic or evidentiary defects.
2. Decide whether one simple, fully traceable calculation is sufficient for this portfolio story. Recommend additional calculations only if supported by the evidence above.
3. Test the audience, sequence, transferability, AI boundary, and CTA for coherence.
4. Give minimum precise edits needed for consensus.
5. End with exactly one of:

`CONSENSUS VERDICT: PROCEED`

`CONSENSUS VERDICT: REVISE`
