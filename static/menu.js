$(document).ready(function(){
    $(window).click(function() {
        if ($("#menu").is(":visible")) {
            $("#menu-content").hide();
            $("#menu").css("background", "none");
            $("#menu").css("box-shadow", "none");
        }
    });
    $("#menu").click(function(event) { event.stopPropagation(); });
    $("#menu-toggler").click(function() {
        $("#menu-content").toggle(0, function() {
            if ($(this).is(":visible")) {
                $("#menu").css("background", "white");
                $("#menu").css("box-shadow", "0px 3px 7px rgba(0, 0, 0, 0.1)");
            }
            else {
                $("#menu").css("background", "none");
                $("#menu").css("box-shadow", "none");
            }
        });
    });
});
