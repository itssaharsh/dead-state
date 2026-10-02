import { extract } from '../lib/extract.js';
import { available } from '../lib/providers.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, reason: 'method' });
  if (!available().length) return res.status(200).json({ ok: false, reason: 'no-provider',
    errors: ['No model key is configured on this deployment.'] });

  let prose = '';
  try { prose = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body)?.prose || ''; } catch {}
  prose = String(prose).slice(0, 12000).trim();
  if (prose.length < 30) return res.status(200).json({ ok: false, reason: 'too-short',
    errors: ['That is too short to type into a model.'] });

  try {
    const r = await extract(prose);
    return res.status(200).json(r);
  } catch (e) {
    return res.status(200).json({ ok: false, reason: e.message === 'no-provider' ? 'no-provider' : 'provider-failed',
      errors: [e.message], attempts: e.attempts || [] });
  }
}
