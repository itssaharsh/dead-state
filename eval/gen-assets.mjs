/* Generates a mesh for the hero item of a batch — but ONLY if that batch passed the
   gate. That ordering is the point: mesh generation costs credits and minutes, so a
   pipeline should not spend either on content a player cannot finish.
   Writes public/assets/manifest.json either way, including the reason it did not run. */
import { narrativeCheck, worldFactCheck, softlockCheck } from '../public/solver.js';
import { generate, configured } from '../lib/rodin.js';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : ['saltmarrow', 'ferry'];
mkdirSync(new URL('../public/assets/', import.meta.url), { recursive: true });
const manifest = { at: new Date().toISOString(), configured: configured(), entries: [] };

for (const slug of slugs) {
  const f = JSON.parse(readFileSync(new URL(`../public/fixtures/${slug}.json`, import.meta.url), 'utf8'));
  const m = f.model;
  const gate = { narrative: narrativeCheck(m), world: worldFactCheck(m), softlock: softlockCheck(m) };
  const passed = gate.world.ok && gate.softlock.ok;

  if (!passed) {
    console.log(`${slug}: BLOCKED by the gate — no asset generated (this is the pipeline behaving correctly)`);
    manifest.entries.push({ slug, passed: false, generated: false,
      reason: 'blocked-by-gate',
      detail: 'The batch did not pass, so no mesh-generation credits were spent on it.' });
    continue;
  }

  /* Pick the item the quest line is actually about: one named in a goal first, then the
     most specific name. Taking the first has_* fact gave nouns like "sunken silver". */
  const items = Object.keys(m.facts).filter(k => k.startsWith('has_'));
  const inGoal = items.filter(k => (m.goals || []).some(g => k in (g.needs || {})));
  const pool = inGoal.length ? inGoal : items;
  const hero = pool.sort((a, b) => b.split('_').length - a.split('_').length || b.length - a.length)[0] || 'quest_item';
  const noun = hero.replace(/^has_/, '').replace(/_/g, ' ');
  const prompt = `a ${noun}, a single hand-held fantasy RPG quest item, ornate metal and glass, neutral studio lighting, game-ready, plain background`;

  /* Rodin API access requires the Business tier; Creator (the hackathon membership) does
     not issue an API key at all — confirmed 2026-10-03. So the supported path on Creator is
     to generate in the web app and drop the .glb in public/assets/<slug>.glb. If that file
     exists, the pipeline treats it as the asset for this batch. */
  const dropped = new URL(`../public/assets/${slug}.glb`, import.meta.url);
  if (existsSync(dropped)) {
    const bytes = statSync(dropped).size;
    console.log(`${slug}: passed — using the asset generated in the Hyper3D web app (${(bytes / 1024).toFixed(0)} KB)`);
    manifest.entries.push({ slug, passed: true, generated: true, source: 'hyper3d-web-app',
      hero: noun, prompt, glb: `/assets/${slug}.glb`, bytes });
    continue;
  }

  if (!configured()) {
    console.log(`${slug}: passed the gate. No asset yet — drop one at public/assets/${slug}.glb`);
    console.log(`         prompt to use: ${prompt}`);
    manifest.entries.push({ slug, passed: true, generated: false, reason: 'awaiting-asset',
      hero: noun, prompt,
      detail: 'Rodin API access requires the Business tier; the Creator membership issues no API key. Generate in the web app and drop the .glb here.' });
    continue;
  }
  console.log(`${slug}: passed — generating "${noun}"…`);
  const r = await generate({ prompt, onStep: s => process.stdout.write(`  ${s}\r`) });
  console.log();
  manifest.entries.push({ slug, passed: true, generated: r.ok, hero: noun, prompt,
    ...(r.ok ? { glb: r.glb, uuid: r.uuid, ms: r.ms } : { reason: r.reason, detail: r.detail }) });
  console.log(`  ${r.ok ? 'ok — ' + r.glb : 'failed — ' + r.reason + ': ' + r.detail}`);
}

writeFileSync(new URL('../public/assets/manifest.json', import.meta.url), JSON.stringify(manifest, null, 2));
console.log(`\nmanifest written. configured=${manifest.configured}`);
