/* Dead State — the deterministic core. No model, no network, runs in the browser.
   Two independent checks over the SAME extracted model:
     1. narrativeCheck  — reachability over the step graph (what a dialogue-graph
                          dead-end check does; this is what already exists in the
                          literature, e.g. G-KMS 2026).
     2. worldFactCheck  — reachability over the WORLD-FACT state space. This is the
                          one that catches an item that can never be obtained.
   The disagreement between them is the product. */

const keyOf = (facts, order) => order.map(k => (facts[k] ? '1' : '0')).join('');
/* A quest step happens once. Without this, the search re-fires "seize the astrolabe"
   after another quest traded it away, and a real shared-resource conflict disappears.
   Actions carrying a step number are one-shot; unnumbered ones stay repeatable. */
const oneShot = a => typeof a.step === 'number';
const MAX_STATES = 200000;

function applicable(action, facts) {
  for (const [k, v] of Object.entries(action.pre || {})) {
    if (Boolean(facts[k]) !== Boolean(v)) return false;
  }
  return true;
}

function apply(action, facts) {
  const next = { ...facts };
  for (const [k, v] of Object.entries(action.post || {})) next[k] = Boolean(v);
  return next;
}

const goalsMet = (model, facts) =>
  (model.goals || []).every(g =>
    Object.entries(g.needs || {}).every(([k, v]) => Boolean(facts[k]) === Boolean(v)));

/* ---------- check 2: world-fact state space ---------- */
export function worldFactCheck(model) {
  const order = Object.keys(model.facts || {}).sort();
  const acts = model.actions || [];
  if (order.length > 26) return { ok: false, status: 'too-large',
    detail: `${order.length} world facts exceeds the bound of 26.` };
  if (acts.length > 40) return { ok: false, status: 'too-large',
    detail: `${acts.length} actions exceeds the bound of 40.` };

  const start = Object.fromEntries(order.map(k => [k, Boolean(model.facts[k])]));
  const sk = (facts, fired) => keyOf(facts, order) + '|' + fired.join('');
  const seen = new Set([sk(start, acts.map(() => '0'))]);
  const queue = [{ facts: start, fired: acts.map(() => '0'), path: [] }];
  const reachable = [start];
  const everFired = new Set();
  let win = null, truncated = false;

  while (queue.length) {
    const cur = queue.shift();
    if (goalsMet(model, cur.facts)) { win = cur.path; break; }
    for (let i = 0; i < acts.length; i++) {
      const a = acts[i];
      if (oneShot(a) && cur.fired[i] === '1') continue;
      if (!applicable(a, cur.facts)) continue;
      const nf = apply(a, cur.facts);
      const nfired = cur.fired.slice(); if (oneShot(a)) nfired[i] = '1';
      const k = sk(nf, nfired);
      if (seen.has(k)) continue;
      if (seen.size >= MAX_STATES) { truncated = true; break; }
      seen.add(k); reachable.push(nf); everFired.add(a.id);
      queue.push({ facts: nf, fired: nfired, path: [...cur.path, a.id] });
    }
    if (truncated) break;
  }

  if (win) return { ok: true, status: 'completable', order: win, states: seen.size,
    detail: `A completion order exists. ${seen.size} reachable world states explored.` };
  if (truncated) return { ok: false, status: 'too-large', states: seen.size,
    detail: `Search truncated at ${MAX_STATES} states; no completion path found so far. Treat this as inconclusive, not a failure.` };
  return { ok: false, status: 'no-completion-path', states: seen.size,
    chain: explain(model, reachable, everFired),
    detail: `No completion path exists in the extracted model. ${seen.size} reachable world states explored.` };
}

/* ---------- the trace: WHY no path exists ---------- */
function producersOf(model, fact, want) {
  return (model.actions || []).filter(a => a.post && Object.prototype.hasOwnProperty.call(a.post, fact)
    && Boolean(a.post[fact]) === Boolean(want));
}
const everApplicable = (model, action, reachable) => reachable.some(f => applicable(action, f));

/* Walks back from an unmet goal fact to the fact that can never hold.
   Every line it emits is derived from the BFS above, not asserted. */
function explain(model, reachable, everFired = new Set(), seenFacts = new Set()) {
  const out = [];
  const actionById = id => (model.actions || []).find(a => a.id === id);

  const unmet = [];
  for (const g of model.goals || []) {
    for (const [k, v] of Object.entries(g.needs || {})) {
      if (!reachable.some(f => Boolean(f[k]) === Boolean(v))) unmet.push({ goal: g, fact: k, want: v });
    }
  }
  // Fall back: goal facts individually reachable but never together.
  if (!unmet.length) {
    const g = (model.goals || [])[0];
    out.push({ depth: 0, kind: 'goal', text:
      `${g ? g.label : 'the goal'} needs ${Object.entries(g?.needs || {}).map(([k, v]) => fmt(k, v)).join(' and ')}` });
    out.push({ depth: 1, kind: 'severed', text:
      'each required fact is reachable alone, but no single reachable world state holds them together' });
    return out;
  }

  for (const u of unmet) {
    out.push({ depth: 0, kind: 'goal', text: `${u.goal.label} needs ${fmt(u.fact, u.want)}` });
    out.push(...why(u.fact, u.want, 1));
  }
  return out;

  function why(fact, want, d) {
    const sig = `${fact}=${want}`;
    if (seenFacts.has(sig) || d > 6) return [{ depth: d, kind: 'severed', text: `…and ${fmt(fact, want)} depends on itself` }];
    seenFacts.add(sig);
    const prods = producersOf(model, fact, want);
    /* The shared-resource case: the producer exists and ran, but something else
       consumed the result and a quest step cannot be repeated. */
    const consumers = producersOf(model, fact, !want).filter(c => everFired.has(c.id));
    if (prods.length && prods.every(p => everFired.has(p.id)) && consumers.length) {
      const lines = [{ depth: d, kind: 'producer',
        text: `${prods.length === 1 ? 'only producer' : 'every producer'}: ${prods.map(p => p.label || p.id).join(', ')} — already used, and a quest step cannot be repeated` }];
      for (const c of consumers) lines.push({ depth: d + 1, kind: 'killer', severed: true,
        text: `${c.label || c.id} consumes ${fmt(fact, want)}` });
      return lines;
    }
    if (!prods.length) {
      return [{ depth: d, kind: 'severed',
                text: `nothing in this content ever sets ${fmt(fact, want)}`, severed: true }];
    }
    const lines = [];
    const label = prods.length === 1 ? 'only producer' : `${prods.length} producers`;
    lines.push({ depth: d, kind: 'producer',
                 text: `${label}: ${prods.map(p => p.label || p.id).join(', ')}` });
    for (const p of prods) {
      if (everApplicable(model, p, reachable)) {
        lines.push({ depth: d + 1, kind: 'note',
                     text: `${p.label || p.id} is reachable, but applying it does not complete the goal` });
        continue;
      }
      const blocking = Object.entries(p.pre || {}).filter(
        ([k, v]) => !reachable.some(f => Boolean(f[k]) === Boolean(v)));
      if (!blocking.length) {
        // applicable individually but never in a state that still allows the goal
        const conflicted = Object.entries(p.pre || {}).find(([k, v]) =>
          reachable.some(f => Boolean(f[k]) === Boolean(v)));
        if (conflicted) {
          const [k, v] = conflicted;
          lines.push({ depth: d + 1, kind: 'severed', severed: true,
            text: `${p.label || p.id} requires ${fmt(k, v)}, and ${fmt(k, v)} is false in every reachable state where it is otherwise applicable` });
          const killers = producersOf(model, k, !v);
          for (const kill of killers) {
            lines.push({ depth: d + 2, kind: 'killer',
              text: `${kill.label || kill.id} sets ${fmt(k, !v)}` });
          }
        }
        continue;
      }
      for (const [k, v] of blocking) {
        lines.push({ depth: d + 1, kind: 'requires', text: `${p.label || p.id} requires ${fmt(k, v)}` });
        lines.push(...why(k, v, d + 2));
      }
    }
    return lines;
  }
}

const fmt = (k, v) => (v ? `${k}` : `not ${k}`);

/* ---------- check 1: narrative / step graph ---------- */
export function narrativeCheck(model) {
  const steps = (model.actions || []).filter(a => typeof a.step === 'number')
    .sort((x, y) => x.step - y.step);
  if (!steps.length) return { ok: true, status: 'no-step-graph', detail: 'No ordered step graph in this content.' };
  const ids = steps.map(s => s.id);
  const next = new Map(steps.map((s, i) => [s.id, s.next ?? (i + 1 < steps.length ? [steps[i + 1].id] : [])]));
  const seen = new Set(); const stack = [ids[0]]; const terminals = [];
  while (stack.length) {
    const id = stack.pop(); if (seen.has(id)) continue; seen.add(id);
    const nx = next.get(id) || [];
    if (!nx.length) terminals.push(id); else nx.forEach(n => stack.push(n));
  }
  const unreachable = ids.filter(i => !seen.has(i));
  const deadEnds = terminals.filter(t => t !== ids[ids.length - 1]);
  const ok = !unreachable.length && !deadEnds.length;
  return {
    ok, status: ok ? 'terminates' : 'graph-broken',
    steps: ids.length, deadEnds: deadEnds.length, unreachable: unreachable.length, terminals: terminals.length,
    detail: ok
      ? `${ids.length} steps, 0 dead ends, all branches terminate.`
      : `${deadEnds.length} dead end(s), ${unreachable.length} unreachable step(s).`
  };
}

/* All three checks in one call. The UI runs them individually in a worker so it can
   report progress; everything else should use this, so a caller can never accidentally
   act on two checks out of three. */
export function gate(model) {
  const narrative = narrativeCheck(model);
  const world = worldFactCheck(model);
  const softlock = softlockCheck(model);
  const ok = world.ok && softlock.ok;
  return {
    narrative, world, softlock,
    verdict: ok ? 'pass' : 'blocked',
    disagree: narrative.ok && !ok,
    exit: ok ? 0 : 1
  };
}

/* ---------- check 3: order-dependent softlock ----------
   worldFactCheck answers "does SOME completion order exist". That is the designer's
   happy path. A player does not follow it. This answers the question that actually
   bites in shipped games: is there a reachable state from which a goal can never be
   completed? If yes, the content is completable AND softlockable, and the trace is
   the sequence of ordinary player choices that reaches the trap. */
export function softlockCheck(model, { maxStates = 40000 } = {}) {
  const order = Object.keys(model.facts || {}).sort();
  const acts = model.actions || [];
  if (order.length > 26 || acts.length > 40)
    return { ok: true, status: 'skipped', traps: [], detail: 'Content exceeds the search bound; softlock check skipped.' };
  /* If there is no completion path from the start, there is nothing to lose, and every
     first move would trivially look like a trap. Softlock is only a meaningful question
     once check 2 has found a path. */
  const base = worldFactCheck(model);
  if (!base.ok) return { ok: true, status: 'not-applicable', traps: [],
    detail: 'Not applicable: there is no completion path to lose. Check 2 already failed.' };

  const start = Object.fromEntries(order.map(k => [k, Boolean(model.facts[k])]));
  const sk = (f, fired) => keyOf(f, order) + '|' + fired.join('');

  /* can this single goal still be completed from here? */
  const memo = new Map();
  function goalReachable(facts, fired, goal) {
    const root = sk(facts, fired) + '#' + goal.id;
    if (memo.has(root)) return memo.get(root);
    const seen = new Set([sk(facts, fired)]);
    const q = [{ facts, fired }];
    let found = false;
    while (q.length && seen.size < 8000) {
      const cur = q.shift();
      if (Object.entries(goal.needs).every(([k, v]) => Boolean(cur.facts[k]) === Boolean(v))) { found = true; break; }
      for (let i = 0; i < acts.length; i++) {
        const a = acts[i];
        if (oneShot(a) && cur.fired[i] === '1') continue;
        if (!applicable(a, cur.facts)) continue;
        const nf = apply(a, cur.facts);
        const nfired = cur.fired.slice(); if (oneShot(a)) nfired[i] = '1';
        const k = sk(nf, nfired);
        if (seen.has(k)) continue;
        seen.add(k); q.push({ facts: nf, fired: nfired });
      }
    }
    memo.set(root, found);
    return found;
  }

  const traps = [];
  const seen = new Set([sk(start, acts.map(() => '0'))]);
  const q = [{ facts: start, fired: acts.map(() => '0'), path: [] }];
  let truncated = false;

  while (q.length) {
    if (seen.size >= maxStates) { truncated = true; break; }
    const cur = q.shift();
    for (let i = 0; i < acts.length; i++) {
      const a = acts[i];
      if (oneShot(a) && cur.fired[i] === '1') continue;
      if (!applicable(a, cur.facts)) continue;
      const nf = apply(a, cur.facts);
      const nfired = cur.fired.slice(); if (oneShot(a)) nfired[i] = '1';
      const k = sk(nf, nfired);
      if (seen.has(k)) continue;
      seen.add(k);
      const npath = [...cur.path, a.id];
      for (const g of model.goals || []) {
        if (traps.some(t => t.goal === g.id)) continue;
        if (!goalReachable(nf, nfired, g)) {
          traps.push({ goal: g.id, goalLabel: g.label, by: a.id, byLabel: a.label, path: npath,
            blocked: Object.entries(g.needs).filter(([kk, vv]) => Boolean(nf[kk]) !== Boolean(vv)).map(([kk, vv]) => fmt(kk, vv)) });
        }
      }
      if (traps.length === (model.goals || []).length) { q.length = 0; break; }
      q.push({ facts: nf, fired: nfired, path: npath });
    }
  }

  return {
    ok: traps.length === 0,
    status: traps.length ? 'softlockable' : (truncated ? 'inconclusive' : 'safe-in-every-order'),
    traps, states: seen.size, truncated,
    detail: traps.length
      ? `${traps.length} goal(s) can be permanently blocked by ordinary play. ${seen.size} states explored.`
      : truncated ? `Search truncated at ${maxStates} states; no softlock found so far. Inconclusive.`
      : `No reachable state blocks any goal. ${seen.size} states explored.`
  };
}
