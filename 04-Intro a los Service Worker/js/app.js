
/* CONFIRMAR SI ES POSIBLE UTILIZAR EL SERVICE WORKER */
if (navigator.serviceWorker) {
    console.log('Es posible utilizar service worker');
    navigator.serviceWorker.register('/sw.js');
}