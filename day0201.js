$(function(){
  	$(".menuBar").hover(function(){
		$(this).find(".subBar").show();
	}, function(){
		$(this).find(".subBar").css("display","none");
    });
    

    let bannerAction = setInterval(move, 3000);
	
	$(".content1:first").hover(function(){
		clearInterval(bannerAction);
	}, function() {
		bannerAction = setInterval(move, 3000);
	});
	
	function move() {
		$(".imageSlide").animate({"left" : "-1200px"}, 1000, function() {
			$(".imageSlide > div:first").appendTo(".imageSlide");
			$(".imageSlide").css("left", "0");
		});
    }
    
    $(".menuBox li").click(function(){
		$(".menuBox>li").removeClass("on");
		$(this).addClass("on");
		let index = $(this).index();
		$(".contentsBox > div").hide();
		$(".contentsBox > div").eq(index).show();
	});
});