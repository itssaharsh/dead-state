import { narrativeCheck, worldFactCheck, softlockCheck } from '/solver.js';
self.onmessage = e => {
  const m = e.data.model;
  const t0 = performance.now();
  postMessage({ phase: 'step', n: 1, of: 3, name: 'narrative graph' });
  const narrative = narrativeCheck(m);
  postMessage({ phase: 'step', n: 2, of: 3, name: 'world-fact reachability' });
  const world = worldFactCheck(m);
  postMessage({ phase: 'step', n: 3, of: 3, name: 'order-dependent softlock' });
  const softlock = softlockCheck(m);
  postMessage({ phase: 'done', result: { narrative, world, softlock, ms: Math.round(performance.now() - t0) } });
};
