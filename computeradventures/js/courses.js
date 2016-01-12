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
		coursestring += "<img src=\"images/enrichment.jpg\" alt=\"\">";
		coursestring += "<div class=\"caption\">";
		coursestring += "<h3>"+catalog[i].Title+"</h3>";
		//+"   <font color=\"red\">"+catalog[i].Status+"</font>
        coursestring += "<h5>"+catalog[i].Age+" | "+catalog[i].Time+"</h5>";
        coursestring += "<p>"+catalog[i].Description+"</p>";
        coursestring += "<button class=\"btn btn-primary\" type=\"button\">Register Now!</button>";
		coursestring += "</div></div></div>";

		$("#catalog").append(coursestring);

		if(loc == 3) {
			var forWrapping = ".row-number-"+row_num;
			console.log("wrapping " + forWrapping);
			$(forWrapping).wrapAll("<div class='row' />");
		}

		// console.log(catalog[i]);
	}
	for (var j = 0; j < catalog.length%4; j++) {

	}
}