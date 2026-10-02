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
