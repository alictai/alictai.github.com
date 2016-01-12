var active_filters=[];
var showing_filter=[];
var btnlookup=	{"All": "All",
						"3D-Print-Model":"3D Printing and Modeling",
						"Animation":"Animation",
						"App-Dev":"App Development",
						"Digi-Graphics":"Digital Graphics",
						"Games":"Game Design",
						"Minecraft":"Minecraft",
						"Program":"Programming",
						"Robots":"Robotics"};

$(document).ready(function(){
	renderClasses();
});

$('.course-filter').click(function(){
	var category = $(this).attr("id");
	// console.log(category);
	// console.log(btnlookup[category]);

	if (!($(this).hasClass("active"))){
		if ($("#All").hasClass("active")){
			$("#All").removeClass("active");
		}
		active_filters.push(btnlookup[category])
		$(this).addClass("active");
		console.log(active_filters);
	} else {
		if (category != "All") {
			$("#All").removeClass("active");
			var index = active_filters.indexOf(btnlookup[category])
			active_filters.splice(index,1);
			$(this).removeClass("active");
			console.log(active_filters);
		}
		if (active_filters.length == 0) {
			$("#All").addClass("active");
		}
	}
	$(".course-listing").remove();
	renderClasses();
});

function renderClasses() {
	console.log(active_filters);
	var num_courses = -1
	for (var i = 0; i < catalog.length; i++) {
		if (active_filters.length == 0 || active_filters.indexOf(catalog[i].Category) != -1) {
			num_courses += 1;
			var row_num = Math.floor(num_courses/4);
			var coursestring = "";
			
			coursestring += "<div class=\"col-sm-6 col-md-3 course-listing row-number-"+row_num+"\">";
			coursestring += "<div class=\"thumbnail featured-product\">";
			if (catalog[i].Img){
				coursestring += "<img src=\"./images/"+catalog[i].Img+"\" alt=\"\">";
			} else {
				coursestring += "<img src=\"./images/Logo-2.jpg\" alt=\"\">";
			}
			coursestring += "<div class=\"caption\">";
			if (catalog[i].Status!="") {
				coursestring += 
					"<h3><span class=\"newclass\"><span class=\"glyphicon glyphicon-star\"></span>"
					+ catalog[i].Status +": </span>";
			} else {
				coursestring += "<h3>";
			}
			coursestring += catalog[i].Title + "</h3>";
	        coursestring += "<h5>"+catalog[i].Age+" | "+catalog[i].Time+"</h5>";
	        coursestring += "<p>"+catalog[i].Description+"</p>";
	        coursestring += "<button class=\"btn btn-primary\" type=\"button\">Register Now!</button>";
			coursestring += "</div></div></div>";

			$("#catalog").append(coursestring);
			// console.log(catalog[i]);
		}
	}

	var num_rows = Math.ceil(num_courses / 4);
	for (var j = 0; j < num_rows; j++) {
		// console.log("wrapping row " + j);
		var forWrapping = ".row-number-"+j;
		$(forWrapping).wrapAll("<div class='row' />");
	}
}