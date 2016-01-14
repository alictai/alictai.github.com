$(document).ready(function(){
	$(".nav").load("includes/nav.html", function(response, status, xhr) {
		if(status == "success") {
			console.log("navigation loaded");
		} else {
			console.log("navigation failed");
		}
	});
	$(".nav-link").removeClass("active")
	$($(".nav").attr('id')).addClass("active");
	$("footer").load("includes/footer.html", function(response, status, xhr) {
		if(status == "success") {
			console.log("footer loaded");
		} else {
			console.log("footer failed");
		}
	});
});