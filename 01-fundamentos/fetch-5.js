fetch('https://reqres.in/api/users/100')
    .then(response => {
        console.log(response);
        if (response.ok) {
            response.clone().json()
                .then(user => {
                    console.log(user.data);
                    return user;
                })
            response.clone().json()
                .then(user => {
                    console.log(user.data);
                    return user;
                })
            response.json()
                .then(user => {
                    console.log(user.data);
                    return user;
                })
        } else {
            console.log('No existe ese usuario');
        }
    })
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    });