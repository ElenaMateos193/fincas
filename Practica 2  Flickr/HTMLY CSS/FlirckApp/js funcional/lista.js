var listImages = [];
var pos = 0;

function addImages() {
    var elements = document.getElementsByClassName("listImage");
    var checkeds = document.getElementsByName("lista");
    var i;
    for (i = 0; i < elements.length; i++) {
        if (checkeds[i].checked) {
            listImages.push(elements[i].src);
            var elems = listImages[pos].split('/');
            var variables = elems[4].split('_');
            var id = variables[0];
            var secret = variables[1];
            console.log(id);
            console.log(secret);
            console.log(listImages[pos]);
            $('#content').append("<h5><a  id=\"enlace\" onclick=\"showDetails(\'" + id + "\', \'" + secret + "\');\">Imagen</a></h5>" + '\n');
            pos++;
            id = "";
            secret = "";
            elems = null;
            variables = null;
        }

    }
    for (i = 0; i < elements.length; i++) {
        checkeds[i].checked = false;
    }




}
