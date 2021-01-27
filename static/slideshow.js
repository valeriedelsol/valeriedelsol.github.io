$(document).ready(function(){
    var start_text = $("#slideshow #slogan").html();
    var start_background = $("#slideshow").css("background-image");
    console.log(start_text);
    console.log(start_background);
    $("#slideshow .circle").hover(function() {
        var text = $(this).attr("data");
        var background = "url('" + $(this).attr("data-background") + "')";
        var current_text = $("#slideshow #slogan").html();
        if (current_text > text || current_text < text) {
            $("#slideshow #slogan").hide().html(text).fadeIn("slow");
            $("#slideshow").css("background-image", background);
        }
    }, function() {
        var current_text = $("#slideshow #slogan").html();
        if (current_text > start_text || current_text < start_text) {
            $("#slideshow #slogan").hide().html(start_text).fadeIn("slow");
            $("#slideshow").css("background-image", start_background);
        }
    });
});
