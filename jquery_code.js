console.log('hello');
$('#nav').load('nav.html', function() {
    console.log("navigation was loaded");
});

$(document).ready(function() {
    $(".load").hide();
    $(".loadone").delay(200).fadeIn("slow");
    $(".loadtwo").delay(700).fadeIn("slow");
});