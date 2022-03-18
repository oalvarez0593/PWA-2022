function sumarUno(numero) {
    let promesa = new Promise((resolve, reject) => {

        if (numero >= 7) {
            reject('No se permite un número muy alto');
        }

        setTimeout(() => {
            resolve(numero + 1);
        }, 2000);
    });
    return promesa;
}

/* sumarUno(5).then((nuevoNumero) => {
    console.log(nuevoNumero);
    sumarUno(nuevoNumero).then((nuevoNumero2) => {
        console.log(nuevoNumero2)
    });
}) */

sumarUno(5)
    .then((valorNuevo) => {
        console.log(valorNuevo);
        return sumarUno(valorNuevo);
    })
    .then((valorNuevo2) => {
        console.log(valorNuevo2);
        return sumarUno(valorNuevo2);
    }).catch(error => {
        console.log('Numero muy alto');
        console.log(error);
    });