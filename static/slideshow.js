$(document).ready(function(){
    $("#slideshow .circle").hover(function() {
        var text = $(this).attr("data");
        var background = "url('" + $(this).attr("data-background") + "')";
        $("#slideshow #slogan").hide().html(text).fadeIn("slow");
        $("#slideshow").css("background-image", background);
    }, function() {
        $("#slideshow #slogan").hide().html("The way to get started is to quit talking and begin doing.<br>- Walt Disney").fadeIn("slow");
        $("#slideshow").css("background-image", "url('static/slideshow/base.jpg')");
    });
});
