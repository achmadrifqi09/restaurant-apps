import 'regenerator-runtime/runtime';
import { setCacheNameDetails } from 'workbox-core';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

setCacheNameDetails({
    prefix: 'restox-app',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'pages-cache',
    }),
);

registerRoute(
    /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
    new NetworkFirst({
        cacheName: 'restaurant-api-cache',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 100,
            }),
        ],
    }),
);

registerRoute(
    /^https:\/\/restaurant-api\.dicoding\.dev\/images/,
    new NetworkFirst({
        cacheName: 'image-cache-api',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 50,
            }),
        ],
    }),
);

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'image-cache-local',
        plugins: [
            // Don't cache more than 50 items, and expire them after 30 days
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 50,
            }),
        ],
    }),
);

registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com',
    new StaleWhileRevalidate({
        cacheName: 'fonts-cache',
        plugins: [new ExpirationPlugin({ maxEntries: 50 })],
    }),
);

registerRoute(
    ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'worker',
    new StaleWhileRevalidate({
        cacheName: 'assets-cache',
    }),
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
