var textoABuscar;
var text;
var cont;
var listGallery = [];
var listAlbum = [];
var listGroup = [];
var listImages = [];
var listaGalleria = [];
var listaAlbum = [];
var listaGroup = [];
var listImagesLists = [];

function crearGallery(i, t) {
    var Gallery = {
        id: i,
        title: t,
        toString: function () {}
    };

    return Gallery;
}
function crearAlbum(i, t) {
    var Album = {
        id: i,
        title: t,
        toString: function () {}
    };

    return Album;
}
function crearGrupo(i, t) {
    var Grupo = {
        id: i,
        title: t,
        toString: function () {}
    };

    return Grupo;
}

function crearPhotoBusqueda(url, m, i, s) {
    var Photo = {
        url_img: url,
        msg: m,
        id: i,
        secret: s,
        toString: function () {}
    };

    return Photo;
}

function getHtml(url_img, msg, id, secret, i, x) {
    var html = "<li style=\"width:370px;height:300px;margin-bottom:50px\" class=\"masonry-item grid foto\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img style=\"width:378px\" class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetails(\'" + id + "\', \'" + secret + "\', \'" + x + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "<button id=\"button" + i + "\" class=\"addToList\" onclick=\"addImages(" + i + ");\">Añadir</button></li>";
    return html;
}

//Me devuelve un string con el código html que tenemos que poner para ver los detalles de la foto pulsada
function getHtmlDetails(x) {
    var html = "<div id=\"destroy\">" + "<button id=\"back\" class=\"buttonBack\" type=\"submit\" onclick=\"restaurar(\'" + x + "\');\">Atrás</button>" +
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

//Cuando se pulse a un botón que pongá atrás me restaurará la información de búsqueda (ya sean las flores por defecto o la busqueda nuestra) empezando desde la página 1
function restaurar(x) {
    $('#eliminar').addClass("esconder");
    $('#paginas').removeClass("esconder");
    $(".foto").remove();
    $(".buttonRemove").remove();    
    $(".buttonBack").remove();
    
    if(x==='1'){
        $('#index').addClass("active");
        $('#listaDeAlbum').removeClass("active");
        $('#listaDeGrupo').removeClass("active");
        $('#listaDeGaleria').removeClass("active");
        $('#listaDeFotos').removeClass("active");

        if (text !== undefined) {
            searchPhotosAux(text);
        } else {
            searchPhotosAux("flowers");
        }
    }else if(x==='2'){
        $('#index').removeClass("active");
        $('#listaDeAlbum').removeClass("active");
        $('#listaDeGrupo').removeClass("active");
        $('#listaDeGaleria').removeClass("active");
        $('#listaDeFotos').addClass("active");
        
        listaDeFotos();         
    }else if(x==='6'){
        $('#index').removeClass("active");
        $('#listaDeAlbum').removeClass("active");
        $('#listaDeGrupo').removeClass("active");
        $('#listaDeGaleria').addClass("active");
        $('#listaDeFotos').removeClass("active");
        
        listaDeGaleria();  
    }else if(x==='7'){        
        $('#index').removeClass("active");
        $('#listaDeAlbum').addClass("active");
        $('#listaDeGrupo').removeClass("active");
        $('#listaDeGaleria').removeClass("active");
        $('#listaDeFotos').removeClass("active");
        
        listaDeAlbum();        
    }else if(x==='8'){
        $('#index').removeClass("active");
        $('#listaDeAlbum').removeClass("active");
        $('#listaDeGrupo').addClass("active");
        $('#listaDeGaleria').removeClass("active");
        $('#listaDeFotos').removeClass("active");
        
        listaDeGrupo();       
    }
}


function saveText(textx) {
    text = textx;
}

//Me muestra los detalles de una foto al pulsar sobre ella
function showDetails(id, secret, x) {
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
    $(".buttonBack").remove();

    var html = getHtmlDetails(x);

    $('#details').append(html);

    chargeDetails(id, secret);
}

//Hace llamadas a la api para conseguir la información de las fotos, así como los albunes, grupos y galerias de dicha foto
function chargeDetails(id, secret) {

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + api_key + "&photo_id=" + id + "&secret=" + secret + "&format=json&nojsoncallback=1";


    $.getJSON(url, function (data) {
        var url_img = "https://farm" + data.photo.farm + ".staticflickr.com/" + data.photo.server + "/" + data.photo.id + "_" + data.photo.secret + "_h.jpg";

        $('#selectedImg').append("<img src=\"" + url_img + "\"  class=\"img-responsive\" />");
        $('#date').append(data.photo.dates.taken);
        $('#realName').append(data.photo.owner.realname);
        $('#alias').append("Alias: " + data.photo.owner.path_alias);
        $('#title').append("Title:<p>" + data.photo.title._content + "</p>");
        $('#description').append("Description:<p>" + data.photo.description._content + "</p>");
    });

    //var url_context = "https://api.flickr.com/services/rest/?method=flickr.photos.getAllContexts&api_key=" + api_key + "&photo_id=" + "2402594277" + "&format=json&nojsoncallback=1";
    var url_context = "https://api.flickr.com/services/rest/?method=flickr.photos.getAllContexts&api_key=" + api_key + "&photo_id=" + id + "&format=json&nojsoncallback=1";

    $.getJSON(url_context, function (data) {
        if (data.set) {
            $.each(data.set, function (i, set) {
                var aux = crearAlbum(set.id, set.title);
                listAlbum.push(aux);
            });
        } else {
            $('#sets').append("<a href=\"#\" class=\"list-group-item\">No está en ningún album</a>");
        }
        var a;
        for (a = 0; a < listAlbum.length; a++) {
                $('#sets').append("<p class=\"list-group-item\">" + listAlbum[a].title + "<button id=\"buttonAlbum" + a + "\" class=\"addTo\" onclick=\"addAlbum(" + a + ");\">Añadir</button></p>");
        }
        if (data.pool) {
            $.each(data.pool, function (i, pool) {
                var aux = crearGrupo(pool.id, pool.title);
                listGroup.push(aux);
            });
        } else {
            $('#pools').append("<a href=\"#\" class=\"list-group-item\">No está en ningún grupo</a>");
        }
        var b;
        for (b = 0; b < listGroup.length; b++) {
                $('#pools').append("<p class=\"list-group-item\">" + listGroup[b].title + "<button id=\"buttonGroup" + b + "\" class=\"addTo\" onclick=\"addGroup(" + b + ");\">Añadir</button></p>");
        }
    });

    //var url_galleries = "https://api.flickr.com/services/rest/?method=flickr.galleries.getListForPhoto&api_key=" + api_key + "&photo_id=" + "13118008555" + "&format=json&nojsoncallback=1";
    var url_galleries = "https://api.flickr.com/services/rest/?method=flickr.galleries.getListForPhoto&api_key=" + api_key + "&photo_id=" + id + "&format=json&nojsoncallback=1";

    $.getJSON(url_galleries, function (data) {
        if (data.galleries.total != 0) {
            $.each(data.galleries.gallery, function (i, gallery) {
                var aux = crearGallery(gallery.id, gallery.title._content);
                listGallery.push(aux);
            });
        } else {
            $('#galleries').append("<p class=\"list-group-item\">No está en ninguna galleria</p>");
        }
    
        var z;
        for (z = 0; z < listGallery.length; z++) {
                $('#galleries').append("<p class=\"list-group-item\">" + listGallery[z].title + "<button id=\"buttonGallery" + z + "\" class=\"addTo\" onclick=\"addGalleries(" + z + ");\">Añadir</button></p>");
        }
    });
}

//Me muestra el resultado de la búsqueda
function searchPhotos() {

    $(".foto").remove();
    $('#destroy').remove();
    $('#eliminar').addClass("esconder");
    $(".buttonRemove").remove();
    $('#paginas').removeClass("esconder");

    var textoABuscar = $('#textoRecoger').val();

    apiPhotos(textoABuscar);


}
//Método auxiliar para ayudarnos a recuperar los datos anteriores
function searchPhotosAux(text) {
    $(".foto").remove();
    $('#destroy').remove();
    $('#eliminar').addClass("esconder");
    $(".buttonRemove").remove();
    $('#paginas').removeClass("esconder");

    apiPhotos(text);
}

//Me busca las fotos que queremos y me las introduce en una lista
function apiPhotos(textoABuscar) {
    list = [];
    list.length = 0;

    saveText(textoABuscar);

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=" + textoABuscar + "&format=json&nojsoncallback=1";

    $.getJSON(url, function (data) {
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            id = photo.id;
            secret = photo.secret;
            url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var aux = crearPhotoBusqueda(url_img, msg, id, secret);
            list.push(aux);
        });

        var j;
        for (j = 0; ((j < list.length) && (j < 10)); j++) {
            var html = getHtml(list[j].url_img, list[j].msg, list[j].id, list[j].secret, j, 1);

            $('#muro').append(html);

        }
        $(".numeros").remove();
        cont = 1;
        $(".selected").removeClass("selected");
        paginas();
        $('#0').addClass('selected');

    });
}
