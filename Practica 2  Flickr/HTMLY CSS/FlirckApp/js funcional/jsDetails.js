
$(document).ready(function () {
    var cadVariables = location.search.substring(1, location.search.length);
    var arrVariables = cadVariables.split("&");
    var id = arrVariables[0].substring(6, arrVariables[0].length);
    var secret = arrVariables[1].substring(13, arrVariables[1].length);
    
    
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + api_key + "&photo_id=" + id + "&secret=" + secret + "&format=json&nojsoncallback=1";

 
    $.getJSON(url, function (data) {
        var url_img = "https://farm" + data.photo.farm + ".staticflickr.com/" + data.photo.server + "/" + data.photo.id + "_" + data.photo.secret + "_h.jpg";
        
        $('#selectedImg').append("<img src=\"" + url_img + "\"  class=\"img-responsive\" />");
        $('#date').append(data.photo.dates.taken);
        $('#realName').append(data.photo.owner.realname);
        $('#alias').append("Alias: "+data.photo.owner.path_alias);
        $('#title').append("<p>" + data.photo.title._content + "</p>");
    });
    
    url="https://api.flickr.com/services/rest/?method=flickr.photos.getAllContexts&api_key=" + api_key +"&photo_id=" + id + "&format=json&nojsoncallback=1";
    
    $.getJSON(url, function (data) {
        /*$.each(data, function (i, data) {            
            console.log(data.pool);
            //$('#sets').append("<a href=\"#\" class=\"list-group-item\">" + set.title + "</a>");
        });*/
    });
});
