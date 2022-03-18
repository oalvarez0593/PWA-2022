function sumarLento(numero) {

    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 1000);
    });

    return promesa;
}

let sumarRapido = (numero) => {
    let promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    });

    return promesa2;
}

sumarLento(1)
    .then(nuevoValor => {
        console.log(nuevoValor);
        return sumarLento(nuevoValor);
    })
    .then(nuevoValor2 => {
        console.log(nuevoValor2);
        return sumarLento(nuevoValor2);
    })
    .then(nuevoValor3 => {
        console.log(nuevoValor3);
        return sumarLento(nuevoValor3);
    })

sumarRapido(10)
    .then(nuevoNumero => {
        console.log(nuevoNumero);
        return sumarRapido(nuevoNumero);
    })
    .then(nuevoNumero2 => {
        console.log(nuevoNumero2);
        return sumarRapido(nuevoNumero2);
    })
    .then(nuevoNumero3 => {
        console.log(nuevoNumero3);
        return sumarRapido(nuevoNumero3);
    })

Promise.all([sumarLento(2), sumarRapido(20)]).then(respuestas => {
    console.log(respuestas);
});

Promise.race([sumarLento(9), sumarRapido(55)]).then(respuesta => {
    console.log(respuesta);
});