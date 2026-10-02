/* Generates a mesh for the hero item of a batch — but ONLY if that batch passed the
   gate. That ordering is the point: mesh generation costs credits and minutes, so a
   pipeline should not spend either on content a player cannot finish.
   Writes public/assets/manifest.json either way, including the reason it did not run. */
import { narrativeCheck, worldFactCheck, softlockCheck } from '../public/solver.js';
import { generate, configured } from '../lib/rodin.js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

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

  const hero = Object.keys(m.facts).find(k => k.startsWith('has_')) || 'quest_item';
  const noun = hero.replace(/^has_/, '').replace(/_/g, ' ');
  const prompt = `a ${noun}, a single hand-held fantasy RPG quest item, neutral studio lighting, game-ready`;

  if (!configured()) {
    console.log(`${slug}: passed the gate, but no HYPER3D_API_KEY — asset step skipped, not faked`);
    manifest.entries.push({ slug, passed: true, generated: false, reason: 'not-configured', hero: noun, prompt });
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
