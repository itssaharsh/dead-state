**Verdict: all three of your ideas are gone as written — one killed outright, one rebuilt into the single survivor, one cut to a footnote — and the replacement my blind discovery pass liked best was then killed too, on two checkable errors.**

HACKATHON mode · GENERAL context · full-breadth depth on a halved lookup budget (event starts tomorrow) · Cambridge × Arcade AI Hackathon, criteria confirmed against the event page. 12 problems across 6 user groups in blind discovery, plus pressure-tests of your three. **One survivor.** Nothing was padded.

## What is most likely to kill the survivor

**Innovation & Originality (20%)** — the weakest line, and it got weaker during this run. I cleared a paywalled paper the critic couldn't open: **G-KMS** (*Systems* 14(2):175, 2026) already validates LLM quest output for *"schema compliance, state reachability, and consistency of world references"* and reports *"No generated quests contain dead ends or unreachable terminal states."* **STORY2GAME** (Riedl et al., 2025) already publishes *"LLM-generated preconditions and effects of actions in the stories."* So the category is published. What survives is one distinction: G-KMS checks a *dialogue and choice graph* — the words `precondition`, `planner`, `PDDL` and `BFS` appear **zero** times in it — while the failure that bites lives in the **world-fact state space**. A quest graph can terminate perfectly while the item it needs is unobtainable.

**Potential & Impact (10%)** — the honest number is ~**3.6%** of surveyed professionals (10% of the 36% who use generative tooling), not 36%. No spend signal exists in games at all.

## What is worth keeping

The pipeline-stage finding, which held up under every attack: **five AI game-QA vendors — modl.ai, nunu.ai, ManaMind, Regression Games, Razer — all play a finished build; none reads a content specification.** modl.ai's agent *"observes and interacts with the game purely through visuals."* And neither engine ships a solvability checker for generated gameplay content: Unreal's Data Validation is per-asset (*"Checking that assets meet name conventions"*), Unity's AI surface is editor-time with Muse deprecated.

## Judging intelligence that changes how you build

- *"Never judged: English fluency / Slides / Public speaking."* **A deck is worth zero.** Scoring is **1–5 per criterion**, so one point on Execution or Track fit is 5% of final.
- **Tencent Cloud gives participants nothing** — credits are prizes only, though your old package had it as a *core* sponsor for both Game Tech ideas. The "TiMi stated research priorities" claim it leaned on three times has no locatable source.
- **Hyper3D is free prize money:** *"Hyper3D prizes are available to eligible projects using Hyper3D"* — the $1,152 subscription in Game Tech 1st. "Using", not "built on".
- Real window is **~27 hours** (Sat 11:00 → Sun 14:00), not the "48 hours" Luma advertises; venue shuts 18:00.
- **Zero titles in the visible Arcade catalogue advertise an AI-native mechanic** (10 games, top one 738 players, 0 reviews, "1 level" typical).

## Dead State

**Concept:** A pre-ship gate for machine-generated quests and items. A model types the content into a precondition-effect model over named world facts; a reachability search reports whether any ordering completes every quest, and when none does, returns the dead state and the trace reaching it.

**Problem:** A model asked for a quest chain writes prose that reads perfectly and sometimes cannot be finished — the required item is never obtainable because its only merchant dies in an earlier forced quest.

**User:** A developer shipping machine-generated quests and items, at the moment a batch returns and before it enters the build.

**Why it matters:** Not because the capability is absent — it partly exists. Because prose-generating models are the one class that *cannot* be made valid by construction: the generator is not a constraint solver, so content arrives untyped with no constraint expressible at generation time.

**Core workflow:** Prose batch arrives → model types each step into preconditions and effects over named facts → reachability search from the start state → either a completion order, or no completion path in the extracted model, reported as dead state plus trace → build exits non-zero → verdict stored for regression.

**AI role:** Extraction and normalization, confined to typing. Plain code cannot: the content renames things every run and implies requirements in prose. The model never issues the verdict.

**Non-AI product:** The schema, the search, the trace format, the build gate, the stored corpus and the regression check — substantial, at the cost of someone supplying the typed form.

**Data loop:** Verdicts and traces accumulate as a regression set; a developer marking an extraction wrong creates a fixture with known-correct typing.

**Hard part:** *Whoever writes the premises decides the conclusion.* One mistyped precondition produces a confident wrong answer, and a false "cannot finish" on good content is worse than no gate. So the extracted model is shown beside its source, and a deliberately mistyped case is shown too.

**Technical implementation:** One public URL (the form allows a single project link). Extraction against a fixed schema, validated before anything runs. Breadth-first search over world-fact states. Persisted verdicts. Rodin called only on passing content, pre-generated and cached.

**Sponsor fit:** Hyper3D / Rodin — asset-time generation for content that passed the gate. Meaningful depth; latency-safe against an API whose own client enforces a 20-minute deadline; qualifies for the conditional prize.

**Criteria alignment:** Track fit (25%) lands on two named bullets, *"Dev tools"* and *"Production pipelines"*. Execution (25%) is a reviewer pasting their own content into a real pipeline. AI × Gaming Relevance (15%) is earned by the model doing the typing, shown on screen. Innovation (20%) is the weak line above. Demo & Clarity (5%) needs no domain knowledge.

**Demo flow:** Ten seconds — a readable quest, the line "a dialogue-graph check passes this; it still cannot be finished", then the dead state. Under a minute — the trace, the extracted model beside the prose, one fix applied, re-run, pass, then the Rodin asset for the passing region.

**Wow moment:** The same quest passing a dead-end check and failing the world-fact search, side by side. Shown, not asserted.

**MVP scope:** In — schema, extraction with validation, search, trace, report, stored corpus, paste-your-own plus three samples, caught-versus-missed table, one cached Rodin asset. Out — balance heuristics, structural tile reachability as a headline, runtime mode, accounts.

**Differentiation:** Against G-KMS, a different graph and a generator-agnostic gate. Against STORY2GAME, it publishes extraction but no verdict, trace or gate. Against the five QA vendors, they play builds.

**Risks:** The published mechanism family; the premises problem; a ~3.6% population; one practitioner on record reporting no pain; valid-by-construction winning wherever a constraint was expressible; pattern-matching to "AI playtesting bot"; and a verifier demo having no partial credit.

**What can be built in the event:** Saturday — schema, seeded broken corpus, search and trace, all deterministic and model-free. Saturday night — extraction plus validation, and the caught-versus-missed table. Sunday — the URL, one cached asset, video. Fallback if extraction proves unreliable: accept typed input directly and label extraction a second mode.

## Tradeoffs

Compared against doing nothing and against G-KMS, in the package. Short version: G-KMS is strictly better where you own the generator; this applies only where you don't. Doing nothing is defensible for most of that 3.6% today.

## Sponsor verdicts

**Hyper3D** — meaningful. **Arcade AI** — not a dependency, but see the submission risk below. **Tencent Cloud** — does not fit; participants get no resources. **TiMi Studio Group** — does not fit; a partner, judging bloc and recruiting channel, not a challenge sponsor.

## Killed

**Living World Multiplayer** — Travian, *"persistent, browser-based, massively multiplayer, online real-time strategy game"*, June 2004, peak *"over 5 million players"*, with raidable NPC faction villages. Mythora and Altworld shipped the LLM version in 2026; Altworld states the identical architecture. The a16z AI/Virtual Worlds grand prize (July 2023) was already a persistent multiplayer world with Claude narrative. Its claimed player complaint appears on no opened page.

**World Coherence Verifier (as specified)** — the 2024 PCG survey calls pathfinding playability checks *"effective"*; the bottleneck is compute cost, not absence. Rebuilt as Dead State.

**Narrative Drift Guard** — cut, not killed. Memory shipped by Convai and NVIDIA ACE; 147 Devpost projects match "npc memory"; user group 5% of the 36%. Kept as the noted alternative because NVIDIA tells developers they *"must implement content filtering, lore constraints, and behavioral boundaries"* themselves.

**Asset Passport** — discovery's best, killed by the critic. Article 50(2) binds *"Providers of AI systems"*, not the platform or importer, and 50(4) carves out *"evidently artistic, creative, satirical, fictional"* works, so the duty is a notice. And `KHR_xmp_json_ld` already carries *"attribution, licensing, creation date"*, while C2PA manifests *"can also be linked externally"* bound by *"SHA2-256"*. Both load-bearing claims false.

Plus 14 more in the package, including three killed at the wrapper filter.

## Notes for you

Thin by necessity — nothing in my context tells me your engine experience, team size or whether you're onsite. Dead State is deliberately engine-free, a service plus a web page, and its deterministic half needs no model. Verify on your own accounts first: a Hyper3D key and one real Rodin call end to end (the membership is time-boxed to the hackathon), and that you can reach the Discord event channel.

## Next steps

1. **Ask in Discord, before building:** does a Game Tech submission need an Arcade Game Link? The shared form renders it required and I did not interact with it. This can invalidate the whole plan.
2. Also ask what "Track fit" means on the scorecard (25%, no published definition).
3. **Run the outsider test** — not yet run, by a person or a proxy. Show someone the quest that passes a dead-end check and still cannot be finished. If they can't retell it, the distinction carrying Innovation isn't legible and you should not build this.
4. If you'd rather reconsider the track: the Arcade catalogue has no AI-native mechanics and real cash prizes, but no Arcade idea survived this pipeline and the platform has no public docs. Say so and I'll run a focused round.

## Gaps and gate

Isolation was structural: discovery ran blind to the event, sponsors, past winners and your three ideas, and reported that it found requester information in its context and ignored it. Leak check clean. Gate: **0 FAIL, 4 WARN** — 12 research gaps; the problem is a hypothesis; `nonexistent_problem` unknown pending test 3; `weekend_clone` hit, which is expected for a weekend build.

Twelve gaps are listed in the package. The ones that matter: the Arcade-link requirement; "Track fit" undefined; **no spend signal in games for anything in this run**; Devpost refused with a bot challenge so there are no saturation counts; Unreal's PCG absence is index-level not leaf-level; and the Steam rewrite date is press-reported, not Valve-stated.

## Sources

- https://about.tryarcade.com/hackathon · https://about.tryarcade.com/submit · https://about.tryarcade.com/judge · https://luma.com/2wuf8ns8
- https://www.mdpi.com/2079-8954/14/2/175 · https://arxiv.org/abs/2505.03547 · https://arxiv.org/html/2607.00527v2 · https://arxiv.org/html/2407.09013v1 · https://arxiv.org/abs/2503.21474
- https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry
- https://modl.ai/ · https://www.strayspark.studio/blog/validate-ai-generated-content-unreal-engine-before-it-ships · https://mvolution.itch.io/squire/devlog/901500/is-the-game-always-solvable
- https://dev.epicgames.com/documentation/en-us/unreal-engine/data-validation-in-unreal-engine · https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine · https://unity.com/features/ai
- https://en.wikipedia.org/wiki/Travian · https://www.producthunt.com/products/mythora · https://www.hunted.space/product/altworld-io · https://metavert.io/videos/winning-the-ai-virtual-worlds-hackathon-ali-el-rhermoul-generative-ai-claude · https://github.com/a16z-infra/ai-town
- https://docs.convai.com/api-docs/plugins-and-integrations/convai-unreal-engine-plugin/features/long-term-memory/how-long-term-memory-works · https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/
- https://artificialintelligenceact.eu/article/50/ · https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_xmp_json_ld/README.md · https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html · https://partner.steamgames.com/doc/gettingstarted/contentsurvey · https://sketchfab.com/blogs/community/introducing-the-noai-createdwithai-tags/
- https://github.com/Yellow-Dog-Man/Resonite-Issues/issues/6134 · https://docs.hyper3d.ai/en/get-started/quick-start · https://devpost.com/software/loomweaver
