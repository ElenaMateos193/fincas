var listImages = [];
var listaGalleria = [];
var pos = 0;

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
function getHtmlListaGalerias(url_img, id, title, i) {
    var html = "<li style=\"width:378px;height:300px;margin-bottom:50px\" class=\"masonry-item grid foto\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img style=\"width:378px\" class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + title.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetailsGallery(\'" + id + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "<button id=\"buttonGalleryRemove" + i + "\" class=\"addToList\" onclick=\"removeGallery(" + i + ");\">Eliminar</button></li>";
    return html;
}

//Nos elimina una imagen de la lista de fotos seleccionadas
function removeImages(x) {
    listImages.splice(x, 1);
    console.log(listImages.length);
    listaFotosAux();
}
//Nos elimina una galeria de la lista de galerias seleccionadas
function removeGallery(x) {
    listaGalleria.splice(x, 1);
    listaGalleriesAux();
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
        var html = getHtmlListaFotos(listImages[j].url_img, listImages[j].msg, listImages[j].id, listImages[j].secret, j);

        $('#muro').append(html);
    }    
}
//Nos ayuda a mostrar las galerias de la lista una vez eliminada solamente una galeria
function listaGalleriesAux() {
    $(".foto").remove();
    var j;
    for (j = 0; j < listImages.length; j++) {
        var html = getHtmlListaGalerias(listaGalleria[j].url_img, listaGalleria[j].id, listaGalleria[j].title, j);

        $('#muro').append(html);
    }    
}
//Me añade galerias a la lista de galerias
function addGalleries(x) {
    listaGalleria.push(listGallery[x]);
    $('#buttonGallery' + x).addClass("selected");
    $('#badgeGaleria').text(listGallery.length);
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
    
    var j;
    for (j = 0; j < listaGalleria.length; j++) {
        var html = getHtmlListaGalerias(listaGalleria[j].url_img, listaGalleria[j].id, listaGalleria[j].title, j);

        $('#muro').append(html);
    }
    
}
