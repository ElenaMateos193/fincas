$(function () {
    $('.watchIt').click(function () {
        $('.esconderTodo').css("visibility","visible");
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