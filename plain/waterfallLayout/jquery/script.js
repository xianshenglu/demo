$(window).on('load',function(){
	//窗口调整时触发
	$(window).on("resize",function () {
		waterfall();
	});
	waterfall();	
	//后台传来的数据，但是滚动之后会重复加载
	var dataInt = {
		'data':[
			{'src':'32.jpg'},
			{'src':'33.jpg'},
			{'src':'34.jpg'},
			{'src':'35.jpg'},
			{'src':'36.jpg'},
			{'src':'37.jpg'},
			{'src':'38.jpg'},
			{'src':'39.jpg'},
			{'src':'40.jpg'},
			{'src':'41.jpg'},
			{'src':'42.jpg'},
			{'src':'43.jpg'}
		]
	};
	$(window).on("scroll",function(){
		if (checkScrollSlide()) {
			/*each遍历json对象、数组的格式*/
			$.each(dataInt.data,function (k,value) {
				/*console.log(value);*/
				var obox = $("<div></div>").addClass("box").appendTo($("#main"));
				var opic = $("<div></div>").addClass("pic").appendTo($(obox));
				var oimg =$("<img>").attr("src","images/"+$(value).attr("src")).appendTo($(opic));
				/*console.log(value.attr("src"));*///这里的value是js原生对象，不能用jquery方法.attr();
				/*console.log($(value).attr("src"));*///转成jquery对象$();
			});
			waterfall();
			
		} 
	});
});

function waterfall() {
	/*var $boxs = $("#main").find(".box");*/
	var $boxs = $("#main>div");
	var w = $boxs.eq(0).outerWidth();
	/*相当于offsetWidth,如果只用width()，仅指定义的width，不包括padding和border;*/
	var cols = Math.floor($(window).width()/w);
	/*var cols = Math.floor($(window).width()/w);
	当你把浏览器的大小调小了刷新页面， 然后再将浏览器的大小调大，列数不会变动。换成document就可以了*/
	$("#main").width(w * cols).css("margin","0 auto");
	var hArr = [];
	$boxs.each(function (index,value) {
		/*看看获取的两个参数是什么*/
		/*console.log(index);*/
		/*console.log(value);*///value是dom元素,如果要用.css方法，必须是jquery对象，$(value)转成jquery对象
		/*console.log($boxs);*/		
		var h = $boxs.eq(index).outerHeight();
		if(index < cols){
			hArr[index] = h;
			/*当浏览器窗口变小时，如果只能放得下3张图片，那么第4,5,6张就会被添加上else里面的style属性，
			当我把浏览器窗口变大时，被改过的第4,5,6张图片的style属性应改回来，这样页面就不会多出几个空白了*/
			$(value).css({//如果直接用value.css会直接报错"dom元素没有.css方法的";
				"position":"",
				"top":"",
				"left":""
			});
		}else{
			var minH = Math.min.apply(null,hArr);
			var minHindex = $.inArray(minH,hArr);
			$(value).css({//如果直接用value.css会直接报错"dom元素没有.css方法的";
				"position":"absolute",
				"top":minH + "px",
				"left":minHindex*w + "px"
			});
			hArr[minHindex] += h;
		}
	});
	/*console.log(hArr);*/
}

function checkScrollSlide() {
	var $lastbox = $("#main>div").last();
	var lastboxDis = $lastbox.offset().top + Math.floor($lastbox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();	
	return (lastboxDis < scrollTop + documentH) ? true:false;
}