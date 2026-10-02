import { complete } from './providers.js';
import { RESPONSE_SCHEMA, validate, SYSTEM, userPrompt } from './schema.js';

/* prose -> typed model. Two failure modes, both reported rather than guessed:
   no provider reachable, and content that will not type. */
export async function extract(prose, env = process.env) {
  const t0 = Date.now();
  const r = await complete({ system: SYSTEM, user: userPrompt(prose), schema: RESPONSE_SCHEMA, env });
  let parsed;
  try { parsed = JSON.parse(r.text); }
  catch { return { ok: false, reason: 'unparseable', errors: ['the model did not return JSON'], attempts: r.attempts }; }
  const v = validate(parsed);
  if (!v.ok) return { ok: false, reason: 'untypeable', errors: v.errors, raw: parsed,
                      provider: r.provider, model: r.model, attempts: r.attempts, ms: Date.now() - t0 };
  return { ok: true, model: v.model, provider: r.provider, model_id: r.model,
           attempts: r.attempts, ms: Date.now() - t0 };
}
