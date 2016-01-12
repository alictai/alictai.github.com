// console.log(catalog)

$(document).ready(function(){
	renderClasses();
});

function renderClasses() {
	for (var i = 0; i < catalog.length; i++) {
		var row_num = Math.floor(i/4);
		var loc = i%4
		var coursestring = "";
		
		coursestring += "<div class=\"col-sm-6 col-md-3 row-number-"+row_num+"\">";
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
		}
		coursestring += catalog[i].Title + "</h3>";
        coursestring += "<h5>"+catalog[i].Age+" | "+catalog[i].Time+"</h5>";
        coursestring += "<p>"+catalog[i].Description+"</p>";
        coursestring += "<button class=\"btn btn-primary\" type=\"button\">Register Now!</button>";
		coursestring += "</div></div></div>";

		$("#catalog").append(coursestring);

		if(loc == 3) {
			var forWrapping = ".row-number-"+row_num;
			$(forWrapping).wrapAll("<div class='row' />");
		}

		// console.log(catalog[i]);
	}
	for (var j = 0; j < catalog.length%4; j++) {

	}
}