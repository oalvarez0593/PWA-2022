let img = document.getElementById('lunaImg');

fetch('./superman.jpg')
    .then(resp => {
        return resp.blob();
    })
    .then(image => {
        console.log(image);
        var imgPath = URL.createObjectURL(image);
        console.log(imgPath);
        img.src = imgPath;
        /* return image; */
    })