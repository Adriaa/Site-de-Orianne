$(document).ready(function(){
	$("#exp_pro").click( function(){
		var exp_pro = Handlebars.templates["exp_pro.html"]();
		$("#content_cv").html(exp_pro);
	});	
});