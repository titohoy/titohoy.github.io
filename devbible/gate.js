// Development Bible gate. The Bible's files are published encrypted (AES-GCM, key derived from the password with
// PBKDF2); nothing readable is on the server. The password is checked by decrypting a known value, the derived key is
// kept in this browser (IndexedDB) and a service worker decrypts each page as it is opened under app/.
(() => {
  const $ = (id) => document.getElementById(id), msg = (t) => { $('msg').textContent = t; };
  const idb = (mode, fn) => new Promise((res, rej) => { const o = indexedDB.open('devbible', 1); o.onupgradeneeded = () => o.result.createObjectStore('k');
    o.onsuccess = () => { const tx = o.result.transaction('k', mode), r = fn(tx.objectStore('k')); tx.oncomplete = () => res(r && r.result); tx.onerror = () => rej(tx.error); }; o.onerror = () => rej(o.error); });
  const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const params = new URLSearchParams(location.search), locked = params.has('locked');
  const app = new URL('app/', location.href);
  let destination = app;
  try {
    const requested = new URL(params.get('next') || app, app);
    if (requested.origin === app.origin && requested.pathname.startsWith(app.pathname)) destination = requested;
  } catch {}
  const supported = 'serviceWorker' in navigator && window.crypto?.subtle && window.indexedDB;
  if (['127.0.0.1', 'localhost', '[::1]'].includes(location.hostname)) {
    const live = document.createElement('a');
    live.href = 'http://127.0.0.1:8793/book.html';
    live.textContent = 'Open the live Development Bible';
    $('live-access').append(live);
    $('live-access').hidden = false;
  }

  async function manifest() { const r = await fetch('manifest.json', { cache: 'no-store' }); if (r.status === 404 || (r.ok && r.headers.get('content-type')?.includes('text/html'))) return null; if (!r.ok) throw new Error('The private Bible preview could not be loaded.'); return r.json(); }
  async function deriveKey(pw, m) {
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pw), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b64(m.salt), iterations: m.iterations, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  }
  async function check(key, m) { const c = b64(m.check); try { const t = new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: c.slice(0, 12) }, key, c.slice(12))); return t === 'eclipsed-realms-devbible'; } catch { return false; } }
  async function ready() {
    const reg = await navigator.serviceWorker.register('sw.js', { scope: './app/' });
    const w = reg.installing || reg.waiting || reg.active;
    if (w && w.state !== 'activated') await new Promise((res, rej) => {
      const timer = setTimeout(() => rej(new Error('The Bible reader could not start. Try opening it again.')), 6000);
      const change = () => {
        if (!['activated', 'redundant'].includes(w.state)) return;
        clearTimeout(timer);
        w.removeEventListener('statechange', change);
        if (w.state === 'activated') res();
        else rej(new Error('The Bible reader could not start. Try opening it again.'));
      };
      w.addEventListener('statechange', change);
      change();
    });
  }
  async function open() { await ready(); location.href = destination.href; }

  // already unlocked in this browser (and the key still matches the published copy): offer to open straight away
  (async () => { try { const m = await manifest(); if (!m) return;
    $('access-intro').textContent = 'Enter the password to open the read-only Development Bible snapshot.';
    if (!supported) { msg('This browser needs service workers and Web Crypto to open the encrypted Bible.'); return; }
    $('f').hidden = false;
    const k = await idb('readonly', (s) => s.get('key'));
    if (k && await check(k, m)) { $('lock').hidden = false; if (!locked) { msg(''); $('go').textContent = 'Open'; $('pw').required = false; $('pw').placeholder = 'Unlocked in this browser'; } }
    else if (k) await idb('readwrite', (s) => s.delete('key'));
    if (locked && !k) msg('Enter the password to continue.'); } catch (e) { msg(e.message); } })();

  $('f').addEventListener('submit', async (e) => {
    e.preventDefault(); $('go').disabled = true; msg('Opening…');
    try {
      const m = await manifest(), pw = $('pw').value;
      if (!m) throw new Error('This edition opens the Bible from the development workspace.');
      if (!pw) { const k = await idb('readonly', (s) => s.get('key')); if (k && await check(k, m)) return open(); throw new Error('Enter the password.'); }
      const key = await deriveKey(pw, m);
      if (!await check(key, m)) throw new Error('That password is not right.');
      await idb('readwrite', (s) => s.put(key, 'key'));
      $('pw').value = '';
      await open();
    } catch (err) { msg(err.message || String(err)); $('go').disabled = false; }
  });
  $('lock').addEventListener('click', async () => {
    try {
      await idb('readwrite', (s) => s.delete('key'));
      $('lock').hidden = true; $('pw').required = true; $('pw').placeholder = ''; $('pw').value = '';
      $('pw').focus(); msg('This browser is locked. Enter the password to reopen the Bible.');
    } catch { msg('Could not lock this browser. Try again.'); }
  });
})();
