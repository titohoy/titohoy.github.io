// Decrypts the Development Bible as it is browsed. Requests under app/ are answered from the encrypted copy in enc/,
// using the key the gate stored in IndexedDB. Without a valid key every page sends the visitor back to the gate.
const ROOT = new URL('./', self.location).pathname, APP = ROOT + 'app/';
const MIME = { html: 'text/html; charset=utf-8', js: 'text/javascript; charset=utf-8', mjs: 'text/javascript; charset=utf-8', css: 'text/css; charset=utf-8', json: 'application/json; charset=utf-8',
  txt: 'text/plain; charset=utf-8', md: 'text/plain; charset=utf-8', svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif', avif: 'image/avif',
  mp4: 'video/mp4', webm: 'video/webm', mp3: 'audio/mpeg', ogg: 'audio/ogg', wav: 'audio/wav', woff2: 'font/woff2', woff: 'font/woff', ttf: 'font/ttf', ico: 'image/x-icon' };
let key = null;
const getKey = () => key ? Promise.resolve(key) : new Promise((res) => { const o = indexedDB.open('devbible', 1); o.onupgradeneeded = () => o.result.createObjectStore('k');
  o.onsuccess = () => { const r = o.result.transaction('k').objectStore('k').get('key'); r.onsuccess = () => res(key = r.result || null); r.onerror = () => res(null); }; o.onerror = () => res(null); });
const forget = () => new Promise((res) => { key = null; const o = indexedDB.open('devbible', 1); o.onsuccess = () => { const tx = o.result.transaction('k', 'readwrite'); tx.objectStore('k').delete('key'); tx.oncomplete = res; tx.onerror = res; }; o.onerror = res; });

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { const u = new URL(e.request.url); if (u.origin === location.origin && u.pathname.startsWith(APP)) e.respondWith(serve(u, e.request)); });

async function serve(u, req) {
  let rel = u.pathname.slice(APP.length); if (rel === '' || rel.endsWith('/')) rel += 'index.html';
  const back = () => (req.mode === 'navigate' ? Response.redirect(ROOT + '?locked=1', 302) : new Response('Locked', { status: 401 }));
  // the Bible's live features need the owner's local Bible server; the published copy is read-only
  if (rel.startsWith('api/')) return new Response(JSON.stringify({ ok: false, offline: true, error: 'This is the read-only online copy of the Bible. Reports and live dialogue editing work only from the Bible server on the development PC.' }),
    { status: 503, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
  const k = await getKey(); if (!k) return back();
  const r = await fetch(ROOT + 'enc/' + rel, { cache: 'no-cache' }); if (!r.ok) return new Response('Not found', { status: 404 });
  const buf = new Uint8Array(await r.arrayBuffer());
  try { const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: buf.slice(0, 12) }, k, buf.slice(12));
    const ext = (rel.split('.').pop() || '').toLowerCase(); return new Response(pt, { headers: { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' } }); }
  catch { await forget(); return back(); }   // the copy was republished with a new key, or the stored key is wrong
}
