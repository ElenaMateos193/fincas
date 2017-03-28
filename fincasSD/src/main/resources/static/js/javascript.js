$(function () {
    $('.modifyButton').click(function () {
        $('.input').removeAttr("disabled");
        $('.bottonSavePos').css("visibility","visible");
    });
    
    $('.bottonSavePos').click(function () {
        $('.input').attr("readonly","readonly");
        $('.rightAlign').css("visibility","hidden");
        $('.listaPropiedades').attr("href","services-properties.html");
        $('.bottonSavePos').css("visibility","hidden");        
    });
});