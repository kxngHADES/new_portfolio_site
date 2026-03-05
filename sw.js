const CACHE_NAME = 'portfolio-cache-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js'
];

// Install event: cache essential assets and activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event: network-first, fall back to cache
self.addEventListener('fetch', (event) => {
  if (
    event.request.url.includes('socket.io') ||
    event.request.url.includes('/ws') ||
    event.request.url.includes('reload.js')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Update the cache with the fresh response
        if (networkResponse && networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Network failed, fall back to cache
        return caches.match(event.request);
      })
  );
});

// Activate event: claim clients immediately and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
