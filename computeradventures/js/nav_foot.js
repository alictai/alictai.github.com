$(document).ready(function(){
    $.ajax({
    	url: 'nav.txt', 
    	type: 'GET',
    	dataType: 'TEXT',
    	success: function(result){
     	    // $("#nav").html(result);
     	    $("#nav").append("<p>hello</p>");
        	console.log("success");
        	//console.log(result);
    	},
    	error: function (req, text, error) {
    		alert(error);
    	}
	});
});