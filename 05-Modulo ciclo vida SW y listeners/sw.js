
// Ciclo de vida del SW

self.addEventListener('install', event => {
    /* CUALQUIER INSTALACIÓN DE SW, EL EVENTO INSTALL
       SIEMPRE VA A INSTALAR EL NUEVO */
    console.log('SW: Instalando SW!!');
    console.log(event);


    /* Instrucción para que el SW se active inmediatamente */
    // --> self.skipWaiting();

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
    console.log('SW3:', event.request.url);
});