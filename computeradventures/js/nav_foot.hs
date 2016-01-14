$("button").click(function(){
    $.ajax({url: "nav.html", success: function(result){
        $("#div1").html(result);
    }});
});