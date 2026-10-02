# brief.md — Cambridge × Arcade AI Hackathon

## Step 0 — Classification

| Field | Value |
|---|---|
| **Mode** | HACKATHON (named event, tracks, sponsors, prizes, published rubric) |
| **Context** | GENERAL (the request does not ask for ideas fitting the requester's background; background is read only at Stage 9/10) |
| **Request type** | **pressure-test** — three existing ideas, generated with a weaker model, to be verified or killed and regenerated |
| **Depth** | full breadth (≥10 problems, ≥4 user groups), halved lookup budget because the event starts within a day |
| **Discovery method** | blind_subagent (D never sees the event, the sponsors, past winners, or the three stated ideas) |

## Hard constraints (from the request and the event page)

- Build window: Sat 3 Oct 11:00 → Sun 4 Oct 14:00 submission. ~27 h elapsed; the page indicates building closes 18:00 Sat and reopens Sun morning, so real build hours are fewer.
- Team size: not stated on the page; not supplied. **Assumption:** small team.
- Submission: "Project link + demo video". Video length, repo and deck requirements NOT ON PAGE.
- **Judging is async: 3+ independent reviews per project**, Sun 14:00–15:30, then a separate onsite "Winner Demo" with live stream 15:30–17:00. A reviewer may never run the build.
- Two tracks; Arcade Track is restricted to "only Arcade AI".

## Event intelligence (Stage 1) — from https://about.tryarcade.com/hackathon, accessed 2026-10-02

- **Theme, verbatim:** "Build the future of AI × Gaming."
- **Arcade Track, verbatim:** "Build and publish games with only Arcade AI, enjoy free Arcade credits & claim a limited-edition skin." Keywords: AI-native games · Multiplayer · Interactive worlds. Pool $5,000 (1st $1,000 cash + $1,500 ARX; 2nd $600 + $900 ARX; 3rd $400 + $600 ARX).
- **Game Tech Track, verbatim:** "Build innovative game-related projects: world generation, simulation, AI agents, dev tools, production pipelines, etc." Keywords: World generation · Simulation · AI agents · Dev tools · Production pipelines. Prizes are **cloud credits + gift cards, not cash** (1st $1,000 credits + £500 + Hyper3D subscription; 2nd $600 + £300; 3rd $400 + £200).
- **Criteria, verbatim with weights:** 20% Innovation & Originality · 25% Execution & Functionality · 15% AI × Gaming Relevance · **25% Track fit** · 10% Potential & Impact · 5% Demo & Clarity. (The old package's relayed criteria are CONFIRMED correct.)
- All winners: exclusive skin, 1:1 with the Arcade team, Tencent job interview, 30-min VC pitch. All participants: free Hyper3D membership.
- Sponsors listed: Arcade AI, Tencent Cloud, TiMi Studio Group, Hyper3D (Rodin). Sponsor product docs deliberately deferred to Stage 6H so their catalogues cannot seed discovery.
- 25 named judges, including Remi Kaito (CEO, Arcade AI), Cyril Derouineau (VP Editorial Tech, Ubisoft), Jessica Jung (Head of AI Innovation Lab, Supercell), Gabriel Duciel (CTO, Arcade AI), Tony Kanell (Sr. Manager, NVIDIA).

## Capability classes passed to D (de-branded, as a lens only)

- (a) a browser-based AI-native game creation and hosting platform with multiplayer and shared persistent state
- (b) general cloud compute with hosted LLM inference APIs
- (c) a text/image-to-3D asset generation API

## Claims in the old package flagged as SUSPECT (weaker model, unsourced) — to verify or discard

1. "Tencent/TiMi research priorities (persistent NPC memory, hybrid architectures)" — no source given anywhere in the package. Treat as unverified until J finds it.
2. "TiMi's stated research priority is persistent NPC memory" — same.
3. "Tencent's stated research priority includes verification loops" — same.
4. "NPC incoherence is the #1 cited failure mode killing AI NPC adoption in shipped games" — cited only to "Medium, multiple industry reports".
5. "~36% of devs using AI" — no source, no base stated.
6. "Content verification at generation time is not a shipped product anywhere" — absence claim stated as fact.
7. "No persistent-consequence multiplayer browser game exists" — absence claim; browser strategy MMOs are an obvious counterexample.
8. "Similar concepts won at past Arcade hackathons per the event page" — the event page does not showcase past winners.

## Research gaps inherited from the old package, all unresolved at intake

- (a) Arcade AI shared-state persistence API not publicly documented; idea 3 assumes it exists.
- (b) Hyper3D Rodin latency for in-game use unmeasured.
- (c) Tencent Cloud LLM API availability / credits / region for participants unconfirmed.
- (d) Contradiction-detection accuracy for idea 1 unmeasured.

---

# CORRECTIONS from Stage 1b (judging intelligence) and Stage 5 (competitors)

## Suspect claims from the old package — RESOLVED

| # | Old claim | Verdict |
|---|---|---|
| 1-3 | "Tencent/TiMi stated research priorities: persistent NPC memory, hybrid architectures, verification loops" | **UNFOUND. Treat as fabricated.** No TiMi-run hackathon, challenge text or winner archive exists. TiMi is a partner + judging bloc + recruiting channel, not a challenge sponsor with criteria. Remove from all reasoning. |
| 4 | "NPC incoherence is the #1 cited failure mode killing AI NPC adoption" | **UNSUPPORTED as stated.** No ranking source. What IS evidenced: one developer's detailed first-person account of drift (davidvk89, Bannerlord), and 105 open GitHub issues on NPC/LLM consistency whose top 8 by reactions have **0 reactions** — i.e. not a loud grievance. |
| 5 | "~36% of devs using AI" | **TRUE and now sourced.** GDC State of the Game Industry 2026, pub. 2026-02-03, base 2,300+ professionals: 36% use generative AI. Breakdown: brainstorming 81%, daily tasks 47%, asset generation 19%, **procedural generation 10%**, **player-facing features 5%**. Also: 52% believe genAI negatively impacts the industry. |
| 6 | "Content verification at generation time is not a shipped product anywhere" | **FALSE.** StraySpark Unreal MCP Server, $129+, 2026-09-12, "validate AI-generated content before it ships". |
| 7 | "No persistent-consequence multiplayer browser game exists" | **FALSE twice over.** Travian (June 2004, peak 5M players, 300+ servers). Mythora + Altworld (2026, browser, the exact mechanism). |
| 8 | "Similar concepts won at past Arcade hackathons per the event page" | **FALSE.** There is no prior edition, no winner archive, no project gallery for this event. |

## Event facts that change the design space

- **Judging:** "3+ independent reviews per project. Top 3 per track win." Judge dashboard: "Watch the demo, open the project, then score six criteria from 1 to 5." **No published definition for any criterion.** Scale is 1-5, so one point on Execution or Track fit = 5% of final score.
- **"Never judged": "English fluency", "Slides", "Public speaking".** A deck is worth zero.
- **Game Tech is NOT Arcade-only.** Luma: participants may "create games using Arcade or any innovative projects for Arcade and Game Tech Tracks". The Game Tech blurb has no exclusivity language.
- **OPEN GAP, HIGHEST STAKES: the /submit form is shared by both tracks and renders "Arcade Game Link *" as required** ("The link to your published game on Arcade"). Captured with Arcade Track pre-selected; not interacted with. **Unknown whether a Game Tech submission needs one.** Must be confirmed in Discord.
- **One project link slot only.** No repo field, no deck field, no AI-disclosure field, no team-size limit, no video length limit. Pre-existing-code regime is a single checkbox: "I confirm that this game was built during the hackathon."
- **Hyper3D footnote is the only conditional prize criterion on the page:** "* Hyper3D prizes are available to eligible projects using Hyper3D" -> the $1,152 Business Subscription in Game Tech 1st. "using", not "built on".
- **Tencent Cloud offers participants NOTHING.** Credits are prizes only; no stated LLM API, free credits or region guidance. Do not put Tencent LLM access on the critical path.
- **Rodin is asset-time, not live-loop.** Official client example: first poll at 5s, max 30s backoff, **20-minute deadline**, plus per-account concurrency cap (`API_PARALLELISM_LIMIT_REACHED`). Free participant membership is $30 of value, time-boxed to the hackathon.
- **Arcade platform:** "Party" mode, "Voice Chat - Supported", a Ladder, per-game Badges and Stores, purchased cosmetics -> session multiplayer + account-level persistence. **But no public developer documentation exists at all**, and arbitrary shared persistent state is UNVERIFIED.
- **Arcade catalogue (first-party, 2026-10-02, n=10):** top title 738 players with 0 reviews; "New This Week" at 6-27 players; "1 level" typical; **zero titles advertise an AI-native mechanic**; the genre taxonomy has no "AI" or "multiplayer" chip.
- **Real build window ~27 hours** (Sat 11:00 -> Sun 14:00 Cambridge), venue shut 18:00-morning, despite Luma advertising "2 days - 48 hours".
- **Discord is the authoritative channel**, not the website.

## Three things for Saharsh to confirm in Discord before committing
1. Does a **Game Tech Track** submission need an Arcade Game Link?
2. What does **"Track fit"** mean on the judge scorecard?
3. Does **"only Arcade AI"** forbid external APIs or imported assets (e.g. Hyper3D meshes) inside an Arcade game?
