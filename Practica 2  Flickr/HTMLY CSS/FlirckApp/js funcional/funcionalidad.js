function getHtml(url_img, msg) {
    var html = "<li class=\"masonry-item grid\">" + "\n"
                + "<figure class=\"effect-sarah\">" + "\n"
                    + "<img src= \"" + url_img + "\"alt=\"\" />" + "\n"
                        + "<figcaption>" + "\n"
                            + "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n"
                            + "<a href=\"details.html\">View more</a>" + "\n"
                        + "</figcaption>" + "\n"
                + "</figure>" + "\n"
            + "</li>";
    return html;
}


$(document).ready(function () {
    
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=one+piece+anime+luffy+funny" + "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        console.log("OK");
        $.each(data.photos.photo, function (i, photo) {
            var msg = photo.title;
            var url_img = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
            var html = getHtml(url_img, msg);
            
            $('#muro').append(html);
        });
    });
    
});

$(function () {
    
    var textoABuscar = "";

    $('#enviarBoton').click(function () {
        textoABuscar = $('#textoRecoger').val();
        console.log(textoABuscar);
        
        
        /**$.getJSON(url, descripcion,
            function(data) {

         });**/
     
    });

});