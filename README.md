# Dead State

**Finds orderings of ordinary play that permanently block a generated quest.**

A model writes a quest. It reads perfectly. Every branch terminates. A completability
check says a completion order exists. And a player who does six ordinary things in a
reasonable order can still never finish two of the quests.

Dead State types generated quest content into a precondition-effect model over named
world facts, then runs three checks that escalate. The disagreement between them is the
product.

| Check | Question | What it is |
|---|---|---|
| 1. Narrative graph | do all branches terminate, any dead ends? | the check that already exists in the literature |
| 2. World-fact reachability | is there *any* ordering that completes every quest? | the designer's happy path |
| **3. Order-dependent softlock** | **can ordinary play reach a state where a quest can never be completed?** | **the one that bites in shipped games** |

Check 3 is the contribution. Players do not follow the intended order.

---

## What we actually found

Everything below is a real run, not an illustration. Reproduce with `npm run corpus`
and the scripts in `eval/`.

**1. Single quests a model writes are fine.** We generated six quest chains from neutral
briefs — nothing asked for a flaw — typed each one, and ran all three checks. **6 of 6
passed everything.** A single quest written as linear prose essentially cannot be
unwinnable, because the generator writes it forward: each step's effect feeds the next
step's precondition.

**2. The failure appears when quests are generated independently against a shared
world.** We gave the model a shared world bible for one city and asked for four quest
lines in four separate calls, none seeing the others — which is how a generator produces
content at volume. Each quest passed all three checks **on its own**. Merged into one
world:

```
1. narrative graph : PASS  — 15 steps, 0 dead ends, all branches terminate
2. world facts     : PASS  — a completion order exists (8,051 states explored)
3. softlock        : FAIL  — 2 of 4 quests can be permanently blocked (33,020 states)
```

The cause: three of the four quests independently invented a way to obtain the same
unique artifact, and one of them *trades it away*. Once traded, two other quests can
never complete. Six ordinary player actions reach that state.

Nobody asked the model to produce this. It is what generating content in parallel does.

**3. The generator over-produces rather than under-produces.** The failure shape we
first designed for — a required item with exactly one producer, destroyed by an earlier
forced step — did not occur in ten generated quests. Instead the model gave the player
*three* separate ways to get the same one-of-a-kind item. That is a different bug class
and it is the one that creates the softlock. The single-producer case is still checked,
and `fixtures/handbuilt.json` exercises it — **that fixture is hand-written and labelled
as such**, because we did not want to pass off an authored failure as a discovered one.

**4. Seeded corpus.** 12 cases with known-correct verdicts:

```
caught 6/6 broken · 0 missed · 0 false positives on 5 good cases
6 of 6 broken cases pass a narrative-graph check while being broken
```

Small corpus, stated plainly. It is enough to show the checks fire on the right things
and stay quiet on the wrong ones; it is not a generalisation claim.

---

## What is real, and what is not

| Part | Status |
|---|---|
| The three checks | **Live.** Pure JavaScript, run in your browser in a Web Worker. No network, no model. |
| The trace and the trap path | **Live.** Every line is derived from the search, not asserted. |
| Typing pasted content into the model | **Live.** Server-side, provider-rotated. |
| The shipped samples | **Real generated content** with the provider, model and timestamp recorded on each fixture. Pre-typed so the page works with zero API keys. |
| `fixtures/handbuilt.json` | **Hand-written by the author**, labelled in the UI and in its own provenance field. |
| Rodin / Hyper3D asset step | Asset-time only, pre-generated and cached. The checks never call it. |
| Anything else | Nothing is stubbed, mocked or simulated in the loop. |

**The honest limit:** the search is sound over the *extracted* model, not over the prose.
Whoever writes the premises decides the conclusion — one mistyped precondition produces a
confident wrong answer. That is why the extracted model is always one click from the
verdict, with the source sentence beside each row, and why content that will not type is
reported as `could not type this content` rather than guessed at.

**Scope:** boolean world facts only; up to 26 facts and 40 actions per batch; the
softlock search is capped and reports `inconclusive` rather than `pass` when truncated.

---

## Prior art, honestly

This is **not** a new category, and the pitch does not claim it is.

- **G-KMS** (*Systems* 14(2):175, 2026) already validates LLM quest output for
  "schema compliance, state reachability, and consistency of world references" and
  reports zero dead ends. Its reachability runs over a **dialogue and choice graph** —
  the words `precondition`, `planner`, `PDDL` and `BFS` do not appear in the paper. A
  quest graph can terminate correctly while the item it requires is unobtainable.
- **STORY2GAME** (Riedl et al., 2025) publishes the extraction half outright: "LLM-generated
  preconditions and effects of actions in the stories as guides for what aspects of the
  game state must be tracked and changed."
- **FDG 2025 PCG Benchmark** implements A*-based solvability as graded pass-rates.
- The **2024 PCG survey** calls pathfinding playability checking existing and *effective*;
  its stated drawback is compute cost, not absence.
- **modl.ai, nunu.ai, ManaMind, Regression Games, Razer** all play a finished *build* with
  agents. None reads a content specification.

What is left, and what this is: **cross-quest order sensitivity, as a pipeline gate over
content from any generator, with the trap path as the artifact.** Where you own the
generator, constraining it (as G-KMS does) is the better engineering answer. This targets
content from a prose-generating model, where no constraint was expressible at generation
time.

---

## Run it

```bash
npm run dev        # http://localhost:3000 — works with no API key
npm run corpus     # the caught/missed table
npm run qa         # screenshots at 320/390/1024/1440 + axe, into qa/
node eval/gen-world.mjs   # regenerate the cross-quest finding (needs a key)
```

A key is only needed to type *pasted* content. Copy `.env.example` to `.env.local` and add
any one of `GEMINI_API_KEY`, `CEREBRAS_API_KEY`, `GROQ_API_KEY`, `OPENROUTER_API_KEY`.
More keys means more failover legs: during this build `gemini-3.8-flash` returned a 503
on one call and 200 on the next, so rotation runs over models *within* a provider and then
across providers, and the attempt log is shown in the UI.

## Files

```
solver.js            the three checks. pure, no imports, no network
lib/schema.js        the fixed action-model schema + the validator the model must pass
lib/providers.js     two-level key rotation (model, then provider)
lib/extract.js       prose -> typed model
api/extract.js       the only server endpoint
app.js worker.js     the page; checks run in the worker
fixtures/            real generated content with per-fixture provenance
eval/                the seeded corpus, the generators, the QA loop
UI-SPEC.md           the design spec this was built from
research/            the evidence behind the idea, including what was killed and why
```
