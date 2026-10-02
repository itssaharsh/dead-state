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
