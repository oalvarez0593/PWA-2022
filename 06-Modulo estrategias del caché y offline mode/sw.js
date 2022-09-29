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

    //#1 CACHE ONLY
    /* Cuando la app cargará toda desde el caché, nunca va a requerir de internet */

    /* event.respondWith(caches.match(event.request)); */


    //#2 Caché with Network Fallback
    const respuesta = caches.match(event.request).then(resp => {
        if (resp) {
            return resp;
        } else {
            /* No existe el archivo, entonces tengo que ir a la web. */
            console.log('No existe', event.request.url);

            return fetch(event.request).then(newRespon => {
                caches.open('cache-1').then(cache => {
                    cache.put(event.request, newRespon);
                });
                return newRespon.clone();
            });
        }
    });

    event.respondWith(respuesta);
});