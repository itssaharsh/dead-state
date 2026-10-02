/* Hyper3D Rodin, asset-time only.
   Rodin's own quick-start client waits 5s before the first poll, backs off to at most
   30s, and enforces a 20-minute deadline; an account also has a concurrency cap that
   rejects submissions with API_PARALLELISM_LIMIT_REACHED. So this is never called
   during a demo and never on the request path. It runs in the pipeline, after the
   gate, and the result is cached to disk.

   The pipeline reason it sits AFTER the gate: mesh generation costs credits and
   minutes. Spending either on an item from a quest nobody can finish is waste. */
const BASE = 'https://api.hyper3d.com/api/v2';

export const configured = (env = process.env) => (env.HYPER3D_API_KEY || '').trim().length > 8;

export async function generate({ prompt, env = process.env, deadlineMs = 20 * 60 * 1000, onStep = () => {} }) {
  const key = (env.HYPER3D_API_KEY || '').trim();
  if (!key) return { ok: false, reason: 'not-configured',
    detail: 'No HYPER3D_API_KEY, so no asset was generated. The gate does not depend on this.' };

  const form = new FormData();
  form.append('prompt', prompt);
  form.append('tier', 'Gen-2.5-Medium');
  form.append('mesh_mode', 'Raw');
  form.append('quality', 'medium');

  onStep('submitting');
  const sub = await fetch(`${BASE}/rodin`, { method: 'POST', headers: { authorization: `Bearer ${key}` }, body: form });
  const subText = await sub.text();
  if (!sub.ok) {
    const parallel = /API_PARALLELISM_LIMIT_REACHED/.test(subText);
    return { ok: false, reason: parallel ? 'concurrency' : 'submit-failed', status: sub.status,
      detail: parallel ? 'The account already has a task in flight; retry once it finishes.' : subText.slice(0, 300) };
  }
  const job = JSON.parse(subText);
  const subscription = job?.jobs?.subscription_key, uuid = job?.uuid;
  if (!subscription || !uuid) return { ok: false, reason: 'unexpected-response', detail: subText.slice(0, 300) };

  const started = Date.now();
  let wait = 5000;
  await new Promise(r => setTimeout(r, wait));
  for (;;) {
    if (Date.now() - started > deadlineMs)
      return { ok: false, reason: 'timeout', detail: 'Generation did not finish within 20 minutes.' };
    onStep(`polling after ${Math.round((Date.now() - started) / 1000)}s`);
    const st = await fetch(`${BASE}/status`, { method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ subscription_key: subscription }) });
    const body = await st.text();
    if (st.status === 429) { wait = Math.min(wait * 2, 30000); await new Promise(r => setTimeout(r, wait)); continue; }
    if (!st.ok) return { ok: false, reason: 'status-failed', status: st.status, detail: body.slice(0, 300) };
    const s = JSON.parse(body);
    const states = (s.jobs || []).map(j => j.status);
    if (states.length && states.every(x => String(x).toLowerCase() === 'done')) break;
    if (states.some(x => /fail|error/i.test(String(x)))) return { ok: false, reason: 'job-failed', detail: body.slice(0, 300) };
    wait = Math.min(Math.round(wait * 1.5), 30000);
    await new Promise(r => setTimeout(r, wait));
  }

  onStep('downloading');
  const dl = await fetch(`${BASE}/download`, { method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({ task_uuid: uuid }) });
  const dlBody = await dl.text();
  if (!dl.ok) return { ok: false, reason: 'download-failed', status: dl.status, detail: dlBody.slice(0, 300) };
  const files = JSON.parse(dlBody)?.list || [];
  const glb = files.find(f => /\.glb$/i.test(f.name || f.url || ''));
  return { ok: true, uuid, files, glb: glb?.url || null, ms: Date.now() - started };
}
