// Minimal Service Worker to trigger PWA install criteria
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Let Vercel handle live file routing seamlessly
  e.respondWith(fetch(e.request));
});
