// Service worker: o app abre mesmo com internet fraca.
// Sempre tenta a versão nova primeiro; se não houver internet, usa a última guardada.
// Os dados (banco Supabase) nunca são guardados aqui.
const CACHE = "clinica-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((resp) => {
      if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }
      return resp;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
