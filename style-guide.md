# Collateral Style Guide

This guide records the presentation decisions behind the current HTML case-study decks so future edits and new decks stay consistent.

It is not a code reference. It is the design, writing, and verification standard for client-facing collateral in this workspace.

## Purpose

These pages exist to help a prospective client decide whether Mike is worth hiring for a contract engagement.

They should not read like:

- internal engineering notes
- architecture documentation
- generic portfolio filler
- AI-demo pages

They should read like:

- buyer-oriented proof
- high-trust delivery evidence
- concrete examples of the kinds of contract work Mike can do

## Audience

Primary audience:

- Upwork clients
- LinkedIn viewers who may want to hire Mike

The page should answer:

1. What real problem was solved?
2. What kind of system or workflow was built?
3. Why should this increase confidence in hiring Mike for similar work?

## Narrative Standard

### 1. Lead with why it matters

The first visible copy should explain business or clinical value before implementation details.

Good:

- why the system matters
- what becomes easier or more reliable
- what the client/practitioner/patient can now do

Avoid leading with:

- tech stack
- pipeline steps
- generic AI language

### 2. Prefer present tense

Default to present tense for system behavior and repeatable capability.

Examples:

- `The system links...`
- `The workflow turns...`
- `The report carries...`

Use past tense only when referring to historical proof:

- hours worked
- duration of engagement
- a prior outcome that specifically happened in the past

### 3. Focus on communication, not just analysis

Especially for reporting-heavy or healthcare work, the narrative should emphasize:

- explanation
- interpretability
- reviewability
- usable output
- finished deliverables

The core argument is often:

`the value is not just analysis; it is turning analysis into communication and delivery-ready output`

### 4. Keep the closing practical

Do not end with weak slogans like:

- `this is the kind of work Mike is built for`

Prefer:

- clear contract-fit language
- direct statements about the kind of workflow Mike is a strong fit for

## Structural Pattern

Default deck shape:

1. Hero / immediate context
2. Client problem
3. Workflow / approach
4. Analysis or reasoning structure
5. Delivery-ready output
6. Trust / hiring signal
7. Client-fit close

Not every deck needs the exact same number of slides, but each should cover those functions.

## Hero Rules

The hero must:

- state the project clearly
- frame the value in client-facing terms
- show one strong visual
- avoid leading with the stack

Hero lead should answer `why this matters` before `how it works`.

Hero caption should reinforce the main value proposition, not repeat implementation details.

## Metadata Rules

Tags, pills, and lightweight metadata are allowed, but they must read as secondary labels, not UI controls.

### Tag behavior

Tags should:

- be subdued
- not use `cursor: pointer`
- not visually compete with actual buttons
- avoid being the first place where the stack is introduced

Prefer tags like:

- outcome
- workflow type
- reporting pattern
- audience/output type

Avoid hero tags dominated by:

- `Python / Flask`
- similar stack-first labels

### Metrics rules

Metrics must be real proof signals, not implementation trivia.

Good metrics:

- hours
- client rating
- output type
- engagement duration
- end-to-end workflow scope

Bad metrics:

- `Python / Flask`
- anything that is just a stack label pretending to be proof

## Visual System

The current reference direction is the psychologist deck.

## Style Provenance and Source of Truth

The current HTML presentation style did not appear from scratch. It was derived from the stronger of the two psychologist PowerPoint directions, especially Claude's deck.

### Original reference artifacts

These files preserve the original reference direction that informed the HTML system:

- `/home/mike/collateral/psychologist-project/slides/psychologist-case-study-claude-v1.pptx`
- `/home/mike/collateral/psychologist-project/slides/psychologist-case-study-claude-v1-source.js`
- `/home/mike/collateral/psychologist-project/slides/psychologist-case-study-v1.pptx`

### Current implementation source of truth

For future HTML runs, the style should be taken from these files first:

- `/home/mike/collateral/shared/case-study.css`
- `/home/mike/collateral/shared/case-study.js`
- `/home/mike/collateral/psychologist-project/site/index.html`
- `/home/mike/collateral/psychologist-project/site/case-study-data.js`

### Practical rule

When starting a new deck:

1. treat the psychologist HTML deck as the canonical implementation reference
2. use the Claude PPT deck as the original visual inspiration
3. use this style guide to preserve the design decisions in words

That means the style is currently retained in three layers:

- the original PPT reference
- the working HTML/CSS/JS implementation
- this written guide

If those three ever conflict, prefer:

1. current shared HTML implementation
2. psychologist HTML deck
3. Claude PPT reference

The PPT files are reference material, not the current executable source of truth.

### Visual language

- dark navy hero / cover
- teal and amber accents
- white content surfaces
- premium but restrained
- presentation-like, not blog-like

### UX language

The page should feel like guided collateral, not a scrolling article.

That means:

- compact hero
- clear slide index
- one obvious primary control (`Start Guided Mode`)
- subdued metadata

### Buttons vs. labels

Only real controls should look interactive.

Controls:

- rounded
- visually prominent
- pointer cursor

Metadata:

- flatter
- smaller radius
- quieter background
- auto cursor

## Artifact Rules

Artifacts should explain the work in buyer terms.

Good artifact types:

- pipeline when workflow matters
- table when structured extraction matters
- document mock when output shape matters
- comparison when before/after value matters
- decision-tree or reasoning graphic when review/control matters

Avoid artifacts that:

- exist only to show technical cleverness
- restate the exact same text already in bullets
- feel like internal engineering diagrams unless the client would find them helpful

## Writing Rules by Slide Type

### Problem slides

- name the real user/practitioner/client problem
- avoid abstract negation if a direct problem statement is stronger
- explain why manual handling is hard

### Workflow slides

- describe the repeatable path
- emphasize how work moves toward a deliverable
- avoid implementation-only terms like `inspectable` unless tied to client trust

### Analysis slides

- explain what becomes interpretable
- connect the analysis to communication or decision-making

### Output slides

- show how the work ends in something usable
- use full-sentence artifact copy
- avoid fragment labels that read like notes-to-self

### Trust slides

- include a concrete proof signal early
- use client rating, hours, or long-running engagement carefully
- do not sound defensive

## Narration Rules

Narration is not an afterthought. It should match the deck.

### Narration must:

- stay aligned with slide copy
- use the same tense as the slide
- reinforce the same narrative arc
- sound natural aloud

### Narration workflow

1. finalize slide copy
2. finalize `slide-*.txt`
3. lock narration text
4. regenerate MP3s
5. verify guided mode timing

Do not regenerate audio while slide copy is still moving.

## Footer Rules

The footer is allowed to provide context, but it must not feel like legal copy or detached disclaimer language.

Good footer direction:

- transparent explanation of synthetic data
- reminder of what is being demonstrated

Avoid:

- stiff compliance-style wording
- text that feels disconnected from the rest of the page

## Mobile Rules

Every deck must be checked on mobile.

Minimum mobile requirements:

- tags wrap cleanly
- metric cards collapse cleanly
- footer does not overflow
- hero and slide copy remain readable
- no horizontal overflow

## Verification Standard

Every meaningful improvement should follow this loop:

1. Codex implements
2. Claude verifies
3. update the execplan immediately
4. only then move to the next item

Do not batch several unchecked items and then verify them later as a group unless the execplan explicitly defines them as one combined item.

If Claude rejects an item:

1. keep that item open
2. fix that item only
3. re-run Claude verification for that same item
4. update the execplan immediately
5. only then continue

At minimum, verification should cover:

- copy accuracy
- tone / hiring relevance
- layout at desktop
- layout at mobile
- guided mode behavior if narration is present

## Project-Specific Notes Captured So Far

### Psychologist deck

Key decisions:

- communication-first framing
- present-tense copy throughout system behavior
- hero tags changed from stack-first to outcome-first
- `Python / Flask` removed as a metric
- footer reframed as transparent context
- guided mode explicitly labeled `Start Guided Mode`

### Medical deck

Key decisions:

- lead with physician problem and control, not just PDF processing
- emphasize patient-level synthesis across multiple lab reports
- promote decision-tree control as a core differentiator
- show physician heads-up + patient-ready report as distinct outputs

## Where To Update This Guide

If a decision changes across more than one deck, update this file:

- `/home/mike/collateral/style-guide.md`

If a decision is specific to only one deck, record it in that project's docs.

## Starting a New Deck or Revising an Existing Deck

Use the execplan template:

- `/home/mike/collateral/templates/presentation-execplan-template.md`

Required workflow:

1. create a project-specific copy inside that project's `docs/` folder
2. select the correct path in that copy:
   - create a new presentation
   - modify an existing presentation
3. if modifying an existing deck, make a git checkpoint commit in `/home/mike/collateral` before changing the presentation
4. execute each checklist item with:
   - Codex implements
   - Claude verifies
5. update the execplan immediately after each Claude result before moving on

Do not start a serious deck build or revision without instantiating that project-specific execplan first.
