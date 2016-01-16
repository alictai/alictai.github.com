var active_filter = "All";
var btnlookup =	{"All": "All",
				"3D-Creations":"3D Creations",
				"Animation":"Animation",
				"App-Dev":"App Development",
				"Digi-Graphics":"Digital Graphics",
				"Electronics":"Electronics",
				"Games":"Game Design",
				"Minecraft":"Minecraft",
				"Program":"Programming",
				"Robots":"Robotics"};
var max_categories = 8;

$(document).ready(function(){
	renderClasses();
});

$('.course-filter').click(function(){
	var category = $(this).attr("id");
	// console.log(category);
	// console.log(btnlookup[category]);

	//Clicked class is not the current filter
	if(!($(this).hasClass("active"))){
		active_filter = btnlookup[category];
		$(".course-filter").removeClass("active");
		$(this).addClass("active");
	}
	$(".course-listing").remove();
	renderClasses();
});

function renderClasses() {
	console.log(active_filter);
	var num_courses = -1
	for (var i = 0; i < catalog.length; i++) {
		if (active_filter == "All" || active_filter == catalog[i].Course_Categories) {
			num_courses += 1;
			var row_num = Math.floor(num_courses/3);
			var coursestring = "";
			
			coursestring += "<div class=\"col-md-4 course-listing row-number-"+row_num+"\">";
			coursestring += "<div class=\"thumbnail featured-product\">";
			if (catalog[i].Image){
				coursestring += "<img src=\"./images/"+catalog[i].Image+"\" alt=\"\">";
			} else {
				coursestring += "<img src=\"./images/Logo-2.jpg\" alt=\"\">";
			}
			coursestring += "<div class=\"caption\">";
			if (catalog[i].Course_Suffix!="") {
				coursestring += 
					"<h3><span class=\"newclass\"><span class=\"glyphicon glyphicon-star\"></span>"
					+ catalog[i].Course_Suffix +": </span>";
			} else {
				coursestring += "<h3>";
			}
			coursestring += catalog[i].Course_Name + "</h3>";
	        coursestring += "<h5>"+catalog[i].Age+" | "+catalog[i].Course_Length+"</h5>";
	        coursestring += "<p>Prerequisite: "+catalog[i].Prerequisite+"</p>";
	        coursestring += "<p>"+catalog[i].Course_Description+"</p>";
	        coursestring += "<a class=\"btn btn-primary form-control\" href=\"http://register.asapconnected.com/default.aspx?org=2346\" target=\"_blank\">Register Now!</a>";
			coursestring += "</div></div></div>";

			$("#catalog").append(coursestring);
			// console.log(catalog[i]);
		}
	}

	var num_rows = Math.ceil(num_courses / 3);
	for (var j = 0; j < num_rows; j++) {
		// console.log("wrapping row " + j);
		var forWrapping = ".row-number-"+j;
		$(forWrapping).wrapAll("<div class='row' />");
	}
}