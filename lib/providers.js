/* Provider-agnostic LLM call with two-level rotation.
   Why this exists: during the build, gemini-3.8-flash returned 503 "high demand" on
   one call and 200 on the next. A rate-limit or capacity blip mid-demo must fail over,
   not die. So we rotate over MODELS inside a provider, then over PROVIDERS.
   Adding a key to the env activates that provider with no code change. */

export const PROVIDERS = [
  { id: 'gemini', env: 'GEMINI_API_KEY', call: gemini,
    models: ['gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-3.1-flash-lite'] },
  { id: 'cerebras', env: 'CEREBRAS_API_KEY', call: openaiish('https://api.cerebras.ai/v1/chat/completions'),
    models: ['llama-3.3-70b', 'llama3.1-8b'] },
  { id: 'groq', env: 'GROQ_API_KEY', call: openaiish('https://api.groq.com/openai/v1/chat/completions'),
    models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'] },
  { id: 'openrouter', env: 'OPENROUTER_API_KEY', call: openaiish('https://openrouter.ai/api/v1/chat/completions'),
    models: ['google/gemini-2.0-flash-exp:free', 'meta-llama/llama-3.3-70b-instruct:free'] }
];

const keyFor = (p, env) => (env[p.env] || '').trim();
export const available = (env = process.env) => PROVIDERS.filter(p => keyFor(p, env).length > 8);

async function gemini(key, model, system, user, schema) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: 'user', parts: [{ text: user }] }],
      generationConfig: { temperature: 0, responseMimeType: 'application/json',
                          ...(schema ? { responseSchema: schema } : {}) }
    })
  });
  const body = await r.text();
  if (!r.ok) throw Object.assign(new Error(`gemini/${model} ${r.status}`), { status: r.status, body });
  const t = (JSON.parse(body)?.candidates?.[0]?.content?.parts || []).map(p => p.text).join('');
  if (!t) throw Object.assign(new Error(`gemini/${model} empty`), { status: 502 });
  return t;
}

function openaiish(url) {
  return async (key, model, system, user) => {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: JSON.stringify({ model, temperature: 0, response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }] })
    });
    const body = await r.text();
    if (!r.ok) throw Object.assign(new Error(`${model} ${r.status}`), { status: r.status, body });
    const t = JSON.parse(body)?.choices?.[0]?.message?.content ?? '';
    if (!t) throw Object.assign(new Error(`${model} empty`), { status: 502 });
    return t;
  };
}

/* Tries every (provider, model) pair in order. Returns the first success plus the
   full attempt log, which the UI shows so a reviewer can see the failover happen. */
export async function complete({ system, user, schema, env = process.env }) {
  const pool = available(env);
  const attempts = [];
  if (!pool.length) throw Object.assign(new Error('no-provider'), { status: 503, attempts });
  for (const p of pool) {
    for (const model of p.models) {
      const t0 = Date.now();
      try {
        const text = await p.call(keyFor(p, env), model, system, user, schema);
        attempts.push({ provider: p.id, model, ok: true, ms: Date.now() - t0 });
        return { text, provider: p.id, model, attempts };
      } catch (e) {
        attempts.push({ provider: p.id, model, ok: false, status: e.status || 0,
                        ms: Date.now() - t0, error: e.message });
      }
    }
  }
  throw Object.assign(new Error('all-providers-failed'), { status: 502, attempts });
}
