function fn(){
	var wrap = document.querySelector('.dbanner');
	var img = document.querySelector('.dimg');
	var lis1 = img.getElementsByTagName('li');
	var navs = document.querySelector('.dnavs');
	var lis = navs.getElementsByTagName('li');
	var imgs = img.getElementsByTagName('img');
	var sImg = navs.getElementsByTagName('img');
	var now = 0;
	
	var timer = 0;
	timer = setInterval(next,4000);

	for(var i = 0; i < img1.length; i++) {
		img.innerHTML += '<li style="background:'+ c[i] +'"><img src="'+img1[i]+'"/></li>';
		navs.innerHTML += '<li></li>';
	}
	show();
	
	for(var i = 0; i < img1.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			now = this.index;
			show();
			clearInterval(timer);
		};
		lis[i].onmouseout = function(){
			timer = setInterval(next,3000);
		};
	}
	function show() {
		for(var i =0; i < imgs.length; i++) {
			lis1[i].style.opacity = 0;
			lis[i].className = "";
		}
		
		lis1[now].style.opacity = 1;
		lis[now].className = "active";
		
	}
	function next() {
		for(var i =0; i < imgs.length; i++) {
			lis1[i].style.opacity = 0;
			lis[i].className = "";
		}
		now++;
		if(now > lis.length-1) {
			now = 0;
		}
		lis[now].className = "active";
		lis1[now].style.opacity = 1;
	

	};


