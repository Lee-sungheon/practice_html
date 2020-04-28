
$(function(){
	//컨테이너의 위치를 이용하는 배너
	/*
	let bannerAction = setInterval(move, 3000);
	let position = 0;
	$("section:first").hover(function(){
		clearInterval(bannerAction);
	}, function(){
		bannerAction = setInterval(move, 3000);
	});
	
	function move() {
		position = ++position % 3;
		$(".container").animate({"left" : -640 * position + "px"}, 1000);
	}
	
	$("button:first").click(function(){
		position = --position % 3;
		if(position < 0) position = 2;
		$(".container").stop(true).animate({"left" : -640 * position + "px"}, 1000);
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	
	$("button:last").click(function(){
		move();
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});*/
	
	let bannerAction = setInterval(move, 3000);
	
	$("section:first").hover(function(){
		clearInterval(bannerAction);
	}, function() {
		bannerAction = setInterval(move, 3000);
	});
	
	function move() {
		$(".container").animate({"left" : "-640px"}, 1000, function() {
			$(".container > div:first").appendTo(".container");
			$(".container").css("left", "0");
		});
	}
	
	function move2() {
		$(".container").animate({"left" : "0"}, 1000, function() {
			$(".container > div:last").prependTo(".container");
			$(".container").css("left", "-640px");
		});
	}
	
	$("button:first").click(function(){
		if($(".container").queue().length > 0) {
			return false;
		}
		move2();
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	
	$("button:last").click(function(){
		if($(".container").queue().length > 0) {
			return false;
		}
		move();
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	
	$("html, body").on("mousewheel DOMMouseScroll", function(e){
		if(e.originalEvent.wheelDelta == 150 || e.originalEvent.detail == -3) {
			if($(".container").queue().length > 0) {
				return false;
			}
			move2();
			clearInterval(bannerAction);
			bannerAction = setInterval(move, 3000);
		} else if(e.originalEvent.wheelDelta == -150 || e.originalEvent.detail == 3) {
			if($(".container").queue().length > 0) {
				return false;
			}
			move();
			clearInterval(bannerAction);
			bannerAction = setInterval(move, 3000);
		}
	});
});