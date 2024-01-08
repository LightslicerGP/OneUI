importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.NetworkFirst() //CacheFirst() will go to cache saved first instead of the website
);

if ("serviceWorker" in navigator && "SyncManager" in window) {
  // Get our service worker registration.
  const registration = await navigator.serviceWorker.registration;

  try {
    // This is where we request our sync.
    // We give it a "tag" to allow for differing sync behavior.
    await registration.sync.register("database-sync");
  } catch {
    console.log("Background Sync failed.");
  }
}

// Add an event listener for the `sync` event in your service worker.
self.addEventListener("sync", (event) => {
  // Check for correct tag on the sync event.
  if (event.tag === "database-sync") {
    // Execute the desired behavior with waitUntil().
    event.waitUntil(
      // This is just a hypothetical function for the behavior we desire.
      pushLocalDataToDatabase()
    );
  }
}); // 1/8/24
