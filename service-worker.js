// Minimal Service Worker to trigger PWA install criteria
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass-through strategy to let Vercel handle delivery
  e.respondWith(fetch(e.request));
});
