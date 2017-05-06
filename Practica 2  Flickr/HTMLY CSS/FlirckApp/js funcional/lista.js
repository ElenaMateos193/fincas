var listImages = [];
console.log("Entro en el js por lo menos");
$('#add-images').click(function () {
    
    var elements = document.getElementsByClassName("listImage");
    var i;
    for (i = 0; i < elements.length;  i++) {
        if (elements[i].children('input').isChecked) {
            listImages.push(elements[i].children('figure').children('img').attr('src'));

        }
    }

    $('#content').append('<img src="' + listImages[i] + '">' + '</img>');
    
});
