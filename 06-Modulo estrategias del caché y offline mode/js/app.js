

// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}

if (window.caches) {
    caches.open('prueba-1');
    //Pregunta si existe prueba-1
    caches.has('prueba-1').then(existe => console.log(existe));

    //Se borra del caché el prueba-1
    caches.delete('prueba-1').then(borrado => console.log(borrado));

    caches.open('cache-v1.1').then(cache => {
        /* cache.add('/pages/offline.html'); */
        cache.addAll([
            '/pages/offline.html',
            '/img/main.jpg',
            '/css/style.css'
        ]);

        cache.match('/pages/offline.html').then(resp => {
            resp.text().then(imprimir => console.log(imprimir));
        })
    })
}