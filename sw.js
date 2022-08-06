const CACHE_NAME = "tni-cyber-site-v1";
const assets = [
  "/",
  "/index.html",
  "/aboutus.html",
  "/activities.html",
  "/cybersec.html",
  "/termsofservice.html",
  "/css/style.css",
  "/css/animate.min.css",
  "/js/app.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
