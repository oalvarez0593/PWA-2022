/* 'https://reqres.in/api/users' */

fetch('https://reqres.in/api/users').then(response => {
    response.json()
    .then(respOBJ => {
        console.log(respOBJ);
        console.log(respOBJ.page);
        console.log(respOBJ.data);
    });
});