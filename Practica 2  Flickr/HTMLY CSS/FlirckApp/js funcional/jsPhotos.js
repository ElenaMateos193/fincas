var textoABuscar;
var id;
var url_img;
var secret;

function getHtml(url_img, msg, id, secret) {
    var html = "<li class=\"masonry-item grid foto\">" + "\n" +
        "<input type=\"checkbox\" class=\"listItem\" name=\"lista\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a href=\"javascript:pasarParam('details.html', '" + "id, " + id + ", " + "secret, " + secret + "')\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "</li>";
    return html;
}

function pasarParam(pagina, nombres) {
    var i = 0;
    pagina += "?";
    var nomVec = nombres.split(",");
    while (i < nomVec.length) {
        pagina += nomVec[i] + "=" + nomVec[i + 1] + "&";
        i = i + 2;
    }
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;

}



function searchPhotos() {

    $(".foto").remove();

    var textoABuscar = $('#textoRecoger').val();

    apiPhotos(textoABuscar);

}

function apiPhotos(textoABuscar) {

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=" + textoABuscar + "&format=json&nojsoncallback=1";

    $.getJSON(url, function (data) {
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            id = photo.id;
            secret = photo.secret;
            url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var html = getHtml(url_img, msg, id, secret);
            
            $('#muro').append(html);
        });
    });
}
