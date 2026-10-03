# Delivery report — Dead State

**Live:** https://dead-state.vercel.app · **Repo:** https://github.com/itssaharsh/dead-state
Mode: hackathon · channel: direct · built 2026-10-02

## Built

A pre-ship gate for machine-generated quest content. A model types generated prose into a
precondition-effect model over named world facts; three deterministic checks then run in the
browser, escalating from what already exists to what does not:

1. **Narrative graph** — step-graph reachability, dead ends. (What a dialogue-graph check does.)
2. **World facts** — is there *any* ordering that completes every quest. (The designer's happy path.)
3. **Order-dependent softlock** — can ordinary play reach a state where a quest can never be
   completed. **This is the contribution.**

## Architecture, and why

| Choice | Requirement that forced it |
|---|---|
| Solver is pure JS, **client-side, in a Web Worker** | The core must not fail on camera or depend on a network at a venue. It also makes the deterministic half independent of any key. |
| **One-shot quest-step semantics** | Without it the search re-fires a step that cannot repeat, and a real shared-resource conflict disappears. This was a genuine bug found by testing against real generated content. |
| Fixed schema + strict validator between model and solver | The verdict must be a property of a checked model, not an opinion. Invalid output is reported, never guessed. |
| **Two-level key rotation** (models, then providers) | `gemini-3.8-flash` returned 503 on one call and 200 on the next during the build. Verified by forcing a bad model and watching it recover. |
| Static `public/` + one `api/` function | Vercel detected `app.js` at the repo root and ran the *browser* bundle as a serverless function, 500ing every request. `public/` removes the ambiguity. |
| Rodin called **after** the gate, cached, never on the request path | Its own client enforces a 20-minute deadline and a per-account concurrency cap. And the pipeline reason: don't spend mesh credits on content a player cannot finish. |

## Verification — only checks actually run

| Check | Result |
|---|---|
| Hand-written regression corpus (11 cases) | **6/6 broken caught · 0 missed · 0 false positives on 5 good** · 6/6 broken cases pass a narrative-graph check |
| Playwright + axe, 4 routes × 4 widths × 2 motion states | **32 screenshots, 0 axe violations** (`wcag2a/2aa/21a/21aa/22aa`) |
| Live demo flow, 3 consecutive runs with reset | **3/3 pass**, 0 console errors, live re-run confirmed each time |
| Live `/api/extract` | HTTP 200, typed by `gemini-3.8-flash` in 26s, correctly extracted a destructive effect (`!mara_present`) from "the ferrywoman is driven off" |
| Provider failover | Verified: forced a bad model, recovered on the next in 1484ms |
| Live extraction, Groq vs Gemini | **4.4 s vs 8.4 s** on identical content, both extracting correctly. Live endpoint measured at 4.43 s end to end. |
| Two-click live demo | Paste view prefilled; click → verdict in **8.2 s**, finding a real softlock on content not in any fixture |
| Public reachability | Vercel SSO protection disabled; unauthenticated fetch returns 200 |
| Contrast | All token pairs checked; one failure found (`line-input` at 2.798:1 on surface-1) and fixed to 3.15:1 |

## Findings (the demo's spine — discovered, not planted)

- **6 of 6** single quest chains from neutral briefs passed all three checks. A single linear
  quest essentially cannot be unwinnable, because the generator writes it forward.
- **4 quests generated independently** against one shared world, then merged: narrative PASS,
  world-fact PASS, **softlock FAIL on 2 of 4 goals**. Three quests each invented their own way to
  obtain the same unique artifact; one trades it away. Nobody asked for a flaw.
- The single-producer failure shape **did not occur** in 10 generated quests. `fixtures/handbuilt.json`
  exercises it and is labelled hand-written in the UI and in its provenance field.

## Bugs found and fixed

1. Solver re-fired one-shot quest steps, hiding the real shared-resource conflict. Fixed with
   fired-set tracking; regression case retained in the corpus.
2. Vercel ran the browser `app.js` as a serverless function (500 on every route). Fixed by moving
   browser assets to `public/`.
3. Vercel SSO protection would have shown judges a login wall. Disabled and verified.
4. `text-decoration: line-through` inherited onto the explanation text, making the evidence
   unreadable. Fixed by restructuring the DOM.
5. Two primary actions on mobile (header + sticky). Header button hidden ≤640px.
6. `--line-input` failed 3:1 on surface-1. Lightened.
7. A provider without schema enforcement omitted `id`/`label` and invented a new positive
   fact instead of negating the existing one — which hides the conflict from the search
   entirely. Prompt now carries the exact shape and the negate-don't-invent rule.
8. `gate()` ran only two of the three checks. The UI was unaffected (its worker calls each
   check individually) but every script caller was acting on an incomplete verdict.

## Known limitations

- The problem is a **hypothesis**, not validated (~3.6% of surveyed game professionals).
- The mechanism family is **published** (G-KMS 2026, STORY2GAME 2025). The contribution is
  cross-quest order sensitivity as a pipeline gate. Stated in the README before a reviewer finds it.
- The search is sound over the **extracted** model, not the prose. Stated on the page.
- Corpus is 11 cases. Softlock search is capped and reports `inconclusive` rather than `pass`.
- Boolean facts only; 26 facts / 40 actions per batch.
- Live extraction is ~4.4 s on Groq (was ~26 s when Gemini was the only provider).

## Evidence missing

- **Outsider test not run.** No person or proxy has been shown the demo cold. This is the cheapest
  remaining check and the one most likely to change the pitch.
- **Hyper3D asset step never executed** — no key available. The code path is built and reports
  honestly that it was skipped.
- Whether a Game Tech submission requires an Arcade Game Link: **unresolved**, pending Discord.

## Next steps

See `SUBMISSION.md`.
