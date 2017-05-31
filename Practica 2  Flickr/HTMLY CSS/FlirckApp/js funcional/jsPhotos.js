var textoABuscar;
var text;
var listaPhoto = [];
var cont;

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

function getHtml(url_img, msg, id, secret) {
    var html = "<li style=\"width:378px;height:300px\" class=\"masonry-item grid foto\">" + "\n" +
        "<input type=\"checkbox\" class=\"listItem\" name=\"lista\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img style=\"width:378px\" class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetails(\'" + id + "\', \'" + secret + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "</li>";
    return html;
}

function getHtmlDetails() {
    var html = "<div id=\"destroy\">" +
        "<button id=\"back\" type=\"submit\" onclick=\"restaurar();\">Atrás</button>" +
        "<div class=\"wrapper-inner\">" +
        "<figure class=\"details-image\" id=\"selectedImg\">" +
        "</figure>" +
        "<div class=\"details-content\">" +
        "<section class=\"inner-left\">" +
        "<header>" +
        "<h3 id=\"date\"></h3>" +
        "<h4 id=\"realName\"></h4>" +
        "<h5 id=\"alias\"></h5>" +
        "</header>" +
        "</section>" +
        "<section class=\"inner-right\" id=\"title\">" +
        "</section>" +
        "</div>" +
        "<div class=\"panel panel-default\">" +
        "<div class=\"panel-heading\">Albums</div>" +
        "<div class=\"panel-body\">" +
        "<div class=\"list-group\" id=\"sets\"></div>" +
        "</div>" +
        "</div>" +
        "<div class=\"panel panel-default\">" +
        "<div class=\"panel-heading\">Grupos</div>" +
        "<div class=\"panel-body\">" +
        "<div class=\"list-group\" id=\"pools\">" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class=\"panel panel-default\">" +
        "<div class=\"panel-heading\">Galerías</div>" +
        "<div class=\"panel-body\">" +
        "<div class=\"list-group\" id=\"galleries\"></div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

    return html;
}

function restaurar() {
    if (text !== undefined) {
        searchPhotosAux(text);
    } else {
        searchPhotosAux("flowers");
    }
}

function saveText(textx) {
    text = textx;
}

function showDetails(id, secret) {

    $(".foto").remove();
    $('#destroy').remove();

    var html = getHtmlDetails();

    $('#details').append(html);

    chargeDetails(id, secret);
}

function chargeDetails(id, secret) {

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + api_key + "&photo_id=" + id + "&secret=" + secret + "&format=json&nojsoncallback=1";


    $.getJSON(url, function (data) {
        var url_img = "https://farm" + data.photo.farm + ".staticflickr.com/" + data.photo.server + "/" + data.photo.id + "_" + data.photo.secret + "_h.jpg";

        $('#selectedImg').append("<img src=\"" + url_img + "\"  class=\"img-responsive\" />");
        $('#date').append(data.photo.dates.taken);
        $('#realName').append(data.photo.owner.realname);
        $('#alias').append("Alias: " + data.photo.owner.path_alias);
        $('#title').append("<p>" + data.photo.title._content + "</p>");
    });

    var url_context = "https://api.flickr.com/services/rest/?method=flickr.photos.getAllContexts&api_key=" + api_key + "&photo_id=" + id + "&format=json&nojsoncallback=1";

    $.getJSON(url_context, function (data) {
        if (data.set) {
            $.each(data.set, function (i, set) {
                $('#sets').append("<a href=\"#\" class=\"list-group-item\">" + set.title + "</a>");
            });
        } else {
            $('#sets').append("<a href=\"#\" class=\"list-group-item\">No está en ningún album</a>");
        }
        if (data.pool) {
            $.each(data.pool, function (i, pool) {
                $('#pools').append("<a href=\"#\" class=\"list-group-item\">" + pool.title + "</a>");
            });
        } else {
            $('#pools').append("<a href=\"#\" class=\"list-group-item\">No está en ningún grupo</a>");
        }
    });

    var url_galleries = "https://api.flickr.com/services/rest/?method=flickr.galleries.getListForPhoto&api_key=" + api_key + "&photo_id=" + id + "&format=json&nojsoncallback=1";

    $.getJSON(url_galleries, function (data) {
        if (data.galleries.total != 0) {
            $.each(data.galleries.gallery, function (i, gallery) {
                $('#galleries').append("<a href=\"#\" class=\"list-group-item\">" + gallery.title._content + "</a>");
            });
        } else {
            $('#galleries').append("<a href=\"#\" class=\"list-group-item\">No está en ninguna galleria</a>");
        }
    });
}

function searchPhotos() {

    $(".foto").remove();

    var textoABuscar = $('#textoRecoger').val();

    apiPhotos(textoABuscar);


}

function searchPhotosAux(text) {
    $('#destroy').remove();

    apiPhotos(text);
}

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
            var html = getHtml(list[j].url_img, list[j].msg, list[j].id, list[j].secret);

            $('#muro').append(html);

        }
        cont = 1;
        var elem = document.getElementsByClassName("selected");
        elem[0].removeAttribute("class");        
        $('#0').addClass('selected');

    });
}

/*function navigate(pos) {
    var elem = document.getElementById(cont - 1);
    elem.removeAttribute("class");
    var e = document.getElementById(pos);
    e.className = "selected";
    cont = pos + 1;
}*/
