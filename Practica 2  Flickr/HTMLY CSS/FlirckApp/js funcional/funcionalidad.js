
function getHtmlInit(url_img, msg, id, secret) {
    var html = "<li class=\"masonry-item grid foto\">" + "\n"
                + "<div class=\"listItem\">" +"\n"
                    + "<input type=\"checkbox\" name=\"lista\">" + "\n"
                    + "<figure class=\"effect-sarah\">" + "\n"
                        + "<img class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n"
                        + "<button id=\"#popUpImagen\" onclick=\"addPopUp("+ url_img + ");\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">Ver Imagen</button>" + "\n"
                    + "</figure>" + "\n"
                + "</div>" + "\n"
            + "</li>";
    return html;
}
function addPopUp(url){
    console.log("Entre en el popup");
    var imagen = "<img src=\"" + url + "\"/>";
    $("#imagenGrande").append(imagen);
}
function addPopUp2(url){
    console.log("Entre en el popup");
    var imagen = "<img src=\"" + url + "\"/>";
    $("#imagenGrande2").append(imagen);
}
$(document).ready(function () {
    
     var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=" + "flowers" + "&format=json&nojsoncallback=1";
    $.getJSON(url, function (data) {
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            var id = photo.id;
            var secret = photo.secret;
            var url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var html = getHtmlInit(url_img, msg, id, secret);
            
            $('#muro').append(html);
        });
    });
    
     $('#enviarBoton').click(function (event) {
            event.preventDefault();
    });
    
     $('#enlace').click(function (event) {
        event.preventDefault();
         console.log("se ejecuta");
    });
    $('#add-images').click(function (e) {
        e.preventDefault();   
    });
    $('#popUpImagen').click(function (e) {
        e.preventDefault();   
    });

});