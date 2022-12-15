const CACHE_NAME = "tni-cyber-site-5.5.5";
const OFFLINE_URL = "offline.html";
const assets = [
  "/",
  "/index.html",
  "/aboutus.html",
  "/activities.html",
  "/cybersec.html",
  "/termsofservice.html",
  "/404.html",
  "/offline.html",
  "/badapple.html",
  // common
  "/common/navbar.html",
  "/common/footer.html",
  "/common/social-card.html",
  "/common/cookie-banner.html",
  "/common/messenger-plugin.html",
  // css
  "/css/style.css",
  "/css/animate.min.css",
  // js
  "/js/app.js",
  "/js/script.js",
  "/js/carousel.js",
  "/js/cookie.js",
  "/js/hero.js",
  "/js/version.js",
  "/js/t.min.js",
  "/js/wow.min.js",
  // img
  "/img/TNICyberWeb.png",
  "/img/TNICyberICON.png",
  "/img/TNICyberWebIcon.ico",
  "/img/TNICyberWebIcon.png",
  "/img/logoTNIWhite.png",
  "/img/TNIIcon.png",
  "/img/CTFTIME.png",
  "/img/Coop Cop.png",
  "/img/Coop Cop.png2",
  "/img/CyberPic.jpg",
  "/img/cybersec.jpg",
  "/img/activity.jpg",
  "/img/aboutme.png",
  "/img/Head.png",
  "/img/CyberPic_coop.png",
  "/img/Takahashi.png",
  "/img/finsec.jpg",
  "/img/Cisco-Innovation-Challenge-2019.jpg",
  "/img/RTAFCyberOps.png",
  "/img/tni.jpg",
  "/img/rick-roll.gif",
  "/img/ring-resize-white-36.svg",
  // media
  "/audio/NeverGonnaGiveYouUp.mp3",
  "/audio/silence.mp3",
  "/video/badapple.mp4",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
      cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Only call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's
          // supported.
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thrown, which is
          // likely due to a network error.
          // If fetch() returns a valid HTTP response with a response code in
          // the 4xx or 5xx range, the catch() will NOT be called.
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});
