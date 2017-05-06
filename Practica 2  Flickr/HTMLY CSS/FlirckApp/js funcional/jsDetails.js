
$(document).ready(function () {
    var cadVariables = location.search.substring(1, location.search.length);
    var arrVariables = cadVariables.split("&");
    var id = arrVariables[0].substring(6, arrVariables[0].length);
    var secret = arrVariables[1].substring(13, arrVariables[1].length);
    
    console.log(id + " ");
    console.log(secret);
    

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + api_key + "&photo_id=" + id + "&secret=" + secret + "&format=json&nojsoncallback=1";

 
    $.getJSON(url, function (data) {
        console.log("OK");
        console.log(data.photos);
        /*$.each(data.photos.photo, function (i, photo) {

        });*/
    });
});
