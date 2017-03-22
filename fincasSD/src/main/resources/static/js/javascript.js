$(function () {
    $('.mostrar').click(function () {
        $('.aniadirPropiedad').css("visibility","visible");
    });
    $('.esconder').click(function () {
        $('.aniadirPropiedad').css("visibility","hidden");
    });
    
    $('.modifyButton').click(function () {
        $('.input').removeAttr("readonly");
        $('.rightAlign').css("visibility","visible");
        $('.listaPropiedades').removeAttr("href");
        $('.bottonSavePos').css("visibility","visible");
    });
    
    $('.bottonSavePos').click(function () {
        $('.input').attr("readonly","readonly");
        $('.rightAlign').css("visibility","hidden");
        $('.listaPropiedades').attr("href","services-properties.html");
        $('.bottonSavePos').css("visibility","hidden");        
    });
    
    $('.rightAlign').click(function () {
        $(this).parent().remove();
    });
});