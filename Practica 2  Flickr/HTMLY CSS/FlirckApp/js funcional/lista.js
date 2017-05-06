var listImages = [];
console.log("Entro en el js por lo menos");

function addImages() {
    console.log("Entro en el js por lo menos 2");
    var elements = document.getElementsByClassName("listImage");
    var checkeds = document.getElementsByName("lista");
    var i;
    var pos=0;
    for (i = 0; i < elements.length; i++) {
        if (checkeds[i].checked) {
            console.log("if");
            listImages.push(elements[i].src);
            console.log(elements[i].src);
            console.log(listImages[pos]);
            $('#content').append('<h5><a href="'+ listImages[pos]+ '">Imagen</a></h5>' + '\n');
            pos++;
        }

    }

}
