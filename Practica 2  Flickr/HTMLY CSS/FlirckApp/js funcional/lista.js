var listImages = [];
$(document).ready(function () {
            $('#add-images').click(function (e) {
                    var elements = document.getElementsByClassName("listItem");
                    for (var i = 0, len = elements.length; i < len; i++) {
                        if (elements[i].val() === true {
                                listImages.push(elements[i].parentElement().children().namedItem("figure").children().namedItem("img"));
                            }
                        }
                        e.preventDefault();
                        var text = $('#text').val();
                        $('#text').val('');
                        console.log(text);

                        $('#content').append('<p>' + text + '</p>');

                    })
            })