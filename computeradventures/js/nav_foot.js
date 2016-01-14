$(document).ready(function(){
	$(".nav").load("includes/nav.html", function(response, status, xhr) {
		if(status == "success") {
			console.log("navigation loaded");
			$(".nav-link").removeClass("active");
			console.log("attempted to remove active class");
			curr_page = "#nav-" + $(".nav").attr('id');
			console.log("current page is "+curr_page);
			$(curr_page).addClass("active");
			console.log("attempted to add active class");
		} else {
			console.log("navigation failed");
		}
	});
	$("footer").load("includes/footer.html", function(response, status, xhr) {
		if(status == "success") {
			console.log("footer loaded");
		} else {
			console.log("footer failed");
		}
	});
});