var listImages = [];
var listaGalleria = [];
var listImagesLists = [];
var pos = 0;
var c;

function getHtmlListaFotos(url_img, msg, id, secret, i) {
    var html = "<li style=\"width:378px;height:300px;margin-bottom:50px\" class=\"masonry-item grid foto\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img style=\"width:378px\" class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetails(\'" + id + "\', \'" + secret + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "<button id=\"button" + i + "\" class=\"addToList\" onclick=\"removeImages(" + i + ");\">Eliminar</button></li>";
    return html;
}

function getHtmlListaGalerias(id, title, i) {
    var html = "<a onclick=\"showPhotos(\'" + id + "\');\" class=\"list-group-item foto\">" + title + "</a><button id=\"buttonGalleryRemove" + i + "\" class=\"addToList buttonRemove\" onclick=\"removeGallery(" + i + ");\">Eliminar</button>";
    return html;
}

//Nos elimina una imagen de la lista de fotos seleccionadas
function removeImages(x) {
    listImages.splice(x, 1);
    listaFotosAux();
}
//Nos elimina una galeria de la lista de galerias seleccionadas
function removeGallery(x) {
    listaGalleria.splice(x, 1);
    listaGalleriesAux();
    $('#buttonGalleryRemove' + x).remove();
}

function restaurarList() {
    $('#eliminar').addClass("esconder");
    $('#paginas').removeClass("esconder");
    $('#back').addClass("esconder");
    $(".foto").remove();

    listaFotosAux();
}
//Nos ayuda a mostrar las fotos de la lista una vez eliminada solamente una foto
function listaFotosAux() {
    $(".foto").remove();
    var j;
    for (j = 0; j < listImages.length; j++) {
        var html = getHtmlListaFotos(listImages[j].msg, listImages[j].id, listImages[j].secret, j);

        $('#muro').append(html);
    }
}
//Nos ayuda a mostrar las galerias de la lista una vez eliminada solamente una galeria
function listaGalleriesAux() {
    $(".foto").remove();
    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listImages.length; j++) {
        var html = getHtmlListaGalerias(listaGalleria[j].id, listaGalleria[j].title, j);

        $('#muro').append(html);
    }
    $('#muro').append("</div>");
}
//Me añade galerias a la lista de galerias
function addGalleries(x) {
    listaGalleria.push(listGallery[x]);
    $('#buttonGallery' + x).addClass("selected");
    $('#badgeGaleria').text(listaGalleria.length);
}
//Me añade imágenes a la lista de fotos
function addImages(x) {
    listImages.push(list[x]);
    $('#button' + x).addClass("selected");
    $('#badgeFoto').text(listImages.length);
}
//Me elimina todas las imágenes de la lista de fotos
function limpiar() {
    listImages = [];
    listImages.length = 0;
    $(".foto").remove();
    $(".buttonRemove").remove();
}
//Me muestra todas la imágenes que hemos guardado en la lista de fotos
function listaDeFotos() {
    $(".foto").remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");
    $('#back').removeClass("esconder");

    //Me sirve para saber donde estoy cuando abro el menu
    $('#index').removeClass("active");
    $('#listaDeAlbum').removeClass("active");
    $('#listaDeGrupo').removeClass("active");
    $('#listaDeGaleria').removeClass("active");
    $('#listaDeFotos').addClass("active");

    var j;
    for (j = 0; j < listImages.length; j++) {
        var html = getHtmlListaFotos(listImages[j].url_img, listImages[j].msg, listImages[j].id, listImages[j].secret, j);

        $('#muro').append(html);
    }
}

function listaDeAlbum() {
    $(".foto").remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");
    $('#back').removeClass("esconder");
    $('#index').removeClass("active");
    $('#listaDeFotos').removeClass("active");
    $('#listaDeGrupo').removeClass("active");
    $('#listaDeGaleria').removeClass("active");
    $('#listaDeAlbum').addClass("active");
}

function listaDeGrupo() {
    $(".foto").remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");
    $('#back').removeClass("esconder");
    $('#index').removeClass("active");
    $('#listaDeFotos').removeClass("active");
    $('#listaDeAlbum').removeClass("active");
    $('#listaDeGaleria').removeClass("active");
    $('#listaDeGrupo').addClass("active");
}

function listaDeGaleria() {
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");
    $('#back').removeClass("esconder");

    $('#index').removeClass("active");
    $('#listaDeFotos').removeClass("active");
    $('#listaDeAlbum').removeClass("active");
    $('#listaDeGrupo').removeClass("active");
    $('#listaDeGaleria').addClass("active");

    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listaGalleria.length; j++) {
        var html = getHtmlListaGalerias(listaGalleria[j].id, listaGalleria[j].title, j);
        $('#muro').append(html);
    }
    $('#muro').append("</div>");

}

function showPhotos(id) {
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').removeClass("esconder");
    $('#eliminar').addClass("esconder");
    
    //Llamada a la api para conseguir la lista de fotos, en un principio por defecto, de flores y guardará ciertos datos en una estructura llamada Photos que se añadirá a una lista de fotospara poder acceder luego a ella
    var url = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" + api_key + "&gallery_id=" + id + "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        console.log(data);
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            id = photo.id;
            secret = photo.secret;
            url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var aux = crearPhoto(url_img, msg, id, secret);
            listImagesLists.push(aux);

        });
        //Cogemos cada una de las fotos guardada en la lista y las imprimimos de diez en diez
        var i;
        for (i = 0; ((i < listImagesLists.length) && (i < 10)); i++) {
            //metodo que me devuelve un string con la estructura en html de cada foto
            var html = getHtmlInit(listImagesLists[i].url_img, listImagesLists[i].msg, listImagesLists[i].id, listImagesLists[i].secret, i);
            $('#muro').append(html);

        }
        $(".numeros").remove();
        paginasLista();
    });
}
function paginasLista() {
    //Organizaremos las páginas de 10 en 10. Cada número de la página será un enlace que me mostrará las 10 fotos correspondientes a esa sección. P.e si pulsamos el 1 se mostrarán de la foto 1 a la 10 y si pulsamos
    //el 3 se mostrarán desde la foto 31 a la 40
        c = 1;
        var pos;
    //Si tenemos un número multiplo de 10 entonces nos aseguramos que si tenemos 40 fotos solo haya botones del 1 al 3 pues el 3 me mostraría las fotos 31 y 40. Mientras que si el número no es múltiplo de 10 nos aseguramos
    //que si ahi 31 fotos haya botones del 1 al 3 y no se quede en solo 2
        if ((listImagesLists.length % 10) === 0) {
            pos = (listImagesLists.length / 10);
        } else {
            pos = Math.trunc(listImagesLists.length / 10) + 1;
        }
        var x;
        var sum;
        for (x = 0; x < pos; x++) {
            sum = x + 1;
            $('#pag').append("<li><a id=\"" + x + "\" onclick=\"navigate(" + x + ");\">" + sum + "</a></li>");
        }
    //Nos mantenemos en la página 1 por defecto y para ello le damos un estilo diferente al resto.
        $('#0').addClass('selected');
    
}
function navigate(pos) {
    //Cada vez que se pulse una página se ejecuta este método que me cambiará las fotos de la página por las correspondientes a la página pulsada y me seleccionará el número pulsado para informarnos de la página
    //en la que estamos
    var elem = document.getElementById(c - 1);
    elem.removeAttribute("class");
    var e = document.getElementById(pos);
    e.className = "selected";
    $(".foto").remove();
    $('#eliminar').addClass("esconder");
    var i;
    for (i = (pos * 10 + 1); (i <= ((pos + 1) * 10)); i++) {
        var html = getHtmlInit(listImagesLists[i].url_img, listImagesLists[i].msg, listImagesLists[i].id, listImagesLists[i].secret, i);
        $('#muro').append(html);

    }


    c = pos + 1;
}
