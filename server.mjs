/* Local dev server: static files + /api/extract. No dependencies. */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import handler from './api/extract.js';

const PORT = Number(process.env.PORT) || 3017;
const ROOT = new URL('./public/', import.meta.url).pathname;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.md': 'text/plain' };

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/api/extract') {
    let raw = ''; for await (const c of req) raw += c;
    req.body = raw;
    return handler(req, { status: c => ({ json: o => { res.writeHead(c, { 'content-type': 'application/json' }); res.end(JSON.stringify(o)); } }) });
  }
  let p = normalize(url.pathname === '/' ? '/index.html' : url.pathname).replace(/^(\.\.[/\\])+/, '');
  try {
    const buf = await readFile(join(ROOT, p));
    res.writeHead(200, { 'content-type': (TYPES[extname(p)] || 'application/octet-stream') + '; charset=utf-8' });
    res.end(buf);
  } catch { res.writeHead(404, { 'content-type': 'text/plain' }); res.end('not found'); }
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
