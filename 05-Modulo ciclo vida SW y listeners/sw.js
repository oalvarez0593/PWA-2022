
// Ciclo de vida del SW

self.addEventListener('install', event => {
    /* CUALQUIER INSTALACIÓN DE SW, EL EVENTO INSTALL
       SIEMPRE VA A INSTALAR EL NUEVO */
    console.log('SW: Instalando SW');
    console.log(event);

});