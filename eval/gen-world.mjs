/* The real experiment. A generator producing content at volume emits quests
   INDEPENDENTLY against a shared world. Each quest is written without seeing the
   others, then typed independently, then merged into one world model.
   A per-quest dead-end check cannot see across that boundary. This can. */
import { complete } from '../lib/providers.js';
import { extract } from '../lib/extract.js';
import { gate } from '../public/solver.js';
import { writeFileSync } from 'node:fs';

/* The shared world bible a studio would already have — including the canonical
   flag names, so independently generated quests type into the same vocabulary. */
const BIBLE = `WORLD: the harbour city of Saltmarrow.

CHARACTERS (canonical fact name for "is alive and reachable"):
- Oren Vask, pawnbroker on Fishmonger's Pier   -> alive_oren_vask
- Captain Hallowell, commands the Iron Watch    -> alive_hallowell
- Sister Dunmore, keeps the almshouse ledger    -> alive_dunmore

ITEMS (canonical fact name for "the player holds it"):
- the Sunburst Astrolabe -> has_astrolabe
- the Watch seal ring    -> has_seal_ring
- the almshouse ledger   -> has_ledger

PLACES (canonical fact name for "the player can enter"):
- the Old Customs Yard -> customs_yard_open
- the Watch barracks   -> barracks_open

Use these exact fact names. All start false except alive_oren_vask, alive_hallowell and alive_dunmore, which start true.`;

const WRITE = `You write RPG quest content the way a game's narrative generator would: prose only.
Numbered objective lines plus one or two sentences of flavour each. Name characters, items and
places from the world bible. Write a self-contained quest line that reads well on its own.
Do NOT comment on structure, solvability, or other quests. Return JSON {"title":string,"prose":string}.`;

const QUESTS = [
  ['pawn',   'a 4-step quest about recovering the Sunburst Astrolabe from Oren Vask'],
  ['purge',  'a 4-step quest in which the player helps Captain Hallowell carry out a purge of the lower slips against the contraband traders'],
  ['ledger', 'a 3-step quest about obtaining the almshouse ledger from Sister Dunmore to expose a fraud'],
  ['ring',   'a 4-step quest about stealing the Watch seal ring from inside the Watch barracks']
];

/* Generated and typed CONCURRENTLY — and concurrency is the point: each quest is
   written without seeing the others, exactly as a batch generator would. */
const settled = await Promise.all(QUESTS.map(async ([slug, brief]) => {
  try {
    const gen = await complete({ system: WRITE, user: `${BIBLE}\n\nWrite ${brief}.` });
    const { title, prose } = JSON.parse(gen.text);
    const ex = await extract(`${BIBLE}\n\nQUEST CONTENT:\n${prose}`);
    if (!ex.ok) return { slug, err: ex.errors.slice(0, 2).join('; ') };
    const g = gate(ex.model);
    return { slug, title, prose, model: ex.model,
      generated: { provider: gen.provider, model: gen.model, at: new Date().toISOString(), brief },
      alone: { narrative: g.narrative.ok, world: g.world.ok } };
  } catch (e) { return { slug, err: e.message }; }
}));
const quests = [];
for (const q of settled) {
  if (q.err) { console.log(`${q.slug}: FAILED — ${q.err}`); continue; }
  console.log(`${q.slug}: alone -> narrative ${q.alone.narrative ? 'PASS' : 'FAIL'} · world ${q.alone.world ? 'PASS' : 'FAIL'}`);
  quests.push(q);
}

/* ---- merge independently generated quests into one world ---- */
const INITIAL = { alive_oren_vask: true, alive_hallowell: true, alive_dunmore: true };
const merged = { facts: {}, actions: [], goals: [] };
for (const q of quests) {
  for (const [k, v] of Object.entries(q.model.facts))
    merged.facts[k] = Object.prototype.hasOwnProperty.call(INITIAL, k) ? INITIAL[k] : (merged.facts[k] ?? v);
  for (const a of q.model.actions) merged.actions.push({ ...a, id: `${q.slug}_${a.id}`, label: `[${q.slug}] ${a.label}` });
  for (const g of q.model.goals) merged.goals.push({ ...g, id: `${q.slug}_${g.id}`, label: `[${q.slug}] ${g.label}` });
}

console.log(`\n--- merged world: ${Object.keys(merged.facts).length} facts, ${merged.actions.length} actions, ${merged.goals.length} goals ---`);
const all = gate(merged);
console.log('all goals together :', all.world.ok ? 'completable' : 'NO COMPLETION PATH');
console.log(all.world.detail);

/* Which single goal fails, holding the others aside? That is the useful report. */
const perGoal = [];
for (const g of merged.goals) {
  const r = gate({ ...merged, goals: [g] });
  perGoal.push({ goal: g.label, narrative: r.narrative.ok, world: r.world.ok, chain: r.world.chain });
  console.log(` ${r.world.ok ? '  ok  ' : ' BREAK'}  ${g.label}`);
}
const broken = perGoal.filter(p => !p.world);
console.log(`\n${broken.length} of ${merged.goals.length} goals cannot be completed in the merged world.`);
for (const b of broken) {
  console.log(`\nWHY: ${b.goal}`);
  (b.chain || []).forEach(l => console.log('  ' + '  '.repeat(l.depth) + (l.severed ? '✗ ' : '└ ') + l.text));
}
writeFileSync(new URL('../public/fixtures/_world.json', import.meta.url), JSON.stringify({
  at: new Date().toISOString(), bible: BIBLE, quests, merged,
  result: { all_together: all.world.ok, per_goal: perGoal.map(p => ({ goal: p.goal, world: p.world })) ,
            broken: broken.length, total: merged.goals.length }
}, null, 2));
