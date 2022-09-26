
// Ciclo de vida del SW

self.addEventListener('install', event => {
    /* CUALQUIER INSTALACIÓN DE SW, EL EVENTO INSTALL
       SIEMPRE VA A INSTALAR EL NUEVO */
    console.log('SW: Instalando SW!!');
    console.log(event);


    /* Instrucción para que el SW se active inmediatamente */
    self.skipWaiting();

    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalación terminada');
            self.skipWaiting();
            return resolve();
        }, 1);
    });

    event.waitUntil(instalacion);


});


/* CUANDO EL SW TOMA EL CONTROL DE LA APP */

self.addEventListener('activate', event => {
    /* Aqui es un muy buen lugar para borrar caché viejo */

    console.log('SW2: activo y listo para funcionar');
});

/* FETCH: manejo de peticiones HTTP */

self.addEventListener('fetch', event => {
    /* Aplicar las estrategias del caché */
    /* console.log('SW3:', event.request.url);

    if (event.request.url.includes('https://reqres.in/')) {
        const resp = new Response(`{ ok: false, message: 'jajaja'}`);
        event.respondWith(resp);
    } */

});

//SYNC: Es cuando recuperamos la conexión a internet.
self.addEventListener('sync', event => {
    console.log('tenemos conexión');
    console.log(event.tag);
})

//PUSH: Manejar las push notifications.

self.addEventListener('push', event => {
    console.log('Notificación recibida.');
})