const cacheName = 'lady-morpheus-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// نصب سرویس ورکر
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// لود کردن از کش در صورت آفلاین بودن
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
