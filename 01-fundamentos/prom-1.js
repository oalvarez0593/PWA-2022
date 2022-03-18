function sumarUno(numero, callback) {
    /* return numero + 1; */
    setTimeout(() => {
        callback(numero + 1);
    }, 2000);
}


sumarUno(5, (nuevoValor) => {
    console.log(nuevoValor);
});