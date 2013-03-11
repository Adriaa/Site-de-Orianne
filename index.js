$(document).ready(function(){
	$("#exp_pro").click( function(){
		var exp_pro = Handlebars.templates["exp_pro.html"]();
		$("#content_cv").html(exp_pro);
	});
	$("#formations").click( function(){
		var formations = Handlebars.templates["formations.html"]();
		$("#content_cv").html(formations);
	});	
	$("#pro_inf").click( function(){
		var pro_inf = Handlebars.templates["projets_info.html"]();
		$("#content_cv").html(pro_inf);
	});	
});