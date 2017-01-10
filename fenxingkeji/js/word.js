//初始化标题
function settit(e){
	$(e).addClass("showtit");
	var text=$(e).text();
	text=text.replace(/ /g,"^");
	var arr=text.split("");
	var html="";
	for(var i=0;i<arr.length;i++){
		html+="<i style='transition-delay:0."+GetRandomNum(1,7)+"s'>"+arr[i]+"</i>";
	}
	html=html.replace(/\^/g,"&nbsp;");
	html=html.replace("> <",">&nbsp;<");
	$(e).html(html);	
}

//初始化文字
function settxt(e){
	$(e).addClass("showtxt");
	var text=$(e).text();
	text=text.replace(/ /g,"^");
	var html="";
	var l=0;
	text=text.replace(" ","^");
	while(l<text.length){
		var x=GetRandomNum(2,5);
		var y=GetRandomNum(2,20)*0.1;
		html+="<i><b style='transition-delay:"+y+"s'>"+text.substr(l,x)+"</b></i>";
		l+=x;
	}
	html=html.replace(/\^/g,"&nbsp;");
	html=html.replace("> <",">&nbsp;<");
	$(e).html(html);
	$(e).find("i").each(function(index, element) {
		$(this).width($(this).width());
	});
	$(e).find("b").addClass("h");
}
//激活标题或文字
function showtt(e,delay){
	setTimeout(function(){
		$(e).addClass("act");
	},delay);
}
//标题切换
function hidett(e){
	$(e).find(".act").removeClass("act");
}

function ckall(e,t){
	if($(e).attr("checked")){
		$(t).find("input").attr("checked",true);
		$(t).addClass("act");
	}
	else{
		$(t).find("input").attr("checked",false);
		$(t).removeClass("act");
	}
}

//获取随机数
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));
}
