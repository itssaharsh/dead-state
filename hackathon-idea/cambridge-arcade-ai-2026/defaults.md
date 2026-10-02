# defaults.md — pre-registered convergent ideas (written BEFORE any search)

Brief: "Build the future of AI x Gaming." Track A: build/publish games on a browser-based AI-native
game creation + hosting platform with multiplayer and shared persistent state. Track B: world
generation, simulation, AI agents, dev tools, production pipelines.

These are the ideas I expect any language model to produce for this brief with zero research.
They are pre-registered so I can generate AWAY from them. Each is tagged with the recycled
category it belongs to and why it dies without a research-backed wedge.

| # | Default idea | Recycled category | Why it dies without a wedge |
|---|---|---|---|
| D1 | NPCs with persistent memory you can talk to in natural language | AI NPC chatbot | Reduction: user gives dialogue to a model, gets dialogue back. Every model vendor demos this. |
| D2 | AI Game Master that narrates a party's shared session | AI game master / storyteller | Pure text generation; no record, no deterministic core. Also 10 years of AI Dungeon prior art. |
| D3 | "Type a sentence, get a playable level" generator | prompt-to-level / text-to-game | The platform in Track A IS this. Zero differentiation; it's the host's own feature. |
| D4 | Text/image → 3D prop generator with a nice gallery UI | AI asset generator wrapper | A UI on capability (c). Wrapper around a model API, declared. |
| D5 | Adaptive soundtrack that reacts to combat intensity | dynamic/adaptive music generator | Middleware (Wwise/FMOD) already does state-based music deterministically. Absorbed. |
| D6 | AI companion pet/sidekick that remembers you across sessions | AI companion | Nothing compounds but chat logs; no workflow, no buyer. |
| D7 | AI coach that teaches you to play better by watching your match | AI tutor | Needs telemetry you don't have; demo video shows a model talking over gameplay. |
| D8 | Multi-agent village/society sim (Smallville clone) | generic multi-agent system | Paper reproduction. Demo looks like logs scrolling. No user with a job. |
| D9 | Live-ops dashboard that explains your player metrics in English | generic dashboard + AI dashboard | Dashboard with no workflow of its own; needs a live player base you don't have. |
| D10 | Chat with your game design doc / lore bible | chat with your documents (RAG) | Named wrapper shape. Dead on arrival. |
| D11 | An agent that plays your game to find bugs | AI playtesting bot | Appreciated only over weeks/at scale; also crowded (GameDriver, Regression Games). |
| D12 | Procedural quest generator keyed to world state | procedural quest generator | Named recycled category; output is text; engines have quest frameworks. |
| D13 | Voice commands to control an RTS / build in-world | voice-to-command interface | Named recycled category; modality is not a mechanism. |
| D14 | AI balance-tuning dashboard that suggests nerfs | AI game balancing dashboard | Needs real match data at scale; reviewers cannot see it work in a video. |
| D15 | Agentic Unity/Unreal copilot that writes gameplay code | generic coding assistant | Cursor/Copilot/Unity Muse absorb this. Declared wrapper shape. |
| D16 | Text-to-world: describe a biome, get a terrain + props | a content generator | Houdini/Gaea + existing plugins; also Track A platform's own pitch. |
| D17 | AI localisation pass for your game's strings | a wrapper on a model API | Only leverage is translation → explicitly killed by Stage 4b rule 2 unless a deterministic checker owns it. |
| D18 | Procedural "infinite game" that generates itself as you play | prompt-to-game | Same as D3 plus novelty framing. |
| D19 | AI moderator for in-game chat | a content generator / classification wrapper | Crowded: Modulate ToxMod, Spectrum Labs, Community Sift. Needs a gap. |
| D20 | AI-generated marketing trailer / store page for your game | content generator | Output is the model's output; no record kept. |

Note: D17 and D19 touch real back-office pain (lens 6). If research finds a wedge, the surviving
version must own the step AFTER the model output — the write-back, the record, the gate — not the
generation.
