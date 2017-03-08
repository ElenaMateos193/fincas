$(function () {
    $('.button-followers').mouseenter(function () {
        $(this).text("Unfollow ");
        $(this).append("<i class =\"fa fa-times\" aria-hidden=\"true\"></i>");
        $(this).removeClass("btn-success").addClass("btn-danger");
    }).mouseleave(function () {
        $(this).text("Following");
        $(this).removeClass("btn-danger").addClass("btn-success");
    });

    $('.button-follow-user').click(function () {
        $(this).remove();
    });

    $('#follow').click(function () {
        if ($(this).text() === 'Follow') {
            $(this).text("Following");
            $(this).css("background-color", "#b9e1ff");
        } else {
            $(this).text("Follow");
            $(this).css("background-color", "#42a7f4");
        }
    });
});
