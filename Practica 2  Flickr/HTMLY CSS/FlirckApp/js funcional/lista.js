var listImages = [];
function addImages() {
    $('add-images').click(function (e) {
        e.preventDefault();
        console.log("entré");
        var elements = document.getElementsByClassName("listItem");
        for (var i = 0, len = elements.length; i < len; i++) {
            if (elements[i].val() === true) {
                console.log(listImages.push(elements[i].parentElement().children().namedItem("figure").children().namedItem("img"))); //guardo los imgs

            }
        }
        
        $('#content').append('<p>' + listImages[i].src() + '</p>');

    });
}