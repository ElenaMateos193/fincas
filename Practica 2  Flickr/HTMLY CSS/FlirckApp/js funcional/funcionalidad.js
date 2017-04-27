$(function () {
    
    var textoABuscar = "";

    $('#enviarBoton').click(function () {
        textoABuscar = $('#textoRecoger').val();
        console.log(textoABuscar);
    });
    /**
    $.getJSON(url, descripcion,
        function(data) {

     });
     **/

});