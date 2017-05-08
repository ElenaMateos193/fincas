var listImages = [];
console.log("Entro en el js por lo menos");

function addImages() {
    console.log("Entro en el js por lo menos 2");
    var elements = document.getElementsByClassName("listImage");
    var checkeds = document.getElementsByName("lista");
    var i;
    var pos=0;
    for (i = 0; i < elements.length; i++) {
        if (checkeds[i].checked) {
            console.log("if");
            listImages.push(elements[i].src);
            console.log(elements[i].src);
            console.log(listImages[pos]);
            $('#content').append('<h5><a onclick="addPopUp('+ listImages[pos] + ');">Imagen '+(pos +1)+'</a></h5>' + '\n');
            pos++;
            //Este es el que hay que poner de verdad para que salga el popup en la lista, pero sale un error en consola si lo pongo
            // $('#content').append('<button id="#popUpImagen" onclick="addPopUp("'+ listImages[pos] + '");" type="button" data-toggle="modal" data-target="#myModal">Ver Imagen' + (pos + 1)'</button>' + '\n');
        }

    }

}
