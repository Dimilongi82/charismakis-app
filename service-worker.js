
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("charismakis-store").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/charismakis-icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
