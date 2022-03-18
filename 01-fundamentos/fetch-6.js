fetch('./no-encontrado.html')
    .then(response => {
        return response.text();
    })
    .then(html => {
        console.log(html);
        let body = document.querySelector('body');
        body.innerHTML = html;
    })
    .catch(err => {
        console.log('Error en la peticion');
        console.log(err);
    })