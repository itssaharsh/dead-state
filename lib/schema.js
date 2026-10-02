/* The fixed action-model schema, and the deterministic validator that stands between
   the model and the solver. The model may only ever produce something that passes
   this; anything else is reported as "could not type this content", never guessed at.
   This is the step that makes the verdict a property of a checked model rather than
   an opinion. */

export const RESPONSE_SCHEMA = {
  type: 'object',
  required: ['facts', 'actions', 'goals'],
  properties: {
    facts: {
      type: 'array',
      items: { type: 'object', required: ['name', 'initial'], properties: {
        name: { type: 'string' }, initial: { type: 'boolean' } } }
    },
    actions: {
      type: 'array',
      items: { type: 'object', required: ['id', 'label', 'step', 'pre', 'post'], properties: {
        id: { type: 'string' }, label: { type: 'string' }, step: { type: 'integer' },
        quote: { type: 'string' },
        pre:  { type: 'array', items: { type: 'object', required: ['fact', 'value'],
                properties: { fact: { type: 'string' }, value: { type: 'boolean' } } } },
        post: { type: 'array', items: { type: 'object', required: ['fact', 'value'],
                properties: { fact: { type: 'string' }, value: { type: 'boolean' } } } } } }
    },
    goals: {
      type: 'array',
      items: { type: 'object', required: ['id', 'label', 'needs'], properties: {
        id: { type: 'string' }, label: { type: 'string' },
        needs: { type: 'array', items: { type: 'object', required: ['fact', 'value'],
                 properties: { fact: { type: 'string' }, value: { type: 'boolean' } } } } } }
    }
  }
};

const NAME = /^[a-z][a-z0-9_]{1,40}$/;

/* Returns { ok, model } or { ok:false, errors } — never a partial model. */
export function validate(raw) {
  const errors = [];
  const bad = m => { errors.push(m); return null; };
  if (!raw || typeof raw !== 'object') return { ok: false, errors: ['not an object'] };

  const facts = {};
  for (const f of raw.facts || []) {
    if (!f || !NAME.test(String(f.name || ''))) { bad(`fact name not a lower_snake identifier: ${JSON.stringify(f?.name)}`); continue; }
    if (typeof f.initial !== 'boolean') { bad(`fact ${f.name}: initial must be true or false`); continue; }
    facts[f.name] = f.initial;
  }
  if (!Object.keys(facts).length) bad('no world facts were typed');
  if (Object.keys(facts).length > 26) bad(`${Object.keys(facts).length} world facts exceeds the demo bound of 26`);

  const pairs = (arr, where) => {
    const out = {};
    for (const p of arr || []) {
      const n = String(p?.fact || '');
      if (!Object.prototype.hasOwnProperty.call(facts, n)) { bad(`${where} references unknown fact "${n}"`); continue; }
      if (typeof p.value !== 'boolean') { bad(`${where}: ${n} value must be true or false`); continue; }
      out[n] = p.value;
    }
    return out;
  };

  const ids = new Set();
  const actions = [];
  for (const a of raw.actions || []) {
    const id = String(a?.id || '');
    if (!NAME.test(id)) { bad(`action id not a lower_snake identifier: ${JSON.stringify(a?.id)}`); continue; }
    if (ids.has(id)) { bad(`duplicate action id "${id}"`); continue; }
    ids.add(id);
    if (!a.label) bad(`action ${id} has no label`);
    actions.push({ id, label: String(a.label || id), step: Number.isInteger(a.step) ? a.step : undefined,
      quote: a.quote ? String(a.quote) : undefined,
      pre: pairs(a.pre, `action ${id} pre`), post: pairs(a.post, `action ${id} post`) });
  }
  if (!actions.length) bad('no actions were typed');

  const goals = [];
  for (const g of raw.goals || []) {
    const id = String(g?.id || '');
    if (!NAME.test(id)) { bad(`goal id not a lower_snake identifier: ${JSON.stringify(g?.id)}`); continue; }
    const needs = pairs(g.needs, `goal ${id} needs`);
    if (!Object.keys(needs).length) bad(`goal ${id} needs nothing, so it cannot be checked`);
    goals.push({ id, label: String(g.label || id), needs });
  }
  if (!goals.length) bad('no goal was typed, so there is nothing to check');

  if (errors.length) return { ok: false, errors };
  return { ok: true, model: { facts, actions, goals } };
}

export const SYSTEM = `You type game quest content into a formal precondition-effect model. You do not judge it.

Return JSON with exactly three arrays:
- facts:   every boolean world fact the content implies. lower_snake_case. "initial" is its value when the quest line BEGINS.
- actions: one per concrete step the player performs, in order, with "step" starting at 1.
           "pre"  = facts that must hold for the step to be possible.
           "post" = facts the step changes. Include facts it makes FALSE (a death, a door sealing, an item consumed).
           "quote" = the short span of source text this step came from.
- goals:   what completing the quest line requires.

Rules:
- Only type what the text states or plainly implies. Never invent a step, an item or an NPC.
- If a step requires buying from, speaking to or fighting a character, that character being alive/present is a precondition.
- If a step kills, banishes, destroys or consumes something another step needs, record that in "post" as false.
- Name the same thing the same way everywhere. has_<item>, alive_<npc>, <place>_open, <faction>_hostile.
- Every fact used in any pre/post/needs MUST appear in "facts".
- If the content is too vague to type, return empty arrays rather than guessing.`;

export const userPrompt = prose =>
  `Type this quest content into the model. Source text follows between the markers.\n\n<<<CONTENT\n${prose}\nCONTENT>>>`;
