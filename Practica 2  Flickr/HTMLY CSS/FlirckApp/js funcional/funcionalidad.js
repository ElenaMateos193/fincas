var id;
var secret;
var url_img;
var list = [];
var cont;

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

function getHtmlInit(url_img, msg, id, secret, i) {
    var html = "<li style=\"width:370px;height:300px;margin-bottom:50px\" class=\"masonry-item grid foto\">" + "\n" +
        "<figure class=\"effect-sarah\">" + "\n" +
        "<img class=\"listImage\" style=\"width:378px\" src= \"" + url_img + "\"alt=\"\" />" + "\n" +
        "<figcaption>" + "\n" +
        "<h2>" + msg.substring(0, 30) + " ..." + "</h2>" + "\n" +
        "<a id=\"enlace\" onclick=\"showDetails(\'" + id + "\', \'" + secret + "\');\">View more</a>" + "\n" +
        "</figcaption>" + "\n" +
        "</figure>" + "\n" +
        "<button id=\"button" + i + "\" class=\"addToList\" onclick=\"addImages(" + i + ");\">Añadir</button></li>";
    return html;
}
function navigate(pos) {
    //Cada vez que se pulse una página se ejecuta este método que me cambiará las fotos de la página por las correspondientes a la página pulsada y me seleccionará el número pulsado para informarnos de la página
    //en la que estamos
    var elem = document.getElementById(cont - 1);
    elem.removeAttribute("class");
    var e = document.getElementById(pos);
    e.className = "selected";
    $(".foto").remove();
    $('#eliminar').addClass("esconder");
    $('#back').addClass("esconder");
    var i;
    for (i = (pos * 10 + 1); (i <= ((pos + 1) * 10)); i++) {
        var html = getHtmlInit(list[i].url_img, list[i].msg, list[i].id, list[i].secret, i);
        $('#muro').append(html);

    }


    cont = pos + 1;
}
function paginas() {
    //Organizaremos las páginas de 10 en 10. Cada número de la página será un enlace que me mostrará las 10 fotos correspondientes a esa sección. P.e si pulsamos el 1 se mostrarán de la foto 1 a la 10 y si pulsamos
    //el 3 se mostrarán desde la foto 31 a la 40
        cont = 1;
        var pos;
    //Si tenemos un número multiplo de 10 entonces nos aseguramos que si tenemos 40 fotos solo haya botones del 1 al 3 pues el 3 me mostraría las fotos 31 y 40. Mientras que si el número no es múltiplo de 10 nos aseguramos
    //que si ahi 31 fotos haya botones del 1 al 3 y no se quede en solo 2
        if ((list.length % 10) === 0) {
            pos = (list.length / 10);
        } else {
            pos = Math.trunc(list.length / 10) + 1;
        }
        var x;
        var sum;
        for (x = 0; x < pos; x++) {
            sum = x + 1;
            $('#pag').append("<li class=\"numeros\"><a id=\"" + x + "\" onclick=\"navigate(" + x + ");\">" + sum + "</a></li>");
        }
    //Nos mantenemos en la página 1 por defecto y para ello le damos un estilo diferente al resto.
        $('#0').addClass('selected');
    
}
$(document).ready(function () {
    $('#eliminar').addClass("esconder");
    $('#back').addClass("esconder");

    //Llamada a la api para conseguir la lista de fotos, en un principio por defecto, de flores y guardará ciertos datos en una estructura llamada Photos que se añadirá a una lista de fotospara poder acceder luego a ella
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
        //Cogemos cada una de las fotos guardada en la lista y las imprimimos de diez en diez
        var i;
        for (i = 0; ((i < list.length) && (i < 10)); i++) {
            //metodo que me devuelve un string con la estructura en html de cada foto
            var html = getHtmlInit(list[i].url_img, list[i].msg, list[i].id, list[i].secret, i);
            $('#muro').append(html);

        }
        //metodo que me organiza en páginas
        paginas();
    });

    //Evitamos la acción por defecto de los enlaces para que no se nos recargue la página y se pierdan los datos
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
    $('#indice').click(function (event) {
        event.preventDefault();
    });


});
