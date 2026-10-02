# Submission package — Cambridge × Arcade AI Hackathon

Deadline **Sunday 4 Oct, 14:00 Cambridge time**. Form: https://about.tryarcade.com/submit
"One submission per team." "Keep your project link and demo video online until judging is over."

## Field by field

| Field | What to enter |
|---|---|
| **Track** | Game Tech Track |
| **Team Name** | *(your call — the form has no team-size limit)* |
| **Team Members** | optional; leave blank if solo |
| **Game Name** | `Dead State` |
| **Game Description** | the 1000-char text below |
| **Arcade Game Link** ⚠️ | **UNRESOLVED — ask Discord first.** If Game Tech genuinely requires it, see the fallback below. |
| **Demo Video URL** | the YouTube/Loom unlisted link (video plan below) |
| **Team Contact Email** | saharsh7002@gmail.com |
| **Checkbox** | "I confirm that this game was built during the hackathon" — true; first commit is during the window |

**The project link slot is the single most important field.** There is no repo field, so the
link must point at the *running thing*, with the repo reachable from it. The judge dashboard
says "open the project" — a repo is not something you open and use.

- Project link: **https://dead-state.vercel.app**
- Repo (linked from the page footer and the description): **https://github.com/itssaharsh/dead-state**

## Game Description (995 characters)

```
A model wrote four quests for one city. Each reads perfectly. Each passes a dead-end check.
A completability check says all four can be finished. Then a player does six ordinary things
in a reasonable order, and two of them can never be completed again.

Dead State types generated quest prose into a precondition-effect model over named world
facts, then runs three checks that escalate: narrative-graph reachability; is there any
completion order at all; and can ordinary play reach a state that blocks a quest forever.
The third is the contribution. It catches failures that live between independently generated
quests, where no per-quest check can see.

Found, not planted: 6 of 6 single generated quests passed everything. Four quests generated
independently against one shared world, then merged, fail the third check on 2 of 4 goals.
Seeded corpus: 6/6 broken caught, 0 false positives.

The checks run in your browser with no network. Open it and paste your own content.
```

## If the Arcade Game Link is mandatory — the hedge (~3h)

Publish a minimal Arcade game whose quest content is the Saltmarrow batch, with the two
softlockable quests present. The game *is* the demonstration: a player can walk into the trap.
Then the Arcade link and the tool link are the same story, and the demo gains a beat it does
not currently have — you see the quest break in a game, not only in a report.
Do NOT do this unless Discord says it is required; it is 3 hours against a 25% Execution line.

## Demo video plan

The event publishes **"Never judged: English fluency / Slides / Public speaking."** So: no deck,
no talking head, no narration required. A captioned screen capture is fully compliant and removes
the presentation-skill tax entirely. Reviewers score 3+ projects in a 90-minute window, and the
dashboard tells them to watch the demo *first* — so the video sets the anchor for Execution,
Relevance and Track fit, which are 65% between them.

**Target: 90 seconds. Captions, no voice. Real cursor, no cuts inside a run.**

| Time | On screen | Caption |
|---|---|---|
| 0:00–0:08 | the live page, Saltmarrow loaded, trap path visible | "A model wrote four quests for one city." |
| 0:08–0:18 | scroll the Quest content tab, show four ordinary quests | "Each one reads fine. Each passes a dead-end check." |
| 0:18–0:30 | the checks panel: ✓ narrative, ✓ world facts | "A completability check says all four can be finished." |
| 0:30–0:42 | the third check flips to ✗; the trap path draws | "A player does these six things. Two quests can now never be finished." |
| 0:42–0:55 | hover the consuming step; the struck goals | "One quest trades away an item two others need. A quest step can't be repeated." |
| 0:55–1:10 | Extracted model tab, prose beside pre/post | "This is the whole input to the search. If a row is typed wrong, the verdict is wrong — so it's shown." |
| 1:10–1:22 | paste your own → real extraction → verdict | "Paste your own. It runs the real pipeline." |
| 1:22–1:30 | the corpus line, then the scope line | "6/6 broken caught, 0 false positives. Boolean facts only, 26 per batch." |

**Do not** speed up footage while implying real time. The softlock search genuinely takes ~5.7s;
show it. If you label a speed-up, label it on screen.

## Failure and fallback plan

| Failure | Mitigation | Status |
|---|---|---|
| No network at the venue | All three checks run client-side in a Web Worker; fixtures are pre-typed. The page is fully usable offline except "Paste your own". | **built** |
| Model provider rate-limits mid-demo | Two-level rotation: models within a provider, then across providers. Failover verified by forcing a bad model. | **built** |
| No API key at all | The page states it plainly and the samples still gate. Nothing is faked. | **built** |
| Live extraction is slow (26s on gemini-3.8-flash) | Named-step loader while it runs. **Add a Cerebras or Groq key to cut this to ~2s.** | **needs your key** |
| A reviewer pastes content that won't type | Reported as "could not type this content" with the defeating sentence; never guessed. | **built** |
| Deployment unreachable | Vercel SSO protection explicitly disabled and verified with an unauthenticated 200. | **built & verified** |
| Demo machine dies | Alt+Shift+P replays the recorded run; the video itself is the artefact. | **built** |

## What a reviewer will find if they dig

Honest list, so there are no surprises in Q&A:

- **The problem is a hypothesis, not validated.** Procedural generation is ~3.6% of surveyed
  game professionals (10% of the 36% in GDC State of the Game Industry 2026, base 2,300+).
- **The mechanism family is published.** G-KMS (*Systems* 14(2):175, 2026) validates LLM quest
  output for state reachability over a *dialogue* graph; STORY2GAME (2025) publishes LLM-extracted
  preconditions and effects. The contribution is cross-quest order sensitivity as a pipeline gate.
  The README says this before a reviewer can discover it.
- **The search is sound over the extracted model, not over the prose.** Stated on the page.
- **`fixtures/handbuilt.json` is hand-written**, labelled in the UI and in its provenance field.
- **The corpus is small** (11 cases, written by the author). Stated as such.
