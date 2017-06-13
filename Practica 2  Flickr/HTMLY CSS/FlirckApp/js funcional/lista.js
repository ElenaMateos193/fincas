var pos = 0;
var c;

function getHtmlListaFotos(url_img, msg, id, secret, i, x) {
    var html = "<li style=\"width:378px;height:300px;margin-bottom:50px\" class=\"masonry-item grid foto\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img style=\"width:378px\" class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetails(\'" + id + "\', \'" + secret + "\', \'" + x + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "<button id=\"button" + i + "\" class=\"addToList\" onclick=\"removeImages(" + i + ");\">Eliminar</button></li>";
    return html;
}

function getHtmlListaGalerias(id, title, i) {
    var html = "<div class=\"marginBottom\"><a onclick=\"showPhotos(\'" + id + "\');\" class=\"list-group-item foto\">" + title + "</a><button id=\"buttonGalleryRemove" + i + "\" class=\"addToList buttonRemove\" onclick=\"removeGallery(" + i + ");\">Eliminar</button></div>";
    return html;
}
function getHtmlListaAlbum(id, title, i) {
    var html = "<div class=\"marginBottom\"><a onclick=\"showPhotosAlbum(\'" + id + "\');\" class=\"list-group-item foto\">" + title + "</a><button id=\"buttonAlbumRemove" + i + "\" class=\"addToList buttonRemove\" onclick=\"removeAlbum(" + i + ");\">Eliminar</button></div>";
    return html;
}
function getHtmlListaGrupo(id, title, i) {
    var html = "<div class=\"marginBottom\"><a onclick=\"showPhotosGrupo(\'" + id + "\');\" class=\"list-group-item foto\">" + title + "</a><button id=\"buttonGroupRemove" + i + "\" class=\"addToList buttonRemove\" onclick=\"removeGroup(" + i + ");\">Eliminar</button></div>";
    return html;
}

//Nos elimina una imagen de la lista de fotos seleccionadas
function removeImages(x) {
    listImages.splice(x, 1);
    $('#badgeFoto').text(listImages.length);
    listaFotosAux();
}
//Nos elimina una galeria de la lista de galerias seleccionadas
function removeGallery(x) {
    listaGalleria.splice(x, 1);
    $('#buttonGalleryRemove' + x).remove();
    
    listaGalleriesAux();
    $('#badgeGaleria').text(listaGalleria.length);
}
function removeAlbum(x) {
    listaAlbum.splice(x, 1);
    $('#buttonAlbumRemove' + x).remove();
    
    listaAlbumAux();
    $('#badgeAlbum').text(listaAlbum.length);
}
function removeGroup(x) {
    listaGroup.splice(x, 1);
    $('#buttonGroupRemove' + x).remove();
    
    listaGroupsAux();
    $('#badgeGrupo').text(listaGroup.length);
}

function restaurarList() {
    $('#eliminar').addClass("esconder");
    $('#paginas').removeClass("esconder");
    $(".foto").remove();

    listaFotosAux();
}
//Nos ayuda a mostrar las fotos de la lista una vez eliminada solamente una foto
function listaFotosAux() {
    $(".foto").remove();
    var j;
    for (j = 0; j < listImages.length; j++) {
        var html = getHtmlListaFotos(listImages[j].url_img, listImages[j].msg, listImages[j].id, listImages[j].secret, j, 2);

        $('#muro').append(html);
    }
}
//Nos ayuda a mostrar las galerias de la lista una vez eliminada solamente una galeria
function listaGalleriesAux() {
    $(".foto").remove();
    $(".marginBottom").remove();
    $(".buttonRemove").remove();
    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listaGalleria.length; j++) {
        var html = getHtmlListaGalerias(listaGalleria[j].id, listaGalleria[j].title, j);

        $('#muro').append(html);
    }
    $('#muro').append("</div>");
}
function listaAlbumAux() {
    $(".foto").remove();
    $(".marginBottom").remove();
    $(".buttonRemove").remove();
    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listaAlbum.length; j++) {
        var html = getHtmlListaAlbum(listaAlbum[j].id, listaAlbum[j].title, j);

        $('#muro').append(html);
    }
    $('#muro').append("</div>");
}
function listaGroupsAux() {
    $(".foto").remove();
    $(".marginBottom").remove();
    $(".buttonRemove").remove();
    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listaGroup.length; j++) {
        var html = getHtmlListaGrupo(listaGroup[j].id, listaGroup[j].title, j);

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
function addAlbum(x) {
    listaAlbum.push(listAlbum[x]);
    $('#buttonAlbum' + x).addClass("selected");
    $('#badgeAlbum').text(listaAlbum.length);
}
function addGroup(x) {
    listaGroup.push(listGroup[x]);
    $('#buttonGroup' + x).addClass("selected");
    $('#badgeGrupo').text(listaGroup.length);
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
    listaGalleria = [];
    listaGalleria.length=0;
    listaAlbum = [];
    listaAlbum.length = 0;
    listaGroup = [];
    listaGroup.length = 0;
    
    $(".foto").remove();
    $(".buttonRemove").remove();
    $('#badgeFoto').text(listImages.length);
    $('#badgeGaleria').text(listaGalleria.length);
    $('#badgeAlbum').text(listaAlbum.length);
    $('#badgeGrupo').text(listaGroup.length);
}
//Me muestra todas la imágenes que hemos guardado en la lista de fotos
function listaDeFotos() {
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");    
    $(".buttonBack").remove();

    //Me sirve para saber donde estoy cuando abro el menu
    $('#index').removeClass("active");
    $('#listaDeAlbum').removeClass("active");
    $('#listaDeGrupo').removeClass("active");
    $('#listaDeGaleria').removeClass("active");
    $('#listaDeFotos').addClass("active");
    
    $('#muro').append("<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + 1 + "\');\">Atrás</button>");
    
    var j;
    for (j = 0; j < listImages.length; j++) {
        var html = getHtmlListaFotos(listImages[j].url_img, listImages[j].msg, listImages[j].id, listImages[j].secret, j, 2);

        $('#muro').append(html);
    }
}

function listaDeAlbum() {
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");
    $(".buttonRemove").remove();    
    $(".buttonBack").remove();
    $('#album').remove();
    
    $('#index').removeClass("active");
    $('#listaDeFotos').removeClass("active");
    $('#listaDeGrupo').removeClass("active");
    $('#listaDeGaleria').removeClass("active");
    $('#listaDeAlbum').addClass("active");
    
    $('#muro').append("<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + 1 + "\');\">Atrás</button>");
    
    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listaAlbum.length; j++) {
        var html = getHtmlListaAlbum(listaAlbum[j].id, listaAlbum[j].title, j);
        $('#muro').append(html);
    }
    $('#muro').append("</div>");
}

function listaDeGrupo() {
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");
    $(".buttonRemove").remove();    
    $(".buttonBack").remove();
    $('#grupo').remove();
    
    $('#index').removeClass("active");
    $('#listaDeFotos').removeClass("active");
    $('#listaDeAlbum').removeClass("active");
    $('#listaDeGaleria').removeClass("active");
    $('#listaDeGrupo').addClass("active");
    
    $('#muro').append("<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + 1 + "\');\">Atrás</button>");
    
    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listaGroup.length; j++) {
        var html = getHtmlListaGrupo(listaGroup[j].id, listaGroup[j].title, j);
        $('#muro').append(html);
    }
    $('#muro').append("</div>");
}

function listaDeGaleria() {
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').removeClass("esconder");
    $(".buttonRemove").remove();    
    $(".buttonBack").remove();
    $('#galeria').remove();

    $('#index').removeClass("active");
    $('#listaDeFotos').removeClass("active");
    $('#listaDeAlbum').removeClass("active");
    $('#listaDeGrupo').removeClass("active");
    $('#listaDeGaleria').addClass("active");
    
    $('#muro').append("<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + 1 + "\');\">Atrás</button>");

    $('#muro').append("<div class=\"marginTop foto\">");
    var j;
    for (j = 0; j < listaGalleria.length; j++) {
        var html = getHtmlListaGalerias(listaGalleria[j].id, listaGalleria[j].title, j);
        $('#muro').append(html);
    }
    $('#muro').append("</div>");

}
function paginasLista() {
    //Organizaremos las páginas de 10 en 10. Cada número de la página será un enlace que me mostrará las 10 fotos correspondientes a esa sección. P.e si pulsamos el 1 se mostrarán de la foto 1 a la 10 y si pulsamos
    //el 3 se mostrarán desde la foto 31 a la 40
    c = 1;
    var pos;
    $(".buttonRemove").remove();
    //Si tenemos un número multiplo de 10 entonces nos aseguramos que si tenemos 40 fotos solo haya botones del 1 al 3 pues el 3 me mostraría las fotos 31 y 40. Mientras que si el número no es múltiplo de 10 nos aseguramos
    //que si ahi 31 fotos haya botones del 1 al 3 y no se quede en solo 2
    if ((listImagesLists.length % 10) === 0) {
        pos = (listImagesLists.length / 10);
    } else {
        pos = Math.trunc(listImagesLists.length / 10) + 1;
    }
    var x, sum;
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
    var f;
    for (f = (pos * 10 + 1); (f <= ((pos + 1) * 10)); f++) {
        var html = getHtml(listImagesLists[f].url_img, listImagesLists[f].msg, listImagesLists[f].id, listImagesLists[f].secret, f);
        $('#muro').append(html);

    }


    c = pos + 1;
}
function showPhotos(id) {
    listImagesLists = [];
    listImagesLists.length = 0;
    
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').removeClass("esconder");
    $('#eliminar').addClass("esconder");
    $(".buttonBack").remove();
    
    //Llamada a la api para conseguir la lista de fotos, en un principio por defecto, de flores y guardará ciertos datos en una estructura llamada Photos que se añadirá a una lista de fotospara poder acceder luego a ella
    var url = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" + api_key + "&gallery_id=" + id + "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            id = photo.id;
            secret = photo.secret;
            url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var auxp = crearPhoto(url_img, msg, id, secret);
            listImagesLists.push(auxp);

        });
        $(".numeros").remove();
        $('#muro').append("<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + 6 + "\');\">Atrás</button>");
        //Cogemos cada una de las fotos guardada en la lista y las imprimimos de diez en diez
        var i;
        for (i = 0; ((i < listImagesLists.length) && (i < 10)); i++) {
            //metodo que me devuelve un string con la estructura en html de cada foto
            var html = getHtmlInitAux(listImagesLists[i].url_img, listImagesLists[i].msg, listImagesLists[i].id, listImagesLists[i].secret, i, 3);
            $('#muro').append(html);

        }
        paginasLista();
    });
}
function showPhotosAlbum(id) {
    listImagesLists = [];
    listImagesLists.length = 0;
    
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').removeClass("esconder");
    $('#eliminar').addClass("esconder");
    $(".buttonBack").remove();
    
    //Llamada a la api para conseguir la lista de fotos, en un principio por defecto, de flores y guardará ciertos datos en una estructura llamada Photos que se añadirá a una lista de fotospara poder acceder luego a ella
    var url = " https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + api_key + "&photoset_id=" + id + "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        $.each(data.photoset.photo, function (i, photo) {
            var msg = photo.title;
            id = photo.id;
            secret = photo.secret;
            url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var auxp = crearPhoto(url_img, msg, id, secret);
            listImagesLists.push(auxp);

        });
        $(".numeros").remove();
        $('#muro').append("<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + 7 + "\');\">Atrás</button>");
        //Cogemos cada una de las fotos guardada en la lista y las imprimimos de diez en diez
        var i;
        for (i = 0; ((i < listImagesLists.length) && (i < 10)); i++) {
            //metodo que me devuelve un string con la estructura en html de cada foto
            var html = getHtmlInitAux(listImagesLists[i].url_img, listImagesLists[i].msg, listImagesLists[i].id, listImagesLists[i].secret, i, 4);
            $('#muro').append(html);

        }
        paginasLista();
    });
}
function showPhotosGrupo(id) {
    listImagesLists = [];
    listImagesLists.length = 0;
    
    $(".foto").remove();
    $('#destroy').remove();
    $('#paginas').removeClass("esconder");
    $('#eliminar').addClass("esconder");
    $(".buttonBack").remove();
    
    //Llamada a la api para conseguir la lista de fotos, en un principio por defecto, de flores y guardará ciertos datos en una estructura llamada Photos que se añadirá a una lista de fotospara poder acceder luego a ella
    var url = " https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=" + api_key + "&group_id=" + id + "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            id = photo.id;
            secret = photo.secret;
            url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var auxp = crearPhoto(url_img, msg, id, secret);
            listImagesLists.push(auxp);

        });
        $(".numeros").remove();
        $('#muro').append("<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + 8 + "\');\">Atrás</button>");
        //Cogemos cada una de las fotos guardada en la lista y las imprimimos de diez en diez
        var i;
        for (i = 0; ((i < listImagesLists.length) && (i < 10)); i++) {
            //metodo que me devuelve un string con la estructura en html de cada foto
            var html = getHtmlInitAux(listImagesLists[i].url_img, listImagesLists[i].msg, listImagesLists[i].id, listImagesLists[i].secret, i, 5);
            $('#muro').append(html);

        }
        paginasLista();
    });
}
function getHtmlInitAux(url_img, msg, id, secret, i, x) {
    var html = "<li style=\"width:370px;height:300px;margin-bottom:50px\" class=\"masonry-item grid foto\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img class=\"listImage\" style=\"width:378px\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetailsAux(\'" + id + "\', \'" + secret + "\', \'" + x + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "<button id=\"button" + i + "\" class=\"addToList\" onclick=\"addImages(" + i + ");\">Añadir</button></li>";
    return html;
}
function getHtmlDetailsAux(x) {
    var html = "<div id=\"destroy\">";
        
        if(x==='3'){
           html = html + "<button id=\"galeria\" class=\"buttonBack\" onclick=\"listaDeGaleria();\">Lista de galeria</button>";
        }else if(x==='4'){
           html = html + "<button id=\"album\" class=\"buttonBack\" onclick=\"listaDeAlbum();\">Lista de album</button>";
        }else if(x==='5'){
           html = html + "<button id=\"grupo\" class=\"buttonBack\" onclick=\"listaDeGrupo();\">Lista de grupo</button>";
        }
    
        html = html +
        "<div>" +
        "<figure class=\"details-image\" id=\"selectedImg\">" +
        "</figure>" +
        "<div class=\"contents\">" +
        "<section class=\"inner-left\">" +
        "<header>" +
        "<h3 id=\"date\"></h3>" +
        "<h4 id=\"realName\"></h4>" +
        "<h5 id=\"alias\"></h5>" +
        "</header>" +
        "</section>" +
        "<div class=\"scroll\"><section class=\"inner-right\" id=\"title\">" +
        "</section>" +
        "<br/>" +
        "<section class=\"inner-right\" id=\"description\">" +
        "</section></div>" +
        "</div>" +
        "<div class=\"panels scroll2\"><div class=\"panel panel-default panels\">" +
        "<div class=\"panel-heading\">Albums</div>" +
        "<div class=\"panel-body\">" +
        "<div class=\"list-group\" id=\"sets\"></div>" +
        "</div>" +
        "</div>" +
        "<div class=\"panel panel-default panels\">" +
        "<div class=\"panel-heading\">Grupos</div>" +
        "<div class=\"panel-body\">" +
        "<div class=\"list-group\" id=\"pools\">" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class=\"panel panel-default panels\">" +
        "<div class=\"panel-heading\">Galerías</div>" +
        "<div class=\"panel-body\">" +
        "<div class=\"list-group\" id=\"galleries\"></div>" +
        "</div>" +
        "</div></div>" +
        "</div>" +
        "</div>";

    return html;
}
function showDetailsAux(id, secret, x) {
    listGallery = [];
    listGallery.length = 0;
    listAlbum = [];
    listaAlbum.length = 0;
    listGroup = [];
    listGroup.length = 0;
    
    $(".foto").remove();
    $('#paginas').addClass("esconder");
    $('#eliminar').addClass("esconder");
    $('#destroy').remove();
    $(".marginBottom").remove();

    var html = getHtmlDetailsAux(x);

    $('#details').append(html);

    chargeDetails(id, secret);
}
