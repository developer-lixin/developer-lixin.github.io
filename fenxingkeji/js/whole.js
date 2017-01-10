function htmlsize(){
	var ww;
	var maxw=640;
	var minw=320;
	if($(window).width()>maxw){ww=maxw;}
	else if($(window).width()<minw){ww=minw;}
	else{
		ww=$(window).width();
	}
	$("html").css({fontSize:(ww/maxw)*100});
}
htmlsize();
$(window).resize(htmlsize);

//全局js
$(function(){
	//start
	if($(window).width()>=1440){
		$("#main").css({
			height:$("body").height()-(82+parseInt($(".footer").css("padding-top"))*2)
		});
	}else {
		$("#main").css({
			height:$("body").height()-parseInt($("body").css("padding-top"))
		});
	}
	$(window).resize(function(){
		if($(window).width()>=1440){
			$("#main").css({
				height:$("body").height()-(82+parseInt($(".footer").css("padding-top"))*2)
			});
		}else {
			$("#main").css({
				height:$("body").height()-parseInt($("body").css("padding-top"))
			});
		}
	});
	
	$(".menu").click(function(event){
		$(this).toggleClass("act");
		$(".header").find(".r").toggleClass("act");
		$(".nav_main").toggleClass("show");
		event.stopPropagation();
	});
	$(".nav_main").click(function(event){
		event.stopPropagation();
	});
	$(window).click(function(){
		$(".menu").removeClass("act");
		$(".header").find(".r").removeClass("act");
		$(".nav_main").removeClass("show");
	});
	
	$(".nav_float").css({
		marginTop:$(".nav_float").height()*-0.5
	});
});

function winload(){
	$("body").addClass("loaded");
}