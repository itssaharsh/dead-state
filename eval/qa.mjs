import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdirSync } from 'node:fs';
const base = process.argv[2] || 'http://localhost:3000';
const routes = ['/?pick=saltmarrow', '/?pick=handbuilt', '/?pick=sunstone', '/?state=paste'];
const widths = [320, 390, 1024, 1440];
mkdirSync('qa', { recursive: true });
const b = await chromium.launch();
let violations = 0, shots = 0;
for (const reduced of [false, true]) {
  const ctx = await b.newContext({ reducedMotion: reduced ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  for (const r of routes) for (const w of widths) {
    await p.setViewportSize({ width: w, height: w < 500 ? 844 : 900 });
    await p.goto(base + r, { waitUntil: 'load' });
    await p.waitForTimeout(1200);
    const tag = `${r.replace(/\W/g, '_')}-${w}${reduced ? '-rm' : ''}`;
    await p.screenshot({ path: `qa/${tag}.png`, fullPage: true }); shots++;
    if (w === 1440 && !reduced) {
      const { violations: v } = await new AxeBuilder({ page: p })
        .withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
      v.forEach(x => { violations++; console.log('AXE', r, x.id, x.impact, x.nodes.length, '—', x.help); });
    }
  }
  if (errs.length) console.log('CONSOLE ERRORS', [...new Set(errs)].slice(0, 8));
  await ctx.close();
}
await b.close();
console.log(`\n${shots} screenshots · ${violations} axe violations`);
