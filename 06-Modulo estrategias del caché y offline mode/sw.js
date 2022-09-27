self.addEventListener('install', event => {

    const cachePromise = caches.open('cache-1').then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/pages/offline.html',
            '/css/style.css',
            '/img/main.jpg',
            'img/favicon.ico',
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            '/js/app.js'
        ]);
    });

    event.waitUntil(cachePromise);
})

self.addEventListener('fetch', event => {

    //CACHE ONLY
    /* Cuando la app cargará toda desde el caché, nunca va a requerir de internet */

    event.respondWith(caches.match(event.request));


});