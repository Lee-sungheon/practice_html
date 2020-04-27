
$(function(){
//	$(".menu").hover(function(){
//		$(this).find(".sub").show();
//		$(this).find("a:first").addClass("on");
//	}, function(){
//		$(this).find(".sub").css("display","none");
//		$(this).find("a:first").remove(last("on"));
//	});
	
	$(".menu").hover(function(){
		$(this).find(".sub").stop(true).slideDown(300);
		$(this).find("a:first").addClass("on");
	}, function(){
		$(this).find(".sub").stop(true).slideUp(300);
		$(this).find("a:first").remove(last("on"));
	});
});