var id;
var secret;
var url_img;
var list = [];

function crearPhoto(url, m, i, s) {
    var Photo = {
        url_img: url,
        msg: m,
        id: i,
        secret: s,
        toString: function () {}
    };
    
    return Photo;
}

function getHtmlInit(url_img, msg, id, secret) {
    var html = "<li class=\"masonry-item grid foto\">" + "\n" +
        "<div class=\"listItem\">" + "\n" +
        "<input type=\"checkbox\" name=\"lista\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetails(\'" + id + "\', \'" + secret + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "</div>" + "\n" +
        "</li>";
    return html;
}
$(document).ready(function () {

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=" + "flowers" + "&format=json&nojsoncallback=1";
    $.getJSON(url, function (data) {
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            id = photo.id;
            secret = photo.secret;
            url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var aux = crearPhoto(url_img, msg, id, secret);
            list.push(aux);

        });
        var i;
        for (i = 0; i < list.length; i++) {
            var html = getHtmlInit(list[i].url_img, list[i].msg, list[i].id, list[i].secret);
            $('#muro').append(html);

        }
    });

    $('#enviarBoton').click(function (event) {
        event.preventDefault();
    });

    $('#enlace').click(function (event) {
        event.preventDefault();
    });
    $('#add-images').click(function (e) {
        e.preventDefault();
    });
    $('#back').click(function (event) {
        event.preventDefault();
    });

});
