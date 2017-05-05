var textoABuscar;
function getHtml(url_img, msg, id, secret) {
    var html = "<li class=\"masonry-item grid foto\">" + "\n"
                + "<input type=\"checkbox\" class=\"listItem\" name=\"lista\">" + "\n"
                + "<figure class=\"effect-sarah\">" + "\n"
                    + "<img class=\"listImage\" src= \"" + url_img + "\"alt=\"\" />" + "\n"
                        + "<figcaption>" + "\n"
                            + "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n"
                            + "<a href=\"details.html\" onclick=\"content('" + url_img + "','" + id + "','" + secret + "');\">View more</a>" + "\n"
                        + "</figcaption>" + "\n"
                + "</figure>" + "\n"
            + "</li>";
    return html;
}


function content(url_img, id, secret) {
    
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + api_key + "&photo_id=" + id + "&secret=" + secret +  "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        console.log("Dentro");
        $.each(data.photos.photo, function (i, photo) {
            
        });
    });
}

function searchPhotos() {
    
        $(".foto").remove();
    
        var textoABuscar = $('#textoRecoger').val();
            
        apiPhotos(textoABuscar);
        
}

function apiPhotos(textoABuscar){
       
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=" + textoABuscar + "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            var id = photo.id;
            var secret = photo.secret;
            var url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var html = getHtml(url_img, msg, id, secret);
            
            $('#muro').append(html);
        });
    });
}

$(document).ready(function () {
    
    apiPhotos("flowers");
    
     $('#enviarBoton').click(function (event) {
            event.preventDefault();
    });

});