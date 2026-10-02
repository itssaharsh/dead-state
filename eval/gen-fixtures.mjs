/* Generates quest chains from NEUTRAL briefs (nothing asks for a flaw), extracts each,
   gates each, and reports the real hit rate. Honest sample data with a real receipt. */
import { complete } from '../lib/providers.js';
import { extract } from '../lib/extract.js';
import { gate } from '../public/solver.js';
import { writeFileSync, mkdirSync } from 'node:fs';

const BRIEFS = [
  ['sunstone', 'a four-step quest line in a harbour town about recovering a pawned family heirloom, involving a dockside merchant and a militia purge'],
  ['cistern',  'a four-step quest line about restoring water to a drought-struck village, involving a sealed cistern and a guild engineer'],
  ['ferry',    'a three-step quest line about securing passage across a river, involving a ferryman and a toll'],
  ['relic',    'a five-step quest line about authenticating a stolen relic, involving a scholar, a fence and a temple warden'],
  ['siege',    'a four-step quest line about breaking a siege, involving a saboteur, a supply train and a gate captain'],
  ['plague',   'a four-step quest line about sourcing a cure during a quarantine, involving a herbalist and a sealed district']
];

const WRITE = `You write RPG quest content the way a game's narrative generator would: prose only.
For each step give a numbered objective line and one or two sentences of flavour.
Name characters, items and places concretely. Do NOT comment on structure or solvability.
Return JSON: {"title": string, "prose": string}.`;

mkdirSync(new URL('../public/fixtures/', import.meta.url), { recursive: true });
const results = [];

for (const [slug, brief] of BRIEFS) {
  process.stdout.write(`\n${slug}: writing… `);
  let gen;
  try {
    gen = await complete({ system: WRITE, user: `Write ${brief}.` });
  } catch (e) { console.log('FAILED to generate:', e.message); continue; }
  let prose, title;
  try { const j = JSON.parse(gen.text); prose = j.prose; title = j.title; }
  catch { console.log('unparseable generation'); continue; }
  process.stdout.write('typing… ');
  const ex = await extract(prose);
  if (!ex.ok) { console.log('UNTYPEABLE:', ex.errors.slice(0, 2).join('; ')); continue; }
  const g = gate(ex.model);
  const rec = {
    slug, title, prose,
    generated: { provider: gen.provider, model: gen.model, at: new Date().toISOString(), brief },
    typed:     { provider: ex.provider, model: ex.model_id, at: new Date().toISOString(), ms: ex.ms },
    model: ex.model,
    verdict: { narrative: g.narrative.ok, world: g.world.ok, disagree: g.disagree }
  };
  writeFileSync(new URL(`../fixtures/${slug}.json`, import.meta.url), JSON.stringify(rec, null, 2));
  results.push(rec);
  console.log(`narrative ${g.narrative.ok ? 'PASS' : 'FAIL'} · world-fact ${g.world.ok ? 'PASS' : 'FAIL'}${g.disagree ? '  <-- DISAGREE' : ''}`);
}

const broken = results.filter(r => !r.verdict.world);
const disagree = results.filter(r => r.verdict.disagree);
console.log(`\n--- real hit rate on neutral briefs ---`);
console.log(`${results.length} chains typed · ${broken.length} had no completion path · ${disagree.length} passed a narrative-graph check while having none`);
writeFileSync(new URL('../public/fixtures/_run.json', import.meta.url), JSON.stringify({
  at: new Date().toISOString(), briefs: BRIEFS.length, typed: results.length,
  no_completion_path: broken.length, disagreements: disagree.length,
  slugs: results.map(r => ({ slug: r.slug, ...r.verdict }))
}, null, 2));
