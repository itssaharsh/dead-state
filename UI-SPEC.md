---
name: Dead State
scope: sprint
one_line: "Dead State finds quests a model wrote that cannot be finished"
ambition: L1   # the explanation is a small dependency chain read as structure and text; an SVG severed edge is clearer than any scene, and a 3D stage would obscure a 4-line proof
registers: { content: expressive, analysis: productive, blocked: serious, system: system }
direction: "derived: an RPG quest log inside a game engine's dark editor. canvas deep ink #121620 · ink warm paper-white #ECE7DD · accent ember #FF6A3D (the break) · gold #D9A94C as CONTENT on the quest panel, not accent · display Young Serif (the quest log's voice) · body Rethink Sans · mono Spline Sans Mono for fact predicates only, because they are literally code. 3 display candidates considered: Young Serif (chosen - sturdy, game-adjacent, reads correctly to a stranger), Gloock (too editorial), Big Shoulders Display (too signage, and signage is this skill's house default)"
personality: precise
dials: { variance: 4, motion: 3, density: 7 }
stack:
  page: "single index.html + styles.css + app.js — one page and one endpoint; Next would be overhead"
  solver: "solver.js, pure ES module, runs CLIENT-SIDE — so the deterministic core needs no network and cannot fail on camera"
  extraction: "api/extract.js, Vercel serverless — holds the keys; two-level rotation over models then providers because gemini-3.8-flash returned 503 mid-build"
  fonts: "Google Fonts (Young Serif, Rethink Sans, Spline Sans Mono)"
  deps: "none in the browser. No framework, no motion library — the one animation is SVG pathLength + CSS"
archetype: "dev tool / verifier console (B13 g, adapted: the left panel is the game's own register, not a terminal)"
viewports: [320x640, 390x844, 1024x768, 1440x900]
signature:
  interaction: "the severed dependency chain draws on from the dead step back to the fact that can never hold"
  visual: "the quest log rendered as a player sees it, with the impossible objective struck through"
wow: "real trigger: a batch of independently generated quests is gated → payoff: the narrative check says terminates while the world-fact check says no completion path, on the SAME content → residue: the struck objective and the severed edge stay on the quest log → record: the chain, each line derived from the BFS, copyable as a trace"
demo: { seed: ./fixtures, flag: "?demo=1", state_param: "?state=", reset: "alt+shift+r", replay: "alt+shift+p", guest: true }
live_vs_simulated:
  - "the reachability search and the trace: live, client-side, no network"
  - "the extraction of pasted content: live, server-side, provider-rotated"
  - "the shipped fixtures: real generated content with a real receipt (provider, model, timestamp recorded per fixture); pre-typed so the demo works with zero keys"
  - "nothing is simulated or stubbed in the core loop"
deviations:
  - "Dark canvas in a Sprint dev tool: the use scene is a developer reading build output, and in a 720p video a dark stage makes the one ember severed edge legible. Not near-black and no acid pip (B11 tell) — a deep ink blue with warm paper ink."
  - "The narrative check's PASS is rendered in INK, not success-green. A pass there is not good news: the point is that it is misleading. Green would imply the opposite of the product's claim."
  - "Two registers on one screen (the game's own quest log vs the tool's analysis). The skill prefers one register per section; here the contrast IS the product - player-facing content versus the gate that checks it."
---

## 0. Brief + context profile

- **One line:** Dead State finds quests a model wrote that cannot be finished.
- **User and moment:** a solo or small-studio developer at a desk, laptop, after a generator returns a batch of quest content and before it enters the build. Per batch, not per hour.
- **Primary action:** gate (run the two checks over the batch).
- **Hero object:** the quest log **as a player sees it**, with the break drawn onto it. Not a report — a verifier's output is a negative, so the object must be the content.
- **Product moment:** the struck objective and the severed chain appear on the quest log.
- **Demo moment:** the narrative check says *terminates* while the world-fact check says *no completion path* — same content, two verdicts.
- **Differentiator:** the failure lives **between** independently generated quests that share world state. A per-quest dead-end check cannot see across that boundary by construction. Proven on screen by showing both verdicts and the cross-quest chain.
- **Artifact:** the trace — a completion order, or the dead state with the chain and the fact that can never hold. Copyable.
- **World inventory:** the quest log / journal · the item inventory · the world-flag table from a savegame · the dependency chain · a CI pass/fail line.
- **Moving truth:** none by default. The extraction streams named steps while it runs; everything else is static until the user acts.
- **Judging:** 20% Innovation & Originality · 25% Execution & Functionality · 15% AI × Gaming Relevance · **25% Track fit** · 10% Potential & Impact · 5% Demo & Clarity. Async, 3+ independent reviews, scored **1–5** per criterion. *"Never judged: English fluency / Slides / Public speaking."* One project link slot, one video URL, no repo field, no video length limit.
- **Budget:** ≤6 h UI, solo, online, inside a ~27 h total window.

| Factor | This project |
|---|---|
| Task frequency | once per generated batch — so guidance and one expressive moment, not shortcuts |
| Data density | ~20 facts, ~15 actions, a 4-line chain — dense but small; tabular numerals on counts |
| Stakes | a blocked build. Serious register on the blocked verdict, no jokes, no confetti |
| Audience | game developers, but the 5-second read must work for a non-developer reviewer |
| Use scene | desk, laptop, and a 720p video watched by a reviewer scoring 3+ projects in 90 minutes |
| Emotional target | **exact** |
| Personality | precise (ease-out-quint, 120–200 ms, no bounce) |
| Sponsor / host | Hyper3D at asset-time only (its own client enforces a 20-minute deadline) |

## 1. Judge tests

**5-second answers.** A readable quest log is on screen with one objective struck through and a break marked. A stranger reads: this quest cannot be finished, and here is the step where it dies. One primary action. The first screen shows a finished run on a named sample, never an empty panel.

**30-second answers.** Pick a sample or paste content → real extraction streams named steps → the quest log fills → both verdicts land, disagreeing → the severed chain draws onto the log → the extracted model is one click away, beside its source prose. Measured telemetry (reachable states explored, extraction ms, provider used) read from the real run.

**Demo-critical screen:** one. `/` — the gate. Two regions: the content (left, primary) and the checks (right, secondary).

**The 3 stills.** (1) the struck objective with the severed chain on the quest log; (2) the two verdicts side by side disagreeing; (3) the extracted precondition-effect model beside the prose it came from.

## 3. Screen inventory

| id | route | why it exists | entered from | primary action | states |
|---|---|---|---|---|---|
| S1 | `/` | the gate — the only screen; a one-page tool needs no routes | direct | Check content | ideal · first-run · loading · pass · blocked · untypeable · no-provider |

## 5. S1 — the gate

Blueprint at 1440 (12 cols, 24 gutters):

```
┌ header 52 · mark + wordmark · [sample ▾ | paste your own] ········· [Check content] ┐
│                                                                                     │
│  ┌ CONTENT · 7 cols ─────────────────────────┐ ┌ CHECKS · 5 cols ─────────────────┐ │
│  │ [Quest log | Extracted model]  tabs 36    │ │ Narrative graph   ✓ terminates   │ │
│  │                                           │ │   4 steps · 0 dead ends          │ │
│  │  The Ashes of Low Dock          (serif 28)│ │ ─────────────────────────────    │ │
│  │  generated by <provider/model>, <date>    │ │ World facts    ✗ no completion   │ │
│  │                                           │ │   path exists in the extracted   │ │
│  │  1. Speak with Orin Croft          ✓      │ │   model · 3 states explored      │ │
│  │  2. Join the Iron Watch purge      ✓      │ │                                  │ │
│  │  3. Buy the Astrolabe from Croft   ✗ ◀────┼─┼─ WHY (the chain, mono)           │ │
│  │  4. Return the heirloom            ─      │ │  goal needs has_astrolabe        │ │
│  │                                           │ │   └ only producer: step 3        │ │
│  │  ← SVG severed chain drawn over the list  │ │     ✗ requires alive_croft, false│ │
│  │                                           │ │       in every reachable state   │ │
│  │                                           │ │       └ step 2 sets !alive_croft │ │
│  └───────────────────────────────────────────┘ │ [Copy trace]  exit 1             │ │
│                                                 │ caught 9/10 on the seeded corpus│ │
└─────────────────────────────────────────────────┴─────────────────────────────────┘
```

At ≤1024 the two regions stack, content first. At 390 the primary action is sticky at the bottom.

### Treatment table

| Element | Tier | Register | Levers (grayscale first) | States | Transition |
|---|---|---|---|---|---|
| Quest log with the break drawn on it | **primary** | expressive | largest region, 7/12; raised panel on the sunken stage; Young Serif title 28px; objectives 17px numbered list, generous 20px row rhythm; the ONLY saturated marks on the whole screen are the break glyph and the severed edge | **first-run:** a named sample already gated · **loading:** objectives appear as the extraction types them, shimmer on the active one · **pass:** a quiet completion order listed under the title, zero ember anywhere · **untypeable:** prose stays, the defeating sentence highlighted, "Couldn't type this content" pinned on it · **blocked:** the impossible objective struck through + ember break glyph | severed chain draws on: `pathLength` 0→1, 350 ms, 60 ms stagger, after the verdicts land |
| The two verdict rows | secondary | productive | rows, 1px line between, never cards (homogeneous and compared → B5 card test fails); check name Rethink Sans 600 15px; outcome word + leading glyph; **narrative ✓ in INK not green** (a pass there is the misleading part); world ✗ in ember; adjacent because the disagreement is the point | pending: 38% + shimmer · partial: narrative resolves first, it is instant | the ✗ glyph draws, then the chain expands via grid-rows 0fr→1fr, 240 ms |
| The chain (why) | secondary | productive | indented tree, Spline Sans Mono 13px for predicates, body face for connectives; one hop per line; severed hop in ember with ✗ | always open once a run finishes — it is the evidence, not a detail | hops enter with 40 ms stagger, ≤300 ms total |
| "Check content" | interactive | productive | the one ember-filled button on the screen, header right, h40 px16 r-md | **blocked:** no content → stays focusable, `aria-disabled`, reason text beneath · **loading:** "Typing content… 3/4" counted from real step events, width locked · **error:** "Retry" + humanized reason | morphing label, 180 ms |
| Sample picker / paste | interactive | productive | segmented control, 4 named samples + "Paste your own"; textarea slides in on the same axis | — | shared axis, exit 150 enter 210 |
| Quest log ⇄ Extracted model tabs | interactive | system | 2px ink indicator that slides; the model view shows typed facts and each action's pre/post next to its source `quote` | — | shared axis slide |
| Caught/missed line | tertiary | system | one quiet 13px line, tabular numerals, from a real seeded-corpus run with its date | — | — |
| Provider/telemetry line | tertiary | system | 12px ink-muted: provider, model, ms, states explored. Real values only | shows the failover log if an attempt failed | — |
| Stage background | decorative | — | flat `--canvas`; no texture, no vignette, no grid (B8: texture is opt-in and this world has no working surface) | — | — |
| Header | tertiary | system | mark + wordmark left, controls right. **No grey descriptor line** — identity comes from the populated quest log (B2 house-style avoid) | — | — |

**First 10 seconds:** the `pawn` sample already gated, struck objective and severed chain visible, both verdicts shown disagreeing.

**Data:** fixtures are real generated content with per-fixture provenance; pasted content runs live extraction. Labelled on the content itself ("generated by … , …"), not as a top-bar badge.

## 9. Copy deck

- Title: `Dead State`
- Primary: `Check content` → `Typing content… 3/4` → `Checked`
- Narrative row: `Narrative graph` · `terminates` / `dead ends found`
- World row: `World facts` · `no completion path exists in the extracted model` / `completable`
- Chain header: `Why`
- Blocked banner: `This content cannot be finished.` (serious register, no exclamation)
- Pass banner: `A completion order exists.`
- Untypeable: `Couldn't type this content.` + `This sentence defeated the typing: "…"` + `Nothing was guessed.`
- No provider: `No model key is configured, so pasted content can't be typed. The four samples below are pre-typed and the checks still run.`
- Honesty line under the verdicts: `The search is sound over the extracted model, not over the prose. The extracted model is one click away.`
- Scope limit, shown: `Boolean world facts only. Up to 26 facts per batch.`
- Trace button: `Copy trace`

## 11. Real-product checks

| Check | Answer |
|---|---|
| Value | Yes — it blocks a batch and names the step. The exit code is the product for a build step. |
| Clarity | The first screen is a gated sample with the break visible; no tour. |
| Trust | The extracted model sits beside its source prose, every chain line is derived from the BFS, and the honesty line states the search is sound over the model and not the prose. No confidence percentages. |
| Feedback | Sample switch and tab switch paint <100 ms with no indicator; extraction streams named steps. |
| Failure | Untypeable content keeps the prose and names the defeating sentence. No provider → samples still gate, because the solver is client-side. |
| 10× data | 26-fact bound is enforced in the validator and reported as a state, not a crash. Chain depth capped at 6 hops. |
| Maintainability | Four files, zero browser dependencies. Every dependency explainable in one sentence. |

## 13. Acceptance

Gates 1–4 (Sprint). Gate 2's skeptical evaluator: run on the built screenshots. Gate 4: 5-s and 30-s tests on stills; golden path is 0 navigation clicks (the sample is pre-gated); reset 3× via Alt+Shift+R; legible at 720p; 3:2 thumbnail passes.
