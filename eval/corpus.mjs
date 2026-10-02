/* Seeded corpus with known-correct verdicts. "caught" = flagged broken when it IS
   broken. "false positive" = flagged broken when it is fine. A checker that always
   finds something is worthless, so both numbers are reported. */
import { narrativeCheck, worldFactCheck, softlockCheck } from '../solver.js';
import { writeFileSync } from 'node:fs';

const A = (id, label, step, pre, post) => ({ id, label, step, pre, post });
const CASES = [
  { name: 'single producer destroyed by an earlier forced step', broken: true, model: {
    facts: { alive_oren: true, met: false, purge: false, has_stone: false },
    actions: [A('a','Speak to Oren',1,{alive_oren:true},{met:true}),
              A('b','Join the purge',2,{met:true},{purge:true,alive_oren:false}),
              A('c','Buy the stone',3,{alive_oren:true,purge:true},{has_stone:true}),
              A('d','Return it',4,{has_stone:true},{})],
    goals: [{ id:'g', label:'Return the stone', needs:{has_stone:true} }] } },

  { name: 'required fact has no producer at all', broken: true, model: {
    facts: { has_key: false, door_open: false },
    actions: [A('a','Try the door',1,{has_key:true},{door_open:true})],
    goals: [{ id:'g', label:'Open the door', needs:{door_open:true} }] } },

  { name: 'gate can only be opened from the far side', broken: true, model: {
    facts: { inside: false, gate_open: false },
    actions: [A('a','Lift the bar',1,{inside:true},{gate_open:true}),
              A('b','Walk in',2,{gate_open:true},{inside:true})],
    goals: [{ id:'g', label:'Get inside', needs:{inside:true} }] } },

  { name: 'two quests share one consumable; one consumes it', broken: true, model: {
    facts: { has_relic: false, relic_delivered: false, ledger: false },
    actions: [A('a','[q1] Take the relic',1,{has_relic:false},{has_relic:true}),
              A('b','[q2] Trade the relic for the ledger',2,{has_relic:true},{has_relic:false,ledger:true}),
              A('c','[q1] Deliver the relic',3,{has_relic:true},{relic_delivered:true})],
    goals: [{ id:'g1', label:'[q1] Deliver the relic', needs:{relic_delivered:true} },
            { id:'g2', label:'[q2] Obtain the ledger', needs:{ledger:true} }] } },

  { name: 'NPC dies in one quest, another needs to trade with them', broken: true, model: {
    facts: { alive_smith: true, has_ore: false, has_blade: false, bandits_done: false },
    actions: [A('a','[q1] Mine the ore',1,{},{has_ore:true}),
              A('b','[q2] Burn the forge quarter',2,{},{bandits_done:true,alive_smith:false}),
              A('c','[q1] Have the smith forge the blade',3,{alive_smith:true,has_ore:true},{has_blade:true})],
    goals: [{ id:'g1', label:'[q1] Obtain the blade', needs:{has_blade:true} },
            { id:'g2', label:'[q2] Clear the quarter', needs:{bandits_done:true} }] } },

  { name: 'escort consumed before its second use', broken: true, model: {
    facts: { guide_with_you: false, pass_north: false, pass_south: false },
    actions: [A('a','Hire the guide',1,{},{guide_with_you:true}),
              A('b','Cross the north pass',2,{guide_with_you:true},{pass_north:true,guide_with_you:false}),
              A('c','Cross the south pass',3,{guide_with_you:true},{pass_south:true})],
    goals: [{ id:'g', label:'Cross both passes', needs:{pass_north:true,pass_south:true} }] } },

  { name: 'plain linear chain', broken: false, model: {
    facts: { a1: false, a2: false, a3: false },
    actions: [A('a','One',1,{},{a1:true}),A('b','Two',2,{a1:true},{a2:true}),A('c','Three',3,{a2:true},{a3:true})],
    goals: [{ id:'g', label:'Finish', needs:{a3:true} }] } },

  { name: 'two independent quests, no shared state', broken: false, model: {
    facts: { x: false, y: false },
    actions: [A('a','[q1] Do x',1,{},{x:true}),A('b','[q2] Do y',2,{},{y:true})],
    goals: [{ id:'g1', label:'[q1] x done', needs:{x:true} },{ id:'g2', label:'[q2] y done', needs:{y:true} }] } },

  { name: 'shared NPC, nobody kills them', broken: false, model: {
    facts: { alive_npc: true, t1: false, t2: false },
    actions: [A('a','[q1] Trade once',1,{alive_npc:true},{t1:true}),
              A('b','[q2] Trade twice',2,{alive_npc:true},{t2:true})],
    goals: [{ id:'g1', label:'[q1] done', needs:{t1:true} },{ id:'g2', label:'[q2] done', needs:{t2:true} }] } },

  { name: 'consumable with a repeatable (unnumbered) producer', broken: false, model: {
    facts: { has_herb: false, potion: false, salve: false },
    actions: [{ id:'pick', label:'Pick a herb (repeatable)', pre:{has_herb:false}, post:{has_herb:true} },
              A('b','Brew the potion',1,{has_herb:true},{potion:true,has_herb:false}),
              A('c','Make the salve',2,{has_herb:true},{salve:true,has_herb:false})],
    goals: [{ id:'g', label:'Both remedies', needs:{potion:true,salve:true} }] } },

  { name: 'optional branch that dead-ends but does not block the goal', broken: false, model: {
    facts: { main: false, side: false },
    actions: [A('a','Main route',1,{},{main:true}),{ id:'s', label:'Look at the shrine', pre:{}, post:{side:true} }],
    goals: [{ id:'g', label:'Main done', needs:{main:true} }] } }
];

let caught = 0, missed = 0, fp = 0, ok = 0;
const rows = [];
for (const c of CASES) {
  const n = narrativeCheck(c.model), w = worldFactCheck(c.model), s = softlockCheck(c.model);
  const flagged = !w.ok || !s.ok;
  const which = !w.ok ? 'no completion path' : !s.ok ? 'softlock' : '—';
  const verdict = c.broken ? (flagged ? 'caught' : 'MISSED') : (flagged ? 'FALSE POSITIVE' : 'ok');
  if (c.broken && flagged) caught++; else if (c.broken) missed++;
  else if (flagged) fp++; else ok++;
  rows.push({ name: c.name, broken: c.broken, flagged, by: which, narrative: n.ok, verdict });
  console.log(`${verdict.padEnd(15)} ${c.broken ? 'broken' : 'good  '}  narrative ${n.ok ? 'pass' : 'fail'}  ${which.padEnd(20)} ${c.name}`);
}
const brokenTotal = CASES.filter(c => c.broken).length;
const goodTotal = CASES.length - brokenTotal;
const disagreements = rows.filter(r => r.narrative && r.flagged).length;
console.log(`\ncaught ${caught}/${brokenTotal} broken · ${missed} missed · ${fp} false positives on ${goodTotal} good`);
console.log(`${disagreements} cases pass a narrative-graph check while being broken — that is the gap this closes.`);
writeFileSync(new URL('./corpus-result.json', import.meta.url), JSON.stringify({
  at: new Date().toISOString(), total: brokenTotal, caught, missed,
  good_total: goodTotal, false_positives: fp, narrative_disagreements: disagreements, rows }, null, 2));
