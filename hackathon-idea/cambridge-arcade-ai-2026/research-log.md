# Research log — my own lookups (subagent logs appended separately)

## Opened successfully
| URL | What it gave | Date |
|---|---|---|
| https://about.tryarcade.com/hackathon | Event intelligence: theme, both tracks verbatim, all six criteria with weights, async-review judging format, prize structure, 25 judges | 2026-10 (accessed) |
| https://arxiv.org/abs/2607.00527 | "AI Native Games: A Survey and Roadmap", Xu/Meng/Xu/Verbrugge/Lucas/Zhao, submitted 2026-07-01 (v1), revised 2026-07-03. Abstract names "a roadmap for controllable generation, AI-as-mechanic design, multimodal and multi-agent systems, inference economics, evaluation, safety, and regulation". **The abstract page did NOT contain the playability-metric list or any "narrative coherence" metric** that a search snippet had suggested — NOT FOUND for items 2-5. The full text was not reached. | 2026-07 |
| https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry | **GDC State of the Game Industry 2026**, published 2026-02-03, run by GDC, base 2,300+ industry professionals. 36% of game workers use generative AI tools. Of those: research/brainstorming 81%, daily tasks 47%, asset generation 19%, **procedural generation 10%**, **player-facing features 5%**. 52% believe generative AI negatively impacts the industry. Verbatim respondent quote: "Why would I replace human creativity with a regurgitated amalgamation of everything that's come before?" | 2026-02-03 |

## Refused — FINAL, not retried, no mirrors/caches/archives used
| URL | Status |
|---|---|
| https://www.unrealengine.com/news/unreal-engine-5-7-is-now-available | HTTP 403 |
| https://www.tweaktown.com/news/107858/... (independent outlet on UE 5.7 PCG) | HTTP 403 |
| https://www.videogameschronicle.com/news/valve-has-significantly-rewritten-steams-rules-... | HTTP 403 |
| https://www.techpowerup.com/345302/steam-ai-disclosure-gets-clarification-for-ai-in-dev-tools | HTTP 403 |

## Searches run
1. `Unity Unreal Engine 2026 first-party validation AI-generated content PCG framework release notes narrative consistency NPC memory feature` (extended) — surfaced UE 5.7/5.8 PCG coverage and Convai/Inworld material; no first-party validation feature identified.
2. `GDC State of the Game Industry 2026 survey percentage developers using generative AI; Valve Steam AI content disclosure requirement date` (extended) — surfaced the GDC survey (then opened) and the Steam disclosure story (all four outlets then refused).

## Unopened leads (never used as evidence)
- **Steam AI disclosure rewrite.** Search summaries only, from aggregators and outlets I could not open: policy introduced January 2024, disclosure form "significantly" rewritten reportedly **16 January 2026**, narrowed to player-facing generative content and excluding AI dev tools such as code assistants. **UNCONFIRMED — one fetch of Valve's own Steamworks documentation would settle it.** Not used in any why-now.
- arXiv 2609.16679 "AI for Games in the Foundation Model Era" (surfaced, not opened).
- PAYADOR; PDDL-Mind; Aalborg thesis "Narrative Adherence in LLM driven Games"; arXiv 2304.03442 Generative Agents — all via subagent C, none opened.

## Research gaps (unresolved)
1. **Engine first-party absorption of content validation — UNRESOLVED.** Epic's PCG documentation returned an empty JS shell to subagent C; unrealengine.com and two independent outlets returned 403 to me. Best available evidence is indirect and points to "not absorbed": a third party (StraySpark) sells a $129+ Unreal PCG-graph audit plugin as of 2026-09-12, which implies Epic's framework lacks it; and Unity's AI surface (unity.com/products/ai, opened by subagent C) is an editor-time assistant, MCP server and CLI with no runtime NPC layer and no content validation. Confidence: inference from two opened sources, not a verified absence.
2. Steam AI disclosure rewrite — see leads above.
3. arXiv 2607.00527 full text not reached; its playability-metric list (which a snippet claimed includes "narrative coherence") is unverified.
4. Inworld's current product scope — subagent C found the visible surface is voice/inference infrastructure, conflicting with third-party claims about Memory/Knowledge modules. Needs inworld.ai/pricing opened directly.
5. Hyper3D Rodin in-game latency — not measured (inherited gap, deferred to judging-intel subagent).
6. Tencent Cloud LLM API availability, free credits and region restrictions for participants — not confirmed (inherited gap, deferred to judging-intel subagent).

---

# Gap-closing pass (browser retrievals, 2026-10-02) — both gaps CLOSED

## Gap 1 — Valve's generative-AI disclosure. Closed on substance; the 2026 date is NOT Valve-sourced.

Primary sources retrieved in full:
- `store.steampowered.com/news/group/4145017/view/3862463747997849618` — "AI Content on Steam", byline verbatim "Posted Wed, January 10, 2024 @ 12:16 AM UTC".
- `partner.steamgames.com/doc/gettingstarted/contentsurvey` — Steamworks Documentation, section "3) Generative Artificial Intelligence Content" (publicly readable, undated).

**Two categories, current wording, verbatim:**
- "**Pre-Generated:** Any kind of content that ships with your game and is consumed by players that is created with the help of AI tools during development… In our prerelease review, we will evaluate the output of AI generated content in your game the same way we evaluate all non-AI content".
- "**Live-Generated:** Any kind of content created with the help of AI tools while the game is running. In addition to following the same rules as Pre-Generated AI content, this comes with an additional requirement - in the Content Survey, you'll need to tell us what kind of guardrails you're putting on your AI to ensure it's not generating illegal content."

**The 2026 narrowing, verifiable by diffing the two retrieved Valve pages:** 2024 said "Any kind of content (art/code/sound/etc) created with the help of AI tools during development"; current says "Any kind of content **that ships with your game and is consumed by players**". "code" removed, a ships-and-is-consumed test inserted. Dev tools excluded, verbatim: "Efficiency gains through the use of these tools is not the focus of this section." The Live-Generated text is **unchanged**.

Also verbatim: "We will also include much of your disclosure on the Steam store page for your game"; a player-reporting channel exists — "players can easily submit a report when they encounter content that they believe should have been caught by appropriate guardrails on AI generation"; and "Q. So I can ship whatever I want as long as I complete these surveys? A. No."

**CRITICAL LIMIT — do not inflate this.** Valve requires **description, not guarantee**: "you'll need to tell us what kind of guardrails you're putting on your AI". Across both retrieved pages the words quality, coherence, playability and testing do not appear as requirements, and the only substantive gate beyond disclosure is the Live-Generated Adult Only Sexual Content prohibition. The player-reporting surface covers **illegal content only**, not quality or coherence. **There is no platform requirement that generated content be good, coherent, playable or correct.** Therefore Steam is NOT used as the why-now for any idea in this package.

**Date gap:** no Valve-authored, dated announcement of the 2026 revision exists on the pages retrieved; the Steamworks blog listing only paged back to 2026-09-02 and contains no AI post. The widely reported 16 January 2026 date is press-reported, not Valve-stated. HYPOTHESIS: shipped as a silent documentation edit.

## Gap 2 — Engine first-party content validation. ANSWER: neither engine ships it.

Retrieved (UE 5.8 docs, Unity product page, all 2026-10-02):
- `dev.epicgames.com/.../procedural-content-generation-framework-in-unreal-engine` — enumerates the **entire** PCG doc set as eight child topics: Overview, PCG Editor Mode, Shape Grammar, GPU Processing, Development Guides, PCG Biome, Procedural Vegetation Editor, **PCG Runtime Generation Debugging**. No validation, verification, linting or quality-gating topic. The closest item is diagnostic, verbatim: "An overview of PCG runtime generation debugging tools." A diagnostic viewer, not a gate.
- `dev.epicgames.com/.../data-validation-in-unreal-engine` — **decisive on the asset-vs-gameplay distinction.** Verbatim use cases: "Checking that assets meet name conventions / Enforcing space and performance budgets / Catching non-cyclic dependencies". Mechanism is `IsDataValid` on a `UObject`, or `CanValidateAsset`/`ValidateLoadedAsset` taking "a `UObject` pointer". **Unit of analysis is an asset pointer, not a play session.** The page does not mention PCG, generated output, gameplay logic, level completability or reachability. It is an extensible hook, not a solution — Epic ships no gameplay-logic validator category.
- `dev.epicgames.com/.../ai-features-tools-and-plugins-in-unreal-engine` — complete topic list is three items, **all editor-time**: "Unreal MCP", "Working with PCG and LLMs Using Unreal MCP", "Semantic Search". No runtime LLM NPC, dialogue, character-memory or narrative-consistency feature.
- `unity.com/products/ai` now **redirects to `unity.com/features/ai`**. The "Unity AI" brand is retired, verbatim: "We're retiring the \"Unity AI\" brand name." **Unity Muse is deprecated**, verbatim: "Unity Muse is a deprecated product offering". The offering is an in-editor assistant, an AI gateway, an MCP server, an official plugin and the CLI. The one runtime item is infrastructure: "Sentis remains active and serves as the engine for running neural network models natively within the Unity Runtime." On that page the strings "NPC", "dialogue", "memory", "narrative", "coherence" and "validat*" occur **zero** times.

**Bottom line: the validation layer is the studio's to build.** Coverage caveat: index pages were retrieved, not the PCG Overview leaf page or the 5.7/5.8 release notes, so the absence is index-level (strong, since Epic documents PCG features as child pages) rather than leaf-level.

## arXiv 2607.00527v2 full text — retrieved, and it corrects the earlier snippet

"AI Native Games: A Survey and Roadmap", Xu, Meng, Xu, Verbrugge, Lucas, Zhao; submitted 2026-07-01, v2 2026-07-03; corpus of "53 AI-native artifacts".

**The snippet claim was wrong:** the string "metric" appears **zero** times, and "narrative coherence" is not among the five occurrences of "coheren*". The paper does NOT list narrative coherence as a playability metric.

**What it actually says — stronger for a verification idea than the snippet claimed. Verbatim:**
- "One possible direction is a **generate-and-verify pipeline**: the model first proposes an event, quest, action interpretation, or rule outcome, and the game system then checks whether it is compatible with the current rules and state. For example, **does the required object exist? Can the player reach the location? Does the outcome contradict prior narrative or world state?** If validation fails, the system may ask the model to revise the proposal, ask the player t[o]…"
- "Several challenges therefore remain central. Runtime generation is still difficult to control, especially when outputs must remain coherent with game state and rules. Open-ended semantic input often exceeds the representational capacity of existing game systems. **Persistent memory, world-state tracking, and long-term consequence management remain fragile.**"
- "The design problem is to decide what the model may invent, what the system must verify, and which rules and states must remain fixed."
- Evaluation criteria, verbatim: "The most important criteria are **rule consistency, response latency, and long-session memory stability**… Benchmarks for AI-native games should therefore test extended play sessions, adversarial player behavior, and changes across model versions."
- On why pre-release review is structurally insufficient: "Dialogue, quests, images, and even rule outcomes may be produced during play, after certification and outside the direct view of developers. Safety therefore becomes a runtime design problem rather than only a pre-release review process".

A July 2026 survey naming generate-and-verify as an **open direction** — with the exact three checks (object exists / location reachable / contradicts prior world state) — is a dated, citable statement that this capability does not yet exist.
