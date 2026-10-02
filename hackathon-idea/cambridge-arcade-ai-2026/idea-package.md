# Idea package: cambridge-arcade-ai-2026

Mode hackathon - context general - depth full - discovery blind_subagent - 12 problems across 6 user groups - 2026-10-02

Request: Pressure-test three ideas generated with a weaker model for the Cambridge x Arcade AI Hackathon (3-4 Oct 2026); verify or kill each, regenerate if they do not survive, and deliver a final recommendation.

Ideas are listed in the order they were found. The order is not a ranking.

## The idea as stated

**Idea:** Three ideas from a prior package: (1) Narrative Drift Guard, middleware holding a JSON world-fact ledger with character-scoped retrieval before each NPC model call and a contradiction check after it; (2) World Coherence Verifier, a service running structural (A*/BFS), LLM-semantic and rule-based balance checks over generated maps, dungeons and quests, returning a content health report; (3) Living World Multiplayer, a persistent-world browser multiplayer game on Arcade AI where each short session's action accumulates and an LLM generates the faction and world consequences.

**Verdict:** Idea 3 is dead: its novelty claim is false twice over (Travian, a persistent browser multiplayer strategy MMO with asynchronous short sessions and raidable NPC faction villages, shipped June 2004 and peaked at over 5 million players; and Mythora and Altworld shipped the LLM version in 2026, Altworld with the identical world-database-then-narrate architecture), the a16z AI/Virtual Worlds hackathon grand prize in July 2023 was already a persistent multiplayer world with Claude-generated narrative, the claimed player complaint is unsourced, and the one platform capability it depends on is undocumented. Idea 2 dies as specified because its primary structural layer is table stakes, not innovation, but the problem behind it survives and the mechanism was regenerated into the shown idea. Idea 1 survives as a problem and is intact as a mechanism, but its memory half is already shipped by Convai and NVIDIA ACE, the hackathon genre is saturated (147 Devpost projects match 'npc memory'), and its addressable user group is 5% of the 36% of game professionals who use generative AI; it is recorded as the shown idea's noted alternative rather than as a second survivor.

**Checks that fired:** clone (idea 3); nonexistent_problem (idea 3, the claimed complaint is unsourced and three populated alternatives already serve the want); default_entry (idea 3, the AI-living-world framing duplicates shipped products and a prior grand prize); wrapper (the LLM-semantic-only variant of idea 2, whose reduction sentence was a fair summary); weekend_clone (idea 1, warning: one developer independently built all three of its mechanisms in about a week)

**Competitors:** Travian (https://en.wikipedia.org/wiki/Travian); Mythora (https://www.producthunt.com/products/mythora); Altworld.io (https://www.hunted.space/product/altworld-io); a16z AI/Virtual Worlds Hackathon grand prize (https://metavert.io/videos/winning-the-ai-virtual-worlds-hackathon-ali-el-rhermoul-generative-ai-claude); a16z-infra/ai-town (https://github.com/a16z-infra/ai-town); modl.ai (https://modl.ai/); StraySpark Unreal MCP Server (https://www.strayspark.studio/blog/validate-ai-generated-content-unreal-engine-before-it-ships); PCG Benchmark (FDG 2025) (https://arxiv.org/abs/2503.21474); Convai long-term memory (https://docs.convai.com/api-docs/plugins-and-integrations/convai-unreal-engine-plugin/features/long-term-memory/how-long-term-memory-works); NVIDIA ACE (https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/)

## Event

Cambridge x Arcade AI Hackathon - the event's own site (/hackathon, /submit, /judge); registration on Luma; comms on Discord. Not Devpost, Devfolio, itch.io or MLH. - window Sat 3 Oct 11:00 to Sun 4 Oct 14:00 Cambridge time, about 27 hours elapsed, with the venue shut 18:00 to morning - Async: '3+ independent reviews per project. Top 3 per track win.' Judges 'Watch the demo, open the project, then score six criteria from 1 to 5.' Separate onsite Winner Demo with live stream 15:30-17:00 Sunday. - https://about.tryarcade.com/hackathon

| Criterion | Weight | Quote | Source | Implication |
|---|---|---|---|---|
| Innovation & Originality | 20% | 20% Innovation & Originality | https://about.tryarcade.com/hackathon | No definition is published, so the only defence is a mechanism a reviewer has not seen in the other projects they score. Prior art must be pre-empted on screen, because a reviewer who recognises a standard technique will mark it down and no other line compensates. |
| Execution & Functionality | 25% | 25% Execution & Functionality | https://about.tryarcade.com/hackathon | The largest line, scored 1-5 from a video plus one opened link, so one point is 5% of the final score. A thing that visibly runs on the reviewer's own input beats a thing that is described. |
| AI × Gaming Relevance | 15% | 15% AI × Gaming Relevance | https://about.tryarcade.com/hackathon | A separate line from Innovation, so the model has to be legible as the thing that makes the project work. A project whose demo is unchanged when the model is removed loses a line that nothing else can recover. |
| Track fit | 25% | 25% Track fit | https://about.tryarcade.com/hackathon | Joint-largest line with no published definition, so the track's own bullet list is the de facto rubric. Landing squarely on a named bullet is trivially defensible; sitting between tracks hands a reviewer a reason to score 3 on a quarter of the score. |
| Potential & Impact | 10% | 10% Potential & Impact | https://about.tryarcade.com/hackathon | The only forward-looking line, and the panel includes investors and a Tencent recruiting manager. One concrete sentence about who uses this next week is cheap to supply and is the only place in the rubric that rewards it. |
| Demo & Clarity | 5% | 5% Demo & Clarity | https://about.tryarcade.com/hackathon | Worth least directly but it is the delivery channel for the other 95%, because the dashboard tells reviewers to watch the demo first. The event also publishes a 'Never judged' list naming 'English fluency', 'Slides' and 'Public speaking', so a deck and a polished narrator are worth zero and a captioned screen capture is fully compliant. |

## Dead State

Problem: hypothesis (moderate) - Wedge: untested

**Concept:** A pre-ship gate for machine-generated quests and items. A model types the content into a precondition-effect model over named world facts; a reachability search then reports whether any ordering of available actions completes every quest, and when none does, returns the dead state and the trace that reaches it. The build step exits non-zero, and every content version is kept with its verdict so a regression can be re-run.

**Problem:** A general model asked for a quest chain writes prose that reads perfectly and is sometimes impossible to finish: the item a quest requires is never obtainable, the merchant who sells it dies in an earlier mandatory quest, the gate guarding a region can only be opened from the far side. Nobody catches these cheaply. A designer finds them by playing, which samples the failures they happen to walk into rather than establishing whether any completion exists.

**User:** A developer shipping machine-generated quests, items and regions, at the moment a generated batch comes back and before it enters the build. In the GDC survey this is the procedural-generation slice: 10% of the 36% of 2,300+ professionals who use generative AI.

**Why it matters:** Not because the capability is absent - it partly exists. G-KMS validates LLM quest output for state reachability over a narrative graph and STORY2GAME extracts preconditions and effects from prose. The reason this is still worth building is narrower and sturdier: prose-generating models are exactly the class that cannot be made valid by construction, because the generator is not a constraint solver, so content from an arbitrary general model arrives untyped and unchecked. And the failure that bites is cross-quest: an item that is never obtainable sits in the world-fact state space, which a dialogue-graph dead-end check passes.

**Core workflow:** A generated batch arrives as whatever the generator emits, prose included. Step 1, type it: every quest step becomes an action with preconditions and effects over named world facts such as has(sunstone), alive(merchant_oren), north_gate_open and standing(ironhand) at or above 2, and every item gets the actions that can produce it. Step 2, search: a reachability search from the starting state asks whether some ordering of available actions satisfies every quest's preconditions, and whether any required fact is unreachable or destroyed before it is needed. Step 3, report: either a completion order exists, or no completion path exists in the extracted model - reported as the dead state, the trace that reaches it, and the specific fact that can never hold. Step 4, gate: the build step exits non-zero on a proof of failure, and the content version, its verdict and its trace are kept so a later generator change that reintroduces the same failure is caught against the stored corpus. Step 5, only once a region passes, Rodin generates its 3D asset, so mesh generation is the visible reward for passing.

**Ai role:** Extraction and normalization, confined to one step. The model turns free-form generated prose into typed preconditions and effects over named facts, which plain code cannot do because the content is written differently every run, renames things freely, and often implies a requirement in a sentence rather than stating it in a field. The model never issues the verdict. A reachability search over the extracted model does, which is why the output is a counterexample rather than an opinion, and why the same content always yields the same answer.

**Non ai product:** The action-model schema, the reachability search, the counterexample-trace format, the build-step gate with its non-zero exit, the stored corpus of content versions with their verdicts, and the regression check against it. Remove the model and this is a quest-dependency checker that consumes a typed specification - narrower, because a human or the generator must emit the typed form, but a working and useful tool.

**Data loop:** Every verified content version is kept with its proof trace, which becomes a regression set: a generator change that reintroduces a past failure is caught against stored cases rather than rediscovered by a player. And when a developer marks an extraction wrong, that content becomes a fixture with a known-correct typing, which is the only thing that measures whether the extractor is sound.

**Hard part:** Whoever writes the premises decides the conclusion, and that is stated rather than hidden. The search is sound over the extracted model, so everything rests on the typing: a single mistyped precondition makes the system confidently report the wrong thing, and a false 'no completion path' on good content is worse than no gate at all. The demo therefore shows the extracted model beside the source prose so the typing is checkable by eye, and shows a deliberately mistyped case and how the system surfaces it. The second hard part is that reporting no completion exists is a stronger claim than failing to find one, and the trace is the evidence.

**Technical implementation:** A single service behind one public URL, since the submission form has exactly one project link slot. Content in, as prose or JSON. An extraction pass over a hosted model emits a typed action set against a fixed schema, validated against that schema before anything else runs, so a malformed extraction is reported rather than silently proved. A breadth-first reachability search over world-fact states issues the verdict and records the trace. Verdicts, traces and content versions persist so the regression check works. Rodin is called only on a passing region, asynchronously and ahead of time, with results cached - its own client example enforces a 20-minute deadline, so nothing waits on it during a demo. A seeded corpus of deliberately broken content with known-correct verdicts produces the caught-versus-missed table.

**Mvp scope:** In: one content schema, the extraction pass with schema validation, the reachability search, the counterexample trace, the report, the stored corpus with the regression check, a paste-your-own box with three one-click samples, and the caught-versus-missed table over the seeded corpus. Also in, because it is cheap and it is the prize condition: Rodin generating one asset for one region that passed. Out: engine plugins, multiple content schemas, the balance and difficulty-curve heuristics entirely, structural tile-map reachability as a headline feature, any runtime mode, accounts, and any claim to validate anything beyond quest and item dependencies.

**Differentiation:** Against G-KMS, the closest prior art: it validates reachability over a dialogue and choice graph and repairs its own generator's output; this reasons over world facts and gates content from any generator, and catches the unobtainable-item case its dead-end metric passes. Against STORY2GAME: it publishes the extraction, not a verdict, a trace or a gate. Against the FDG 2025 benchmark: that compares generators over fixed research domains. Against modl.ai, nunu.ai, ManaMind, Regression Games and Razer: all play a finished build, none reads a specification. Against valid-by-construction generators, which is the objection that actually bites: where a constraint was expressible at generation time they win outright, and the honest scope is content from prose-generating models, where no constraint was expressible.

**Risks:** The mechanism family is published. G-KMS validates reachability on LLM quest output and STORY2GAME extracts preconditions and effects, so Innovation at 20% rests on a narrow distinction - world-fact dependency versus narrative-graph reachability, plus the gate positioning. That distinction is true but it is subtle, and a reviewer has minutes.; Whoever writes the premises decides the conclusion. A mistyped precondition produces a confident wrong answer, and a false negative on good content is worse than no gate. This is the central mechanical risk and must be on screen rather than argued away.; The population is small: procedural generation is 10% of the 36% of 2,300+ surveyed professionals, which is about 3.6% of them. Leading with 36% would misrepresent it.; The problem is a hypothesis. The one developer found answering this question publicly reports no verifier and no felt pain, accepting that levels are beatable 'practically always'.; Valid-by-construction removes the need wherever a constraint was expressible at generation time, and G-KMS is itself an instance of that architecture for LLM quests.; A reviewer will pattern-match to 'AI playtesting bot', a pre-registered default, in the first few seconds. The distinction - it reads the spec not the build, and it refuses content rather than generating it - has to be stated immediately.; A verifier demo has no partial credit: if the gate passes what it should block, or blocks what it should pass, on camera, the thesis is gone.; Unresolved submission risk: the shared form renders an Arcade Game Link as required and this has no Arcade presence.

**Buildable in event:** Fits about 27 hours with the overnight break, for a small team, because the three pieces are independent and the risky one is first. Saturday before the venue shuts: the content schema, the seeded corpus of deliberately broken content, and the reachability search with its trace - all deterministic and testable without a model. Saturday night online: the extraction pass and its schema validation, which is the only part that can fail in an interesting way, plus the caught-versus-missed table. Sunday morning: the single public URL with paste-your-own and three samples, the stored-corpus regression check, one cached Rodin asset for a passing region, and the video. Seeded from content a general model actually generated, with the broken cases produced by generation rather than hand-written, so the failures are real. Nothing is mocked in the core loop; if extraction proves too unreliable overnight, the fallback is to accept a typed specification directly and show the extraction as a second, labelled mode - the proof and the trace, which are the contribution, do not depend on it.

**Wedge:** Cross-quest world-fact dependency, which the published work does not cover: G-KMS checks reachability over a dialogue and choice graph and reports zero dead ends, but a quest graph can terminate perfectly while the item it requires is never obtainable because the only merchant who sells it dies in an earlier mandatory quest. That failure lives in the world-fact state space, not the narrative graph. And it is positioned where no AI game-QA vendor sits: all five found play a finished build, so nothing reads a content specification before a build exists.

Fingerprint: domain: game production pipelines for machine-generated content; user: a developer shipping machine-generated quests, items and regions, at the moment a generated batch comes back and before it enters the build; job: know whether a generated quest chain can actually be completed, and where it breaks, without playing it; mechanism: a model types free-form generated content into a precondition-effect action model, then a reachability search over that model proves completability or returns the exact dead state, and the build is gated on the proof; mechanism_family: verify; buyer_or_demo: solo and small studios shipping generated quest content; demo moment is a quest chain that reads perfectly being proved impossible, with the dead state and the trace on screen

### Wrapper filter (Stage 4b/6W)

**What the product is:** A gate in a game's content pipeline that holds a formal precondition-effect model of the quest and item graph, proves whether the content can be completed from the starting state, refuses content that reaches a dead state with the failing trace attached, and keeps every verdict as a regression corpus.

**Model in the core loop:** True

**Reduces to:** The user gives generated quest content to a model and gets a list of problems back - fair summary: False

**AI leverage:** extraction; normalization; reasoning over messy inputs - why plain code isn't enough: The content is free-form prose emitted differently on every run by a general model: it renames the same item three ways, states a requirement in a sentence rather than a field, and implies a precondition by narrative order. No parser, template or schema survives that, because the generator is not bound by one. Typing it is the step that needs a model; deciding whether the typed model admits a completion does not, and must not, because an opinion cannot be a proof.

**Without the model:** The action-model schema, the reachability search, the counterexample-trace format, the build-step gate and its non-zero exit, the stored corpus of content versions with their verdicts, and the regression check against that corpus (survives: substantial)

**Wrapper shape declared:** none - differs: 

| Wrapper-smell question | Answer |
|---|---|
| q1_one_api_call | False |
| q2_textbox_ui | False |
| q3_prompt_differentiator | False |
| q4_workflow_outside_model | True |
| q5_touches_real_systems | True |
| q6_improves_with_use | True |
| q7_pays_after_novelty | True |
| q8_chatgpt_would_suggest | False |

### Authenticity signals

| Signal | Group | How it holds in this product | Basis |
|---|---|---|---|
| narrow_persona | workflow | A developer shipping machine-generated quests and items, at the moment a generated batch returns and before it enters the build - the procedural-generation slice the GDC survey measures at 10% of the 36% | evidence |
| integration | workflow | Runs as a build step that consumes the generator's own output shape and exits non-zero on a proof of failure, so it sits where the content already passes rather than asking anyone to visit a new tool | commitment |
| automation_changes_workflow | workflow | Replaces a designer sampling generated content by playing it with a gate that establishes whether any completion exists and names the failing step, which is a different claim rather than a faster version of the same one | commitment |
| domain_logic | workflow | The schema encodes notions no general checker carries: item obtainability, quest prerequisite ordering, whether an NPC who sells a required item survives an earlier mandatory quest, which side a gate opens from, and faction standing thresholds | commitment |
| accumulated_history | compounding | Every content version is stored with its verdict and trace, so a generator change that reintroduces a previously proved failure is caught against stored cases instead of being rediscovered by a player | commitment |
| feedback_loop | compounding | A developer marking an extraction wrong turns that content into a fixture with a known-correct typing, which is the only thing that measures whether the extractor is sound and the only way the measurement improves | commitment |
| deterministic_core | substance | The verdict is a reachability search over the typed model, not the model's judgement, so the same content always returns the same answer and the output is a counterexample trace rather than an opinion | commitment |
| eval_infrastructure | substance | A seeded corpus of deliberately broken generated content with known-correct verdicts yields a caught-versus-missed table, which is the number that says whether any of this works and is shown in the demo | commitment |
| hard_implementation | substance | Typing free-form prose into a model sound enough to prove a negative, and keeping the search tractable as the item graph grows, where proving no completion exists is harder than failing to find one | commitment |

**Moat:** eval infrastructure; domain model; accumulated history - Calling a model API gets an opinion about a quest; it does not get a sound typed model or a proof. The part that resists copying is the corpus of real generator failures with known-correct verdicts, because that corpus is the only instrument that says whether an extractor is sound, and it accumulates only by running against content real generators actually produced. A competitor can copy the schema in an afternoon and still have no way to know whether their typing is right.

### What they do today

| Alternative | What they actually do | What changes with this |
|---|---|---|
| manual process | A designer plays through the generated content looking for breaks, which samples the failures they happen to walk into and does not scale with the volume a generator produces | A search establishes whether any completion exists at all, and names the dead state when none does |
| scripts | Hand-written inline validity rules per project - a flood fill for reachability, an assertion that a required item exists somewhere - rewritten from scratch for every game | Dependency and obtainability reasoning comes from a typed model rather than per-project assertions, and covers orderings nobody thought to assert |
| in-house tool | A studio with a release-engineering function builds its own content checks against its own schema, which is why no open-source verifier has stars | Works on content that was never typed in the first place, which is exactly what a general model emits |
| doing nothing | Accepting probabilistic validity, as the Dungeon Squire developer states: levels are beatable 'practically always' and 'the game doesn't explicitly guarantee beatable levels' | Turns an assumption about the content into a checked property, at the cost of typing it |

**Why now:** behavior - 2026-02 - Prose-generating models entered real game pipelines, which creates a class of content that cannot be made valid by construction: the generator is not a constraint solver, so quest and item content arrives untyped and with no constraint expressible at generation time - threshold: About 3.6% of surveyed game professionals - 10% of the 36% of 2,300+ respondents who use generative tooling - now use it for procedural generation, and about 1.8% for player-facing features. Small, and stated at the figure that matters rather than at the 36% headline - couldn't before: Studios whose generated content came from constraint, wave-function-collapse or reinforcement-learning generators, all of which can embed playability at generation time and therefore need no gate; the gap only opens for content written as free prose by a general model

### Evidence

Overall moderate: Shown as a hypothesis, and the card leads with its first test. One earlier claim is now withdrawn: the capability is not absent. G-KMS validates LLM quest output for state reachability and STORY2GAME extracts preconditions and effects from prose, both published, so the mechanism family exists. What survives is narrower: cross-quest world-fact dependency rather than narrative-graph reachability, and a generator-agnostic pipeline gate rather than a generator that repairs its own output. The absence that remains well sourced is at the product layer - every one of five AI game-QA vendors plays a finished build and none reads a content specification, and neither engine ships a solvability checker for generated gameplay content. What is NOT established is that developers feel this acutely: the population is about 3.6% of surveyed professionals and the one developer found answering this exact question in public reports no verifier and no pain. Counter-evidence: The strongest objection is valid-by-construction, and G-KMS is an instance of it: schema-governed generation with normalization-based repair and an admission gate, which removes the need for a separate verifier for its own generator. Constraint, wave-function-collapse and reinforcement-learning generators do the same. The 2024 PCG survey calls existing pathfinding playability checks effective and names compute cost as the drawback, so the stated bottleneck is cost rather than absence - and adding model calls makes cost worse. A solo developer asked this exact question publicly reports no verification process and no felt pain. And an earlier supporting claim has been downgraded: a GitHub query returning zero results for a literal phrase is weak evidence, not a fact, as a solo lore-to-PDDL-to-planner pipeline demonstrates. Missing voices: Nobody at a studio large enough to have a release-engineering function; the GDC survey aggregates but does not let this segment speak. No non-English-language developers. No QA contractors, who are the people currently absorbing this work by hand. Reddit, where roguelike and procedural-generation developers actually congregate, was unreachable throughout, so the most relevant practitioner community is absent from every source here.

| Type | Claim | Strength | Speaker | About | Source | Date |
|---|---|---|---|---|---|---|
| evidence | 36% of game workers use generative AI tools; of those, 10% use it for procedural generation and 5% for player-facing features | moderate | Game Developer, reporting the GDC State of the Game Industry 2026 survey | 2,300+ surveyed game industry professionals and what they reported doing | https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry | 2026-02 |
| evidence | 52% of surveyed game professionals believe generative AI is having a negative impact on the industry | moderate | Game Developer, reporting the GDC State of the Game Industry 2026 survey | 2,300+ surveyed game industry professionals | https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry | 2026-02 |
| fact | A July 2026 survey of AI-native games names a generate-and-verify pipeline as a possible open direction, listing exactly these checks: 'does the required object exist? Can the player reach the location? Does the outcome contradict prior narrative or world state?' |  | Xu, Meng, Xu, Verbrugge, Lucas and Zhao | the state of AI-native game research and a corpus of 53 AI-native artifacts | https://arxiv.org/html/2607.00527v2 | 2026-07 |
| fact | The same survey states that 'Persistent memory, world-state tracking, and long-term consequence management remain fragile' and that 'Runtime generation is still difficult to control, especially when outputs must remain coherent with game state and rules' |  | Xu, Meng, Xu, Verbrugge, Lucas and Zhao | open challenges in AI-native games | https://arxiv.org/html/2607.00527v2 | 2026-07 |
| fact | The 2024 survey of procedural generation via generative AI names pathfinding-based playability checking as existing and effective: 'the use of gameplaying agents, commonly pathfinding algorithms or other hand-crafted AI, to determine playability. While these are effective, they come at a high computational cost' |  | Mao, Yu, Yamada and Zielewski | established validation practice in procedural generation | https://arxiv.org/html/2407.09013v1 | 2024-07 |
| fact | Unreal Engine's PCG documentation enumerates its entire topic set as eight child pages, none of which is validation, verification, linting or quality-gating; the closest is diagnostic, described as 'An overview of PCG runtime generation debugging tools' |  | Epic Games documentation | Unreal Engine 5.8's PCG framework | https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation-framework-in-unreal-engine | 2026-10 |
| fact | Unreal's Data Validation plugin is per-asset and editor-time, with stated use cases 'Checking that assets meet name conventions', 'Enforcing space and performance budgets' and 'Catching non-cyclic dependencies', operating on a UObject pointer; the page does not mention PCG, generated output, gameplay logic or level completability |  | Epic Games documentation | Unreal Engine 5.8's Data Validation plugin | https://dev.epicgames.com/documentation/en-us/unreal-engine/data-validation-in-unreal-engine | 2026-10 |
| fact | Unity's AI offering is editor-time: an in-editor assistant, an AI gateway, an MCP server, an official plugin and the CLI, with Sentis as the runtime inference host. Unity Muse is deprecated and the 'Unity AI' brand retired. The strings NPC, dialogue, memory, narrative, coherence and validat* occur zero times on the page |  | Unity Technologies product page | Unity's shipped AI feature set | https://unity.com/features/ai | 2026-10 |
| fact | modl.ai's input is an uploaded game build which AI agents play, and its agent 'observes and interacts with the game purely through visuals'; it finds 'visual glitches, missing assets, performance issues, and gameplay logic bugs' |  | modl.ai product site | modl.ai's own product | https://modl.ai/ | 2026-10 |
| fact | A GitHub repository search for dungeon solvability checker returns 0 results, and one for procedural generation validation in games returns 10, none above 5 stars |  | GitHub search API | public open-source repositories | https://api.github.com/search/repositories?q=procedural+generation+validation+game | 2026-10 |
| fact | A third-party Unreal plugin priced from $129 already sells pre-ship validation of AI-generated content with a uniform issue report, covering 'Blueprint structure, widget layout, asset data, material setup, animation setup, PCG graph, import preflight' |  | StraySpark blog | its own product | https://www.strayspark.studio/blog/validate-ai-generated-content-unreal-engine-before-it-ships | 2026-09 |
| evidence | COUNTER-EVIDENCE. A solo developer asked publicly whether his procedurally generated game is always solvable answered 'Practically always', stated 'The game doesn't explicitly guarantee beatable levels', and based this only on 'my experience so far' - describing neither a verifier nor the manual playthrough QA the problem statement attributes to him | moderate | mvolution, the game's developer | his own game's generation and his own practice | https://mvolution.itch.io/squire/devlog/901500/is-the-game-always-solvable | 2026-10 |
| fact | The only conditional prize criterion on the event page is 'Hyper3D prizes are available to eligible projects using Hyper3D', attached to the $1,152 Hyper3D Business Subscription in the Game Tech first-place bundle |  | the event organisers | the event's own prize conditions | https://about.tryarcade.com/hackathon | 2026-10 |
| fact | Rodin's generation API is asynchronous and its official client example 'starts polling after 5 seconds, increases the delay to at most 30 seconds, enforces a 20-minute deadline', with a per-account concurrency cap that rejects submissions with API_PARALLELISM_LIMIT_REACHED |  | Hyper3D documentation | its own API's latency and limits | https://docs.hyper3d.ai/en/get-started/quick-start | 2026-10 |
| assumption | Typing free-form generated prose into a sound precondition-effect model is accurate enough at demo scale that false verdicts are rare; a wrong extraction produces a wrong proof, which is the mechanism's central risk |  |  |  |  |  |
| assumption | A reachability search over the extracted action model stays tractable for the quest and item graph sizes a small studio ships, without needing a real planner's optimisations |  |  |  |  |  |
| assumption | A Game Tech Track submission does not require a published Arcade game link, despite the shared submission form rendering that field as required |  |  |  |  |  |
| hypothesis | At least 3 of 10 developers who have shipped machine-generated quest or item content have shipped at least one quest that could not be completed, and found out from a player rather than from a tool |  |  |  |  |  |
| fact | G-KMS already publishes schema-governed LLM quest generation with reachability validation for an RPG: 'The LLM produces structured JSON representations that are subsequently normalized and validated to enforce schema compliance, state reachability, and consistency of world references. Valid outputs are retained as executable artifacts, whereas invalid outputs are repaired or discarded.' It models a quest as 'a directed acyclic graph composed of conditional transitions, choice nodes, and terminal states', measures 'path length, branching ratio, dead ends, and ending counts', and reports 'No generated quests contain dead ends or unreachable terminal states.' Critically, the words precondition, planner, PDDL and BFS do not appear anywhere in the paper: its reachability is over a dialogue and choice graph, not over a world-fact state space. |  | the paper's authors | their own Game Knowledge Management System and its evaluation on a 2D Unity RPG benchmark | https://www.mdpi.com/2079-8954/14/2/175 | 2026 |
| fact | STORY2GAME already publishes LLM-extracted preconditions and effects in a game context: 'The key to successful action generation is to use LLM-generated preconditions and effects of actions in the stories as guides for what aspects of the game state must be tracked and changed.' Its abstract claims no reachability verdict and no build gate. |  | Zhou, Basavatia, Siam, Chen and Riedl | their own system for generating games from stories | https://arxiv.org/abs/2505.03547 | 2025-05 |
| evidence | The lore-to-planner idea is in the air and solo-buildable: a public pipeline runs 'Structured lore -> Retrieve similar examples (RAG) -> Build planning prompt -> Generate PDDL with a local LLM -> Validate with Fast Downward' with a reflection loop on validation failure. 0 stars, one M.Sc. student, not quest-oriented per its README. | weak | the repository's README | its own pipeline | https://github.com/PaoloPangallo/PDDL_LLM | 2026-10 |

### Competitors and alternatives

| Class | What the scan found |
|---|---|
| startup | Every AI game-QA company found plays a finished build rather than reading a content specification: modl.ai (vision-based agents on an uploaded build), nunu.ai ($6M seed, customers named as Warner Bros., Scopely, Roboto Games), ManaMind ($1.5M pre-seed April 2026), Regression Games, and Razer's QA Companion AI announced at GDC 2026. This pipeline-stage distinction is the clearest white space found. The nearest commercial match is StraySpark's Unreal MCP Server from $129, dated 2026-09-12, which validates engine artifacts (Blueprints, materials, PCG graphs, import preflight) with a uniform issue report rather than gameplay logic. |
| oss | No standalone verifier exists: GitHub returns 0 repositories for dungeon solvability checker and 10 (none above 5 stars) for procedural generation validation. The real open-source tooling is generators that bake validity in - gym-pcgrl at 134 stars and control-pcgrl at 47 stars embed playability as a reinforcement-learning reward term, and constraint and wave-function-collapse generators enforce it at generation time. That is the architectural rival: if content is valid by construction there is nothing to verify. |
| hackathon | Solvability checking appears repeatedly as an internal one-line feature of hackathon games and never as the deliverable - three separate Devpost games describe running a solver or BFS to check level solvability among their features. No hackathon project found has content validation as its product. Devpost's project search was refused with a bot challenge on seven URLs, so this absence is scoped to the results that were reachable, and there are no category counts. |
| platform | Neither engine ships a solvability checker for generated gameplay content. Unreal's Data Validation plugin is per-UObject, editor-and-CI-time asset validation scoped to naming conventions, performance budgets and dependencies, with no mention of PCG output, gameplay logic or completability - an extensible hook, not a solution. Unity's AI surface is editor-time plus Sentis as a runtime inference host, with Muse deprecated. Scoped honestly, correcting an earlier overclaim: absence from Unreal's PCG table of contents is weak evidence for absence of capability, since validation could live in automation, functional tests or custom validators. The defensible claim is that Epic ships no solvability checker for PCG graphs, not that Unreal cannot validate anything. |
| research | The decisive class, and it is more crowded than first assessed. G-KMS (Systems 14(2):175, 2026) already validates LLM quest output for 'schema compliance, state reachability, and consistency of world references', models quests as a directed acyclic graph of conditional transitions, choice nodes and terminal states, and reports zero dead ends - but has no precondition-effect model, no planner, no PDDL and no BFS, so its reachability is over a narrative graph rather than a world-fact state space. STORY2GAME (2025-05, Riedl et al.) publishes the extraction half: 'LLM-generated preconditions and effects of actions in the stories as guides for what aspects of the game state must be tracked and changed.' A solo PDDL_LLM pipeline runs lore to PDDL to Fast Downward. The FDG 2025 PCG Benchmark implements A*-based solvability as graded pass-rates. A July 2026 survey of AI-native games names a generate-and-verify pipeline as an open direction, listing 'does the required object exist? Can the player reach the location? Does the outcome contradict prior narrative or world state?' - which is evidence the field finds it interesting and that nobody has shipped it, not evidence of pain. Net: the mechanism family is published; what is unclaimed is cross-quest world-fact dependency reachability as a generator-agnostic pipeline gate with a counterexample trace. |
| workaround | Manual playthrough by a designer, hand-written inline validity rules, seed blacklisting, and - evidenced directly - simply accepting probabilistic validity, as the Dungeon Squire developer describes. The 2024 survey confirms agent-based playability checking is current practice at known compute cost. |

| Name | Kind | URL | How this differs |
|---|---|---|---|
| modl.ai | startup | https://modl.ai/ | modl.ai needs a playable build and plays it with vision-based agents after the build exists; Dead State reads the content before a build exists and never runs the game. modl.ai cannot report that a quest requires an item the loot table never produces without happening to play to it. |
| StraySpark Unreal MCP Server | startup | https://www.strayspark.studio/blog/validate-ai-generated-content-unreal-engine-before-it-ships | Same mechanism family and the same pre-ship issue-report shape, but its object of validation is engine artifacts - Blueprint structure, materials, PCG graphs, import preflight. It checks whether assets are well formed; Dead State checks whether the game described by the content can be finished. It is also Unreal-only. |
| PCG Benchmark (FDG 2025) | research | https://arxiv.org/abs/2503.21474 | Already implements A*-based solvability and win/lose criteria as graded pass-rates, so Dead State cannot claim structural checking as novel. But it is a benchmark for comparing generators over fixed research problem domains, run by researchers; Dead State types arbitrary developer content into an action model and returns a located counterexample to a developer. |
| gym-pcgrl | oss | https://github.com/amidos2006/gym-pcgrl | Embeds playability as a reward term inside the generator, so validity is produced rather than checked. This is the architectural rival rather than a competing product: where it applies, a post-hoc gate is unnecessary. Dead State targets the case it does not cover - content written as free-form prose by a general model, where no constraint was expressible at generation time. |
| AI Native Games: A Survey and Roadmap | research | https://arxiv.org/html/2607.00527v2 | Names the generate-and-verify pipeline as a direction the field should pursue and lists the three checks almost exactly; it does not build one. Dead State is an implementation of the direction this survey describes as open, which is also the strongest available answer to a reviewer asking whether this is novel. |
| Unreal Data Validation | platform | https://dev.epicgames.com/documentation/en-us/unreal-engine/data-validation-in-unreal-engine | Validates a UObject against scripted rules at editor and CI time - naming conventions, budgets, dependencies. Its unit of analysis is an asset pointer; Dead State's is a reachable state space. Epic ships the hook and no gameplay-logic rule, so Dead State could in principle be delivered through this very plugin. |
| Manual playthrough and accepted probabilistic validity | workaround |  | A designer plays the generated content, or nobody checks and the developer accepts that levels are beatable 'practically always'. Dead State replaces a sampling process with a proof: a playthrough finds the failures it happens to walk into, while a reachability search finds whether any completion exists at all. |
| G-KMS (Systems 14(2):175) | research | https://www.mdpi.com/2079-8954/14/2/175 | The closest prior art, and it removes the novelty of the category. It already validates LLM quest output for 'schema compliance, state reachability, and consistency of world references', reports zero dead ends and counts reachable endings. What it does not do: it has no precondition-effect model, no planner, no PDDL and no BFS - the words do not appear in the paper. Its reachability is over a dialogue and choice graph, so a quest graph that terminates correctly still passes even when the item it requires is unobtainable. It is also schema-governed generation that repairs its own output, i.e. valid-by-construction for its own generator, whereas this is a gate over content from any generator. |
| STORY2GAME | research | https://arxiv.org/abs/2505.03547 | Publishes the extraction half outright: LLM-generated preconditions and effects as guides for what game state to track. So typing prose into a precondition-effect model is not novel. What its abstract does not claim is a reachability verdict over that model, a counterexample trace, or a pipeline gate - which is what is left. |
| PDDL_LLM | oss | https://github.com/PaoloPangallo/PDDL_LLM | Lore to PDDL to Fast Downward with a reflection loop, by one student, not quest-oriented. Weak as competition but strong evidence the approach is buildable solo, which also means the GitHub query that returned zero results for 'dungeon solvability checker' was too literal to support any absence claim. |

### Sponsors

| Sponsor | Product | Capability | Why needed | Without it | Component | Depth | Sponsor goal |
|---|---|---|---|---|---|---|---|
| Hyper3D | Rodin (text and image to 3D), via the api.hyper3d.com/api/v2 REST API | Asynchronous text- and image-to-3D mesh generation returning .obj, .fbx or .glb, with tier, mesh-mode and quality controls | It makes passing the gate visible. A region that has been proved completable gets its 3D asset generated; a region that failed does not. That turns an abstract verdict into something a reviewer sees on screen, and it places the project on the 'production pipelines' bullet rather than leaving it a text report. | The gate still works and the demo still lands on the proof and the trace; the report stays textual and the pipeline framing weakens. Also forfeits the $1,152 Hyper3D Business Subscription, which is conditional on using Hyper3D. | The post-gate asset step: Rodin is called only on content that passed, asynchronously and ahead of the demo, with results cached | meaningful | Shows Rodin inside a production pipeline with a quality gate in front of it, which is a stronger story for Hyper3D than another prompt-to-mesh demo: it positions mesh generation as the step that happens once the content is known to be sound. |

### Judging criteria alignment

| Criterion | How it's earned | Basis | Source | Gap |
|---|---|---|---|---|
| Innovation & Originality | Narrow and stated as narrow. The category is published - G-KMS validates LLM quest output for state reachability, STORY2GAME extracts preconditions and effects - so the claim is not that this is new but that the published work checks a different graph. G-KMS's reachability runs over a dialogue and choice graph and reports zero dead ends; a quest graph can terminate correctly while the item it requires is never obtainable, because that failure lives in the world-fact state space. The remaining contributions are that distinction, the generator-agnostic pipeline position, and the counterexample trace as a developer artefact. | inference | https://www.mdpi.com/2079-8954/14/2/175 | This is now the weakest line. The distinction between world-fact and narrative-graph reachability is real but subtle, and a reviewer scoring 1-5 in minutes may not register it; a reviewer who knows G-KMS or STORY2GAME could reasonably score this as packaging. Any claim that the capability is absent must be dropped from the pitch. |
| Execution & Functionality | One public URL a reviewer opens and pastes their own content into, which runs the real extraction and the real search and returns a trace. Scoring is 1-5 from a video plus one opened link, and the whole thing is deterministic after extraction, so it behaves the same on a reviewer's input as in the video. The caught-versus-missed table over the seeded corpus is the functionality claim stated as a number. | official | https://about.tryarcade.com/hackathon | A false verdict on a reviewer's own pasted content is the worst failure available and is the one thing that cannot be rehearsed. Reporting 'could not type this content' instead of guessing limits the damage but costs a little of the wow. |
| AI × Gaming Relevance | The model does the one thing no rule can - turning prose that names things differently every run into typed preconditions and effects - and the demo shows the extracted model beside the source text, so what the model contributed is legible rather than asserted. Remove the model and the demo visibly changes: the tool would need a typed specification handed to it. | inference |  | This is a tool for making games rather than a game, so a reviewer weighing 'gaming' as 'a thing I play' may score it lower. The track's own bullets name dev tools and production pipelines, which is the answer, but it is an argument rather than a given. |
| Track fit | Lands on two of the five Game Tech bullets by name - 'Dev tools' and 'Production pipelines' - and touches a third, 'World generation', as the content it verifies. The track blurb carries no exclusivity language, and the Luma page states participants may create 'any innovative projects for Arcade and Game Tech Tracks'. | official | https://about.tryarcade.com/hackathon | 'Track fit' is 25% of the score with no published definition anywhere, so the bullet match is a proxy rather than the rubric. Worse, the shared submission form renders 'Arcade Game Link' as required, and whether a Game Tech entry needs one is unresolved - this is the single largest open risk and a Discord question, not an assumption to build on. |
| Potential & Impact | The addressable group is named with a number rather than asserted - the procedural-generation slice the GDC survey measures at 10% of the 36% of 2,300+ professionals - and the absence is sourced from both engine vendors' own documentation plus five QA vendors who all play builds instead. The honest framing, which is also the more credible one, is that this is a gap with a small current user base rather than a large market. | inference | https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry | No spend signal in games at all. The honest figure is about 3.6% of surveyed professionals, not 36%, and the problem is a hypothesis: the one developer found answering this question publicly reports no pain. The growth argument is that prose generators cannot be made valid by construction, which is an argument rather than a measurement. |
| Demo & Clarity | The opening claim is legible to anyone in one sentence - this quest chain reads perfectly and cannot be finished, here is the step where it dies - and needs no game-development knowledge. The event publishes a 'Never judged' list naming 'English fluency', 'Slides' and 'Public speaking', so the build is a captioned screen capture of the artefact working with no deck and no narration, which is fully compliant and removes the presentation-skill tax. | official | https://about.tryarcade.com/hackathon | The proof is the payoff and a trace is text, so the visual interest has to come from the content and the located failure rather than from motion. There is no measured saturation data for this track, because Devpost refused, so how distinctive this looks against the field is unknown. |

### Demo

- **First 10s:** On screen: a generated four-step quest chain, readable, nothing obviously wrong. One line: 'A model wrote this quest. A dialogue-graph check passes it. It still cannot be finished.' Then the dead state appears.
- **First minute:** The report names the failure in the content's own words: the chain requires the Sunstone; the only action producing it is buying from Oren; the Ironhand Purge sets Oren dead and is forced earlier by the north gate opening; dead state at step 4. The extracted action model sits beside the source prose so the typing is checkable. One suggested change is applied, the gate re-runs, and it passes - and only then does the region's Rodin mesh appear, because assets are generated for content that passed. Under a minute, real run, no cuts.
- **Wow moment:** Two things visible at once: the quest graph terminates correctly - so the standard dead-end check passes it - and the search still reports that no completion path exists, because the Sunstone can only be bought from a merchant who dies in an earlier forced quest. The contrast is between checking the narrative graph and checking the world facts, and it is shown rather than asserted.
- **Technical depth:** Four inspectable things: the extracted precondition-effect model beside the prose it came from, so the typing can be checked by eye; the trace, which is the evidence that no completion path exists in that model; the caught-versus-missed table over a seeded corpus of deliberately broken content with known-correct verdicts; and the deliberately mistyped case, which is the failure mode a sharp reviewer will probe. Plus a paste box running the real pipeline on input the team never saw.
- **Story:** Sourced rather than invented. A July 2026 survey of AI-native games states that 'Persistent memory, world-state tracking, and long-term consequence management remain fragile' and proposes a generate-and-verify pipeline asking 'does the required object exist? Can the player reach the location? Does the outcome contradict prior narrative or world state?' - and no engine ships it: Unreal's PCG documentation has eight child topics and none is validation, its Data Validation plugin checks asset naming conventions and performance budgets, and Unity's AI surface is editor-time only. This is that missing check, built.
- **Unhappy path:** Three refusals shown deliberately. Valid content is passed, with the trace showing a real completion order, because a checker that always finds something is worthless. Content the extractor cannot type confidently is reported as 'could not type this content' with the sentence that defeated it, rather than guessed at. And a deliberately mistyped extraction is shown, with the point said out loud: whoever writes the premises decides the conclusion, so the extracted model is always displayed beside its source for checking.
- **Judge touches:** One public URL, the single link slot the form allows, with a paste-your-own box and three one-click samples beside it. No login. The repo is linked from the page and from the description, since there is no repo field. Everything runs server-side with no local setup, and the stored corpus means a reviewer's own content is still there if they come back - the dashboard says scores can be updated until judging closes.

| Criterion | Moment that earns it |
|---|---|
| Innovation & Originality | The same quest passing a narrative-graph dead-end check and failing the world-fact search, side by side - the one distinction the published work does not cover. |
| Execution & Functionality | A reviewer's own pasted quest content running the real pipeline, plus the caught-versus-missed table and the mistyped-extraction case. |
| AI × Gaming Relevance | The side-by-side of prose and typed model, which shows exactly what the model contributed and that it contributed nothing to the verdict. |
| Track fit | The gate running as a build step and exiting non-zero, then Rodin generating the asset only for the region that passed - a production pipeline with a quality gate in it. |
| Potential & Impact | One line naming who uses it next week and the sourced absence behind it: no engine ships gameplay-logic validation, and every AI QA vendor plays a finished build instead. |
| Demo & Clarity | The opening ten seconds: a readable quest chain, the claim that it cannot be finished, and the dead state appearing - comprehensible without any game-development knowledge. |

**Closest past winner:** {"name": "none found", "searches": ["Devpost project search for level validation, procedural generation QA and AI game testing (refused: HTTP 202 bot challenge on seven URLs, not retried)", "devpost hackathon project 'level validation' OR 'procedural generation' QA AI game testing winner dungeon solvability checker", "GitHub repository search: procedural generation validation game (10 results, none above 5 stars); dungeon solvability checker (0 results)", "Searches for prior editions of this event: none exists, and there is no winner archive or project gallery"], "difference": "The nearest artefacts found are three Devpost games that each describe running a solver to check their own levels' solvability as one feature among many, and none is a verification product or identified as a winner. Scoped honestly: Devpost's own search was refused, so this absence covers reachable results rather than Devpost's full index."}

**Outsider test:** Thirty-second script to try on one person outside the team, ideally someone who has judged a hackathon: 'A model wrote this four-step quest. Read it - does it look finishable? [let them read] It isn't. The item step three needs can only be bought from a merchant who dies in step two, and step two is forced first. This tool found that without playing the game, and it shows you the exact step where it becomes impossible. Would you use it?' It lands if they ask about their own content, ask to try it, or retell it correctly. A polite nod, 'cool', or questions only about the stack mean it did not. NOT YET RUN - no outsider test has been performed, by a person or a proxy, so the demo-wish claim is by design only.

### Anti-pattern checks

| Check | Hit | Why |
|---|---|---|
| no_clear_user | False | A developer shipping machine-generated quests and items, at the moment a generated batch returns and before it enters the build. The moment is what makes it a gate rather than a dashboard. |
| nonexistent_problem | unknown | The absence of the capability is sourced four ways, but that developers feel it acutely today is not established, and one developer answering this exact question publicly reports no verifier and no pain. The pre-registered test settles it: ask ten developers shipping generated quest content whether they have shipped an uncompletable quest and how they found out. |
| technology_first | False | The mechanism was changed twice to fit the problem rather than the reverse: the structural layer was demoted after the literature showed it standard, and the model-issues-the-verdict version was killed at the wrapper filter and rebuilt with the model confined to typing. |
| clone | False | Closest is G-KMS, which validates reachability over a dialogue and choice graph and repairs its own generator's output; this reasons over world facts and gates content from any generator, and catches the unobtainable-item case a dead-end metric passes. Different graph, different pipeline position. Disclosed as a narrow distinction rather than a clear gap. |
| recycled_generic | False | Not a recycled category. The nearest is an AI playtesting bot, which needs a running build and samples play; this never runs the game and proves a property of the content. |
| default_match | False | Declared against the nearest pre-registered default, the AI playtesting bot, with the distinction being proof-from-a-typed-model versus discovery-by-playing. |
| ledger_repeat | False | No prior ledger exists; this is the first run in this working directory. |
| chatgpt_wrapper | False | Remove the model and the schema, search, trace format, build gate and stored corpus remain, which is a quest-dependency checker over a typed specification. The verdict never comes from the model. |
| generic_rag | False | Nothing is retrieved and no document is queried. The model performs a single typing pass over content supplied in the request. |
| generic_agent | False | No agent and no tool loop. One extraction call followed by a deterministic search, with a named user, a bounded input, a verification step that is the product, and an observable binary outcome. |
| generic_dashboard | False | The output changes a decision and blocks an action: the build step exits non-zero on a proof of failure. It is a gate, not a view. |
| llm_wrapper | False | The reduction sentence - generated content to a model, problems back - is not a fair summary, because the model issues no verdict and the output is a counterexample trace from a search over a typed model. |
| no_product_without_model | False | Substantial: the typed schema, the reachability search, the trace, the gate, the stored corpus and the regression check all survive, with the cost that someone else must supply the typed form. |
| prompt_moat | False | The defence named is the corpus of real generator failures with known-correct verdicts, which measures extractor soundness, plus the domain schema and the stored history. Not the prompt, the model choice or fine-tuning. |
| textbox_ui | False | There is a paste box, but the interface is a report containing a located dead state, a trace, the extracted model beside its source, and a caught-versus-missed table - not a generated response. |
| chatgpt_obvious | False | The category - check AI-generated levels - is chatbot-obvious and must be assumed present in the field. The mechanism is not: confining the model to typing and having a reachability search issue a counterexample is the direction a July 2026 survey names as open rather than built. The pitch therefore has to lead with the mechanism, which is recorded as a demo risk. |
| sponsor_first | False | The problem and mechanism were settled before sponsor documentation was opened. Hyper3D was then mapped to a step that already existed in the workflow, and Tencent Cloud and TiMi were rejected as non-fitting rather than forced in. |
| default_entry | False | The modal responses to this brief are an AI NPC, a prompt-to-game generator and an asset generator, all pre-registered defaults and all killed. But perception overlap with the 'AI playtesting bot' default is real and recorded as a demo risk: a reviewer will pattern-match unless told immediately that this reads the specification rather than playing the build. |
| wrong_brief | False | Lands on two named Game Tech bullets, 'Dev tools' and 'Production pipelines', and the theme is AI x Gaming. The track blurb carries no exclusivity language. |
| impossible_demo | False | The value shows in one run on one input in under a minute, with no users, no scale and no elapsed time required, which suits async review from a video plus one link. |
| unrealistic_data | False | The seeded corpus is content a general model actually generated, with the broken cases produced by generation rather than hand-written, so the failures are real rather than planted. |
| forced_blockchain | False | No blockchain anywhere. |
| forced_ar_vr | False | No AR or VR anywhere. |
| forced_iot | False | No devices or sensors. |
| forced_multi_agent | False | One extraction call and one deterministic search. Deliberately not an agent architecture, because a second model reviewing the first would reintroduce the opinion this design exists to remove. |
| superficial_sponsor | False | Hyper3D is at meaningful depth: Rodin runs only on content that passed the gate, which is a real ordering constraint in the pipeline rather than decoration, and it is latency-safe because generation happens ahead of the demo. |
| platformmaxxing | False | One sponsor product is used, at one step. Tencent Cloud and TiMi are explicitly declined rather than included to look integrated. |
| weekend_clone | True | A model API plus a frontend reproduces a first version in a weekend, which is expected since a weekend build is the point - and a solo student pipeline doing lore to PDDL to a planner already exists. What is not reproducible in a weekend is the named defence: the corpus of real generator failures with known-correct verdicts that measures whether the extraction is sound, which only accumulates by running against real generated content. The demo must show the caught-versus-missed table and the mistyped-extraction case, not one impressive catch. |
| resume_first | False | No information about the requester was used to choose or shape this idea; the problem came from the stated ideas and the evidence. |
| prior_project_variation | False | No past-project information was consulted at the time of writing, and no prior ledger exists. To be re-checked at Stage 9 before the reply is final. |

## Tradeoffs (no scores; the user decides)

| Dimension | Dead State | doing nothing | the best existing alternative (G-KMS, schema-governed generation that repairs its own output) |
|---|---|---|---|
| What the evidence supports | Problem is a hypothesis, not validated. The absence is well sourced at the product layer - five AI game-QA vendors all play finished builds, neither engine ships a solvability checker for generated gameplay content - but the mechanism family is published, and the population is about 3.6% of surveyed professionals. | The one developer on record answering this exact question reports no verifier and no felt pain, accepting that levels are beatable 'practically always'. Doing nothing is a defensible position today for most of that 3.6%. | Published, evaluated on a Unity RPG benchmark, with zero dead ends reported. Strictly better than this where you control the generator. |
| What it catches that the alternative does not | Cross-quest world-fact dependency: the item quest three requires is only sold by a merchant who dies in quest two, which is forced earlier. That lives in the world-fact state space. | Nothing, until a player finds it. | Reachability over a dialogue and choice graph. A quest graph that terminates correctly passes, even when the required item is unobtainable - so this specific failure slips through. |
| Where it applies | Content from a prose-generating general model, where no constraint was expressible at generation time and the output arrives untyped. | Everywhere, at the cost of shipping the occasional uncompletable quest. | Only where you own and can govern the generator. It cannot gate a batch that arrived from someone else's model. |
| What has to go right in about 27 hours | One risky component, the extraction pass, isolated behind a fixed schema with a labelled typed-input fallback. The search, trace and gate are deterministic and testable on Saturday without a model. | n/a | n/a - it is a published system, not a build option here. |
| The strongest argument against building it | Innovation at 20% now rests on a subtle distinction between two kinds of reachability, which a reviewer has minutes to register and may reasonably score as packaging. And whoever writes the premises decides the conclusion: one mistyped precondition yields a confident wrong answer. | If the pain is genuinely as low as the one practitioner on record suggests, a gate nobody wants is worse than no gate. | Where the generator can be governed, governing it is the better engineering answer and this is the weaker one. |
| What would change the picture | Running the outsider test, which has not been run: show a non-developer the quest that passes a dead-end check and still cannot be finished, and see whether they retell it correctly. If they cannot, the distinction carrying Innovation is not legible and the idea should not be built. | Ten developers shipping generated quest content asked whether they have shipped an uncompletable quest and how they found out. Three or more saying a player told them moves this off hypothesis. | If the Arcade-link submission question resolves badly, none of this matters and the track choice has to be revisited first. |

## Sponsor verdicts

| Sponsor | Verdict | Why |
|---|---|---|
| Arcade AI | does not fit either surviving idea as a dependency; it is the host platform and a possible submission requirement | Arcade is a prompt-to-world consumer game platform with no public developer documentation of any kind - no docs site, no API reference, no changelog - and the strings 'persistent', 'save', 'database', 'state' and 'session' appear nowhere on its site. Both survivors are Game Tech pipeline tools rather than published games, so Arcade supplies none of their required capabilities, and Asset Passport deliberately uses a plain two-client web viewer rather than depending on an undocumented shared-state model. Arcade remains relevant for one reason only: the shared /submit form renders 'Arcade Game Link *' as required, so whether a Game Tech entry needs an Arcade presence is an unresolved submission question rather than a technical fit question. Separately worth noting as an opportunity rather than a fit: zero titles in the visible Arcade catalogue advertise an AI-native mechanic, so the Arcade Track's comparison set is conventional one-mechanic games. |
| Tencent Cloud | does not fit any surviving idea | The event page promises participants no Tencent Cloud resources at all; its credits appear exclusively as prizes to the Game Tech top three, and no page opened states LLM API availability, free participant credits or region guidance. The international-versus-China account split makes it a poor critical-path dependency inside 27 hours. The prior package's plan to route inference through Tencent Cloud for both of its Game Tech ideas is unsupported and should be dropped. |
| TiMi Studio Group | does not fit any surviving idea | TiMi is present as a partner, a judging bloc and a recruiting channel - all winners in both tracks receive a Tencent job interview - but not as a challenge sponsor with its own criteria or API. No TiMi-run hackathon, challenge text or winner archive was found. The prior package's repeated claim that TiMi has stated research priorities in persistent NPC memory, hybrid architectures and verification loops has no locatable source and is treated as fabricated. |
| Hyper3D | core for Asset Passport, meaningful for Dead State | For Asset Passport, Rodin is the generating tool whose job response becomes the passport row, so the capture-at-source claim fails without a real generation API - core capability, replaceable vendor, and the demo's opening act is a real generation. For Dead State, Rodin generates the asset for a region only after that region has been proved completable, which makes mesh generation the visible reward for passing the gate. Both uses are asset-time rather than in-loop, which suits an API whose own client example enforces a 20-minute deadline and caps per-account concurrency, and both qualify under the only conditional prize criterion on the event page: 'Hyper3D prizes are available to eligible projects using Hyper3D', attached to the $1,152 subscription in the Game Tech first-place bundle. |

## Why there aren't more ideas

One idea survived of the three pressure-tested, and the replacement drawn from blind discovery was also killed. Living World Multiplayer died on competition: Travian shipped the persistent browser multiplayer strategy MMO with asynchronous short sessions and raidable NPC faction villages in June 2004 and peaked above 5 million players, Mythora and Altworld shipped the LLM version in 2026 with Altworld stating the identical world-database-then-narrate architecture, and the a16z AI/Virtual Worlds hackathon grand prize in July 2023 was already a persistent multiplayer world with Claude-generated narrative; its claimed player complaint appears on no opened page and the Arcade capability it depends on is undocumented. World Coherence Verifier died as specified because its primary structural layer is standard practice that the 2024 PCG survey calls effective, and was regenerated as Dead State. Narrative Drift Guard was cut at the shortlist, not killed, and is recorded as the noted alternative: its memory half is shipped by Convai and NVIDIA ACE, 147 Devpost projects match 'npc memory', and its user group is the smallest measured at 5% of the 36%. Asset Passport, the strongest candidate from blind discovery and the only properly validated problem in that run, was killed by the critic pass on two checkable errors: EU AI Act Article 50 binds providers of generative systems rather than the platform or the importing creator and carves games out as artistic works needing only a notice, and glTF's KHR_xmp_json_ld already carries attribution and creation-date provenance semantics while C2PA already supports external hash-bound manifests - so neither its forcing function nor its central gap survived. Nothing was padded to reach a number.

## Kill log

| Name | Stage | Reason |
|---|---|---|
| Asset Passport | critic | Killed by the critic pass on two checkable errors, both load-bearing. (1) The why-now was misattributed. Article 50(2) binds 'Providers of AI systems... generating synthetic audio, image, video or text content' - the generator vendor or model lab, not the hobbyist importing a mesh and not the world platform, which relative to someone else's generator is at most a deployer. Deployer duties under 50(4) cover deep fakes in image, audio or video; a generated sword is neither, and 3D is not in the enumerated list. And 50(4) carves games out explicitly: 'Where the content forms part of an evidently artistic, creative, satirical, fictional or analogous work or programme, the transparency obligations set out in this paragraph are limited to disclosure of the existence of such generated or manipulated content' - so the legally required artefact is a notice, not a per-asset signed row. (2) The central standards gap is false. KHR_xmp_json_ld's own README states its purpose is transmitting 'information (such as attribution, licensing, creation date)' and that it 'enables any XMP metadata namespace to be embedded in a glTF asset', including xmpMM, which is XMP's derivation and provenance vocabulary; and C2PA already supports external manifests - 'commonly embedded directly within the asset, though it can also be linked externally' - bound by 'standard cryptographic hashes, such as SHA2-256', with a digitalSourceType field that identifies when an action 'was performed by an AI/ML system'. The real residual gap is no agreed convention and no tamper-evidence, which a weekend project does not close. The ratified count was also wrong: 25 KHR_ plus 3 EXT_ is 28, not 27. Compounding: Sketchfab already mandates a self-declared CreatedWithAI tag, so the incumbent answer at the layer that could pay is a free checkbox - which is what the one evidenced stakeholder was actually asking for; byte-exact keying is defeated by any re-export or decimate pass and the geometry fingerprint was undefined; the population in its own evidence (people wiring external models to the platform) arrives with no receipt and routes to a classifier forbidden from writing labels, so the cooperative case was covered and the adversarial case punted; the demo climax caught a lie the demoer authored; and deleting both model jobs leaves the demo unchanged, which is fatal on a line named AI x Gaming Relevance. The critic's condition was kill unless the why-now could be replaced with something that is neither the AI Act nor the single forum thread. No replacement exists in the evidence gathered: itch.io, Steam and Sketchfab are all self-declaration regimes at the store-listing level, which is the wrong unit of analysis and creates no demand for per-asset signatures. No spend signal was found in games at all. |
| Living World Multiplayer | competition | Clone with no wedge, on a false novelty claim. Travian is a 'persistent, browser-based, massively multiplayer, online real-time strategy game' released June 2004 that peaked at 'over 5 million players on over 300 game servers worldwide', in which players build persistent structures, attack and conquer other villages, and face NPC Natarian villages that 'randomly spawn all over the map, and will gradually develop' - every element of the fingerprint, 22 years old. Mythora shipped the browser LLM version in 2026 with cross-session NPC memory, factions shifting offline and player traces visible to others. Altworld states the identical architecture: 'Every action you type first updates a structured world database - factions, prices, rumors, relationships, locations - and only then is the story narrated from what actually changed.' The a16z AI/Virtual Worlds hackathon grand prize in July 2023 was already a persistent multiplayer world with Claude-generated storytelling. The claimed player complaint appears on no opened page. And the load-bearing platform capability is undocumented: the strings 'persistent', 'save', 'database', 'state' and 'session' appear nowhere on Arcade's site, which has no docs at all. |
| World Coherence Verifier (as specified) | competition | Its primary layer is standard practice, so it cannot carry Innovation at 20%. The 2024 survey of procedural generation via generative AI names the technique as existing prior art and calls it effective: 'the use of gameplaying agents, commonly pathfinding algorithms or other hand-crafted AI, to determine playability. While these are effective, they come at a high computational cost' - the stated bottleneck is compute cost, not absence. The FDG 2025 PCG Benchmark already ships 'A* agent can solve the level' as graded infrastructure. GitHub returns 0 repositories for dungeon solvability checker and 10 (none above 5 stars) for procedural generation validation, because it is a flood fill every developer writes inline. Three separate Devpost games describe running a solver to check level solvability as one feature among many. The balance layer is heuristics the developer must author anyway. The problem behind it survives and the mechanism was regenerated as Dead State. |
| Semantic-only content reviewer | wrapper | The regeneration's first attempt, and it died on the reduction test. Having conceded that the structural layer is table stakes, the remaining product was 'hand the generated quest content to a model and get a list of problems back' - and that sentence is a fair summary of it. The model issued the verdict, so the output was an opinion about a quest rather than a property of it, nothing survived the model's removal, and there was no deterministic step to check the output against. Regenerated by inverting the roles: the model extracts a typed precondition-effect model from the content and a reachability search over that model issues the verdict with a counterexample trace. |
| Narrative Drift Guard | shortlist | Not dead, but cut in favour of the same verify step at a stronger moment, and recorded as Dead State's noted alternative. Against it: its memory half is already shipped, with Convai documenting long-term memory 'scoped to one player and one character' in both Unity and Unreal plugins and NVIDIA ACE shipping retrieval-based memory inside PUBG, inZOI and NARAKA: BLADEPOINT since January 2025, alongside mem0 at 66,484 stars and a model-level memory tool on all Claude 4+ models. The hackathon genre is saturated: 147 Devpost projects match 'npc memory', and Loomweaver opens on the same sentence about characters forgetting player choices. Its user group is the smallest measured in the GDC survey, at 5% of the 36%. One developer independently built all three of its mechanisms - a JSON world ledger, 'scoped context packets' and a 'trust gate' - in about a week. In its favour, and the reason it is noted rather than dismissed: NVIDIA's own article tells developers they 'must implement content filtering, lore constraints, and behavioral boundaries' themselves, which is an explicit 21-month-old hand-off of exactly this layer. |
| AI Onboarding Personalizer | wrapper | Carried over from the prior package's log and confirmed. The product disappears with the model: it is player behaviour in, a tutorial sequence out, with no record kept, no workflow owned and no deterministic step. The reduction sentence is a fair summary. |
| AI asset generator for game developers | wrapper | Pure wrapper, and additionally a default. The product is text in, asset out, with no pipeline around it. Note that Hyper3D Rodin already is this product, shipped, with add-ons for Blender, Unity, Unreal, Godot, Maya, 3DS Max, C4D, Omniverse and ComfyUI, so a submission in this shape competes with a sponsor's own product. |
| Dynamic music generator | prior-art | Carried over from the prior package. A default and a recycled category with no research-backed wedge, and named by no track bullet. No specific user pain was documented beyond generic immersion. |
| Generic AI NPC chatbot | prior-art | A pre-registered default, killed on sight. Additionally, zero titles in the visible Arcade catalogue advertise an AI-native mechanic, so this would be judged against the platform's own conventional catalogue while competing with shipped middleware from Convai and NVIDIA. |
| Prompt-to-level generator | prior-art | A pre-registered default, and it competes directly with the host platform: Arcade's own product is prompt-to-world ('Tell your companion what you want to make and watch the world take shape around you'), so a submission in this shape is a thinner version of the thing running the event. |
| AI moderator agent that reviews each reported asset and decides with a human approving | wrapper | Two declared wrapper shapes at once - an agentic version of existing software with no workflow advantage, and the watched 'AI agent with a human approval step' default. Reduction: 'the moderator gives a reported asset to a model and gets a verdict back' - FAIR: true. It never owns the part that matters, which is what makes an item enter the queue, and without that it industrialises exactly the harm the platform named by giving unevidenced reports a faster path to a decision. Without the model: thin, a report inbox. Regenerated as the mismatch queue whose entry condition is a recorded origin contradicting a declared one, so unevidenced reports cannot create work. |
| AI that inspects your world and suggests optimizations | wrapper | An AI dashboard with no workflow of its own. Reduction: 'the user gives a world to a model and gets optimization advice back' - FAIR: true, so advice is the model's output and therefore the product. It also fails on leverage: the platform budgets are published arithmetic and the simplification is a classical algorithm installed 44.57M times a month, so there is no step a model does that code cannot. Without the model: nothing. Regenerated as a pre-publish simulation that projects the cost at instance scale, names the specific cut, applies it and re-measures. |
| Catalogue retro-tagger that classifies listings and writes the tag back | wrapper | A wrapper around a model API. Reduction: 'the seller gives their listing images to a model and gets tags back' - FAIR: true. The only thing that would have saved it was the write-back to the storefront, and that was an unverified assumption - no evidence was found that the store exposes listing edits to third parties. Without the model: thin, a list of listings. Regenerated by inverting the direction: recover the receipts already sitting in the seller's own project files, cite a specific file and field for every proposed tag, and keep the decision plus its evidence as the record. |
| Generated-mesh cleanup tool for 3D artists | prior-art | Killed at the prior-art probe as crowded. The relevant math is free and commoditized: meshoptimizer at 44,574,675 monthly downloads, @gltf-transform/core at 2,485,210 and gltf-validator at 653,789, plus Blender, InstaLOD and Simplygon. No opened source showed a step those skip. |
| Mod conflict resolver | prior-art | Killed as crowded and unvalidated. A GitHub issue search for 'mod conflict' returns 24,813 issues but the top eight by reactions all have 0 reactions and sit in unrelated small repositories - a long tail with no concentrated demand. LOOT, Vortex and MO2 already do conflict detection and load-order sorting, and no opened account of the cost was found. |
| Localisation context tool | validation | Killed for no evidence. A probe of the Godot proposals tracker found 6 open localisation issues with reaction counts of 0, 5, 4, 1, 1 and 0 - no pain accounts within budget. Additionally, translation-only leverage is pre-killed by the wrapper filter unless a deterministic checker owns the output. |
| Bug report reproduction-step recoverer | validation | Killed for no evidence. A Hacker News comment search for playtest bug reports returned five hits, four from 2008-2014 and none about the cost of re-deriving reproduction steps. Only the researcher's own reasoning would have supported it. |
| Virtual-tabletop session prep assistant | validation | Killed for no evidence and the wrong watering hole. The Foundry VTT tracker has 1,646 open issues and the top six by reactions all have 0 reactions and are all engine or data-model bugs. No budget remained to find the right community. |

## Pre-registered defaults (filtered out unless a wedge was proven)

- NPCs with persistent memory you can talk to in natural language
- AI Game Master that narrates a party's shared session
- type a sentence, get a playable level generator
- text or image to 3D prop generator with a gallery UI
- adaptive soundtrack that reacts to combat intensity
- AI companion pet or sidekick that remembers you across sessions
- AI coach that teaches you to play better by watching your match
- multi-agent village or society simulation (a Smallville clone)
- live-ops dashboard that explains your player metrics in English
- chat with your game design doc or lore bible
- an agent that plays your game to find bugs
- procedural quest generator keyed to world state
- voice commands to control an RTS or build in-world
- AI balance-tuning dashboard that suggests nerfs
- agentic Unity or Unreal copilot that writes gameplay code
- text-to-world: describe a biome, get terrain and props
- AI localisation pass for your game's strings
- procedural infinite game that generates itself as you play
- AI moderator for in-game chat
- AI-generated marketing trailer or store page for your game

## Research gaps

- HIGHEST STAKES: the /submit form is shared by both tracks and renders 'Arcade Game Link *' as required ('The link to your published game on Arcade'). Captured with Arcade Track pre-selected and deliberately not interacted with, so whether a Game Tech submission must also supply an Arcade link is UNKNOWN. If it must, a Game Tech tool with no Arcade presence cannot submit. Confirm in Discord before building anything.
- 'Track fit' is 25% of the score and has no published definition anywhere on the event site; the track's own bullet list is the only available proxy.
- Whether 'only Arcade AI' forbids external APIs or imported assets inside an Arcade game is not stated, and the event simultaneously gives every participant a Hyper3D membership, which cuts the other way.
- No spend signal was found for either surviving idea, in games, at all. Upwork returned 403 and Reddit is blocked in every form, so this run contains no job post, no freelance gig and no agency rate for any of these fixes. The closest is an adjacent industry selling C2PA manifest embedding to photo studios, which was not opened.
- Asset Passport's first-person evidence is concentrated in one platform's issue tracker (two issues, 93 comments). The platform operator and a staff member speak on the record there, which is better than one voice, but it is still one platform. The second platform and the two storefronts contribute facts about rules and enforcement, not accounts of pain.
- Devpost was refused (HTTP 202 bot challenge on seven project-search URLs), so there are NO measured per-category saturation percentages for the Game Tech Track. Not estimated.
- Tencent Cloud LLM availability, free credits and region restrictions for participants are unconfirmed; the event page promises participants no Tencent resources at all.
- Unreal's absence of a PCG validation layer is established at index-page level (eight documented child topics, none validation), not leaf-page level; the PCG Overview leaf page and the 5.7/5.8 release notes were not retrieved.
- EU AI Act Article 50 text was read from a civil-society host of the Regulation, not the Official Journal. The obligation's scope - whether it binds a hobbyist importer, a world platform as deployer, or only the provider of the generating system - is the single most load-bearing unresolved question for Asset Passport and was referred to the critic pass.
- The widely reported 16 January 2026 date for Valve's AI-disclosure rewrite is press-reported; no Valve-authored dated announcement exists on the pages retrieved. The substance of the rewrite IS confirmed from Valve's live documentation.
- EU enforcement practice is unverified: no regulator action was opened, so the actual cost of non-compliance is unknown.
- C2PA's lack of a 3D track rests on an issue-tracker search used as a proxy for the spec's supported-format list, not the list itself.

# discovery.md — subagent D

## 1. Requester information found in my context

**Found, and ignored.** My context contained: a user email address; a global `CLAUDE.md` describing a
personal skill; and a working-directory path whose final segment looks like an event name. I did not
use any of it, did not search for any event, gallery, sponsor, team or past project, and called no
memory or profile tool. Problems below were chosen on their merits only. The three "required
capability classes" were treated as *available*, never as a reason to pick a problem — the one
problem that leans on class (c) does so because the evidence pointed there, and class (c) appears in
it as a *recorded event*, not as the product.

---

## 2. defaults.md (pre-registered BEFORE any search)

Full file at `./defaults.md`. Contents:

Brief: "Build the future of AI x Gaming." Track A: build/publish games on a browser-based AI-native
game creation + hosting platform with multiplayer and shared persistent state. Track B: world
generation, simulation, AI agents, dev tools, production pipelines.

| # | Default idea | Recycled category | Why it dies without a wedge |
|---|---|---|---|
| D1 | NPCs with persistent memory you can talk to | AI NPC chatbot | Reduction: dialogue in, dialogue out. Every model vendor demos it. |
| D2 | AI Game Master narrating a shared session | AI game master / storyteller | Pure text generation; no record, no deterministic core; AI Dungeon prior art. |
| D3 | "Type a sentence, get a playable level" | prompt-to-level / text-to-game | The Track A platform **is** this. Zero differentiation; it is the host's own feature. |
| D4 | Text/image → 3D prop generator with a gallery UI | AI asset generator wrapper | A UI on capability (c). Declared wrapper around a model API. |
| D5 | Adaptive soundtrack reacting to combat intensity | dynamic/adaptive music generator | Wwise/FMOD already do state-based music deterministically. Absorbed. |
| D6 | AI companion pet that remembers you | AI companion | Nothing compounds but chat logs; no workflow, no buyer. |
| D7 | AI coach that watches your match | AI tutor | Needs telemetry you don't have; video shows a model talking over gameplay. |
| D8 | Multi-agent village/society sim (Smallville clone) | generic multi-agent system | Paper reproduction. Demo is scrolling logs. No user with a job. |
| D9 | Live-ops dashboard explaining player metrics in English | generic dashboard / AI dashboard | No workflow of its own; needs a live player base you don't have. |
| D10 | Chat with your game design doc / lore bible | chat with your documents (RAG) | Named wrapper shape. Dead on arrival. |
| D11 | An agent that plays your game to find bugs | AI playtesting bot | Pays off over weeks/at scale; crowded (GameDriver, Regression Games). |
| D12 | Procedural quest generator keyed to world state | procedural quest generator | Named recycled category; output is text; engines have quest frameworks. |
| D13 | Voice commands to control an RTS / build in-world | voice-to-command interface | Named recycled category; modality is not a mechanism. |
| D14 | AI balance-tuning dashboard suggesting nerfs | AI game balancing dashboard | Needs match data at scale; reviewers cannot see it work in a video. |
| D15 | Agentic Unity/Unreal copilot writing gameplay code | generic coding assistant | Cursor/Copilot/Unity Muse absorb it. Declared wrapper shape. |
| D16 | Text-to-world: describe a biome, get terrain + props | a content generator | Houdini/Gaea + plugins; also the Track A platform's own pitch. |
| D17 | AI localisation pass for your game's strings | wrapper on a model API | Only leverage is translation → killed by the Stage 4b rule unless a deterministic checker owns it. |
| D18 | Procedural "infinite game" that generates itself | prompt-to-game | D3 plus novelty framing. |
| D19 | AI moderator for in-game chat | classification wrapper | Crowded: ToxMod, Spectrum Labs, Community Sift. Needs a gap. |
| D20 | AI-generated trailer / store page for your game | content generator | Output is the model's output; no record kept. |

Note recorded at the time: D17 and D19 touch real back-office pain (lens 6). Any survivor must own the
step **after** the model output — the write-back, the record, the gate — not the generation.

**Post-hoc check:** none of the five kept problems or the nine surviving solutions is an instance of
D1–D20. The nearest neighbours are D4 and D19, and both are inverted: the product consumes a
generator's output as an *event to be recorded and gated*, and the model's job is classification and
matching, never generation.

---

## 3. Full problem table (12 candidates)

Lenses: 1 painful workflows · 2 money on a worse fix · 3 bad incumbents · 4 forced change ·
5 newly possible · 6 boring back office · 7 underserved · 8 AI-native.
Triggering lens first.

| # | Problem (one user, one moment) | User group | Lens(es) | Evidence | Verdict | Reason |
|---|---|---|---|---|---|---|
| P1 | A creator importing or live-generating an asset into a shared persistent world cannot attach a verifiable origin to it; the platform wants labels but can only ask, so nobody can tell what is synthetic | Creator at the import/generate moment on a UGC world platform | 8, 4, 6 | E1, E2 (moderate, 2 orgs, same segment) + E9, E11, E13, E14 (fact) | **KEPT — VALIDATED** | Two independent speakers, one of them the platform operator; a dated rule; a verified standards gap |
| P2 | A platform moderator handed an "this is AI" report has no evidence to adjudicate it, and unevidenced reports arrive from self-appointed enforcers | Trust & safety moderator at a UGC world platform, opening a report | 6, 3, 4 | E1, E3 (moderate) | **KEPT — VALIDATED, strong counter-evidence** | Platform's own staff doubt it is a moderation matter (E3); flagged, not hidden |
| P3 | A solo dev at store submission must write a free-text account of every AI tool used across months of development, from memory, in two storefronts' different schemas, with de-indexing as the penalty for getting it wrong | Solo/small-studio dev at the submission form | 1, 4, 6 | E10, E11 (fact: the obligations); no opened pain account | **KEPT — HYPOTHESIS** | Rules prove obligation, not pain; no first-person account found within budget |
| P4 | One over-dense imported or generated mesh degrades a shared multiplayer instance for everyone in it; the creator cannot see the cost before others feel it, and one of the two platforms has no reduction tool at all | World/avatar creator just before publishing | 1, 7, 5 | E7, E8 (moderate, 2 independent orgs, same segment) + E15 (fact) | **KEPT — VALIDATED** | Long-open request on one platform; the other platform's published rule engine confirms the job |
| P5 | A dev shipping live AI generation into a shared persistent world has no record of what was generated, by whom, or how far it propagated — and the storefront asks for guardrails | Dev shipping a live-generation feature; and the live player whose generation others see | 4, 6, 8 | E1 (moderate) + E10 (fact); guardrail requirement is a LEAD | **KEPT — HYPOTHESIS** | One moderate item; obligation partly unopened |
| P6 | An asset-store seller must retro-tag an existing catalogue or lose discovery | itch.io asset seller | 4, 2 | E11 (fact) | **MERGED into P3** | Same obligation, same fix, different inventory size; kept as a segment of P3 |
| P7 | A 3D artist spends cleanup hours on generated meshes that are not production-ready | Game artist / tech artist | 5, 1 | E18 (moderate), E19, E20 (weak) | **KILLED — crowded** | Prior-art probe: meshoptimizer 44.57M dl/mo, @gltf-transform/core 2.49M dl/mo, gltf-validator 654k dl/mo (E15); plus Blender/InstaLOD/Simplygon. The math is free and commoditized and no opened source shows a step those skip |
| P8 | A mod author is flooded with "conflicts with X" reports from players | Mod author receiving an issue | 1, 7 | E16 (fact: 24,813 issues, all top-8 at 0 reactions) | **KILLED — crowded + unvalidated** | Long tail with no concentrated demand; LOOT/Vortex/MO2 already do conflict detection and load-order sorting; no opened account of the cost |
| P9 | Game localisation: translators work without on-screen context, producing truncation and placeholder bugs | LQA tester / loc manager | 6, 1 | Godot proposals probe: 6 open localisation issues, 0–5 reactions (E21) | **KILLED — no evidence** | Probe found no pain accounts in budget; and translation-only leverage is pre-killed by the Stage 4b rule |
| P10 | Player bug reports arrive without reproduction steps; QA re-derives them | QA tester triaging a report | 6 | HN probe returned nothing on-topic (E22) | **KILLED — no evidence** | Only my own reasoning would support it |
| P11 | A tabletop GM spends hours on session prep before a virtual-tabletop game | VTT game master | 7 | Foundry VTT tracker: 1,646 open issues, top-6 all 0 reactions and all engine bugs (E23) | **KILLED — no evidence** | Wrong watering hole and no budget left to find the right one |
| P12 | A generation-tool maintainer must add machine-readable provenance to outputs to keep EU users, but no standard field exists for 3D | Maintainer of a generation library/API | 4, 5, 3 | E12 (moderate, neighbouring segment) + E13, E14 (fact) | **NOT KEPT as a problem — retained as the technical premise of P1** | Only one opened item and the segment is neighbouring; it is the enabling gap, not a user in a moment |

Lens balance: lens 4 triggered 3 of 12 (25%, under the one-third cap). Lens 8 triggered 2 of 12.
No lens supplied more than 4 of 12. AI-shaped problems are 2 of 12, well under half.
First ten lookups drew on four kinds of source: GitHub REST/search API, HN Algolia, vendor and
standards-body documentation, and npm registry stats.

---

## 4. Evidence ledger

| id | type | text (verbatim where quoted) | strength | speaker | about | org | source | date | segment | how |
|---|---|---|---|---|---|---|---|---|---|---|
| E1 | EVIDENCE | "I've been observing that since ResoniteLink released, a lot of people have begun using it to hook Resonite up to external LLMs to generate content with. I'd personally like to avoid this sort of content on the platform, however have no way of easily identifying which content is AI generated, and which isn't." 42 reactions, 93 comments, still open | MODERATE | JackTheFoxOtter, issue author, Resonite community member | his own experience on the platform and behaviour he observes other users doing | Resonite community (platform operated by Yellow Dog Man Studios) | https://github.com/Yellow-Dog-Man/Resonite-Issues/issues/6134 | 2026-01-15 | same | opened (GitHub API) |
| E2 | EVIDENCE | "We'll likely add some form of flagging/labeling, as well as official stance." … "We are not going to be implementing any content generative AI features officially" … "We won't stop others from doing so using the general in-game tools and protocols" … "However we'll likely ask for that content to be labelled" | MODERATE (organisation's own account of its own operations) | Frooxius, Resonite founder/lead | Yellow Dog Man Studios' own planned platform operations | Yellow Dog Man Studios | same issue, comment thread | 2026-01-15 | same | opened |
| E3 | EVIDENCE + COUNTER | "It **is** certainly a filtering, discovery, tagging, searching issue." — and, against enforcement: "Moderation is for the safety of our users. I don't understand how AI content presents a **safety** concern, therefore I do not see it as a moderation concern or something that should be enforced." — and on false reports: "My only concern is vigilantes here." | MODERATE (platform staff on its own moderation operations) | ProbablePrime, Resonite team | the platform's own moderation posture and report load | Yellow Dog Man Studios | same issue, comment thread | 2026-09-24 / 2026-09-25 | same | opened |
| E4 | EVIDENCE | "For worlds (and later items in the workshop), I think adopting something like Steam's AI generated content disclosure would probably work best. So people can say to what extend they've used AI." / "If there is a policy requiring people to tag content created with generative AI, then there has to be some level of enforcement." | WEAK (opinion/intention) | JackTheFoxOtter | his preference | Resonite community | same issue | 2026-09-24 / 2026-09-25 | same | opened |
| E5 | EVIDENCE | "Did anyone suggest an option to have the file importer allow specifying AI generated content? Making it easier to tag these would probably save both people who use it and people who don't want anything to do with it a lot of time" | WEAK (feature request) — but names the exact moment (the file importer) | Dusty-Sprinkles | what would save them time | Resonite community | same issue | 2026-09-24 | same | opened |
| E6 | EVIDENCE | A community member quotes Article 50(2) verbatim into the thread and reasons about whether content created over the platform's LLM bridge "must be intercepted and correctly tagged" | WEAK (corroborates salience, not pain) | iamgreaser | the legal obligation as it applies to the platform | Resonite community | same issue | 2026-09-25 | same | opened |
| E7 | EVIDENCE | "There can be lots of situations where you end up importing a mesh, and it ends up being far more dense than you expect. This can happen moderately often with users who work with CAD files" … "Decimation and LODs can be quite a vital first-step towards improving GPU performance in multiple scenarios." 15 reactions, 9 comments, **open since 2025-01-12** | MODERATE (long-open issue, first-person, repeated behaviour) | Zyro1331, Resonite creator | his own imports and those of other users he describes | Resonite community | https://github.com/Yellow-Dog-Man/Resonite-Issues/issues/3520 | 2025-01-12 | same | opened |
| E8 | FACT + EVIDENCE | Numeric per-avatar budgets enforced by the platform. PC polygons 32,000 (Excellent) / 70,000; texture memory 40→75→110→150 MB; material slots 4→8→16→32. Quest polygons 7,500→10,000→15,000→20,000; texture memory 10→18→25→40 MB; material slots 1→2→4. Exceeding a bolded stat triggers "Avatar replaced with Fallback"; other overages strip components. On PC "no avatars will be blocked by default due to performance"; on Quest "The Minimum Displayed Performance Rank is set to Medium by default" | MODERATE as evidence (an organisation's own account of its own operations); FACT for the numbers | VRChat documentation | VRChat Inc.'s own platform enforcement | VRChat Inc. | https://docs.vrchat.com/docs/avatar-performance-ranking-system | 2026-10 (accessed) | same | opened |
| E9 | FACT | Article 50(2): "outputs of the AI system are marked in a machine-readable format and detectable as artificially generated or manipulated"; solutions must be "effective, interoperable, robust and reliable as far as this is technically feasible." **Article 50 applies from 2 August 2026.** | FACT (secondary host of the Act's text — not the Official Journal; flagged) | artificialintelligenceact.eu (civil-society text of the Regulation) | the obligation on providers of generative AI systems | EU (Regulation (EU) 2024/1689) | https://artificialintelligenceact.eu/article/50/ | rule applies 2026-08-02; accessed 2026-10 | n/a (rule) | opened |
| E10 | FACT | Valve rewrote Steam's AI disclosure rules. Two disclosable categories: "AI to generate content for the game" and "AI content generated during gameplay". Exempt: "AI powered tools" used for workflow efficiency such as code helpers. Developers must "fill out a text box detailing their use of the tools" and "check a box if the game itself makes AI-generated images, text, or other content." Pre-generated vs live-generated distinction retained | FACT for the rule; MODERATE as trade-press reporting | Game Developer staff | Valve's policy | Informa / Game Developer, reporting on Valve | https://www.gamedeveloper.com/business/valve-tweaks-and-clarifies-ai-disclosure-rules-for-steam | published 2026-01-16 | n/a (rule) | opened |
| E11 | FACT | itch.io added a mandatory "Generative AI Disclosure" field: Yes/No plus types used — Graphics, Sound, Text & Dialog, Code. Leaf Corcoran, itch.io: "Assets comprised of generative AI (even if modified afterward) that are not tagged will no longer be eligible for indexing on our browse pages." A grace period preceded enforcement "through filtering and user reports" | FACT for the rule and its penalty | 80.lv, quoting Leaf Corcoran | itch.io's own policy and enforcement | itch.io | https://80.lv/articles/asset-creators-on-itch-io-now-have-to-disclose-the-use-of-generative-ai/ | published 2024-11-21 | n/a (rule) | opened |
| E12 | EVIDENCE | "Under EU AI Act Article 50 (August 2, 2026), AI-generated images disclosed publicly must carry transparency metadata." … "The saved PNG has no metadata indicating it's AI-generated. A recipient has no way to know its origin." … "Photos from cameras carry EXIF … AI-generated images carry nothing. There's no standard EXIF/XMP field for: AIGenerated: True …" Open, 3 reactions, 6 comments | MODERATE | HMAKT99, issue author | the diffusers library's actual output behaviour | HuggingFace `diffusers` project | https://github.com/huggingface/diffusers/issues/13359 | 2026-03-28 | **neighbouring** (image generation, not 3D game assets) | opened |
| E13 | FACT | The ratified Khronos glTF 2.0 extension set contains **no** provenance, signature or AI-origin extension. Full list read: KHR_animation_pointer, KHR_draco_mesh_compression, KHR_gaussian_splatting, KHR_interactivity, KHR_lights_punctual, 14× KHR_materials_*, KHR_mesh_quantization, KHR_meshopt_compression, KHR_node_hoverability, KHR_node_selectability, KHR_node_visibility, KHR_texture_basisu, KHR_texture_transform, **KHR_xmp_json_ld** (a generic metadata container, no AI/provenance semantics). A grep of the Vendor extension directory for prov/c2pa/sign/meta/credit/author/license returns only AGI_stk_metadata, FB_geometry_metadata and two MSFT texture-packing extensions | FACT | Khronos Group repository contents | the glTF standard's own extension registry | Khronos Group | https://api.github.com/repos/KhronosGroup/glTF/contents/extensions/2.0/Khronos and .../Vendor | 2026-10 (accessed) | n/a | opened |
| E14 | FACT (moderate confidence, caveat stated) | A search of the reference C2PA implementation's issue tracker for `3D OR glTF OR mesh` returns **1** result, and it is unrelated (a DER-encoding timestamp-signature bug). Caveat: an issue search is a proxy for the spec's supported-format list, not the list itself | FACT with caveat | contentauth/c2pa-rs tracker | the C2PA reference implementation's coverage | Content Authenticity Initiative / contentauth | https://github.com/search (repo:contentauth/c2pa-rs) | 2026-10 (accessed) | n/a | opened |
| E15 | FACT | npm last-month downloads for September 2026 (2026-09-01..2026-09-30): meshoptimizer **44,574,675**; @gltf-transform/core **2,485,210**; gltf-validator **653,789**; three **70,221,349** | FACT | npm registry | actual installs | npm, Inc. | https://api.npmjs.org/downloads/point/last-month/<pkg> | 2026-10 (accessed), data Sep 2026 | n/a | opened |
| E16 | FACT | GitHub issue search for `"mod conflict"` returns **24,813** issues; the top eight by reactions all have **0** reactions and sit in unrelated small repos (Valheim, Minecraft launcher, FS25, Factions race mods, voxel engines) | FACT | GitHub search | issue volume and its distribution | GitHub | https://api.github.com/search/issues?q=%22mod+conflict%22 | 2026-10 (accessed) | n/a | opened |
| E17 | FACT | Show HN launches tagged provenance/C2PA, 2025-08 to 2026-04, are all image-, camera- or agent-identity-focused and score 1–3 points: Bogami (2025-12-18), PoG (2025-12-02), Vouch Protocol (2026-01-18), OPP (2026-02-13). Show HN game-asset launches in the same window are all **generators**: AnyCreature (2026-08-18), ai3dgen (2026-03-24), Modelfy (2026-01-28), godogen (2026-03-16, 337 pts) | FACT | HN Algolia | what was launched and how it landed | Hacker News | https://hn.algolia.com/api/v1/search?tags=show_hn | 2026-10 (accessed) | n/a | opened |
| E18 | EVIDENCE | "As an indie dev and tabletop gamer, I've always found creating custom 3D character models to be a major hurdle … while recent text-to-3D AI is promising, the results often aren't quite ready for a game engine or 3D printer without significant cleanup." | MODERATE (first-person account of own experience, by someone who then built and charged for a tool) | jackson_mile | his own experience; his own one-person product | flash-image.art (solo) | https://news.ycombinator.com/item?id=45233121 | 2025-09-13 | same | opened |
| E19 | EVIDENCE | "Except none of this stuff is good enough to be used in production … It still doesn't fit into any real artists workflow" | WEAK (opinion) | torginus | the state of the tools generally | individual commenter | https://news.ycombinator.com/item?id=46710023 | 2026-01-21 | same | opened |
| E20 | EVIDENCE | Enumerates the gaps between a text description and usable geometry, ending "LLMs don't strike me as a particularly relevant technique to apply here" | WEAK (reasoning) | ezst | the technical gaps generally | individual commenter | https://news.ycombinator.com/item?id=49360225 | 2026-08-19 | neighbouring (CAD) | opened |
| E21 | FACT (kill basis for P9) | `repo:godotengine/godot-proposals` open issues with "localization" in the title: **6** total, reaction counts 0, 5, 4, 1, 1, 0 | FACT | GitHub search | demand concentration in that tracker | Godot Engine project | https://api.github.com/search/issues (godot-proposals) | 2026-10 (accessed) | same | opened |
| E22 | FACT (kill basis for P10) | HN Algolia comment search for "playtest bug reports" returns five hits, four from 2008–2014 and none about QA reproduction-step cost | FACT | HN Algolia | the absence of the signal in that venue | Hacker News | https://hn.algolia.com/api/v1/search | 2026-10 (accessed) | n/a | opened |
| E23 | FACT (kill basis for P11) | `repo:foundryvtt/foundryvtt` open issues: **1,646**; top six by reactions all have 0 reactions and are all engine/data-model bugs (wall import error, proxy trap, ObjectField#clean migration) | FACT | GitHub search | demand concentration in that tracker | Foundry Gaming LLC | https://api.github.com/search/issues (foundryvtt) | 2026-10 (accessed) | same | opened |

### Counter-evidence (recorded next to the problems it bites)
- **E3** — the platform's own staff member argues AI content is not a safety matter and should not be
  enforced, and warns about "vigilantes". Bites P2 hardest: the buyer may not want the queue.
- **E3 / Zozokasu, 2026-09-25** — "Letting users choose whether they see AI-generated content is a
  clear benefit. What additional benefit is expected from mandatory tagging backed by moderation and
  opt-in visibility, compared with voluntary disclosure and user-controlled filters?" Bites P1/P2: a
  cheaper fix (voluntary tag + viewer filter) may be good enough.
- **E8** — VRChat already enforces numeric asset budgets with fallback replacement. Bites P4: the
  market leader has solved the display-time half.
- **E15** — mesh validation and simplification are free and installed tens of millions of times a
  month. Bites P4 and kills P7: nobody needs another optimizer.
- **E17** — generator launches are abundant and one scored 337 points. Confirms the generation space
  is crowded; also means a generator-shaped submission competes against a lot of prior art.
- **Lead only:** a trade headline reports Epic's CEO calling Steam's AI disclosures "meaningless"
  (techradar.com, not opened). If that view is widespread among devs, P3's buyer may not care.

### Who is missing from the sources
Non-English communities (one thread participant explicitly relays concerns from "the Japanese-speaking
community" that I could not read first-hand); paid moderators and T&S contractors; console and mobile
developers; large-studio compliance and legal staff; EU enforcement practice (no regulator action
opened, so the *actual* cost of non-compliance is unverified); VRChat's own creators in their own
words (I opened VRChat's documentation, not its creators); players who do not use GitHub; and all
freelance/agency spend signals, because Upwork returned 403 and Reddit is blocked.

---

## 5. Kept problems in detail

### P1 — No verifiable origin for an asset entering a shared persistent world *(VALIDATED)*
- **User + moment:** a creator on a UGC world platform, at the instant they import a file or accept a
  generated mesh into a world that other people will walk through.
- **Job:** put this object into the shared world without lying about where it came from, and without
  having to remember later.
- **Pain:** the label is a self-declaration with nothing behind it. E1: "no way of easily identifying
  which content is AI generated, and which isn't." The platform operator (E2) plans to "ask for that
  content to be labelled" while explicitly not building generation itself — so it will be asking for a
  claim it cannot check. Meanwhile E13/E14 show there is nowhere in a glTF to *put* a checkable claim:
  the glTF registry has no provenance extension and the C2PA reference implementation has no 3D track.
- **Frequency:** every import and every generation. On a platform where users have "begun using
  [a protocol bridge] to hook [the platform] up to external LLMs to generate content with" (E1), that
  is continuous.
- **Intensity:** per occurrence, small (seconds of annoyance). In aggregate: an unbounded argument the
  platform cannot settle, plus — since 2026-08-02 — an Article 50(2) obligation on whoever is the
  provider of the generating system to mark outputs "in a machine-readable format" (E9). On a
  storefront, the equivalent miss costs discovery outright: untagged generative-AI assets "will no
  longer be eligible for indexing on our browse pages" (E11).
- **Current workaround:** ask nicely, then report-and-argue. E5 asks for the importer to simply offer a
  tick-box — i.e. the workaround people want is a manual field at the import moment.
- **Spend today:** none found in games. Adjacent spend exists: a commercial production platform
  serving e-commerce photo studios sells C2PA manifest embedding as a feature (found via search, not
  opened — LEAD). No game-side product found by the prior-art probe.
- **Counter-evidence:** voluntary tags plus a viewer-side filter might be enough (Zozokasu, E3 thread);
  the platform team resists treating it as enforceable (E3).
- **Missing voices:** platform legal counsel; the users actually running the LLM bridge.
- **Feasible in ~27h / assessable from a link + video?** Yes, and unusually well. The whole mechanism
  is visible in one unbroken take: generate an asset, watch the passport be minted, see the badge on
  the object in a multiplayer world, have a second client see the same badge, then hand-edit the label
  to lie and watch the hash check catch it. Nothing here needs weeks, scale or a user base.

### P2 — A moderator with a report and no evidence *(VALIDATED; strong counter-evidence)*
- **User + moment:** a trust & safety moderator opening a report that says "this world uses AI".
- **Job:** decide, defensibly, and not punish the wrong person.
- **Pain:** there is nothing to look at. The report is an assertion; the asset carries nothing. The
  team's own stated worry is the opposite failure — people "reporting any slightly blurry image as AI"
  (E3). And the team member who runs moderation says plainly he does "not see it as a moderation
  concern or something that should be enforced" (E3), while conceding it "**is** certainly a filtering,
  discovery, tagging, searching issue."
- **Frequency:** begins the day a labelling policy ships, which E2 says is planned.
- **Intensity:** each wrong call costs a creator's standing and the platform's credibility; each
  unevidenced report costs reviewer minutes with no possible resolution.
- **Current workaround:** judgement calls, or declining to enforce.
- **Spend today:** none identified. This is a volunteer/small-team moderation function.
- **Counter-evidence:** the strongest item and the strongest objection come from the same speaker, and
  the objection is that the queue should not exist. Recorded, not argued away.
- **Missing voices:** paid moderators at larger platforms; anyone who has actually run such a queue.
- **Feasible in ~27h?** Yes — a three-column queue (declared / recorded / estimated) over seeded data
  is demonstrable in a video, and the "unevidenced report cannot enter the queue" rule is the thing a
  reviewer can see working.

### P3 — Writing the store's AI disclosure from memory *(HYPOTHESIS)*
- **User + moment:** a solo or 2–5 person dev, at the storefront submission form, months after the art
  was made.
- **Job:** describe truthfully which AI tools touched which shipped content, in each storefront's
  schema, and keep it true across patches.
- **Pain:** the form is prose plus a tick-box — developers must "fill out a text box detailing their
  use of the tools" and "check a box if the game itself makes AI-generated images, text, or other
  content" (E10) — and the two storefronts ask different questions: Steam splits pre-generated from
  live-generated (E10), itch.io asks Yes/No plus Graphics, Sound, Text & Dialog, Code (E11). Nothing in
  the pipeline recorded which tool produced which file, so the text box is written from recollection.
- **Frequency:** once per store per release, again per content patch, times the number of storefronts.
- **Intensity:** the penalty is concrete on at least one store: untagged generative-AI assets "will no
  longer be eligible for indexing on our browse pages" (E11) — de-indexing, i.e. the listing stops
  being found.
- **Current workaround:** memory, a hand-kept note, or a conservative blanket disclosure.
- **Spend today:** unknown. Not found.
- **Counter-evidence:** a LEAD suggests at least one prominent industry figure considers these
  disclosures meaningless; if devs share that view the form is not a pain worth fixing.
- **Missing voices:** the developers themselves. This is the problem's weakness and the reason it is a
  hypothesis: I verified the obligation and the penalty but opened no account of the burden.
- **Feasible in ~27h?** Yes, but it demos as a form being filled, which is a weaker video than P1.
  Best shown as the *annex*: the per-asset table with the honest "origin unknown" rows.

### P4 — One asset degrades the instance for everyone *(VALIDATED)*
- **User + moment:** a world or avatar creator in the minutes before they publish to a shared instance.
- **Job:** know what this costs everyone else, and fix it, before anyone else is in the room.
- **Pain:** "you end up importing a mesh, and it ends up being far more dense than you expect" and the
  platform has no decimation at all — a request open since 2025-01-12 (E7). The other platform has the
  opposite shape of the same problem: it has very precise budgets (32,000 polygons for Excellent on PC,
  7,500 on Quest; 40 MB texture memory on PC, 10 MB on Quest) but applies them *at display time*, with
  the asset "replaced with Fallback" once it is already in front of other people (E8).
- **Frequency:** every publish; continuously if assets are generated at runtime.
- **Intensity:** on one platform, exceeding a bolded stat means the avatar is not shown at all (E8) —
  the creator's work is invisible. Measured in creator hours, it is the blind
  publish-see-it-fail-guess-again loop, with no per-asset remediation list anywhere.
- **Current workaround:** export to Blender and decimate by hand (E7 asks for exactly the Blender
  planar/collapse options); or upload and find out.
- **Spend today:** free OSS carries the load — meshoptimizer at 44.57M downloads/month (E15).
- **Counter-evidence:** substantial. One platform already has the rule engine (E8) and the
  simplification maths is commoditized (E15). The surviving gap is narrow and must be stated as such:
  *pre*-publish rather than display-time; *per-instance* (24 avatars, not one) rather than per-asset;
  with a remediation list rather than a grade; and on the platform that has nothing.
- **Missing voices:** VRChat creators in their own words.
- **Feasible in ~27h?** Yes. The deterministic part is a thin layer over libraries with eight-figure
  monthly installs, and "here is the same instance before and after, at 24 copies" is a strong 30
  seconds of video.

### P5 — No record of what live generation put in front of other players *(HYPOTHESIS)*
- **User + moment:** a developer whose shipped game generates content at runtime, at the moment a
  player's generation becomes visible to other players in a persistent world.
- **Job:** keep the shared world safe and be able to show afterwards what happened.
- **Pain:** live-generated content is a distinct disclosable category on at least one storefront (E10),
  and on a UGC platform users are already bridging external LLMs into the live world (E1) — but the
  generation leaves no record anyone can inspect, and the blast radius differs enormously between a
  private preview and a write into persistent shared state.
- **Frequency:** every generation in a live session.
- **Intensity:** one bad persistent write is seen by everyone who enters that world from then on and,
  being persistent, outlives the session.
- **Current workaround:** a content filter on the prompt, if anything, with no log.
- **Spend today:** chat-moderation vendors exist (ToxMod, Community Sift) but address text chat, not
  generated world objects. Not probed further within budget.
- **Counter-evidence:** the "guardrails" requirement I believe Valve imposes on live-generated content
  is a LEAD, not opened. Treat as unverified.
- **Missing voices:** anyone who has shipped live generation into a multiplayer title.
- **Feasible in ~27h?** Partly. The propagation gate and the transcript are buildable; what is not
  buildable is any claim about real-world efficacy, which would need a live player base. State that as
  a limitation in the video rather than implying evidence.

---

## 6. Solutions

Nine survivors across the five problems. Each is a different mechanism family, moment or user — none
is the same product with a different UI.

### For P1

#### S1a — Asset Passport minted at the import gate
- **Core workflow:** asset bytes + the receipt of the call that produced them → hash the exact bytes,
  compute a geometry fingerprint, sign a passport row (importer, tool/endpoint, model id, prompt/seed
  if present, timestamp, declared category), write it to a registry keyed by content hash, and embed a
  pointer in the glTF via the one metadata slot that exists (KHR_xmp_json_ld) → every object in the
  world is inspectable in-world and shows its chain; assets whose *declared* label disagrees with their
  *recorded* passport fall into a queue.
- **Insight:** the platform cannot verify a claim made after the fact, but it can refuse to be the only
  party with no record. Capture at the gate and the claim becomes checkable by hashing, not by arguing.
  E1 names the exact failure ("no way of easily identifying") and E5 names the exact moment (the file
  importer).
- **Replaces:** a self-declared tag plus report-and-argue.
- **Behaviour change:** one extra step at import — route the generation call through the gate, or paste
  its receipt. Nothing changes for assets you authored yourself except a hash.
- **Capabilities needed / simplest technology:** content hashing (SHA-256), detached signatures
  (Ed25519), a key-value registry keyed by hash (SQLite or Postgres), glTF read/write
  (@gltf-transform/core, E15), geometry statistics (meshoptimizer, E15), a hosted LLM for two narrow
  jobs (below), the shared-persistent-state platform for the in-world badge.
- **Flagged as not required:** no blockchain (a signed append-only log with published checkpoints does
  the job), no AR/VR beyond what the host platform already is, no multi-agent system, no fine-tuning.
- **Fingerprint:** domain = UGC game platforms / content provenance · user = a creator at the import
  step of a shared persistent world · job = attach checkable origin to an object others will see ·
  mechanism = the origin record is created by the system at the moment of creation instead of asserted
  by the creator afterwards · mechanism_family = verify (+ connect) · buyer_or_demo = demo to reviewers
  as a two-client multiplayer scene; buyer would be the platform operator.
- **Why-now:**
  - kind: **regulation** (with a **platform** change behind it)
  - date of the change: **2 August 2026** — the date Article 50 of Regulation (EU) 2024/1689 began to
    apply (E9). Secondary platform dates: Steam's rewritten disclosure rules reported **2026-01-16**
    (E10); itch.io's mandatory disclosure field announced **2024-11-21** (E11).
  - change: synthetic outputs must be "marked in a machine-readable format and detectable as
    artificially generated or manipulated" (E9). Two games storefronts independently made disclosure a
    publishing condition, one of them enforced by de-indexing (E11).
  - threshold with number: coverage, and it is **zero**. Of the 27 ratified Khronos glTF 2.0 extensions
    read in E13, **0** carry provenance, signature or AI-origin semantics; the only metadata extension
    (KHR_xmp_json_ld) is a generic container. The C2PA reference implementation's tracker returns
    **1** hit for 3D/glTF/mesh and it is unrelated (E14). So the machine-readable marking the rule
    requires has **no defined place to live in a 3D game asset** — a gap that opened the day the rule
    started applying, 2026-08-02.
  - who couldn't do this before and can now: a 2–5 person platform or world author. Signing, hashing
    and glTF rewriting are now commodity libraries — @gltf-transform/core at 2.49M downloads/month,
    meshoptimizer at 44.57M (E15) — so the per-asset marginal cost of minting and checking a passport
    is one hash and one signature, well under a millisecond, versus the human minutes an argument costs.
  - earlier attempts and why they failed: image watermarking and metadata stripping (EXIF/XMP is
    routinely discarded on upload, so a claim in the file was worthless); and C2PA itself, which
    succeeded for images and video precisely because it stopped relying on the file alone and bound a
    signed manifest to content. Both failed for lack of (i) a reason anyone had to carry the data and
    (ii) a place to put it. The rule supplies (i) from 2026-08-02; keeping the authoritative record in
    an off-asset registry keyed by content hash supplies (ii) without waiting for a standards body.
  - absorption check: **partially absorbed, disclosed.** The platform operator states it "will likely
    add some form of flagging/labeling" (E2) — so the *label* is their next feature. What they cannot
    add alone is the part that makes a label worth anything: a record minted at the generating tool,
    bound to bytes. E2 also says they will not implement generation features officially, which means
    the capture point sits outside the platform by their own choice. Khronos has shipped no provenance
    extension (E13) and the C2PA reference implementation has no 3D track (E14), so neither standards
    body is about to absorb it either. The honest framing: build the record and the gate, not the badge.
  - sentence: *Since 2 August 2026, synthetic output must carry machine-readable marking — and as of
    October 2026 there is still no field anywhere in the 3D asset formats games actually ship to put it
    in, while two storefronts and at least one world platform have made the claim a publishing
    condition.*

#### S1b — Receipt-at-source: a generation proxy that is the system of record
- **Different moment:** the generation call, not the import.
- **Core workflow:** every text/image-to-3D or LLM call in the project goes through one endpoint →
  the endpoint writes a row per *attempt* (prompt, model, parameters, cost, output hash) including the
  forty you threw away, and returns the accepted asset with its passport already attached → at
  submission, hash-match the shipped build's asset list against the ledger and emit (a) the storefront
  survey text in each store's own schema and (b) a signed per-asset annex, with the unmatched files
  listed as "origin unknown".
- **Insight:** disclosure is written from memory because nothing was recording. Put the record at the
  only place that sees ground truth — the call — and the disclosure becomes a query, and the "origin
  unknown" list becomes the honest, useful output rather than a failure.
- **Replaces:** recollection, and the blanket conservative disclosure.
- **Behaviour change:** point your API base URL at the proxy once.
- **Capabilities needed / simplest technology:** an HTTP reverse proxy, a relational ledger, content
  hashing, a build-manifest walker, glTF/texture readers, a hosted LLM for schema matching.
- **Fingerprint:** domain = game production pipelines · user = a solo/small-studio dev between first
  generated asset and store submission · job = be able to say later which tool made which shipped file
  · mechanism = the pipeline keeps a per-attempt ledger and the submission form is derived from the
  shipped bytes instead of from memory · mechanism_family = automate (+ create the record) ·
  buyer_or_demo = the studio; demos as a filled survey with a per-asset annex.
- **Why-now:** same regulation/platform change and dates as S1a (E9: 2026-08-02; E10: 2026-01-16;
  E11: 2024-11-21). Threshold: the obligation is now **per-asset in substance but per-project in the
  form** — one free-text box and one checkbox cover a whole catalogue (E10), while the penalty on the
  other store is applied per listing (E11). Who couldn't before: a one-person studio, because the
  ledger costs one proxy hop (single-digit milliseconds) instead of a pipeline engineer. Earlier
  attempts: asset-management systems (Perforce/DAM) recorded files but not the *tool that produced
  them*, because before 2024 nobody was asked. Absorption: the storefronts have no incentive to build
  the developer's internal ledger — E10 shows Valve moving the opposite way, *narrowing* what must be
  disclosed and exempting dev tools.

#### S1c — Passport-aware viewer policy (the label travels, the viewer decides)
- **Different user:** the player entering the world, not the creator.
- **Core workflow:** every object instantiates with its passport → each player sets a policy (hide
  unlabelled / hide synthetic / badge only) → the world applies it per viewer at instantiation →
  the by-product is a per-world inventory of what is in it and what is unknown, which the world author
  sees before publishing.
- **Insight:** this is what the community actually asked for, in its own words: a way to make synthetic
  content "easily identifiable as what it is" (E1), with the counter-proposal in the same thread being
  exactly "voluntary disclosure and user-controlled filters" (E3 thread, Zozokasu). Giving the
  *cheaper* fix a real mechanism is better than arguing it away — and it makes the world-level
  inventory, which is the author's actual decision support.
- **Replaces:** nothing today; it is the missing consumer side of a label.
- **Behaviour change:** one settings toggle per player.
- **Capabilities needed / simplest technology:** the shared-persistent-state platform's own
  instantiation hooks, a per-player policy record, the passport registry. **No model in the loop.**
- **Fingerprint:** domain = UGC world platforms · user = a player entering a world they did not make ·
  job = not be shown content they have decided not to engage with · mechanism = visibility is resolved
  per viewer at instantiation from a record, rather than negotiated after the fact by reports ·
  mechanism_family = inform (+ prevent) · buyer_or_demo = platform; demos as two clients side by side
  in the same world seeing different things.
- **Why-now:** **behaviour** change, dated by E1 (2026-01-15): users on this platform began bridging
  external LLMs into the live world after a specific protocol release, creating the first population of
  in-world synthetic objects. Threshold: coverage again — **0** of 27 glTF extensions can carry the
  flag this filter needs (E13), so the filter has nothing to read until S1a exists. Who couldn't
  before: the platform's non-technical users, who currently have only "report it and argue". Earlier
  attempts: content-warning tags on UGC platforms, which failed because they were author-asserted with
  no consequence — E11 shows a storefront attaching a real consequence (de-indexing) for the first
  time. Absorption: this one *is* the platform's stated next feature (E2) — declared, which is why it
  is listed third and framed as the consumer of S1a's record, not as the project.

### For P2

#### S2a — A disagreement queue instead of a report queue
- **Core workflow:** for each asset, three values are held side by side — what the creator **declared**,
  what the gate **recorded**, and, only for assets with no record, what a classifier **estimates** →
  the queue is populated by *disagreement between the first two*, ranked by how far apart they are;
  reports with no disagreement behind them never create an item → one decision writes back to the
  asset's label, the creator's standing, and an append-only audit row.
- **Insight:** the moderator's problem is not volume, it is that a report carries no evidence. Make the
  queue's entry condition *evidence of inconsistency* and the vigilante case — "reporting any slightly
  blurry image as AI" (E3) — cannot enter at all. That answers the platform team's actual objection
  rather than overriding it.
- **Replaces:** adjudicating assertions.
- **Behaviour change:** moderators stop reading reports as the unit of work and start reading
  mismatches.
- **Capabilities needed / simplest technology:** the passport registry, a rules engine for which
  categories require a label in which jurisdiction, an append-only audit table, a hosted model for the
  no-record estimate only.
- **Fingerprint:** domain = platform trust & safety · user = a moderator opening the queue at the start
  of a shift · job = decide defensibly and not punish the wrong creator · mechanism = the work item is
  a recorded inconsistency rather than a human accusation · mechanism_family = detect (+ verify) ·
  buyer_or_demo = platform T&S; demos as a queue with three columns and a lying label being caught.
- **Why-now:** **platform** change, dated **2026-01-15** (E2), when the operator stated it would add
  labelling and an official stance — creating the enforcement question that does not exist until a
  policy does. Threshold: accuracy relative to the cost of an error. A classifier alone cannot carry
  this: a false "this is AI" call costs a creator their standing, and the team already named that
  failure mode (E3). A hash comparison is exact, so routing the exact cases deterministically and
  sending only the **no-record** residue to a model moves the error rate on the enforceable set to 0.
  Who couldn't before: a small volunteer T&S team with no evidence to stand on. Earlier attempts:
  report-driven moderation of AI content on art and asset platforms, which produced false accusations
  because the only evidence was the look of the thing. The passport removes that reason for the
  enforceable majority. Absorption: E2 shows the platform will build the *label*; nothing suggests it
  will build the mismatch queue, and E3 shows its own staff doubt the enforcement half — so if anything
  the risk here is the opposite of absorption, which is recorded as the problem's counter-evidence.

#### S2b — Creator-first correction window
- **Different moment and mechanism family:** prevent, before any moderator sees it.
- **Core workflow:** the gate detects a declared-vs-recorded mismatch → the **creator** gets it first,
  with the specific asset, the specific discrepancy and a fixed window to amend → only unamended
  mismatches escalate to S2a's queue → the amendment history becomes part of the creator's record.
- **Insight:** most mismatches are forgetfulness, not deceit (the declaration is made per project,
  months after the asset: E10's free-text box). Routing to the person who can fix it in ten seconds
  keeps the moderation queue for the residue, and the amendment history is what later distinguishes
  sloppiness from a pattern.
- **Replaces:** escalating every discrepancy to a human adjudicator.
- **Behaviour change:** creators receive mismatch notices and are expected to answer them.
- **Capabilities needed / simplest technology:** the registry, a scheduler, notifications, an
  append-only amendment log. **No model in the loop.**
- **Fingerprint:** domain = platform trust & safety · user = a creator notified that one of their
  assets' labels does not match its record · job = fix it before it becomes a moderation matter ·
  mechanism = the discrepancy is routed to the person who can resolve it, and only the residue
  escalates · mechanism_family = prevent · buyer_or_demo = platform; demos as a notice, an amendment,
  and a queue that stays empty.
- **Why-now:** same platform date as S2a (**2026-01-15**, E2). Threshold: cost per completed task.
  Every mismatch resolved by the creator costs the platform zero reviewer-minutes; the current path
  costs a full review of an unevidenced report, which E3 says the team does not even want to perform.
  Who couldn't before: nobody could, because without a record there is no mismatch to route. Earlier
  attempts: appeal flows, which run *after* a penalty and so arrive too late to prevent the review.
  Absorption: an escalation policy is not a product feature either storefront or platform has
  signalled; E2's statement stops at labelling.

### For P3

#### S3a — Submission dossier derived from the shipped build
- **Core workflow:** point it at the built game and the generation ledger → it walks the build, hashes
  every asset, matches hashes against ledger rows, and splits the result into *matched* (tool known),
  *derived* (matched by geometry fingerprint after edits), and *unknown* → it emits each storefront's
  survey in that store's own vocabulary, plus a signed per-asset annex, and on a patch it emits the
  **diff** rather than a fresh guess.
- **Insight:** the storefronts ask a project-level question about asset-level facts (E10, E11). The
  project-level answer is unknowable from memory but trivially derivable from bytes — *if* something was
  recording, which is what S1b arranges. The valuable output is the "unknown" list: it is the only
  honest answer available, and it tells the dev exactly what to go and check.
- **Replaces:** writing the text box from recollection.
- **Behaviour change:** disclosure moves from the end of the project to a build step.
- **Capabilities needed / simplest technology:** a build/asset-manifest walker, content hashing,
  geometry fingerprinting (meshoptimizer, E15), the ledger, a hosted LLM for schema mapping only.
- **Fingerprint:** domain = game release pipelines · user = a solo dev at the storefront submission
  form · job = answer the AI-use survey truthfully for this exact build · mechanism = the disclosure is
  computed from the shipped bytes and re-computed as a diff on each patch, instead of being recalled ·
  mechanism_family = verify (+ automate) · buyer_or_demo = the studio; demos as a build going in and a
  filled survey plus an annex coming out, with the unknown rows visible.
- **Why-now:** **regulation + platform**. Dates: Article 50 applied **2026-08-02** (E9); Steam's rules
  rewritten, reported **2026-01-16** (E10); itch.io's field announced **2024-11-21** (E11). Threshold:
  **two** incompatible storefront schemas now exist for the same underlying facts — Steam's
  pre-generated/live-generated split (E10) versus itch.io's Graphics / Sound / Text & Dialog / Code
  (E11) — and the penalty on one of them is removal from browse indexing (E11), i.e. the discovery
  channel a small game lives on. Who couldn't before: a dev with no build engineer, because walking a
  build and hash-matching is now a short script over libraries at 2.49M and 44.57M downloads/month
  (E15). Earlier attempts: hand-maintained asset credit spreadsheets, which went stale because nothing
  verified them against the build. Absorption: E10 shows Valve moving to *narrow* disclosure and exempt
  dev tools — the storefront is simplifying its form, not building the developer's ledger.

#### S3b′ — Catalogue provenance rebuilt from the seller's own project files *(regenerated; see §8)*
- **Different user:** an asset-store seller with a back catalogue, not a game dev at submission.
- **Core workflow:** scan the seller's local project folders for the source files behind each published
  listing → hash and fingerprint them, read whatever generation artefacts are actually on disk
  (ComfyUI/A1111 PNG metadata, tool sidecar files, model names in paths, texture-set signatures) →
  produce a per-listing proposed tag **with the file-level evidence for it** and a confidence, and a
  ranked worklist of the listings where no evidence exists either way → the seller approves and the tool
  keeps the decision, the evidence and the date as a record they can show if challenged.
- **Insight:** the seller does not need a classifier's guess; they need to find the evidence they
  already have on their own disk, and to keep what they decided. The penalty is per listing and real —
  untagged generative-AI assets lose browse indexing (E11) — so the unit of work is the listing, and
  the artefact that matters is the defensible decision, not the tag.
- **Replaces:** clicking through N listings guessing from memory, or blanket-tagging everything Yes and
  losing the non-AI listings' standing.
- **Behaviour change:** the seller runs a scan over their own archive once, then maintains it.
- **Capabilities needed / simplest technology:** filesystem walk, PNG/EXIF/XMP metadata extraction,
  perceptual and geometric hashing, a local decision store, a hosted model only for the residue where
  no on-disk evidence exists.
- **Fingerprint:** domain = game asset marketplaces · user = an asset seller facing de-indexing of an
  existing catalogue · job = tag every listing correctly and be able to justify each tag · mechanism =
  provenance is recovered from evidence already sitting in the seller's own project files, and the
  decision plus its evidence becomes a kept record · mechanism_family = repair (+ verify) ·
  buyer_or_demo = the seller; demos as a catalogue scan surfacing the generation metadata still sitting
  inside the seller's own PNGs.
- **Why-now:** **platform**, dated **2024-11-21** (E11) — the announcement of the mandatory field, whose
  stated enforcement is "filtering and user reports" and whose penalty is loss of browse indexing.
  Threshold: coverage of recoverable evidence. Generation tools have been writing their parameters into
  PNG metadata for years, so for a large share of a catalogue the answer is **already on disk at zero
  inference cost** — the forward direction (E12: saved files carry "no metadata indicating it's
  AI-generated") is only true of the *library* default, not of the popular front-ends. Who couldn't
  before: a seller with hundreds of listings and no engineer. Earlier attempts: AI-image detectors sold
  to marketplaces, which failed on false positives and cannot explain themselves; this inverts the
  approach — find the receipt, and only guess where there is none. Absorption: the storefront built the
  field and stopped there (E11); it has no access to the seller's local project folders at all.

### For P4

#### S4a — Pre-publish instance budget simulation with applied remediation
- **Core workflow:** take the world or avatar → compute the deterministic budget stats (triangles,
  texture memory, material slots, skinned meshes, bones, bounds) → **simulate the instance**, not the
  asset: project the totals for 1 / 8 / 24 copies against a chosen device budget and report what breaks
  and at which count → emit a per-asset remediation list naming the specific mesh, the specific texture
  and the specific cut → on approval, apply decimation and texture downscale and **re-measure**, so the
  output is a verified pass, not advice.
- **Insight:** the published budgets are per-asset (E8) but the experience that fails is the *instance*
  — twenty-four people in one room. And the one platform that has no reduction tool at all (E7, open
  21 months) cannot act on a grade even if given one. The leverage is in moving the check before the
  publish and ending it with a measured result rather than a suggestion.
- **Replaces:** publish, watch the fallback replace your work (E8), export to Blender, guess, repeat.
- **Behaviour change:** one pre-publish step, with its output being an applied change you can verify.
- **Capabilities needed / simplest technology:** glTF parsing and writing (@gltf-transform/core),
  simplification and stats (meshoptimizer), texture transcoding (KTX2/Basis — note KHR_texture_basisu
  exists in the registry, E13), an arithmetic budget model, the shared-state platform to show the
  before/after instance. **No model is required in this loop at all** — which is why it is listed as
  the deterministic companion to the passport work rather than as the AI-x-gaming centrepiece.
- **Flagged as not required:** no ML-based mesh simplification (the classical algorithms are better and
  free, E15), no multi-agent anything, no fine-tuning.
- **Fingerprint:** domain = UGC world platforms / asset pipelines · user = a world or avatar creator in
  the last minutes before publishing · job = not be the person who makes the room unplayable · mechanism
  = the cost is projected at instance scale before publication and the fix is applied and re-measured,
  instead of being discovered at display time by everyone present · mechanism_family = prevent
  (+ repair) · buyer_or_demo = platform or creator; demos as the same instance at 24 copies, before and
  after.
- **Why-now:** **capability/cost**, with a **platform** gap. Dates: the decimation request has been
  open since **2025-01-12** (E7); the September 2026 download figures are E15. Threshold: cost per
  completed task. The simplification and validation primitives now cost **zero** and are installed
  **44,574,675** (meshoptimizer) and **2,485,210** (@gltf-transform/core) times a month (E15), so a
  two-person team can ship a budget simulator in a weekend where it used to mean licensing middleware.
  Who couldn't before: creators on the platform with no decimation at all (E7), and small teams priced
  out of commercial mesh-reduction middleware. Earlier attempts: per-asset grading — which exists and
  works as far as it goes (E8) but fires at display time and says nothing about which triangle to cut;
  and manual Blender decimation, which is exactly what E7 asks to stop doing. Absorption risk: this is
  plausibly the platform's own next feature, since E7 is a feature request filed against it. **Stated
  plainly: S4a is the most absorbable solution here.** Its defensible part is the instance-scale
  projection and the measured re-check, not the decimation.

#### S4b — Runtime admission control for generated assets
- **Different moment:** runtime, inside a live session, before replication.
- **Core workflow:** an asset is generated mid-session → before it is replicated to other clients it is
  measured against the instance's *remaining* budget given who is currently present → it is admitted,
  auto-degraded to fit, or refused → every decision is logged with the numbers that drove it.
- **Insight:** every existing check assumes a build step. Assets that appear at runtime — which is
  precisely what the Track A shape of platform enables — bypass it entirely, and E1 documents users
  already piping external models into a live world. Admission control is the only place left to stand.
- **Replaces:** nothing — this path is currently unguarded.
- **Behaviour change:** generated content may arrive visibly degraded, and the player is told why.
- **Capabilities needed / simplest technology:** the same deterministic measurement as S4a, a
  per-instance budget ledger, the platform's replication hook, a decision log.
- **Fingerprint:** domain = live multiplayer worlds · user = a player generating an object others will
  see, mid-session · job = add to the world without breaking it for the people in it · mechanism =
  budget is enforced at replication time against who is actually present, with the decision recorded ·
  mechanism_family = prevent · buyer_or_demo = platform; demos as a deliberately enormous generated
  asset being degraded on its way to the second client.
- **Why-now:** **capability** change, dated by E1 (**2026-01-15**): live generation into a shared
  persistent world became something users actually do on this platform after a specific protocol
  release. Threshold: latency. Admission must resolve inside a frame budget — single-digit milliseconds
  — which rules out any model in the decision path and makes the arithmetic core mandatory;
  meshoptimizer-class measurement meets it, a classifier does not. Who couldn't before: platforms whose
  only content path was an SDK build, which is where E8's checks live. Earlier attempts: display-time
  fallback (E8), which protects the viewer's framerate but only after the asset has been downloaded and
  replicated to everyone. Absorption: E8 shows VRChat's effort went into display-time ranking, and E7
  shows the other platform has not even shipped decimation — neither is near runtime admission.

### For P5

#### S5a — Guardrail transcript for live-generated content
- **Core workflow:** every generation in a live session that becomes visible to a second player is
  recorded — requesting player, prompt, model, output hash, the policy decision, and **which rule
  fired** → the product is the reviewable queue plus an exportable evidence pack → the pack is what a
  storefront's guardrail question can actually be answered with, and what an incident can be
  reconstructed from.
- **Insight:** live-generated content is a separate disclosable category (E10) precisely because it is
  unpredictable, and the honest answer to "what guardrails?" is a record of decisions, not a promise.
  Nobody keeps one today.
- **Replaces:** an unlogged prompt filter.
- **Behaviour change:** the studio accepts that live generation produces a retained log.
- **Capabilities needed / simplest technology:** an append-only event store, the deterministic policy
  engine, a hosted model for classification of the generated artefact, hash linkage to the passport
  registry.
- **Fingerprint:** domain = live-service games with runtime generation · user = a developer answering
  for what their live generation produced · job = be able to show what happened and why it was allowed ·
  mechanism = each generation that reaches another player becomes a retained, rule-attributed record
  instead of an unlogged filter pass · mechanism_family = detect (+ verify) · buyer_or_demo = the
  studio; demos as a session transcript with one refusal and the rule that caused it.
- **Why-now:** **platform/regulation**. Dates: Steam's rewritten rules, reported **2026-01-16**, keep
  "AI content generated during gameplay" as its own disclosable category (E10); Article 50 applied
  **2026-08-02** (E9). Threshold: coverage. Of the live-generation paths E1 documents on a real
  platform, **zero** produce a record any third party can inspect. Who couldn't before: studios shipping
  runtime generation at all, which only became common once hosted inference made it affordable per
  session. Earlier attempts: chat-moderation vendors, whose unit is an utterance in a text channel, not
  a generated world object with a propagation scope. Absorption: E10 shows the storefront narrowing its
  own requirements rather than building tooling.

#### S5b — Blast-radius-scaled gating
- **Different mechanism:** the gate's strictness is a function of how far the output travels.
- **Core workflow:** classify each generation request by propagation scope — private preview, this
  instance only, or a write into persistent shared state → apply a progressively stricter gate, with a
  persistent-world write requiring a passing check **plus** a recorded approval → the scope decision and
  its outcome are stored with the asset's passport.
- **Insight:** one filter for everything is either too strict to be usable in a private preview or too
  loose for a write that every future visitor will see. Persistence is the variable nobody is pricing,
  and it is the defining property of the Track A platform shape.
- **Replaces:** a single global content filter.
- **Behaviour change:** players learn that making something permanent is a different act from making
  something for themselves.
- **Capabilities needed / simplest technology:** the scope model (deterministic, read from the write
  target), the policy engine, an approval record, a hosted model for the content check at the strictest
  tier only.
- **Fingerprint:** domain = shared persistent worlds · user = a player writing generated content into
  state that outlives their session · job = add something permanent without it being a permanent
  problem · mechanism = gate strictness and approval requirements scale with propagation scope, which
  is read from the write target rather than asked about · mechanism_family = prevent · buyer_or_demo =
  platform; demos as the same prompt passing privately and being held at the persistent-write tier.
- **Why-now:** **capability** change, dated **2026-01-15** by E1 — users bridging external models into a
  persistent world is new behaviour tied to a specific protocol release. Threshold: cost of an error
  scaled by audience. A bad private preview is seen by 1 person; a bad persistent write is seen by
  every future visitor to that world, unboundedly — so spending inference only at the top tier is the
  whole economic argument, and the tier is determined by deterministic inspection of the write target,
  at zero inference cost for the common case. Who couldn't before: platforms without shared persistent
  state, where every generation was ephemeral by construction. Earlier attempts: flat global filters.
  Absorption: neither E2 (labelling) nor E8 (performance ranking) touches propagation scope.

---

## 7. Stage 4b — per solution

### S1a — Asset Passport minted at the import gate
1. **product_is** (no model named): A registry of every object that has entered a world, keyed by the
   exact bytes, holding for each one who brought it in, from which tool, when, what they said about it,
   and a signature over that row — plus the in-world inspector that shows an object's row to anyone
   standing next to it, and the list of objects whose stated origin does not match their recorded one.
2. **ai_leverage:** (i) **classification** — for assets with no record at all (legacy worlds, external
   imports), estimate synthetic origin from geometry statistics and texture artefacts, producing a
   *claim to be reviewed*, never a verdict. (ii) **normalization / matching** — map a creator's
   free-text account of their process onto two storefronts' incompatible category schemas (E10 vs E11).
   *Why not deterministic:* (i) there is no rule that separates a generated mesh from a hand-modelled
   one — the signal is a diffuse joint pattern across topology regularity, UV layout, vertex-density
   distribution and texture frequency, and it shifts with every new generator, so a threshold written
   today is wrong next quarter; (ii) the inputs are free prose (E10's "text box") against named
   taxonomies — a lookup table fails on everything not already in it, which is most of what people
   type. **Not drafting, generating or translating.** Deterministic checks on both: (i) the classifier's
   output can only ever enter a review queue and never writes a label; (ii) every mapped category is
   validated against the storefront's fixed enumeration and rejected if it is not a member.
3. **without_model:** the hash index and signature chain; the glTF read/write path; the registry schema
   and its append-only history; the in-world inspector; the policy table of which categories require a
   label where; the declared-vs-recorded diff; the generation-receipt capture integration; the key
   management. Judgement: **substantial** — the exact-match majority of the product works with no model
   whatsoever, which is the point.
4. **Reduction test:** "The user gives an imported 3D asset to a model and gets back a guess about
   whether it is AI-generated." **FAIR: false.** The sentence covers only the residue — assets with no
   record. It never touches the gate that mints the record, the content-hash binding that makes a label
   checkable, the registry that outlives any model, the in-world inspector, the diff, or the queue the
   diff feeds. The part the sentence describes is the part explicitly forbidden from writing anything.
5. **Wrapper shape match:** closest is *a wrapper around a model API* (declared). It differs because the
   model is on the minority path and holds no write authority: the authoritative claim is a signature
   over bytes, and removing the model leaves a working provenance registry that simply has fewer
   candidates to review.
6. **Authenticity signals (8, across all three groups):**
   - *Real workflow* — **narrow_persona**: the person standing in the importer dialogue on a UGC world
     platform, deciding what to tick (`evidence`: E5 names that dialogue; E1 names the inability).
   - *Real workflow* — **existing_workaround**: today they ask nicely, then report and argue (`evidence`:
     E1, E3).
   - *Real workflow* — **writes_to_system_of_record**: the passport row becomes the platform's record of
     an object's origin and the thing a moderation decision is written against (`commitment`: the MVP
     writes passport and decision rows; the named test re-reads an object's full chain after a
     moderation write and after a republish).
   - *Real workflow* — **domain_logic**: which disclosure categories exist differs per storefront and
     per jurisdiction — Steam's pre/live split (E10) versus itch.io's four content types (E11) versus
     Article 50(2)'s machine-readable marking (E9) (`evidence`).
   - *Compounds* — **accumulated_history**: the registry gets more useful with every asset, because a
     re-upload of bytes already seen resolves instantly from the index (`commitment`: the named test
     re-imports a previously seen file and asserts the existing row is returned, with no inference call).
   - *Compounds* — **better_with_repeat_use**: a creator's second project inherits their key and their
     tool receipts (`commitment`).
   - *Substance* — **deterministic_core**: SHA-256 content binding, Ed25519 signatures, an append-only
     log, and the declared-vs-recorded diff — all exact (`commitment`: the named test hand-edits a
     label in a published glTF and asserts the diff catches it with no model called).
   - *Substance* — **hard_implementation**: there is no provenance extension in glTF (E13) and no 3D
     track in the C2PA reference implementation (E14), so the binding has to be built — off-asset
     registry keyed by content hash, with a pointer in the one generic metadata slot that exists
     (KHR_xmp_json_ld) and a geometry fingerprint to survive re-export (`evidence`: E13, E14).

### S1b — Receipt-at-source generation proxy
1. **product_is:** A ledger with one row per generation attempt made during a project — prompt,
   parameters, cost, output bytes' hash — joined to the list of files that actually shipped, so the
   project can state which tool produced which shipped file and, honestly, which files it cannot
   account for.
2. **ai_leverage:** **normalization/matching** (free-text tool descriptions → each storefront's fixed
   taxonomy) and **extraction** (pulling asset identities out of heterogeneous build manifests and
   engine asset databases). *Why not deterministic:* build layouts and engine asset databases differ per
   engine, per version and per project convention; a parser per format breaks on the next release,
   whereas the identity of an asset in a manifest is a recognition task over messy, inconsistent text.
   **Not drafting.** Deterministic check: every extracted asset identity must resolve to a real file
   whose hash is recomputed from disk, or it is discarded.
3. **without_model:** the proxy, the attempt ledger, the hash-match join, the shipped-build walker, the
   diff between releases, the signed annex, the per-store export. **substantial.**
4. **Reduction test:** "The user gives their AI tool usage to a model and gets back a disclosure
   paragraph." **FAIR: false.** The ledger is populated by intercepting real calls, the answer is
   computed by hash-matching the shipped bytes, and the valuable output — the "origin unknown" list — is
   produced by set difference. A model that produced the paragraph from a description would be the thing
   this replaces.
5. **Wrapper shape match:** *content generator* (it does emit prose for a form) and *agentic version of
   existing software*. It differs because the prose is the smallest output and is derived from the
   ledger; remove the model and you still get the per-asset annex and the unknown list, which is the
   part that changes what the developer does.
6. **Authenticity signals (6):**
   - *Real workflow* — **integration**: sits on the generation API path and on the build output
     (`commitment`: MVP proxies one generation endpoint and reads one engine's build manifest; the test
     asserts a shipped file resolves to the attempt that made it).
   - *Real workflow* — **real_workflow**: the storefront form that must be filled, in its actual shape —
     a free-text box plus a checkbox (`evidence`: E10).
   - *Real workflow* — **takes_responsibility_for_outcome**: it signs the annex and names the files it
     cannot account for rather than guessing (`commitment`).
   - *Compounds* — **usage_data**: every attempt, including discarded ones, accrues (`commitment`).
   - *Compounds* — **accumulated_history**: a patch release is answered as a diff against the previous
     dossier (`commitment`: the test re-runs after changing one asset and asserts a one-row diff).
   - *Substance* — **deterministic_core**: hashing, the join, the set difference (`commitment`).

### S1c — Passport-aware viewer policy
1. **product_is:** A per-player visibility policy that the world applies as it instantiates each
   object, from that object's record — and, as a by-product, a per-world inventory of what is in it and
   what has no known origin, which the author sees before publishing.
2. **ai_leverage:** **none.** No model in the loop. (Passes trivially per the stated rule.)
3. **without_model:** everything — the policy records, the instantiation hook, the inventory.
   **substantial.**
4. **Reduction test:** no model to write a sentence about. Not applicable; **FAIR: false** by
   construction.
5. **Wrapper shape match:** none. The honest weakness is different and is declared: this is the
   platform's own stated next feature (E2), so it is positioned as the consumer of S1a's record rather
   than as the project.
6. **Authenticity signals (5):**
   - *Real workflow* — **narrow_persona**: a player who has decided not to engage with synthetic
     content and currently has only the report button (`evidence`: E1, and the Zozokasu counter-proposal
     in E3's thread which asks for exactly this).
   - *Real workflow* — **automation_changes_workflow**: visibility is resolved at instantiation rather
     than litigated afterwards (`commitment`).
   - *Compounds* — **workflow_effects**: the more objects carry passports, the less the filter has to
     hide as "unknown" (`commitment`: the test asserts the unknown count falls as passports are added).
   - *Substance* — **deterministic_core**: the whole thing (`commitment`).
   - *Substance* — **distribution_or_trust**: it is the visible payoff that gives creators a reason to
     mint passports at all, which is what makes S1a adopted rather than merely correct (`evidence`: E1
     states the want; E2 states the platform will ask for labels).

### S2a — Disagreement queue
1. **product_is:** A moderator's queue whose items are recorded inconsistencies between what a creator
   said about an asset and what the system recorded about it, ranked by the size of the gap, each
   resolvable in one action that writes the corrected label, the creator's standing and an audit row.
2. **ai_leverage:** **classification**, and only on items with no recorded origin; plus **ranking** of
   the queue by severity (how far apart the claims are, how widely the asset has propagated, the
   creator's amendment history). *Why not deterministic:* the no-record residue has no ground truth to
   compare against, so something must estimate; and ranking trades off several incommensurable signals
   whose relative weight is a judgement a fixed formula gets wrong as the mix changes. **Not drafting.**
   Deterministic checks: an item cannot be created without a recorded inconsistency, and the classifier
   can never set a label — only populate a review slot.
3. **without_model:** the queue and its entry rule, the three-way comparison, the audit trail, the
   write-back to labels and standing, the jurisdiction policy table, the report-suppression rule.
   **substantial.**
4. **Reduction test:** "The moderator gives an asset to a model and gets back whether it is
   AI-generated." **FAIR: false.** The queue's entry condition is a deterministic mismatch, which is
   where the majority of real items come from; the model never decides; and the audit trail and
   write-back are the product's reason to exist.
5. **Wrapper shape match:** *an AI dashboard with no workflow of its own*, and the "check X against
   rules and flag it" default. It differs on both counts: X is not checked against rules but against
   *the creator's own prior statement*, and the flag resolves into a write-back that changes the asset's
   label and the creator's record. On the default — this is the case that genuinely calls for a
   human-decision workflow, because E3 shows the error cost falls on a named creator.
6. **Authenticity signals (7):**
   - *Real workflow* — **narrow_persona**: a small-team platform moderator opening a report about AI
     content (`evidence`: E3).
   - *Real workflow* — **existing_workaround**: judgement calls, or declining to enforce (`evidence`:
     E3's "I do not see it as a moderation concern").
   - *Real workflow* — **takes_responsibility_for_outcome**: the entry rule suppresses unevidenced
     reports, which is the platform's own stated fear (`evidence`: E3's vigilante concern;
     `commitment`: the test files a report against a consistent asset and asserts no queue item appears).
   - *Real workflow* — **writes_to_system_of_record**: the decision updates the label and the standing
     (`commitment`).
   - *Compounds* — **feedback_loop**: resolved items label the no-record residue, improving ranking
     (`commitment`).
   - *Compounds* — **accumulated_history**: a creator's amendment history is an input to severity
     (`commitment`).
   - *Substance* — **eval_infrastructure**: because a false accusation is the named harm, the MVP ships
     a fixed labelled set of hand-modelled and generated assets and reports the no-record classifier's
     false-positive rate on it, with the queue showing that number next to every estimate
     (`commitment`).

### S2b — Creator-first correction window
1. **product_is:** A notice to the creator naming the specific asset and the specific discrepancy, a
   fixed window to amend, an escalation of only what goes unamended, and a kept history of amendments.
2. **ai_leverage:** **none.** No model in the loop.
3. **without_model:** everything. **substantial.**
4. **Reduction test:** not applicable; **FAIR: false** by construction.
5. **Wrapper shape match:** none.
6. **Authenticity signals (5):**
   - *Real workflow* — **narrow_persona**: a creator who declared once, months ago, and has forgotten
     (`evidence`: E10's project-level free-text box against asset-level facts).
   - *Real workflow* — **automation_changes_workflow**: the residue reaching moderators shrinks to
     genuine refusals (`commitment`: the test asserts an amended mismatch never creates a queue item).
   - *Compounds* — **accumulated_history**: the amendment log is what later separates sloppiness from a
     pattern (`commitment`).
   - *Substance* — **deterministic_core**: mismatch detection, the window, the escalation (`commitment`).
   - *Substance* — **operational_complexity**: windows, notifications, retries and escalation ordering
     have to be right or the queue fills with items whose owners were never told (`commitment`).

### S3a — Submission dossier derived from the build
1. **product_is:** A table of every asset in a specific shipped build, each row saying which tool
   produced it and on what evidence, split into matched, derived and unknown — plus the per-storefront
   survey text computed from that table and the diff of that table against the previous release.
2. **ai_leverage:** **matching/normalization** (the project's vocabulary onto each store's fixed
   taxonomy) and **extraction** (asset identity from heterogeneous build manifests). *Why not
   deterministic:* as in S1b — manifest formats and naming conventions vary per engine, version and
   project, and the taxonomy mapping takes free prose as input. **Not drafting.** Deterministic checks:
   every row's hash is recomputed from the build on disk, and every emitted category must be a member
   of the storefront's enumeration.
3. **without_model:** the build walker, the hash and geometry-fingerprint match, the three-way split,
   the signed annex, the per-release diff. **substantial.**
4. **Reduction test:** "The developer gives their project to a model and gets a disclosure statement
   back." **FAIR: false.** The statement is a projection of a table computed by hashing the shipped
   bytes against a ledger; the unknown rows — the output a developer actually acts on — come from a set
   difference no model is involved in.
5. **Wrapper shape match:** *content generator*. It differs because the generated text is the thinnest
   layer over a computed table, and the table, the annex and the diff survive the model's removal.
6. **Authenticity signals (6):**
   - *Real workflow* — **real_workflow**: the submission form in its real shape, with two stores asking
     incompatible questions (`evidence`: E10, E11).
   - *Real workflow* — **writes_to_system_of_record**: the annex is the artefact the studio keeps and
     can be challenged on (`commitment`).
   - *Real workflow* — **takes_responsibility_for_outcome**: unknown rows are reported as unknown
     (`commitment`: the test injects an unledgered asset and asserts it appears as unknown, not guessed).
   - *Compounds* — **accumulated_history**: each release's dossier is a diff on the last (`commitment`).
   - *Substance* — **deterministic_core**: hashing, fingerprinting, the join, the set difference
     (`commitment`).
   - *Substance* — **multi_provider**: two storefront schemas and multiple generation tools, each with
     its own receipt shape (`evidence`: E10, E11).

### S3b′ — Catalogue provenance from the seller's own files
1. **product_is:** A worklist over a seller's published listings, each with the proposed disclosure tag,
   the file-level evidence found on their own disk that supports it, a confidence, and — once approved —
   a kept record of the decision, its evidence and its date.
2. **ai_leverage:** **extraction** from inconsistent on-disk artefacts (generation parameters embedded
   in PNG metadata by various front-ends, sidecar files, model names in folder paths) and
   **classification** only on the residue where no artefact exists. *Why not deterministic:* the
   artefacts are a moving zoo of per-tool conventions in free-text blobs, so a parser per tool is
   permanently behind; recognising "this text records a generation" generalises where a parser does not.
   **Not drafting.** Deterministic check: every proposed tag must cite a specific file and a specific
   field, or be marked residue and sent to the classifier path with its confidence shown.
3. **without_model:** the filesystem walk, the metadata readers, perceptual and geometric hashing, the
   listing↔file join, the decision store with its evidence and dates. **substantial.**
4. **Reduction test:** "The seller gives their asset images to a model and gets back whether each is
   AI-generated." **FAIR: false** — and this is exactly the version that was killed (see §8). The
   surviving mechanism reads receipts that already exist on the seller's own disk and keeps the
   decisions; the classifier only touches what has no receipt, and must say so.
5. **Wrapper shape match:** *a wrapper around a model API* (declared, and was fatal in the earlier
   version). It differs now because the primary path is evidence recovery, not inference, and because
   the product is a kept, citable decision record rather than a tag.
6. **Authenticity signals (6):**
   - *Real workflow* — **narrow_persona**: a seller with a back catalogue facing per-listing
     de-indexing (`evidence`: E11's "will no longer be eligible for indexing on our browse pages").
   - *Real workflow* — **domain_logic**: the store's four content types, and its rule that modified
     generative content still counts — "even if modified afterward" (`evidence`: E11).
   - *Real workflow* — **writes_to_system_of_record**: the decision record with its evidence and date
     (`commitment`).
   - *Compounds* — **accumulated_history**: new listings are checked against decisions already made for
     the same source files (`commitment`).
   - *Substance* — **deterministic_core**: metadata extraction and hashing carry the primary path
     (`commitment`: the test runs on a folder of front-end-generated PNGs and asserts the tags come from
     embedded fields with zero inference calls).
   - *Substance* — **proprietary_data**: the seller's own archive, which the storefront cannot see at
     all (`evidence`: E11 shows the store built only the field).

### S4a — Pre-publish instance budget simulation
1. **product_is:** A measured report of what a world or avatar costs at 1, 8 and 24 copies against a
   chosen device budget, naming the specific mesh and texture to cut, with the cut applied and the
   result re-measured, and a kept pass/fail record per version.
2. **ai_leverage:** **none.** No model in the loop — the budgets are arithmetic (E8's published numbers)
   and the simplification is a classical algorithm. Passes trivially per the stated rule, and this is
   worth saying plainly: this solution is in the pool because the *problem* is validated, not because it
   fits the theme.
3. **without_model:** all of it. **substantial.**
4. **Reduction test:** not applicable; **FAIR: false** by construction.
5. **Wrapper shape match:** none. The declared weakness is different: absorption. It is a feature
   request filed against the platform itself (E7), so the platform is its most likely builder.
6. **Authenticity signals (6):**
   - *Real workflow* — **narrow_persona**: a creator in the minutes before publishing to a shared
     instance (`evidence`: E7).
   - *Real workflow* — **existing_workaround**: export to Blender and decimate by hand (`evidence`: E7
     asks for Blender's planar/collapse options specifically).
   - *Real workflow* — **domain_logic**: the real per-device budgets — 32,000 vs 7,500 polygons, 40 MB
     vs 10 MB texture memory, and the bolded-stat rule that triggers fallback replacement (`evidence`:
     E8).
   - *Compounds* — **better_with_repeat_use**: each version's measurements accrue, so a regression is
     visible as a number rather than a feeling (`commitment`).
   - *Substance* — **deterministic_core**: the entire mechanism (`commitment`: the test asserts a
     post-remediation re-measure, not a prediction).
   - *Substance* — **hard_implementation**: the instance-scale projection is not per-asset arithmetic —
     shared materials, texture atlas reuse and instanced meshes mean 24 copies is not 24× one copy, and
     getting that wrong makes the tool useless (`commitment`: the test compares the projection against a
     measured 24-copy scene).

### S4b — Runtime admission control
1. **product_is:** A per-instance budget ledger consulted before a newly generated asset is replicated
   to other clients, which admits, degrades or refuses it, and records every decision with the numbers
   behind it.
2. **ai_leverage:** **none** in the decision path, by necessity — it must resolve inside a frame
   budget. Optionally **anomaly detection** offline over the decision log, to surface which worlds
   generate refusals.
3. **without_model:** all of it. **substantial.**
4. **Reduction test:** not applicable; **FAIR: false** by construction.
5. **Wrapper shape match:** none.
6. **Authenticity signals (5):**
   - *Real workflow* — **narrow_persona**: a player generating an object mid-session in a world other
     people are standing in (`evidence`: E1 documents the live-generation behaviour).
   - *Real workflow* — **automation_changes_workflow**: the asset is degraded on the way out rather
     than replaced after arrival (`evidence` for the contrast: E8's display-time fallback).
   - *Compounds* — **usage_data**: the decision log accrues per world (`commitment`).
   - *Substance* — **deterministic_core**: budget arithmetic at replication time (`commitment`: the test
     asserts a decision inside a stated millisecond bound).
   - *Substance* — **operational_complexity**: budget must be computed against who is *currently*
     present, so joins, leaves and concurrent generations all mutate the denominator (`commitment`).

### S5a — Guardrail transcript
1. **product_is:** A session-by-session record of every generation that became visible to a second
   player — who asked, what they asked, what came back, what was decided, and which rule decided it —
   reviewable as a queue and exportable as an evidence pack.
2. **ai_leverage:** **classification** and **multimodal understanding** of the generated artefact
   (a mesh plus its textures plus the prompt) against policy categories. *Why not deterministic:* the
   artefact is novel by construction and a keyword rule over the prompt misses everything expressed
   obliquely while flagging everything expressed bluntly and innocently. **Not drafting.** Deterministic
   check: every decision must cite the rule it fired, the rule set is versioned, and a decision with no
   citable rule is recorded as unclassified rather than as a pass.
3. **without_model:** the event store, the versioned rule set, the propagation linkage, the queue, the
   export, the hash linkage to the passport registry. **substantial.**
4. **Reduction test:** "The developer gives generated content to a model and gets back safe or unsafe."
   **FAIR: false.** The sentence covers the check and nothing else: not the retention, not the
   rule-version attribution, not the propagation link that decides which generations are even in scope,
   and not the exportable pack that is the product's purpose.
5. **Wrapper shape match:** the "check X against rules and flag it" default, squarely. Answered: the
   flag is not the output. The output is a retained, rule-attributed, exportable record, and the scope
   filter — *became visible to a second player* — is what makes the record meaningful rather than a log
   of every keystroke.
6. **Authenticity signals (6):**
   - *Real workflow* — **narrow_persona**: a developer who shipped runtime generation and is asked what
     guardrails it has (`evidence`: E10's separate live-generated category).
   - *Real workflow* — **domain_logic**: propagation scope decides what is in scope at all
     (`commitment`).
   - *Real workflow* — **takes_responsibility_for_outcome**: unclassified is recorded as unclassified,
     never as a pass (`commitment`: the test asserts an unmatched artefact lands in the unclassified
     bucket).
   - *Compounds* — **accumulated_history**: the transcript is the asset the product becomes
     (`commitment`).
   - *Substance* — **eval_infrastructure**: the rule set is versioned and decisions are replayable
     against a new version (`commitment`: the test replays a stored session against a bumped rule set
     and reports the decision delta).
   - *Substance* — **deterministic_core**: the event store, scope resolution and rule attribution
     (`commitment`).

### S5b — Blast-radius-scaled gating
1. **product_is:** A tiering of generation requests by how far their output travels, with a different
   gate and a different approval requirement per tier, and the tier recorded alongside the asset's
   origin record.
2. **ai_leverage:** **classification** at the strictest tier only — the persistent write. *Why not
   deterministic:* same as S5a for the content check. The tier itself is read deterministically from
   the write target. **Not drafting.** Deterministic check: the tier is never inferred; it is read from
   where the write is going, and a persistent-tier pass additionally requires a recorded approval.
3. **without_model:** the scope model, the tier policy, the approval record, the linkage to the passport
   registry. **substantial.**
4. **Reduction test:** "The player gives a prompt to a model and gets back whether it is allowed."
   **FAIR: false.** The sentence omits the variable the whole mechanism turns on — where the output is
   going — which is read from the write target, not inferred, and which decides whether a model is
   consulted at all.
5. **Wrapper shape match:** "check X against rules and flag it" again. Answered: the rule is not about
   the content, it is about the *destination*, and for the two cheaper tiers no model is consulted.
6. **Authenticity signals (5):**
   - *Real workflow* — **narrow_persona**: a player about to make something permanent in someone else's
     world (`evidence`: E1).
   - *Real workflow* — **domain_logic**: private / instance / persistent are genuinely different acts
     with unbounded differences in audience (`commitment`).
   - *Real workflow* — **writes_to_system_of_record**: the tier and the approval are stored with the
     asset's origin record (`commitment`).
   - *Compounds* — **workflow_effects**: as more content is tiered, the persistent tier's volume — and
     so the inference bill — becomes predictable (`commitment`).
   - *Substance* — **deterministic_core**: tier resolution from the write target, at zero inference cost
     for the common case (`commitment`: the test asserts no inference call on a private-tier request).

---

## 8. Killed at Stage 4b, and what replaced them

| Killed solution | Problem | Stage | Reason | Regenerated as |
|---|---|---|---|---|
| **"An AI moderator agent that reviews each reported asset and decides, with a human approving"** | P2 | wrapper | Two declared shapes at once: *an agentic version of existing software with no workflow advantage*, and the watched "an AI agent with a human approval step" default. Reduction: "the moderator gives a reported asset to a model and gets a verdict back" — **FAIR: true**. It never owns the part that matters: what makes an item enter the queue. Without that it industrialises exactly the harm the platform named — "reporting any slightly blurry image as AI" (E3) — by giving unevidenced reports a faster path to a decision. `without_model` = **thin**: a report inbox. | **S2a**, which moves the mechanism to the queue's *entry condition*: an item exists only where a recorded origin contradicts a declared one, so unevidenced reports cannot create work, and the model is confined to the residue with its false-positive rate displayed. |
| **"An AI that inspects your world and suggests optimizations"** | P4 | wrapper | *An AI dashboard with no workflow of its own.* Reduction: "the user gives a world to a model and gets optimization advice back" — **FAIR: true**. Advice is the model's output, so it is the product. It also fails on leverage: the budgets are published arithmetic (E8) and the simplification is a classical algorithm with 44.57M monthly downloads (E15), so there is no step a model does that code cannot. `without_model` = **nothing**. | **S4a**, which replaces advice with a measured result: project the cost at instance scale, name the specific cut, apply it, and **re-measure**. The deterministic core is the whole product and the model is absent by design. |
| **"Catalogue retro-tagger: classify each of a seller's listings and write the tag back"** (original S3b) | P3/P6 | wrapper | *A wrapper around a model API.* Reduction: "the seller gives their listing images to a model and gets tags back" — **FAIR: true**. The only thing that would have saved it was the write-back to the storefront, and that was an unverified ASSUMPTION — I found no evidence that the store exposes listing edits to third parties, and my prior-art probe did not reach its API docs. `without_model` = **thin**: a list of listings. | **S3b′**, which inverts the direction: recover the receipts already sitting in the seller's own project files (generation parameters embedded in PNG metadata, sidecars, paths), cite a specific file and field for every proposed tag, and keep the decision plus its evidence as the record. Inference is confined to the no-receipt residue and must declare itself. |

Three solutions died here and three were regenerated from the same problems; no problem was dropped to
compensate, and the kept-problem count is unchanged at five.

---

## 9. Research log

**Lookups: 29 of the ~30 budget.** One held in reserve, unspent.

| # | Query or URL | Kind | Result |
|---|---|---|---|
| 1 | `api.github.com/search/issues?q="non-manifold" is:issue is:open sort:reactions-desc` | GitHub API | Returned, but the 57k-char response was too large to parse; **effectively lost**. Re-run as #3. Logged as spent. |
| 2 | `hn.algolia.com/api/v1/search?query=text to 3D&tags=comment` | HN Algolia | 2,956 hits; opened 20. Yielded E18, E19, E20. |
| 3 | `api.github.com/search/issues?q="retopology" is:issue sort:reactions-desc` | GitHub API | 498 hits. Surfaced both Resonite issues — the lead for E1 and E7. |
| 4 | `hn.algolia.com/api/v1/search?query=AI assets game engine cleanup&tags=comment` | HN Algolia | Confirmed E18; nothing new. |
| 5 | `api.github.com/repos/Yellow-Dog-Man/Resonite-Issues/issues/6134` | GitHub API | **E1.** |
| 6 | `api.github.com/repos/Yellow-Dog-Man/Resonite-Issues/issues/3520` | GitHub API | **E7.** |
| 7 | `api.github.com/search/issues?q=c2pa 3D in:title is:issue` | GitHub API | 0 hits. Supports E13/E14 gap. |
| 8 | `api.github.com/search/issues?q=repo:KhronosGroup/glTF provenance OR watermark` | GitHub API | 1 hit, from 2013, unrelated. |
| 9 | `artificialintelligenceact.eu/article/50/` | Primary-ish regulation text | **E9.** Article 50 applies 2026-08-02. |
| 10 | `store.steampowered.com/news/group/4145017/view/3862463747997849618` (WebFetch) | Vendor announcement | Returned only chrome; no article body. **Not accessible this way.** |
| 11 | `upwork.com/nx/search/jobs/?q=VRChat avatar optimization` | Job/gig board | **HTTP 403 — REFUSED, final.** No retry, no mirror. All freelance spend signals are therefore absent from this run. |
| 12 | `hn.algolia.com/api/v1/search?query=VRChat avatar performance&tags=comment` | HN Algolia | 5 hits, all 2022, none on-topic. No evidence. |
| 13 | `docs.vrchat.com/docs/avatar-performance-ranking-system` | Vendor docs | **E8.** |
| 14 | `api.github.com/search/issues?q=localization in:title repo:godotengine/godot-proposals` | GitHub API | **E21.** Kill basis for P9. |
| 15 | `api.github.com/search/issues?q="mod conflict" is:issue sort:reactions-desc` | GitHub API | **E16.** Kill basis for P8. |
| 16 | `api.github.com/search/issues?q="AI generated" disclosure in:title is:issue` | GitHub API | 27 hits; lead for E12, plus WICG `<genai>` proposal and a Stability-AI issue (titles only — leads). |
| 17 | `partner.steamgames.com/doc/gamenotes/ai_disclosure` (WebFetch) | Vendor docs | Wrong page; content survey text without the AI section. **Not accessible.** |
| 18 | `api.npmjs.org/downloads/point/last-month/` × 4 packages | Registry stats | **E15.** |
| 19 | `hn.algolia.com/api/v1/search?query=playtest bug reports&tags=comment` | HN Algolia | **E22.** Kill basis for P10. |
| 20 | `api.github.com/search/issues?q=repo:foundryvtt/foundryvtt is:issue is:open sort:reactions-desc` | GitHub API | **E23.** Kill basis for P11. |
| 21 | `api.github.com/repos/Yellow-Dog-Man/Resonite-Issues/issues/6134/comments` | GitHub API | **E2, E3, E4, E5, E6** + the Zozokasu counter-evidence. |
| 22 | WebSearch: Steam "AI content disclosure" requirement … date | Search | Synthesis only, not a page I opened → treated as **leads**; drove lookup #24. |
| 23 | `api.github.com/search/issues?q=repo:contentauth/c2pa-rs 3D OR glTF OR mesh` + code search | GitHub API | **E14.** |
| 24 | `gamedeveloper.com/business/valve-tweaks-and-clarifies-ai-disclosure-rules-for-steam` | Trade press | **E10.** |
| 25 | `api.github.com/repos/KhronosGroup/glTF/contents/extensions/2.0/{Khronos,Vendor}` | Standards registry | **E13.** |
| 26 | `api.github.com/repos/huggingface/diffusers/issues/13359` | GitHub API | **E12.** |
| 27 | WebSearch: tool to track which game assets were AI generated … provenance manifest | Search — **prior-art probe** | No game-side product found. Surfaced C2PA-manifest tooling sold into e-commerce photo production (adjacent industry, not opened → lead) and the itch.io lead for #28. |
| 28 | `80.lv/articles/asset-creators-on-itch-io-now-have-to-disclose-the-use-of-generative-ai/` | Trade press quoting the operator | **E11.** |
| 29 | `hn.algolia.com/api/v1/search?tags=show_hn` × 2 (provenance/C2PA; game assets pipeline) | HN Algolia — **crowded-field probe** | **E17.** |

### Prior-art probes run, and what each decided
- **P7 (artist mesh cleanup)** — #18 (npm adoption) + #3. **KILLED `crowded`**: meshoptimizer 44.57M,
  @gltf-transform/core 2.49M, gltf-validator 654k downloads/month, plus Blender's own decimation. No
  opened source showed a segment, price point or step these skip.
- **P8 (mod conflicts)** — #15. **KILLED `crowded` + unvalidated**: 24,813 long-tail issues with no
  concentrated demand, against established conflict/load-order tooling.
- **P1 / P3 / P12 (AI provenance for game assets)** — #7, #8, #23, #25, #27, #29. **KEPT**: no product
  found; the glTF registry has no provenance extension; the C2PA reference implementation has no 3D
  track; provenance launches are image- and identity-focused with 1–3 points; game-asset launches are
  all generators.
- **P4 (instance asset budgets)** — #13, #18. **KEPT, narrowed**: the leader has the display-time half
  (E8) and the maths is commoditized (E15), so the problem survives only as *pre-publish,
  instance-scale, with applied remediation, on the platform that has nothing* (E7).

### Absorption checks (incumbent and vendor changelogs/registries opened)
1. **Khronos glTF extension registry** (#25) — no provenance/signature extension among 27 ratified
   extensions; nothing in the vendor directory either. Not being absorbed by the format.
2. **contentauth/c2pa-rs** (#23) — no 3D/mesh track in the reference implementation. Not being absorbed
   by the provenance standard.
3. **The platform operator's own stated roadmap** (#21, E2) — "We'll likely add some form of
   flagging/labeling, as well as official stance", alongside "We are not going to be implementing any
   content generative AI features officially". **Partial absorption, disclosed**: the *label* is their
   next feature; the capture-at-source record is not, by their own choice to stay out of generation.
   S1c is therefore positioned as the consumer of S1a's record, not as the project. S4a is flagged as
   the most absorbable solution in the pool, since E7 is a feature request filed against that platform.

### Unopened leads (not evidence, listed separately)
- `github.com/Stability-AI/generative-models/issues/481` — "AI provenance metadata for generated images
  (EU AI Act deepfake disclosure)", 2026-03-31, open. Title only.
- `github.com/WICG/proposals/issues/273` — "Explainer: A Native HTML Element `<genai>` for AI-Generated
  Content Disclosure", 2026-03-19, open. Title only.
- `techradar.com/.../steam-requires-ai-game-disclosures-epics-ceo-says-theyre-meaningless` — would be
  counter-evidence against P3 if opened.
- `videogameschronicle.com/news/steam-games-disclosing-generative-ai-use-are-up-800-this-year/` and
  `notebookcheck.net/Analysis-Nearly-8-000-games-on-Steam-have-AI-generated-content...` — would give
  the population size for P1/P3.
- `help.creativeforce.io/en/articles/16020205-c2pa-manifests` — adjacent-industry spend on exactly this
  workflow; would be the closest thing to a STRONG spend signal.
- `github.com/cnpierrepapi/hallmark` — "provenance-stamped generative media"; closest prior art found.
- Resonite devlog referenced by thread participants as containing the proposed policy — not located.
- `github.com/Yellow-Dog-Man/Resonite-Issues/issues/1564` — cited in-thread as the moderation precedent.

### Not accessible / refused (final, not retried)
- **Upwork — HTTP 403.** All freelance and agency spend signals are missing from this run.
- **Reddit — blocked in every form** per the brief; r/gamedev, r/godot, r/VRchat and r/vrdev were never
  queried.
- **Steam's own announcement page** — WebFetch returned chrome only; a stealth fetch returned HTTP 200
  with an empty body. Steam's policy is therefore sourced from trade press (E10), not from Valve.
- **Steamworks partner docs** — the AI-disclosure section was not at the URL tried, and I did not spend
  further budget hunting it.

### Honest assessment of pool quality
**The pool is moderately thin, and the thinness is concentrated in one place.** Most of the
first-person evidence for the strongest problem family (P1, P2) comes from a single platform's issue
tracker — two separate issues and 93 comments, with the platform operator and its team speaking on the
record, which is better than one voice, but it is still one platform. The second platform (E8) and the
two storefronts (E10, E11) contribute **facts about rules and enforcement**, not accounts of pain. And
because Upwork refused and Reddit is blocked, **this run contains no spend signal at all** — no job
post, no gig, no agency rate, nothing paid for a worse version of any of these fixes. The closest
thing is an adjacent industry selling C2PA manifest embedding to photo studios, which I did not open.

Consequences I will not paper over: **P3 and P5 are hypotheses, not validated problems** — I verified
the obligations and, for P3, a real penalty, but opened no developer saying the burden hurts. **P2
carries counter-evidence from the same organisation that supplies its best evidence**, and that
counter-evidence says the queue should not exist. **P4's gap is narrow** and the platform it targets is
the most likely party to close it. The two strongest things in the run are both verified absences
rather than voiced complaints: no provenance extension exists anywhere in the 3D formats games ship
(E13), and the provenance standard that works for images has no 3D track (E14) — with a regulation that
began to apply on 2 August 2026 requiring exactly the marking that has nowhere to live.

**P1 is the only problem I would call properly validated and well matched to how this will be
assessed**, and S1a is the only solution whose entire mechanism can be shown working, end to end,
in one continuous take from a link and a video.


# Judging intelligence — Cambridge × Arcade AI Hackathon (3–4 Oct 2026)

Compiled by subagent J on **2026-10-02**. Event begins in under 24h.
All pages below were **opened** on 2026-10-02 unless marked otherwise.

**Label key:** `FACT` = read on a page I opened, URL given. `EVIDENCE (strong/moderate/weak)` = observed
behaviour or market signal. `ASSUMPTION` / `HYPOTHESIS` / `INFERENCE` = my reasoning from sourced facts.
`LEAD` = a search-result title I could not open — never treated as evidence. `user-relayed` = given to me in
the brief, not re-verified. `REFUSED` = fetch blocked; not retried.

> I never saw the candidate ideas. Nothing here predicts a winner, and nothing here states what any judge
> "likes". Where I had no source, I say so.

---

## 1. Official criteria — quote → implication

### 1.1 The six criteria

`FACT` — https://about.tryarcade.com/hackathon, section "How we judge", subtitle verbatim:
**"3+ independent reviews per project. Top 3 per track win."**

| Weight (verbatim) | Criterion (verbatim) |
|---|---|
| 20% | Innovation & Originality |
| 25% | Execution & Functionality |
| 15% | AI × Gaming Relevance |
| 25% | Track fit |
| 10% | Potential & Impact |
| 5% | Demo & Clarity |

`FACT` — https://about.tryarcade.com/judge, verbatim: **"Watch the demo, open the project, then score six
criteria from 1 to 5. You can come back and update any score until judging closes."**

`FACT` — the page publishes **no definition text for any of the six criteria**. Only the label and the
weight appear publicly. The judge dashboard is email-gated ("Enter the email the Arcade team registered
for you"), so any per-criterion guidance shown to judges is not public.

**IMPLICATIONS**

- **The scale is 1–5 per criterion, not a free 0–100.** One point of movement is worth
  `weight × 20%` of the total: **1 point on Execution & Functionality or Track fit = 5 points of final
  score; 1 point on Demo & Clarity = 1 point.** `INFERENCE` (arithmetic on two FACTs). Consequence: the
  rubric is coarse. There is no room to be rewarded for subtlety — a reviewer picks 3, 4 or 5, and the
  difference between "it works" and "it obviously works" is the whole margin.
- **Execution & Functionality (25%) + Track fit (25%) = half the score.** A concept that is novel but
  visibly incomplete loses the larger half of the rubric before Innovation is even scored.
- **Demo & Clarity is only 5%, but it is the delivery channel for the other 95%.** `INFERENCE`.
  Treating "the video is only worth 5%" as licence for a weak video inverts the actual risk: the judge
  dashboard instructs reviewers to *watch the demo first*, so the video sets the anchor for Execution,
  Relevance and Track fit scores that are worth 65% between them.
- **"AI × Gaming Relevance" (15%) is a separate line from Innovation.** `INFERENCE`: the AI has to be
  legible *as the thing that makes the game/tool work*, not as an implementation detail mentioned in the
  description. A project where removing the model leaves the demo unchanged scores low on a line item that
  nothing else can compensate for.
- **"Potential & Impact" (10%) is the only forward-looking line**, and four of the 25 named judges are
  investors (§7). `INFERENCE`: one sentence of "who would use this next week" is cheap to supply and is
  the only part of the rubric that rewards it.

### 1.2 The explicit negative list — highest-value single finding

`FACT` — https://about.tryarcade.com/hackathon, "How we judge", heading **"Never judged"**, items verbatim:
**"English fluency"**, **"Slides"**, **"Public speaking"**.

**IMPLICATION.** The organisers have removed the three things hackathon teams usually over-invest in.
`INFERENCE` (high confidence, directly from the stated list): **a deck is worth zero**, a polished narrator
is worth zero, and there is no presentation-skill tax. Budget that would go to slides and a scripted
voiceover should go to the artefact being visibly functional on screen. A silent, captioned screen capture
of the thing working is fully compliant with the rubric.

### 1.3 Tracks, and whether "Track fit" means more than ticking a box

`FACT` — https://about.tryarcade.com/hackathon, "Pick a track", verbatim: **"One track per project. Each
track has its own winners."**

`FACT` — Arcade Track, verbatim: **"Build and publish games with only Arcade AI, enjoy free Arcade credits
& claim a limited-edition skin."** Bullets: **"AI-native games"**, **"Multiplayer"**,
**"Interactive worlds"**.

`FACT` — Game Tech Track, verbatim: **"Build innovative game-related projects: world generation,
simulation, AI agents, dev tools, production pipelines, etc."** Bullets: **"World generation"**,
**"Simulation"**, **"AI agents"**, **"Dev tools"**, **"Production pipelines"**.

**(a) Does "Track fit" at 25% mean anything beyond picking a track? — ANSWER: no published definition
exists, and that is itself the finding.**

- `FACT`: the only public text attached to "Track fit" is the words "Track fit" and "25%". There is no
  rules page, no FAQ, no criteria glossary anywhere on about.tryarcade.com that I could find (the site's
  only hackathon-related routes I found are `/hackathon`, `/submit`, `/judge`; the nav otherwise offers
  `/`, `/#explore`, `/careers`, `/team`).
- `INFERENCE` (medium): because the track card is the only descriptive text a reviewer has, **the track's
  own bullet list is the de facto Track-fit rubric.** A project that lands squarely on one named bullet
  ("Multiplayer", "Dev tools", "Production pipelines") is trivially defensible at 5/5; a project that sits
  between tracks, or satisfies the *theme* but none of the five named sub-areas, hands a reviewer a reason
  to score 3 on a 25% line.
- `INFERENCE` (medium): since each track has separate winners and separate prize structures, "Track fit"
  is plausibly functioning as *"is this in the right competition?"* — i.e. a mis-filed project is penalised
  twice (low Track fit, and competing against a stronger-fitting field). **ASSUMPTION**: reviewers are
  assigned across both tracks rather than specialising. Not stated anywhere.
- **Action for the team, not an assumption I can resolve:** the Discord is named by the organisers as the
  authoritative channel for details (§1.6). Asking "what does Track fit mean on the scorecard?" there costs
  nothing and converts a 25% unknown into a FACT.

**(b) Does the Arcade Track truly require building ONLY with Arcade AI, and what does that forbid?**

- `FACT`: the track blurb says **"with only Arcade AI"** — the word "only" is on the page, twice (hackathon
  page and again inside the /submit form's track selector, verbatim identical text).
- `FACT` — https://about.tryarcade.com/submit, field 4 "Links & contact": the required field is
  **"Arcade Game Link *"** with helper text **"The link to your published game on Arcade."**
- `INFERENCE` (medium–high): for the Arcade Track the gate is concrete and binary — **a game published on
  Arcade, with a public URL on tryarcade.com, before 14:00 Sunday.** Not a video of a prototype, not a repo,
  not an itch.io build. "Only Arcade AI" most plausibly forbids *shipping the game in another engine*
  (Unity/Godot/web canvas) and submitting that; it is the platform-exclusivity condition attached to the
  free-credits-and-skin offer.
- **What I could NOT determine** `OPEN GAP`: whether "only Arcade AI" also forbids *external* API calls or
  assets from inside an Arcade game — e.g. Hyper3D-generated meshes imported into an Arcade game, or an
  external LLM endpoint. The page does not say. Note the tension: the event gives **every participant** a
  free Hyper3D membership, which implies cross-sponsor tool use is welcome, yet "only Arcade AI" reads
  exclusively. `HYPOTHESIS` (low confidence): "only Arcade AI" is meant as "built *on* Arcade" rather than
  "touching no other service". **Confirm in Discord before committing to an Arcade-Track idea that depends
  on an external service.**
- `FACT`: the Game Tech Track blurb contains no exclusivity language at all, and the Luma description says
  participants may **"create games using Arcade or any innovative projects for Arcade and Game Tech
  Tracks"** (https://luma.com/2wuf8ns8) — i.e. Game Tech is explicitly not Arcade-only.

**(c) The submission-form trap — single highest-risk item in this report**

`FACT` — https://about.tryarcade.com/submit. I captured the rendered form. It is **one shared form for both
tracks**, and the fields are, verbatim and in order:

1. `Track *` — radio: "Arcade Track" / "Game Tech Track"
2. `Team Name *`; `Team Members` ("Optional.")
3. `Game Name *`; `Game Description *` with counter `0/1000`
4. `Arcade Game Link *` — "The link to your published game on Arcade."
   `Demo Video URL *` — "YouTube, Loom, Google Drive — any public link."
   `Team Contact Email *`
5. Checkbox: **"I confirm that this game was built during the hackathon."** → button "Submit Game"

- `FACT`: **there is no repository field, no deck field, no AI-use-disclosure field, no team-size field,
  and no eligibility declaration** beyond the built-during-the-hackathon checkbox.
- `FACT`: the form's own fields are labelled **"Your game"** and **"Game Name"** even for the Game Tech
  Track, and **"Arcade Game Link"** is rendered as required.
- `ASSUMPTION / OPEN GAP (high stakes)`: I captured the DOM with "Arcade Track" as the default selection.
  The form may re-label or relax the "Arcade Game Link" field via client-side logic when "Game Tech Track"
  is chosen — I did not interact with the form, so **I cannot say whether a Game Tech project must also
  supply an Arcade link.** If it must, a Game Tech project with no Arcade presence cannot submit.
  **This must be confirmed on Discord or by loading /submit and clicking Game Tech.** I am flagging it
  rather than resolving it because an unverified answer here could mis-steer a whole idea.
- **IMPLICATION regardless of how that resolves:** there is exactly **one** project link slot. A Game Tech
  project therefore has to choose what that single URL points at — a live demo, or a repo — and the other
  one has to be reachable from the 1000-character description or from inside the video. `INFERENCE`: a
  single link that is itself a *running* thing, with the repo linked from it, dominates the alternative,
  because the dashboard tells reviewers to "open the project" and a repo is not something you open and use.

**(d) Pre-existing code, AI disclosure, team size, eligibility — what the rules actually say**

| Question | Answer | Source / status |
|---|---|---|
| Pre-existing code | The *only* rule is the self-certification checkbox **"I confirm that this game was built during the hackathon."** No definition of what counts, no allowance for prior libraries, no disclosure field. | `FACT` /submit |
| AI-use disclosure | **No disclosure requirement anywhere.** The event's premise is AI use. | `FACT` — absent from /hackathon, /submit, /judge |
| Team size | **No stated limit, minimum or maximum.** "Solo or team, onsite or online." Team Members field is optional. | `FACT` /hackathon step 1, /submit §2 |
| Submissions per team | **"One submission per team"** | `FACT` /submit, verbatim |
| Account needed | **"no account needed"** to submit | `FACT` /submit, verbatim |
| Eligibility | No student/affiliation requirement stated. Onsite is capacity-gated: **"In-person Venue Checking: 10:00 - 10:30 AM Arrive early, 100ppl Max"**, in-person tickets "Require Approval" and **"Limited Seats - make sure you come and reserve by sending an email to jessy@tryarcade.com!"**; the "🎮 Online Hackers" ticket is free / "Request to Join". | `FACT` https://luma.com/2wuf8ns8 |
| Link uptime | **"Keep your project link and demo video online until judging is over."** | `FACT` /submit, verbatim |

**IMPLICATION of the checkbox being the entire pre-existing-code regime** `INFERENCE` (medium): enforcement
is honour-based *but partially observable*, because an Arcade game's public page displays
**"Published : 21/09/2026 / Modified : 21/09/2026"** (`FACT`, example:
https://www.tryarcade.com/games/zombie-defense-inc). A reviewer opening an Arcade Track submission can see
its publish date. A game published before 3 October is visibly inconsistent with the checkbox.

**(e) Video length limit — definitive answer: there is none.**

`FACT`: the only constraint on the video anywhere on the event's pages is
**"Demo Video URL * — YouTube, Loom, Google Drive — any public link."** (/submit) and
**"Project link + demo video"** (/hackathon, step 2). **No maximum duration, no minimum, no format, no
resolution, no required contents.** `user-relayed` brief agreed; now confirmed by direct read.

**IMPLICATION** `INFERENCE` (medium): no cap is not permission to run long. Reviewers are scoring 3+
projects each inside a **90-minute** window (§2), so the binding constraint is the reviewer's attention
budget, not a rule. A video that puts the working artefact on screen in the first ~20 seconds is
scheduling-compatible; a three-minute preamble is not.

### 1.4 Prizes and the sponsor-prize condition

`FACT` — https://about.tryarcade.com/hackathon, "Prizes" ("Two tracks. Three winners per track.")

**Arcade Track — "$5,000 Prize pool / Cash + ARX + perks", sponsored by Arcade AI:**
1st "$1,000 Cash / $1,500 in ARX"; 2nd "$600 Cash / $900 in ARX"; 3rd "$400 Cash / $600 in ARX".

**Game Tech Track — "Tencent Cloud × Hyper3D / Cloud credits + gift cards + Hyper3D + perks":**
1st "$1,000 Tencent Cloud Credits / £500 Amazon Gift Card / Hyper3D Business Subscription — $1,152 value";
2nd "$600 Tencent Cloud Credits / £300 Amazon Gift Card"; 3rd "$400 Tencent Cloud Credits / £200 Amazon Gift Card".

**The one conditional prize criterion on the whole page**, `FACT`, verbatim footnote:
**"* Hyper3D prizes are available to eligible projects using Hyper3D."**

> **IMPLICATION.** This is the only place the event conditions a prize on using a specific tool. It attaches
> to the **Hyper3D Business Subscription ($1,152) in the Game Tech 1st-place bundle** — the single largest
> line item in that track. `INFERENCE` (medium): a Game Tech project that uses Rodin somewhere in its
> pipeline is eligible for strictly more prize value than an identical project that does not, at no cost to
> any rubric line. It does not make Hyper3D mandatory and does not affect the cash/credits/gift-card
> components. Note the wording is "using Hyper3D", not "built on Hyper3D".

`FACT` — perks, verbatim. Arcade winners: "Exclusive Arcade Skin", "1:1 with the Arcade Team",
"1:1 Job Interview with Tencent", "30-min pitch to VCs & investors". Game Tech winners: "1:1 Job Interview
with Tencent", "1:1 with the Arcade Team", "30-min pitch to VCs & investors".

`FACT` — for every participant: **"Free Hyper3D Membership — $30 value per participant during the
hackathon"**. This is the **only** stated participant-wide resource. Note what is *not* stated: **no
Tencent Cloud credits for participants** — Tencent Cloud credits appear exclusively as prizes. Arcade
credits are mentioned only inside the Arcade Track blurb ("enjoy free Arcade credits").

### 1.5 Schedule — reconciled, with a timezone trap

`FACT` — https://about.tryarcade.com/hackathon renders its schedule in a timezone switcher
("My time / Cambridge / California / Paris / Beijing"); **it served me the UTC view** (header "UTC · UTC").
The same page's judging block gives the mapping explicitly: judging is
**"14:00 → 15:30 Cambridge / 06:00 → 07:30 California / 15:00 → 16:30 Paris / 21:00 → 22:30 Beijing"**,
i.e. **Cambridge = UTC+1**. Converting the UTC schedule to Cambridge local:

| Cambridge local | Item (verbatim label) | Note (verbatim) |
|---|---|---|
| Sat 10:00 | Check-in | Luma: "Venue Checking: 10:00 - 10:30 AM Arrive early, 100ppl Max" |
| Sat 11:00 | Opening & hacking begins | |
| Sat 13:00 | Lunch | |
| Sat 18:00 | Building closes | **"Hacking continues online."** |
| Sun morning | Hacking continues | |
| Sun 14:00 | Submissions close | /submit: "Deadline: Sunday 4 October at 14:00 (Cambridge time)" |
| Sun 14:00–15:30 | Judging | **"Judges submit their scores by the end of this slot."** |
| Sun 15:30–17:00 | Winner Demo | **"Onsite, with live stream."** |
| Sun 18:00 | Building closes | |

`FACT`: the /submit page states the deadline in Cambridge time in plain words, which anchors the whole
table independently of the widget.

**Contradiction to be aware of** `FACT`: the Luma page advertises **"2 days · 48 hours"** and an event
window of **"10:30 AM - Oct 4, 6:00 PM GMT+1"**. The actual build window to the submission deadline is
Sat 11:00 → Sun 14:00 ≈ **27 hours elapsed**, with the venue shut 18:00–morning. `INFERENCE`: anyone
planning against "48 hours" is planning against roughly double the real time, and onsite teams lose the
night at the venue. Plan to a ~27h clock with a hard overnight discontinuity.

### 1.6 Where the authoritative updates live

`FACT` — https://luma.com/2wuf8ns8, verbatim: **"$10,000+ cash prize and agenda announce in Discord
first."** and **"Full prize pool will be announced on Discord"**.

**IMPLICATION** `INFERENCE` (high): the website is not the live source of truth; **Discord is**. Any rule
that resolves the open gaps in this report (Track-fit definition, Arcade-only scope, whether Game Tech needs
an Arcade link, video guidance) will land there first. Two different invites are published — the hackathon
page and the site footer use **https://discord.gg/aWdeDJhDyk**, while Luma publishes
**https://discord.gg/72bxnpv4C8** plus a deep link to a **`#cambridge-hackathon`** channel
(`discord.com/channels/1458566563593584734/1536366161619320842`). `FACT` both. Join via the Luma one to
reach the event channel.

---

## 2. Format → what the demo must do

### 2.1 The mechanics, stated

`FACT` — "3+ independent reviews per project. Top 3 per track win." (/hackathon)
`FACT` — "Watch the demo, open the project, then score six criteria from 1 to 5. You can come back and
update any score until judging closes." (/judge)
`FACT` — Judging window: Sunday **14:00–15:30 Cambridge**, 90 minutes, "Judges submit their scores by the
end of this slot."
`FACT` — Judge access is by **registered email**, no password: "Enter the email the Arcade team registered
for you. It identifies your reviews and is saved in this browser so you never have to type it again."
`FACT` — 25 named judges on the panel.
`FACT` — The **Winner Demo** is a *separate, later* slot: Sunday 15:30–17:00, "Onsite, with live stream",
and it sits **after** the scoring deadline in the published sequence.

### 2.2 What carries the score when a reviewer never runs the build

`INFERENCE` (high confidence — follows directly from the dashboard instruction and the 90-minute window):

- **The video is the primary evidence and the project link is the corroboration.** The instruction order is
  literally "watch the demo, *then* open the project". Whatever is not visible in the video has to survive
  being discovered by a reviewer who has already formed a number.
- **Nothing is installed, built or compiled.** There is no repo field, no setup instructions field, and no
  time. `INFERENCE` (high): **anything that requires a reviewer to clone, install or configure scores as if
  it does not exist.** For the Arcade Track this is handled for you — the link is a playable game page on
  tryarcade.com. For the Game Tech Track it is the central design constraint: the single link must be
  something that *runs on click*, or the video has to fully carry Execution & Functionality (25%).
- **Execution & Functionality must be demonstrated, not asserted.** On a 1–5 scale a reviewer awards 5 when
  they *saw it work end to end*. `INFERENCE` (medium–high): an unbroken take of the real artefact doing the
  real thing — with visible inputs, visible outputs, and visible failure handling if relevant — is what
  separates 5 from 3 on the heaviest line.
- **The 1000-character description is the only text channel.** `FACT` it exists and is capped. `INFERENCE`:
  it is the only place to declare the track rationale, the AI's role, and any second URL. It is small
  enough to need writing deliberately rather than at 13:55.
- **"Watch the demo" is singular and the reviewer has ~30 minutes per project at best** (90 minutes,
  3+ reviews each, `INFERENCE` from the two FACTs). Time pressure, not the absent length limit, is the real
  video budget.

### 2.3 What a 3+-reviewer average does to a polarising project

`INFERENCE` (medium — standard property of mean aggregation, applied to the stated format):

- Scores from 3+ independent reviewers are combined (the page does not say *how*; "3+ independent reviews
  per project" plus "Top 3 per track win" implies aggregation — `ASSUMPTION`: a mean or sum, not a max).
- **Averaging penalises variance.** A project that one reviewer scores 5/5 and two score 2/5 lands below a
  project every reviewer scores 4/5. A deliberately divisive or acquired-taste submission therefore pays a
  structural cost that is nothing to do with its ceiling.
- **The panel is heterogeneous** (`FACT`, §7: investors, Tencent games-business staff, studio tech leaders,
  AI researchers, a professional TV writer). `INFERENCE` (medium): a random trio is unlikely to be three
  engineers, so **a project that only legible to an engineer will hit a low scorer.** The hedge against
  averaging is not "be safer" — it is **be comprehensible to a non-specialist in the first 20 seconds and
  deep for the specialist after that.** That costs nothing on any rubric line.
- **Reviewers may revise ("You can come back and update any score until judging closes")** `FACT`.
  `INFERENCE` (low–medium): a submission that reads well on a second pass is not wasted effort, but the
  window is 90 minutes, so second passes will be rare.
- `OPEN GAP`: I found no statement on how projects are **assigned** to reviewers, whether reviewers may
  self-select, whether track specialists review their own track, or whether sponsor-affiliated judges are
  recused from sponsor-prize decisions. Not published. Not inferable.

### 2.4 What the separate "Winner Demo" slot implies

`FACT`: the Winner Demo (15:30–17:00, onsite + live stream) follows the "Judges submit their scores by the
end of this slot" deadline (15:30).

- `INFERENCE` (medium): **on the published sequence, the live demo happens after scoring and therefore does
  not appear to determine placings.** The page nowhere describes a second scoring round or a final vote. I
  am marking this an inference and not a fact, because the page does not explicitly say the live demo is
  non-scoring either.
- `INFERENCE` (medium): **there is nonetheless a real second bar, and it is reputational, not numeric.**
  The winner demo is live-streamed, and the winner perks are **"1:1 with the Arcade Team"**, **"1:1 Job
  Interview with Tencent"** and **"30-min pitch to VCs & investors"** (`FACT`). The audience for the live
  slot is the same population that controls those perks. A project that scores well async but collapses when
  driven live in front of a stream converts a win into a weaker follow-on.
- `INFERENCE` (high): the live slot means **the artefact must survive being operated in real time, on
  possibly unreliable venue wifi, by its author, without the edit points a video allows.** A demo that only
  exists as a cut video is exposed here. Anything that takes 60+ seconds of generation per interaction is
  exposed here. "Never judged: Public speaking / Slides" (`FACT`) applies to the *scored* rubric; it does
  not make the live slot disappear.
- `INFERENCE` (medium): **time-zone asymmetry.** Judging at 14:00–15:30 Cambridge is 06:00–07:30 in
  California and 21:00–22:30 in Beijing (`FACT`, from the page's own conversion). Several judges will be
  reviewing early-morning or late-evening. This reinforces "legible fast", and it reinforces that the
  project link must work from anywhere without a VPN or a local server.

### 2.5 Source for how this organiser runs reviews

`FACT`: the organiser publishes its own judge dashboard with the instruction text quoted above
(https://about.tryarcade.com/judge). That is a first-party, current statement of their review process, and
it is the strongest available source — stronger than any inference from other events. I found **no**
retrospective, post-mortem or past-edition judging write-up from Arcade AI.

---

## 3. Historical evidence

### 3.1 Is this the first edition? — effectively yes, for this event

`FACT`: the hackathon page has a section headed **"Our last hackathon"** containing four photos
(`/team/events/hackathon-1.jpg`, `-3`, `-5`, `-6`) and immediately below it a logo strip headed
**"Hackathon & competition wins"**. On https://about.tryarcade.com/team the same strip is headed
**"Hackathons & competitions the team has taken down."**

`INFERENCE` (medium–high): **"Our last hackathon" and the logo strip describe the Arcade team's own record
as hackathon *competitors and hosts*, not a previous edition of a Cambridge × Arcade event.** The wording on
/team ("the team has taken down") is decisive about the logos. There is **no past-edition page, no previous
gallery, no archived winner list, and no project archive** anywhere on the site. I therefore treat this as
the **first edition of this event** and lean on sponsor and platform history below.

`FACT` — the logos in that strip, as rendered: Google DeepMind, OpenAI, Anthropic, Mistral AI, Hugging Face,
AWS, Stanford, Harvard, Supercell, Unity, Tencent Cloud, ElevenLabs, BytePlus.

`FACT` — Arcade team (https://about.tryarcade.com/team): Remi (Co-Founder & CEO), Gabriel
(Co-Founder & CTO), Thomas and Valentine (Software Engineer), Evann / Adam / Simon / Amine (AI Engineer),
Lucas and Romain (Growth), Jessy (Communication). **Eleven people, four of them titled "AI Engineer".**

`LEAD` (not opened, not evidence): a podcast listing "Playing With Inference"
(https://playingwithinference.podbean.com/) and a search summary stating the Arcade founders won game-AI
hackathons including a Supercell global contest. The Supercell logo in the strip is consistent, but I did
not open a source confirming the specific win, so this stays a LEAD.

**IMPLICATION** `INFERENCE` (medium): the organisers are experienced hackathon *competitors* who have
designed a rubric that strips out slides and speaking and weights Execution and Track fit at 25% each. That
is the scorecard of people who have been on the other side of demo theatre. Reading the rubric literally is
the correct strategy; there is no hidden presentation game.

### 3.2 Base rates — stated honestly

**I cannot give base rates for this event, because there are no past editions to count.**
There is no "6 of 8 winners had a live URL" available here, and I will not manufacture one.

What I *can* offer as the nearest observed comparison sets:

**(i) Tencent Cloud's own 2026 game-development hackathon** — `FACT`, opened 2026-10-02:
https://macaubusiness.com/tencent-clouds-ai-can-do-it-hackathon-hong-kong-and-macau-demo-day-concludes-successfully-29/
(PR Newswire, dated 19 Aug 2026). Full detail in §6.2. Winners, verbatim:
- "First Place: The Hong Kong University of Science and Technology – 'Anchor'"
- "Second Place: The University of Hong Kong – 'Walking in Poetry'"
- "Third Place: Public Division – 'LOONG SEASON'"

Observed pattern, **n=3 winners out of 10 finalists in one region** — `EVIDENCE (weak, small n, different
event, different rubric)`: all three winners are named, themed projects rather than tools or
infrastructure, and the release describes the demo-day format as teams presenting **"their project concepts,
technical implementations, and creative outcomes"** (`FACT`, verbatim) — i.e. concept *and* technical
substance *and* a finished creative artefact, in that order. The release's three pillars were "Social Good,
Cultural Expression, and Narrative Innovation" (`FACT`), none of which are pillars of *this* event, so do
not over-transfer. `OPEN GAP`: I did not reach project pages, videos or repos for any of the three — the
release links none.

**(ii) The Arcade marketplace itself** — see §4.2. This is the strongest available proxy for "what the
Arcade Track field will look like", because it is the live catalogue of what people actually ship on the
platform and what reviewers will mentally compare a submission against.

**(iii) Hyper3D / Deemos** — `OPEN GAP`: I found no hackathon-winner history for Hyper3D within budget.
Their public developer surface is documented (§6.3) but I did not locate a past challenge or prize archive.

---

## 4. Saturation

### 4.1 What I could and could not measure

`REFUSED` — **Devpost is not accessible from this environment.** Seven project-search URLs
(`devpost.com/software/search?query=…` for ai npc, text to game, ai game master, procedural world
generation ai, ai playtesting, adaptive music game, ai game asset pipeline) all returned **HTTP 202 with a
bot-challenge body ("Max challenge attempts exceeded. Please refresh the page to try again!")**. Per the
evidence rules this is final: I did not retry, did not use curl, mirrors, caches or archives, and did not
seek the same content from another host. **Consequence: I have no per-category Devpost counts and no
percentage shares for the seven categories.** I am not going to estimate them — a fabricated "38% of
projects are AI NPCs" would be worse than the gap.

The same applies to itch.io and lablab.ai: not attempted within budget, so **no numbers**. `OPEN GAP`.

### 4.2 What I *can* measure: the Arcade catalogue (direct, first-party, dated)

`FACT` — https://www.tryarcade.com/ fetched 2026-10-02. The public marketplace surfaced these games with
genre tags and player counts:

| Game | Genre tags shown | Players |
|---|---|---|
| Zombie Defense Inc. | (none shown) | 738 |
| SIX SEVEN RACE [AURA BATTLE] | fighting, racing | 571 |
| TOSS THE RING [DORMOR TYCOON] | tycoon, platformer | 292 |
| Tidy Library | puzzle | 235 |
| penalty shootout | sports | 27 |
| Goldenwater Fishing simulation | simulation | 19 |
| Coastline Rush | (none shown) | 13 |
| DEAD BY NINJA | shooter | 9 |
| only up | strategy | 8 |
| Tung clicker | (none shown) | 6 |

`FACT` — the site's own search-suggestion chips (i.e. its genre taxonomy) are: **Adventure, RPG, Puzzle,
Racing, Horror, Action, Platformer**. Creators listed under "Players to Follow" have **1, 8, 1 and 1**
games respectively. The top game (738 players) has **"0 reviews"**.

**Observed patterns — `EVIDENCE (moderate; n=10 titles, one snapshot, trending/new shelves only)`:**

1. **The live Arcade catalogue is small and skews to single-mechanic arcade games.** "only up", "Tung
   clicker", "penalty shootout", "Toss the Ring", "Zombie Defense Inc." are all one-verb games.
2. **Zero titles in the visible shelves advertise an AI-native mechanic.** No AI NPC, AI game master,
   text-to-level or world-generation framing appears in any title or genre tag on the trending or
   new-this-week shelves. The *platform* is AI-built; the *games* are conventional genres.
3. **Engagement is thin.** Top title 738 players, "New This Week" titles at 6–27 players, and no reviews on
   the leader. One level is normal (`FACT`: Zombie Defense Inc. shows "1 level").
4. **The platform's own taxonomy has no "multiplayer" or "AI" genre chip** — the seven suggestion chips are
   all classical genres.

**IMPLICATION** `INFERENCE` (medium): for the **Arcade Track**, the saturation picture is the *opposite* of
the crowded-AI-gaming-Devpost narrative. The local comparison set a reviewer carries in their head is
simple, conventional, one-mechanic games. An Arcade submission whose *mechanic itself* is AI-native — not a
conventional game with AI decoration — has an unusually clear differentiation path, and "AI × Gaming
Relevance" (15%) plus "Innovation & Originality" (20%) are both available to it. Equally: the bar for
*Execution* is not high in absolute terms, because 1-level games with 1 level are the norm — which makes
Execution a cheap place to beat the field and an expensive place to lose it.

**For the Game Tech Track**, I have **no measured saturation data**, because Devpost was refused. What I can
say from the event's own framing: the track blurb itself names five crowded categories (**"world generation,
simulation, AI agents, dev tools, production pipelines"**, `FACT`), which is organiser-side confirmation
that these are the expected clusters. `HYPOTHESIS` (low, unsourced-by-count): the five named bullets will
also be the five modal submissions, because stating a list of sub-areas anchors what people build. A
crowded category does not ban a project — it raises the bar for a **distinct demo moment**: something on
screen in the video that no other project in that cluster could show.

### 4.3 Category-by-category: what I have

| Category | Devpost/itch share | Status |
|---|---|---|
| AI NPCs | — | `REFUSED` (Devpost bot challenge). Not observed in the Arcade catalogue either. |
| Text-to-game / level generators | — | `REFUSED`. Note: Arcade *is* this product, so a text-to-game submission competes with the host platform. `INFERENCE`, low. |
| AI asset pipelines | — | `REFUSED`. Directly incentivised here by the Hyper3D footnote (§1.4) and by the "production pipelines" bullet, so expect presence. `HYPOTHESIS`, low. |
| AI game masters | — | `REFUSED`. Not observed in the Arcade catalogue. |
| Playtesting bots | — | `REFUSED`. Maps to "Dev tools". |
| Adaptive music | — | `REFUSED`. Named by no track bullet. |
| World generation | — | `REFUSED`. Explicitly a named bullet in both tracks ("Interactive worlds" / "World generation"), so expect the highest density here. `HYPOTHESIS`, low. |

---

## 5. Platform

### 5.1 What this event submits to — answered definitively

`FACT`: **This event is not on Devpost, Devfolio, itch.io or MLH.** It runs on **its own site**, with
registration on **Luma** and comms on **Discord**:

- **Submission**: a bespoke form at **https://about.tryarcade.com/submit** — "One submission per team, no
  account needed." Fields listed verbatim in §1.3(c).
- **Judging**: a bespoke dashboard at **https://about.tryarcade.com/judge** — email-identified, six criteria
  scored 1–5, scores editable until close.
- **Registration / ticketing**: **https://luma.com/2wuf8ns8**, event titled "Tencent × Arcade AI Hackathon -
  Cambridge, UK", three ticket types (In-person Hackers — approval required, 100 cap; Judge / Business
  Partners — approval required; 🎮 Online Hackers — free, request to join).
- **Comms / authoritative updates**: Discord, `#cambridge-hackathon`. Two invites published
  (§1.6). Verbatim: "$10,000+ cash prize and agenda announce in Discord first."
- **Hosting org on Luma**: "Arcade AI". Luma hosts listed: Jessy Tang, Remi Kaito, Sahar Mor (Bond AI),
  Zhengpeng Feng, Lucas Roussia.
- **Contact**: `hello@tryarcade.co` (site footer); `jessy@tryarcade.com` for onsite seat reservation (Luma).

**The event's own rules therefore are the complete rule set** — there is no Devpost/Devfolio/MLH default
layer sitting underneath to fill gaps. `INFERENCE` (high): this is why the gaps in §1 are real gaps rather
than things a platform convention would resolve. There is no platform FAQ to fall back on, which is exactly
why Discord is the place to resolve them.

### 5.2 How projects are found, judged and presented

| Question | Answer | Status |
|---|---|---|
| Is there a public gallery of submissions? | **No public gallery exists.** I found no submissions-listing route. Projects reach judges through the private dashboard only. | `FACT` (absence across /hackathon, /submit, /judge) |
| Are repos inspected? | **There is no repo field.** Reviewers are told to "open the project", not a repository. | `FACT` /submit, /judge |
| Are sponsor prizes judged separately? | **Not as a separate rubric.** The two tracks are scored on the *same six criteria* and have separate winner sets ("One track per project. Each track has its own winners."). The Game Tech Track prizes are the Tencent Cloud × Hyper3D bundle, so winning that track *is* winning the sponsor prize. The only sponsor-specific condition is the Hyper3D footnote. | `FACT` + `INFERENCE` (medium) |
| Typical submission counts | **Unknown.** No count is published. Hard ceilings available: onsite is capped at **100 people** (`FACT`, Luma) and online is uncapped; "One submission per team" (`FACT`). | `OPEN GAP` |
| Presentation | Async video + link for scoring; then a live onsite + streamed **Winner Demo** for winners only. | `FACT` |
| How is the artefact delivered? | Exactly **two URLs**: project link + public video link, plus ≤1000 chars of description. | `FACT` |

### 5.3 Devpost API note

`REFUSED` — I did not call `devpost.com/api/hackathons`. The seven `devpost.com/software/search` fetches
returned bot challenges, so the host is blocking this environment; per the evidence rules I stopped calling
Devpost entirely rather than trying a different Devpost endpoint. `guide.devfolio.co`, `guide.mlh.com` and
`lablab.ai` were **not attempted** (budget) and are irrelevant anyway: this event is on none of those
platforms, and its own rules override platform defaults.

---

## 6. Sponsor patterns, and the three capability questions

### 6.1 Arcade AI — what the platform actually is and can do

**What it is** `FACT`:
- Tagline on every page: **"Arcade - Create your dream game, instantly"**; marketplace title
  **"Arcade - Marketplace"**; site banner **"Arcade V1 is live — Jump in now →"** linking to
  **https://dashboard.joinarcade.ai/** (the creation surface; also labelled "Create" and "ENTER ARCADE").
- Luma description, verbatim: **"Join Arcade to create worlds, invent games, and jump into anything with
  your companion and your friends."**
- Consumer surfaces on **https://www.tryarcade.com/**: `/games`, `/community`, `/cosmetics`, `/ladder`
  ("The Ladder"), `/player/<name>`, `/friends-suggestions`.
- Cosmetics are **priced character textures** (Stone 199, Neon Blue 1 199, Frost 799, Rose Quartz 499,
  Ceramic 299, Astral 799, Knit 299) — i.e. there is an in-platform currency economy. The prize
  denomination **"ARX"** (Arcade Track prizes: "$1,500 in ARX") is that economy; Luma lists prize component
  **"Arcade Arcs"**.
- Company: 11-person team, 4 titled AI Engineer; co-founders Remi Kaito (CEO) and Gabriel Duciel (CTO), both
  on the judging panel.

**Does it have multiplayer and shared persistent state? — partially answered, documented: NO.**

`FACT`, from a published game page (https://www.tryarcade.com/games/zombie-defense-inc, fetched 2026-10-02),
the page exposes these as first-class platform features:
- **"Play"** and **"Party"** buttons (two distinct entry modes)
- **"Players — 738"**
- **"Voice Chat — Supported"**
- **"Camera — Not supported"**
- **"1 level"**, **"Age rating : —"**, **"Reviews — No reviews yet"**, "Write a Review"
- Per-game sub-pages: **`/store`** ("Store") and **`/badges`** ("Badges")
- **"Published : 21/09/2026"** and **"Modified : 21/09/2026"**

`FACT` — the event page lists **"Multiplayer"** as one of three Arcade Track focus bullets.

`INFERENCE` (medium): the combination of a **"Party"** mode, **supported voice chat**, a platform-wide
**Ladder**, per-game **Badges** and per-game **Stores**, plus account-level purchased **cosmetics**, means
Arcade supports **session-based multiplayer with voice** and **account-level persistence** (owned cosmetics,
earned badges, ladder standing, player counts).

`OPEN GAP — stated plainly`: **I found no public developer documentation for Arcade at all.** No docs site,
no API reference, no scripting guide, no capability matrix. I therefore **cannot confirm** whether a creator
can author **arbitrary shared persistent state** — e.g. a world whose mutations by one player are visible to
others later, or server-authoritative cross-session data a creator defines. "Party" could be anything from
a co-op lobby to a persistent shared world; the page does not say, and the creation surface
(dashboard.joinarcade.ai) is login-gated and was not opened. **Treat "Arcade has shared persistent state"
as unverified.** Resolve it in the first 30 minutes on Saturday by opening the dashboard, or by asking in
`#cambridge-hackathon` — it is a cheap question with large design consequences, and the Arcade CTO is both
reachable and on the judging panel.

**What Arcade publicly says it wants to showcase** `INFERENCE` (medium, from the track bullets it chose):
"AI-native games", "Multiplayer", "Interactive worlds" — and it conditions free credits and the exclusive
skin on publishing to its platform. `INFERENCE` (medium): a submission that makes the *platform* look
capable of something the current catalogue does not show (§4.2) is aligned with the sponsor's showcase
interest at zero rubric cost. That is an alignment observation, not a prediction, and not tailoring to any
individual.

### 6.2 Tencent Cloud / TiMi Studio Group

**Role here** `FACT`: Tencent Cloud is co-sponsor of the Game Tech Track (with Hyper3D) and supplies the
cloud-credit prizes. Site footer: **"Organized by Arcade AI · Partners: Tencent Games, Tencent Cloud,
Cambridge China AI Association · Prize sponsors: Hyper3D, Arcade AI"**. Luma partner list, verbatim:
**"Tencent Cloud (Tencent HY)"**, **"Tencent Games Timi Studio Group, Timi Studio HR (Delta Force, Call of
Duty: Mobile, Honor of Kings, etc)"**, **"Hyper 3D"**, **"Cambridge China AI Association"**. All winners in
both tracks get **"1:1 Job Interview with Tencent"** — recruiting is an explicit purpose, and a Tencent Sr.
Recruiting Manager (Berry Cao) and a Tencent Cloud Game Tech BD (Yiran Jiang) are listed as sponsors on the
panel page.

**Past hackathon behaviour** `FACT` — PR Newswire release dated **19 Aug 2026**, opened via
https://macaubusiness.com/tencent-clouds-ai-can-do-it-hackathon-hong-kong-and-macau-demo-day-concludes-successfully-29/ :
- The event is the **"2026 'AI CAN DO IT' Tencent Cloud Game Development Hackathon"**, described as
  **"one of Tencent Cloud's developer challenge series"**.
- Scale, verbatim: **"spans multiple regions, including Chinese Mainland, Hong Kong and Macau SARs, and
  Southeast Asia, attracting more than 10,000 creators worldwide and generating over 1,000 innovative
  project submissions."**
- Challenge text, verbatim: it **"encourages participants to utilize AI tools including CodeBuddy,
  WorkBuddy, and Miora to explore new forms of creation through games, animation, AI Agents, and other
  digital experiences"**, around **"three core pillars, Social Good, Cultural Expression, and Narrative
  Innovation"**.
- Demo-day format, verbatim: **"participating teams presented their project concepts, technical
  implementations, and creative outcomes to a panel of judges, sharing how AI tools enabled them to
  transform ideas into tangible products and experiences."**
- Winners: HKUST "Anchor" (1st), HKU "Walking in Poetry" (2nd), Public Division "LOONG SEASON" (3rd);
  advancing to a **"Tencent Cloud Hackathon Global Finals"**.
- DevRel voice, verbatim, Hui Cai (Operations Lead of the Tencent Cloud Hackathon): **"AI is rapidly
  becoming an essential creative partner for the next generation… The creativity, execution capabilities,
  and interdisciplinary thinking demonstrated by the participating teams… have been truly impressive"**.
- Company framing, verbatim: **"Tech for Good"**; and Tencent Cloud serves **"industries across the board,
  including the fields of gaming, media and entertainment…"**

`EVIDENCE (moderate)`: Tencent Cloud's public game-hackathon pattern names **creativity, execution
capability and interdisciplinary thinking** as what it praises, and its winners were themed creative
projects, not infrastructure. That rhymes with this event's rubric (Execution 25%, Innovation 20%) but note
the pillars differ entirely — do not import "Social Good / Cultural Expression" into this event's Track fit.

**What Tencent Cloud offers participants here — important official negative** `FACT`:
**the event page promises participants no Tencent Cloud resources at all.** Tencent Cloud credits appear
**only as prizes** ($1,000/$600/$400 to the Game Tech top three). The only participant-wide benefit stated
is the Hyper3D membership. There is **no stated LLM API availability, no free credits for participants, and
no region guidance** on any page I opened.

`LEAD` (explicitly NOT evidence — I did not open these): search results referencing Tencent Cloud hackathons
elsewhere offering "USD 100 cloud credits for the hackathon, for up to 500 hackers", 2,000 product credits,
free CodeBuddy/WorkBuddy credits, and notes that Hunyuan LLM must be enabled separately on the Tencent Cloud
*International* site even if activated on the China site. Sources I did not open:
https://luma.com/6v43opxu, https://luma.com/26fqf3hy, https://www.tencentcloud.com/campaign/constellation,
https://tch.cloud.tencent.com/, https://luma.com/jo916m7a.
**Do not plan a build around Tencent LLM access.** `INFERENCE` (medium): the international-vs-China account
split and sign-up friction make Tencent Cloud a poor critical-path dependency inside 27 hours. If Tencent
compute matters to an idea, confirm availability in Discord first. `OPEN GAP`, not resolved.

**TiMi Studio Group** `FACT`: present as a partner and via judges (Molin Yang — "Strategy @ Tencent Games,
TiMi Studio Group"; Rae He — "IEG, TiMi, Incubator @ Tencent"; Lee Fang — "Head of R&D @ Tencent Games";
Keyi Zhang — "Global Game Design @ Tencent Games"). Luma names the titles: Delta Force, Call of Duty:
Mobile, Honor of Kings. `OPEN GAP`: **I found no TiMi-run hackathon, challenge text or winner archive.**
TiMi's presence here is as a partner, a judging bloc and a recruiting channel, not as a challenge sponsor
with its own criteria.

### 6.3 Hyper3D / Rodin (Deemos)

**Identity** `FACT`: Hyper3D is Deemos — the event's Luma page links the Hyper3D partner to
**x.com/DeemosTech**, its add-on docs live on **docs.deemos.dev**, and its asset CDN is
`storage.deemos.dev`. Homepage title: **"Hyper3D Rodin - Best AI 3D Model Generator"**. Judge Joel Wang is
"Head of Global Strategy & Operations, Partner @ Hyper3D".

**What it does** `FACT` — https://hyper3d.ai/ , fetched 2026-10-02. Homepage pitch, verbatim:
**"Meet Hyper3D, the world's highest-quality, most controllable AI 3D model generator. Turn text prompts or
images into detailed 3D assets in seconds — no 3D experience required."**
- Products: **Rodin** (image-to-3D, text-to-3D), **ChatAvatar** (verbatim: *"Create nearly production-ready
  3D avatar packages from text descriptions or reference images, with a detailed face, matching body mesh,
  PBR materials, and built-in facial controls"*), **AI Video Generator**, **AI Image Generator**, and
  **OmniCraft** tools: AI Image Remix, AI Image Enhancer, **AI Texture Generator**, **AI HDRI Generator**,
  **3D Model Search Engine**, **SVG to 3D Converter**, **3D Mesh Editor**, Model Viewer, Format Convertor.
- **MCP**, verbatim: **"Connect AI agents to Hyper3D 3D generation tools."** — i.e. an agent-callable
  surface exists.
- Engine add-ons: **Blender, Unity, Unreal, Godot, Maya, 3DS Max, C4D, Omniverse, ComfyUI** (docs at
  docs.deemos.dev/addon…).
- Output formats, verbatim: **"Supports .obj .fbx .glb"**. Controllability features named: **Gen-2.5**,
  **Smart Low-Poly**, partial/region edits, and bounding-box / voxel / point-conditioned generation;
  **"Free Retry"**, **"Free Preview"**, **"Free 7-Day Trial"**. 21 style presets (Low Poly, Pixel Art,
  Voxel, Anime, Photorealistic, …).

**API, limits and latency** `FACT` — https://docs.hyper3d.ai/en , `/en/get-started/quick-start`,
`/en/get-started/features` , all fetched 2026-10-02:
- Base URL: **`https://api.hyper3d.com/api/v2`**. Auth: **`Authorization: Bearer YOUR_RODIN_API_KEY`**.
  Keys from **https://hyper3d.ai/workspace/api-dashboard**.
- Generation requests are **`multipart/form-data`**; responses JSON. Example submit:
  `POST /rodin` with `images=@./input.png`, `tier=Gen-2.5-Medium`, `mesh_mode=Raw`, `quality=medium`.
  **"Up to five images can be sent by repeating the `images` form field."**
- **Asynchronous, three-step**: submit → poll `POST /status` with `jobs.subscription_key` → `POST /download`
  with the top-level `uuid` as `task_uuid`.
- **Latency guidance, verbatim**: **"Wait at least five seconds before the first check. Back off on repeated
  requests and honor `Retry-After` after HTTP 429."** The official Python example *"starts polling after 5
  seconds, increases the delay to at most 30 seconds, enforces a 20-minute deadline"* and raises
  `TimeoutError("Generation did not finish within 20 minutes")`.
- **Rate limits / concurrency, verbatim**: **"An account also has a cap on how many tasks may run at once.
  Exceeding it rejects the submission with `API_PARALLELISM_LIMIT_REACHED`; retry once an in-flight task
  finishes."** HTTP **429** with `Retry-After` is the documented rate-limit response.
- **Credits**: each submission reports cost in `consumed` (the doc's example shows **`"consumed": 0.5`**);
  `/check-balance` returns remaining credits; verbatim caveat: **"Because concurrent tasks draw on the same
  balance, treat a returned balance as a point-in-time reading rather than a reservation."** Prices live at
  https://hyper3d.ai/pricing and **"can change independently of this documentation."**
- Model families: **Rodin Gen-2.5** (tiers, mesh/texture controls, add-ons), **Gen-2**, **Gen-1/1.5**
  (`Sketch`, `Regular`, `Detail`, `Smooth`, plus multi-image `concat`/`fuse`).

**IMPLICATIONS** `INFERENCE` (medium–high, from the documented numbers):
- **Rodin is an offline/asset-time dependency, not a live-demo-loop dependency.** The marketing says
  "in seconds"; the *official client example* budgets a **20-minute deadline** with 5→30s backoff. A demo
  that generates a mesh *during* play, in front of a reviewer or on a live stream, is betting on the fast
  tail of a pipeline whose own SDK example assumes minutes. **Generate ahead, cache, and show the result.**
- **Concurrency is capped per account**, so a design that fires many parallel generations (e.g. "generate
  the whole world on load") can hard-fail with `API_PARALLELISM_LIMIT_REACHED` precisely when several
  teammates share one key. Budget keys and serialise.
- **The free participant membership is $30-of-value and time-boxed** ("during the hackathon", `FACT`), and
  each call consumes credits. Mesh generation is a finite resource this weekend; treat it like one.
- **Lowest-risk, highest-reward use**: Rodin used in an **asset pipeline or production tool** — which is
  simultaneously a named Game Tech bullet ("production pipelines", "dev tools"), the eligibility condition
  for the $1,152 Hyper3D prize, and latency-insensitive. `INFERENCE`, medium.
- **The MCP surface** means Rodin is callable by an agent, which is the natural bridge between the "AI
  agents" bullet and the "production pipelines" bullet. `FACT` that MCP exists; `INFERENCE` that it bridges.

---

## 7. Judge context

`FACT` — the panel is **25 people** ("25 people from gaming studios, AI labs, universities and funds"),
listed with roles on https://about.tryarcade.com/hackathon and again on https://luma.com/2wuf8ns8.

**Composition, counted from the official list** `FACT`:
- **Tencent / TiMi (4 on the judging panel)**: Keyi Zhang (Global Game Design @ Tencent Games), Lee Fang
  (Head of R&D @ Tencent Games; Sr. Instructor @ Tencent Games Academy), Molin Yang (Strategy @ Tencent
  Games, TiMi Studio Group), Rae He (IEG, TiMi, Incubator @ Tencent) — plus 2 listed under "Co-hosts &
  sponsors": Berry Cao (Sr. Recruiting Manager @ Tencent Games), Yiran Jiang (Game Tech BD @ Tencent Cloud).
- **Investors (4)**: Clémentine Guyon (CEO @ Emotion Studio, Angel Investor), Lan Wu (Fusion Fund),
  Sarah Wang (VU Venture Partners), Tessa Osborne (Plug and Play).
- **Game studios / hardware (4)**: Cyril Derouineau (VP Editorial Tech @ Ubisoft), Jessica Jung (Head of AI
  Innovation Lab @ Supercell), Piero Herrera (CEO @ Ironmind Studios, Ex-Blizzard), Tony Kanell
  (Sr. Manager @ NVIDIA; Instructor @ University of Utah, Division of Games).
- **AI / academic (3)**: Matt White (Ex-Global CTO of AI @ Linux Foundation, Ex-CTO @ PyTorch),
  Daniel Goncharov (Research Engineer @ Stanford University; Google Developer Expert in AI/ML),
  Joey Primiani (AI Leader @ LinkedIn; Lecturer @ Stanford University; Ex-Google).
- **Narrative (1)**: Drew Gormley (Writer @ Family Guy, Disney's 101 Dalmatians; Instructor @ ShanghaiTech).
- **Host platform (2)**: Remi Kaito (CEO @ Arcade AI), Gabriel Duciel (CTO @ Arcade AI).
- **Sponsor platform (1)**: Joel Wang (Head of Global Strategy & Operations, Partner @ Hyper3D).
- **Other (1)**: Greg Henrion (Founder & CEO @ Sunset Technologies Inc).
- **Co-hosts**: Zhengpeng Feng (CS PhD @ Cambridge), Qianhui Wang (CS PhD @ Cambridge, Microsoft),
  Xinze Li (PhD @ UPenn).

**IMPLICATION of the composition** `INFERENCE` (medium — from the counted FACT, not from any individual):
a randomly drawn trio of reviewers is **unlikely to be three engineers**. Roughly a third of the panel are
investors or business/strategy/recruiting people, and the panel includes a professional television writer.
Combined with mean aggregation (§2.3), this favours a submission that is **immediately legible as an
experience or a product** and only then technically deep. This is a structural observation about the panel's
stated roles. It is **not** a claim about what any person prefers.

**The five most track-relevant named judges — and what I did NOT do:**

| Judge | Stated role (`FACT`, event page + Luma) | Profile link (`FACT`) | Stated evaluation principles |
|---|---|---|---|
| Remi Kaito | CEO @ Arcade AI | linkedin.com/in/remikaito | **Not researched — skipped.** |
| Gabriel Duciel | CTO @ Arcade AI | linkedin.com/in/gabriel-duciel | **Not researched — skipped.** |
| Cyril Derouineau | VP Editorial Tech @ Ubisoft | linkedin.com/in/cyril-derouineau | **Not researched — skipped.** |
| Jessica Jung | Head of AI Innovation Lab @ Supercell (ailab.supercell.com) | linkedin.com/in/jessicayjung75 | **Not researched — skipped.** |
| Tony Kanell | Sr. Manager @ NVIDIA; Instructor @ University of Utah, Division of Games | linkedin.com/in/tony-k-2339294 | **Not researched — skipped.** |
| Matt White | Ex-Global CTO of AI @ Linux Foundation; Ex-CTO @ PyTorch | linkedin.com/in/mdwdata | **Not researched — skipped.** |

**I deliberately skipped judge research.** The lookup budget (~15, halved because the event starts within a
day) was spent on the organiser's own pages and the three sponsor-capability gaps, which are higher-value
and which the brief told me to prioritise. I found **no** talks, articles or published evaluation principles
for any judge, so I am reporting **zero** such claims rather than thin ones. All the links above are
LinkedIn profiles, which are authentication-gated and were not opened. **Nothing in this report should be
used to tailor an idea to an individual judge**, and I make no statement about any judge's preferences.

The one thing worth knowing about the panel is already official and impersonal: the rubric is fixed at six
criteria scored 1–5, and the organisers have published what is **"Never judged"**.

---

## 8. Confidence notes

**HIGH — stated by the organisers on a page I opened (treat as rules):**
- The six criteria and their weights; "3+ independent reviews per project. Top 3 per track win."
- Scoring is **1–5 per criterion**, demo watched before the project is opened, scores editable until close.
- **"Never judged: English fluency / Slides / Public speaking."**
- Submission deadline **Sunday 4 Oct 14:00 Cambridge**; "One submission per team, no account needed";
  "Keep your project link and demo video online until judging is over."
- The exact submission fields, including **required Arcade Game Link** and required **Demo Video URL**, the
  **1000-char** description cap, and the checkbox **"I confirm that this game was built during the
  hackathon."**
- **No** repo field, **no** deck field, **no** AI-disclosure field, **no** team-size limit, **no** video
  length limit.
- Both track blurbs verbatim, including **"with only Arcade AI"**; "One track per project. Each track has
  its own winners."
- All prize amounts; the footnote **"Hyper3D prizes are available to eligible projects using Hyper3D"**;
  **"Free Hyper3D Membership — $30 value per participant during the hackathon"**; no participant-wide
  Tencent Cloud credits stated.
- Schedule including **Judging Sun 14:00–15:30** and **Winner Demo Sun 15:30–17:00 "Onsite, with live
  stream"**; Sat venue build window 11:00–18:00; onsite cap 100.
- Discord is the first-announcement channel.
- Rodin API: base URL, Bearer auth, async submit/poll/download, ≤5 images, 5s first poll / 30s max backoff /
  20-minute deadline in the official example, HTTP 429 + `Retry-After`,
  `API_PARALLELISM_LIMIT_REACHED` concurrency cap, credits via `consumed` and `/check-balance`,
  output `.obj .fbx .glb`, MCP surface, 9 engine add-ons.
- Arcade published-game pages expose Play/Party, player count, "Voice Chat Supported", "Camera Not
  supported", level count, Store, Badges, Reviews, and **Published/Modified dates**.
- Panel is 25 named people with the roles listed in §7.

**MEDIUM — a pattern across events, or an inference tightly bound to official facts:**
- The track's own bullet list is the de facto Track-fit rubric (no published definition exists).
- "Only Arcade AI" = ship it published on Arcade; the Arcade link is the hard gate for that track.
- This is the **first edition** of this event; "Our last hackathon" and the logo strip are the Arcade
  *team's own* competitive record (/team: "Hackathons & competitions the team has taken down").
- Mean-of-3+ aggregation penalises polarising submissions; panel heterogeneity reinforces it.
- The Winner Demo is a showcase after scores close, but carries a real live/streamed bar tied to the
  winner perks.
- Rodin belongs in asset-time, not in a live interaction loop.
- Tencent Cloud's public game-hackathon pattern praises "creativity, execution capabilities, and
  interdisciplinary thinking"; its winners were themed creative projects (n=3, different rubric).
- The Arcade catalogue is small, conventional-genre and thin on engagement (n=10 titles, one snapshot).
- Luma's "48 hours" overstates the real ~27h build window.

**LOW — inference from sourced facts, or a hypothesis I could not test:**
- That the five Game Tech bullets will also be the five modal submission clusters.
- That "only Arcade AI" permits external APIs/assets inside an Arcade game.
- That reviewers are assigned across both tracks rather than specialising.
- That "Party" implies more than a co-op lobby.

**OPEN GAPS I could not close (say so, don't fill them in):**
1. **Does a Game Tech Track submission also require an "Arcade Game Link"?** Highest-stakes unknown. I
   captured /submit with Arcade Track pre-selected and did not interact with the form.
2. **The published definition of "Track fit"** (25% of the score) — none exists publicly.
3. **Whether Arcade supports creator-authored shared persistent state**, and Arcade's developer
   capabilities generally — **no public Arcade developer documentation exists**; the dashboard is gated.
4. **Devpost / itch.io saturation numbers** — Devpost refused (bot challenge), itch.io not attempted.
   No per-category percentages anywhere in this report.
5. **Whether participants get any Tencent Cloud or LLM access here** — nothing stated; the $100/hacker
   figures circulating relate to *other* Tencent hackathons and are LEADs only.
6. **Reviewer assignment, recusal of sponsor-affiliated judges, and aggregation method** (mean vs sum).
7. **Expected submission count.**
8. **Judge talks / articles / stated evaluation principles** — deliberately skipped (§7).
9. **Hyper3D's own past hackathon/challenge history and winners.**
10. **TiMi Studio Group's own hackathon history** — none found; its role here is partner/judges/recruiting.

---

## 9. What past winners already built

**For this event: nothing. There is no prior edition, no winner archive and no project gallery.** Stated
plainly rather than padded. `INFERENCE` (medium–high, §3.1).

The nearest observed sets, labelled for what they are:

**(a) Tencent Cloud "AI CAN DO IT" 2026 Game Development Hackathon — HK/Macau Demo Day (19 Aug 2026).**
`FACT`, 10 finalist teams, 3 winners: HKUST **"Anchor"** (1st), HKU **"Walking in Poetry"** (2nd), Public
Division **"LOONG SEASON"** (3rd). Categories were Social Good, Cultural Expression, Narrative Innovation.
What the demo day asked for, verbatim: **"project concepts, technical implementations, and creative
outcomes… sharing how AI tools enabled them to transform ideas into tangible products and experiences."**
Observed pattern `EVIDENCE (weak — n=3, different event, different rubric, no project pages reachable)`:
named, themed, finished creative artefacts; not infrastructure, not tools. Tools the organiser pushed:
CodeBuddy, WorkBuddy, Miora. **I could not reach any project page, video or repo for these three** — the
release links none. Base rates are therefore unavailable, and I am not inventing any.

**(b) The Arcade marketplace as the live comparison set** (full table, §4.2). `FACT`, fetched 2026-10-02:
10 titles, top engagement 738 players, "New This Week" titles at 6–27 players, one level typical, zero
reviews on the leader, and **no AI-native mechanic visible in any title or genre tag**. Observed pattern
`EVIDENCE (moderate, n=10)`: what ships on Arcade today is conventional single-mechanic arcade games.

**(c) The Arcade team's own competition record** `FACT`, https://about.tryarcade.com/team, heading
"Hackathons & competitions the team has taken down": Google DeepMind, OpenAI, Anthropic, Mistral AI,
Hugging Face, AWS, Stanford, Harvard, Supercell, Unity, Tencent Cloud, ElevenLabs, BytePlus. This is the
**organisers'** record as competitors, which is why §3.1 reads the rubric as written by experienced
hackathon winners. `LEAD` only (not opened): a podcast and search summary referencing a Supercell global
game-AI contest win by the founders.

---

## 10. Research log

**Date of all work: 2026-10-02.** Budget: ~15 lookups (halved because the event starts within a day).
Spent: 1 web search for past editions, 1 web search for Tencent participant resources, and 13 direct page
fetches (7 of which were refused in a single Devpost batch).

### Pages OPENED successfully (evidence basis of this report)
| # | URL | What it gave |
|---|---|---|
| 1 | https://about.tryarcade.com/hackathon | Criteria + weights, **"Never judged"** list, both track blurbs, all prizes + Hyper3D footnote, full schedule w/ timezone conversions, 25 judges + roles, Discord/Luma links, "Our last hackathon", footer org/partner/prize-sponsor lines |
| 2 | https://about.tryarcade.com/submit | **Every submission field verbatim**, deadline in Cambridge time, "One submission per team, no account needed", 1000-char cap, built-during-hackathon checkbox, "Arcade Game Link" requirement, video guidance ("any public link"), link-uptime rule |
| 3 | https://about.tryarcade.com/judge | **"Watch the demo, open the project, then score six criteria from 1 to 5. You can come back and update any score until judging closes."** + email-gated access |
| 4 | https://luma.com/2wuf8ns8 | Official title "Tencent × Arcade AI Hackathon", 10:30–18:00 GMT+1 window, 100-person onsite cap + reservation email, 3 ticket types, "announce in Discord first", partner list incl. TiMi titles, second Discord invite + `#cambridge-hackathon` channel, host list, "2 days · 48 hours" |
| 5 | https://www.tryarcade.com/ | Marketplace structure (/games, /community, /cosmetics, /ladder, /player, /friends-suggestions), 10 games w/ genres + player counts, cosmetic prices, genre taxonomy |
| 6 | https://www.tryarcade.com/games/zombie-defense-inc | **Published-game page anatomy**: Play/Party, Players 738, "Voice Chat Supported", "Camera Not supported", 1 level, Store, Badges, Reviews, Published/Modified dates |
| 7 | https://about.tryarcade.com/team | 11-person team w/ titles; **"Hackathons & competitions the team has taken down"** — resolves what the logo strip means |
| 8 | https://hyper3d.ai/ | Product surface (Rodin, ChatAvatar, OmniCraft, MCP), formats ".obj .fbx .glb", 9 engine add-ons, Gen-2.5, Smart Low-Poly, ControlNet-style conditioning, free trial/preview/retry, style presets |
| 9 | https://docs.hyper3d.ai/en (via a redirect from developer.hyper3d.ai) | Rodin API intro, base URL `https://api.hyper3d.com/api/v2`, Bearer auth, async design |
| 10 | https://docs.hyper3d.ai/en/get-started/quick-start | Full request lifecycle, ≤5 images, 5s first poll, 30s max backoff, **20-minute deadline**, 429 + `Retry-After`, example `consumed: 0.5` |
| 11 | https://docs.hyper3d.ai/en/get-started/features | Model families, **credits/billing**, **`API_PARALLELISM_LIMIT_REACHED` concurrency cap**, pricing-may-change caveat |
| 12 | https://macaubusiness.com/tencent-clouds-ai-can-do-it-hackathon-hong-kong-and-macau-demo-day-concludes-successfully-29/ | Tencent Cloud 2026 game-dev hackathon: scale (10,000+ creators, 1,000+ submissions), challenge text, tools (CodeBuddy/WorkBuddy/Miora), 3 named winners, demo-day format, DevRel quote |

### Searches run (2)
- `"Arcade AI" tryarcade hackathon winners game jam` — returned no past-edition page; produced only LEADs
  (podcast, unrelated "ARCADE"-themed jams, an allai.events listing). Nothing from it is used as evidence.
- `Tencent Cloud hackathon participants free credits LLM API Hunyuan international region` — produced the
  macaubusiness article I then opened (#12). All other results are logged as LEADs in §6.2 and are not used
  as evidence.

### REFUSED — final, not retried
- **Devpost, 7 URLs in one batch**: `devpost.com/software/search?query=` for `ai npc`, `text to game`,
  `ai game master`, `procedural world generation ai`, `ai playtesting`, `adaptive music game`,
  `ai game asset pipeline`. All returned **HTTP 202 with a bot challenge** ("Max challenge attempts
  exceeded. Please refresh the page to try again!"). Logged as not accessible. **No curl, no mirrors, no
  archives, no caches, no alternate Devpost endpoint, and no call to `devpost.com/api/hackathons`.**
  Direct consequence: **§4 contains no Devpost category percentages.**

### NOT attempted (budget), listed so the gap is visible
- `dashboard.joinarcade.ai` (login-gated creation surface — the one place Arcade's real capabilities and any
  persistent-state feature would be visible)
- Any Arcade developer documentation (I could not establish that any exists)
- `/submit` with "Game Tech Track" selected (would resolve open gap #1)
- Discord (`discord.gg/72bxnpv4C8`, `#cambridge-hackathon`) — the organisers' own authoritative channel, and
  the cheapest way to close gaps #1, #2 and #5
- All 25 judges' LinkedIn profiles, talks and writing (auth-gated / deliberately skipped — §7)
- itch.io, lablab.ai, guide.devfolio.co, guide.mlh.com (irrelevant: this event is on none of them)
- hyper3d.ai/pricing (exact credit costs per tier)
- Tencent Cloud participant-resource pages (5 LEAD URLs listed in §6.2)

### Unopened LEADS (titles only — never evidence)
https://playingwithinference.podbean.com/ · https://castbox.fm/channel/6579501 ·
https://allai.events/event/cambridge--arcade-ai-hackathon · https://luma.com/6v43opxu ·
https://luma.com/26fqf3hy · https://www.tencentcloud.com/campaign/constellation ·
https://tch.cloud.tencent.com/ · https://luma.com/jo916m7a · https://www.webull.com/news/15427742073897984 ·
https://technode.global/?p=993054 · https://selecttranslate.com/en/docs/service/tencent-hunyuan

### Three things to verify in Discord before committing (each closes a 25%-or-larger unknown)
1. Does a **Game Tech Track** submission need an Arcade Game Link?
2. What does **"Track fit"** mean on the judge scorecard?
3. Does **"only Arcade AI"** forbid external APIs or imported assets (e.g. Hyper3D meshes) inside an Arcade
   game?


# Competitor scans (Stage 5) — three subagent C runs, 2026-10-02

All live pages accessed 2026-10. Refused fetches logged and not retried from other hosts.

## Idea 1 — Narrative Drift Guard

**Verdict shape: the memory half is absorbed; the verify half is open but published and saturated.**

| Class | Found |
|---|---|
| startup | **Convai** — per-player-per-character long-term memory, documented Unity *and* Unreal plugins: memory is "scoped to one player and one character", "Built from conversation content when LTM is enabled", "The plugin does not expose memory-record CRUD nodes". No contradiction checking. **Artificial Agency** — "Behavior Engine", "character memory" + "first-class Unity support" (both dated 2026-03-09), $16M raised, first commercial integration with Owlchemy Labs 2026-09-14. **GoodAI AI People** — episodic/procedural/emotional/relational memory, but within a single playthrough only (2024-12). **Charisma.ai** — has left games for "online training and campaigns". **Inworld** — visible surface is now voice/inference infrastructure (Realtime TTS/STT/API/Inference/Router/Compute); conflicting third-party claims about Memory/Knowledge modules — FLAGGED for human re-verification. |
| oss | Game-specific and overlapping: `EricSun0218/OpenGameAgent` 51★ ("durable state… memory, tools"), `ZSLTChenXiYin/GameAgentEngine` 15★ ("sits between your game logic and LLM capabilities — responsible for world modeling"), `yukinorin775780/BG3-LLM-Agent` 0★ ("scoped perception, memory isolation, and deterministic game-state consequences" — same thesis), `virgilianshailer/story-tracker` 11★. General memory: mem0 66,484★, Graphiti 31,385★, Letta 25,005★, Zep 4,946★ — these store and retrieve, they do not adjudicate canon. Incumbent authoring: ink 4,954★ and Yarn Spinner 2,851★, **both MIT and free**, Yarn pushed 2026-10-01. |
| hackathon | **147 Devpost projects match "npc memory"** (devpost.com/software/search?query=npc+memory, header "1 – 24 of 147"). Loomweaver: "Have you ever played a game where characters forget your choices? This helps developer create NPC that remember actions". Hearsay: CockroachDB "living memory layer". Chronicles Without Chains: "One scene. Any action. Consistent consequences." **Saturated genre.** |
| platform | **NVIDIA ACE (2025-01-06, shipping in PUBG, inZOI, NARAKA: BLADEPOINT, MIR5):** "Memory is crucial…"; RAG with E5-Large-Unsupervised via the In-Game Inference SDK; "Game state can be transcribed into text so that a SLM can reason about the game world". **Critically, NVIDIA tells developers they "must implement content filtering, lore constraints, and behavioral boundaries" themselves** — an explicit 21-month-old hand-off of this exact layer. **Unity AI** (unity.com/products/ai) = editor-time assistant, MCP server, CLI; no runtime NPC layer. **Anthropic memory tool** (`memory_20250818`, all Claude 4+) = unstructured client-side files, no schema, no per-persona scoping, no contradiction check. Unreal/Godot release notes NOT reached (search returned SEO scrape farms) — OPEN GAP. |
| research | Leads only, none opened: PAYADOR ("grounding language models on structured data for interactive storytelling and role playing games"), PDDL-Mind (parses the world into a PDDL problem file and verifies actions by checking preconditions), a multi-agent GM whose "Archivist tracks game-world consistency", Aalborg thesis "Narrative Adherence in LLM driven Games". **The mechanism is already in the literature.** |
| workaround | **Strongest item.** davidvk89, Bannerlord companion app (dev.to): "By around session four, the medieval sandbox is no longer a roleplay companion. It is a gossip-powered hallucination engine." His stack: flat JSON world ledger + "scoped context packets" so actors get only what they plausibly know + a "trust gate" — "The AI cannot just say that and make it canon." Hit the wall after "a week or two". Independently converged on all three of the idea's mechanisms. |

**closest_past_winner:** none matching the mechanism. 24 winner-badged Devpost NPC projects reviewed; all are *games with AI NPCs* (PromptQuest, The House of Jeff, NPC Therapy), none is consistency middleware.

**Counter-evidence:** 105 open GitHub issues for NPC+LLM+consistency but the top 8 by reactions have **0 reactions** — no upvoted community pain. Status quo (ink/Yarn) is free, so the cost is author hours only. Two narrative-AI-for-games vendors have left the category.

## Idea 2 — World Coherence Verifier

**Verdict shape: structural layer is table stakes; only the semantic layer is unclaimed.**

| Class | Found |
|---|---|
| startup | **modl.ai** — input is a *build* uploaded to a dashboard; agents play it and the agent "observes and interacts with the game purely through visuals"; finds "visual glitches, missing assets, performance issues, and gameplay logic bugs". **Post-build, pixel-level, playthrough-based — it never reads a dungeon JSON.** Same for **nunu.ai** ($6M seed, customers named Warner Bros./Scopely/Roboto Games), **ManaMind** ($1.5M pre-seed 2026-04, claims 86% of critical bugs pre-ship), **Regression Games**, **Razer QA Companion AI** (GDC 2026). **Every AI game-QA company found plays the finished build; none reads a pre-build content spec.** **StraySpark Unreal MCP Server** ($129+, 2026-09-12) — "validate AI-generated content before it ships", validates "Blueprint structure, widget layout, asset data, material setup, animation setup, PCG graph, import preflight" with a "shared result shape" where "every check returns the same `issues[]` structure". Engine artifacts, not game logic. |
| oss | GitHub `procedural+generation+validation+game` → **total_count = 10**, nothing above 5★. `dungeon+solvability+checker` → **total_count = 0**. The real tooling is *generators that bake validity in*: `amidos2006/gym-pcgrl` 134★, `smearle/control-pcgrl` 47★ (playability as an RL reward term), a WFC+GA city generator with playability as a generation constraint. **No standalone verifier exists because it is ten lines of flood fill.** |
| hackathon | Solvability checking appears only as an internal one-line feature of games, never as the deliverable: crazy-tile-match ("a pre-test step that runs a solver to indicate if a custom level is solvable before publishing"), subverse, prism-rift ("BFS over (x, y, orientation) to validate puzzle solvability"). |
| platform | A third-party paid plugin already ships PCG-graph validation for Unreal (StraySpark, above), which implies Epic's own framework does not. **Epic's PCG docs page returned an empty JS shell — not accessible.** Unity/Godot/Houdini NOT checked. **Engine first-party absorption UNRESOLVED — biggest open hole.** |
| research | **Decisive.** Mao et al., *PCG via Generative AI* (arXiv 2407.09013, 2024-07-12): names agent-based playability checking as established prior art — "the use of gameplaying agents, commonly pathfinding algorithms or other hand-crafted AI, to determine playability. While these are effective, they come at a high computational cost." The bottleneck is **compute cost, not absence**. Also "the most basic goal of generating a level is to ensure its playability". **This survey covers validation at length and says nothing about narrative or quest coherence.** Khalifa et al., *PCG Benchmark* (arXiv 2503.21474, FDG '25): already implements "A* agent can solve the level" and "Seven quality criteria ensure that the game can be won, lost, and is playable" as graded pass-rates. Beukman et al. (arXiv 2201.10334) "lack of standardised, game-independent metrics" — but this is about comparing *generators* on diversity/difficulty across papers, NOT about whether a given dungeon is solvable: WEAK evidence for this problem, must not be cited as "no objective quality metrics exist". |
| workaround | **Dungeon Squire devlog** (mvolution, itch.io, "Is the Game Always Solvable?"): the dev's answer is "Practically always", "The game doesn't explicitly guarantee beatable levels", based only on "my experience so far". **The claimed user, asked this exact question, reports no verifier, no manual-playthrough QA, and no pain.** Also: validity-by-construction (ASP/clingo, WFC, constraint generators) removes the need for post-hoc verification entirely. |

**closest_past_winner:** none found (scoped to search results; Devpost browse pages not opened).

**Old package claims corrected:** "no objective quality metrics for generated game worlds" — partly true but mis-scoped (true for aesthetics/difficulty comparison, FALSE for solvability). "Verification loop bottleneck is a stated open problem" — NO; the survey calls the existing fix effective and names compute cost as the drawback. "Content verification at generation time is not a shipped product anywhere" — FALSE (StraySpark, 2026-09).

## Idea 3 — Living World Multiplayer

**Verdict shape: dead. The novelty claim is false twice over and the platform capability is undocumented.**

| Class | Found |
|---|---|
| startup | **Travian** (Wikipedia, opened): "persistent, browser-based, massively multiplayer, online real-time strategy game", "originally written and released in June 2004", peak "over 5 million players on over 300 game servers worldwide". Players build and upgrade villages, "attack other villages to plunder resources", "conquer other players' villages"; NPC-faction Natarian villages "randomly spawn all over the map, and will gradually develop" and "can be attacked and conquered by players". **Every element of the candidate's fingerprint, 22 years old.** Forge of Empires / Grepolis / Ikariam are the same lineage (leads). **Mythora** (Product Hunt, launched 2026, browser at mythora.app): "AI RPG world you build together — Worlds remember everything"; NPCs retain memories across sessions including "grudges, favors, secrets you shared, lies you told"; worlds keep running offline and "factions shift"; player actions leave traces for others; flagship world lists 200+ players, 40+ locations, 70+ NPCs. **Altworld.io** (maker's own words): "Every action you type first updates a structured world database — factions, prices, rumors, relationships, locations — and only then is the story narrated from what actually changed" + "multiplayer sessions share one persistent timeline via invite link". **The candidate's exact architecture, verbatim, already built.** |
| oss | **a16z-infra/ai-town** 10.6k★, 1.2k forks, MIT: deployable starter kit, Convex game engine + database + vector search, persistent world state, generative agents, inspired by Park et al. Does NOT document humans joining as concurrent players — the one real gap the candidate could occupy, but it hands you most of the infrastructure. Plus a dozen small generative-agent simulators (gatsim 45★, silisocs 35★, replicantlife 34★). |
| hackathon | **a16z AI/Virtual Worlds Hackathon grand prize, July 2023**: "A multiplayer online game featuring a persistent world, generative AI for storytelling (Anthropic Claude) and immersive environments… using a new technique called 'semantic programming,' which uses an XML-based format to provide consistency between generative and game components." **Already won.** |
| platform | **Arcade AI (about.tryarcade.com + dashboard.joinarcade.ai, both opened twice):** full nav is Home, Explore, Career, Team, Enter Arcade, Join Discord. **No docs, no blog, no changelog, no pricing, no showcase, no API reference exist on the site, and none surfaced in two targeted searches.** Build model is prompt-to-world via an AI "companion"; "Arcade V1 is live." Multiplayer is *marketed* ("Invite your friends, build side by side"; "Every world in Arcade is made to be shared") but there is no stated networking model, player-count limit, authority model or session model. **The strings "persistent", "save", "database", "state" and "session" do not appear anywhere on the page.** `about.tryarcade.com/docs` → HTTP 404. Fallbacks (leads): Playroom Kit reportedly has persistent storage across sessions + synced global/player state; Rosebud AI reportedly has **no** native multiplayer. |
| workaround | Players who want lasting consequence already have well-populated homes: **Foxhole** ("The game world is persistent, and so are your actions"; peak 11,778 concurrent), **2b2t** (one Minecraft world, 14+ years, no reset, ~80TB, multi-hour queues), and the whole browser-MMO strategy genre. |

**Counter-evidence:** the claimed player complaint ("players complain nothing they do has lasting consequence") is **unsourced — no opened page contains it**; ASSUMPTION. The premise is also inverted: the browser's single biggest native multiplayer genre *is* the asynchronous persistent-world strategy MMO, so the idea claims as white space the browser's most commercially proven multiplayer form. And the demo moment (two windows, same-second propagation) is ordinary real-time sync, not the cross-session accumulation the pitch sells.


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

