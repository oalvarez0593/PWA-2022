self.addEventListener('fetch', event => {
    /* console.log(event); */

    /* LA REPSUESTA DEL NUEVO EVENTO SERÁ LO QUE VENGA
       AL HACER LA PETICIÓN */

    // event.respondWith(fetch(event.request));


    /* CONSULTO EN TODOS LOS REQUEST SI ALGUNO INCLUYE JPG
       Y LOS IMPRIMO EN CONSOLA */

    if (event.request.url.includes('.jpg')) {
        console.log(event.request.url);
        /* event.request.url(null); */

        // let fotoRequest = fetch('img/main.jpg');
        //  let fotoRequest = fetch(event.request.url);
        // let fotoRequest = fetch(event.request);

        /* event.respondWith(null); */
        let foto = fetch('img/main-patas-arriba.jpg');
        event.respondWith(foto);
    } else {
        event.respondWith(fetch(event.request));
    }
});