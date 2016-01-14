$(document).ready(function(){
	$(".nav").load("includes/nav.html", function(response, status, xhr) {
		if(status == "success") {
			console.log("navigation loaded");
		} else {
			console.log("navigation failed");
		}
	});
	$(".nav-link").removeClass("active")
	curr_page = $(".nav").attr('id')
	console.log("current page is "+curr_page);
	$("#"+curr_page).addClass("active");
	$("footer").load("includes/footer.html", function(response, status, xhr) {
		if(status == "success") {
			console.log("footer loaded");
		} else {
			console.log("footer failed");
		}
	});
});