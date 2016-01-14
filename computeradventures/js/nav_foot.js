$(document).ready(function(){
    $.ajax({
    	url: 'nav.txt', 
    	type: 'GET',
    	dataType: 'TEXT',
    	success: function(result){
     	    $("#nav").append(result);
        	console.log("success");
        	//console.log(result);
    	},
    	error: function (req, text, error) {
    		alert(error);
    	}
	});
});