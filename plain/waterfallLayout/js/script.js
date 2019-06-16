window.onload = function(){
	window.onresize = function(){	
	waterfall("main","box");
	};
	waterfall("main","box");
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
	window.onscroll = function(){
		/*只要一滚动，在符合滚动条件的情况下，就加载dataInt里的数据，所以每滚动一下，
		dataInt里的数据就会重复加载下*/
		if(checkScrollSlide()){
			//将数据块渲染到页面的尾部
			var oparent = document.getElementById("main");
			for (var i = 0; i < dataInt.data.length; i++) {
				/*dataInt是一个对象，data是它的属性，所以用dataInt.data*/
				var obox = document.createElement("div");
				obox.className = "box";				
				oparent.appendChild(obox);
				var opic = document.createElement("div");
				opic.className = "pic";				
				obox.appendChild(opic);
				var oimg = document.createElement("img");
				oimg.src = 'images/' +dataInt.data[i].src;
				/*获取json对象dataInt的data属性里的src的值；*/
				opic.appendChild(oimg);
			}
		waterfall("main","box");	
		}		
	};
};

function waterfall (parent,box){
	//将main下所有class为box的元素取出来
	var oparent = document.getElementById(parent);
	var oboxs = getByClass(oparent,box);
	//计算整个页面显示的列数（页面宽度/box的宽度）
	var oboxw = oboxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oboxw);
	/*console.log(cols);*/
	//设置main的宽度
	oparent.style.cssText = 'width:' + cols*oboxw + 'px;margin:0 auto';
	var hArr = [];//存放每一列高度的数组
	for (var j = 0; j < oboxs.length; j++) {
		if (j < cols){
			hArr.push(oboxs[j].offsetHeight);
			/*console.log(j + "<" + cols);*/
			/*当浏览器窗口变小时，如果只能放得下3张图片，那么第4,5,6张就会被添加上else里面的style属性，
			当我把浏览器窗口变大时，被改过的第4,5,6张图片的style属性应改回来，这样页面就不会多出几个空白了*/
			oboxs[j].style.position = "";
			oboxs[j].style.top = "";
			oboxs[j].style.left = ""; 			
		}else{
			var minH = Math.min.apply(null,hArr);
			/*Math.min(1,2,3)可以，但是里面不能放数组['1','2','3'],这里Math.min.apply(null,['1','2','3'])等价于
			Math.min(1,2,3)*/
			var index = getMinhIndex(hArr,minH);			
			oboxs[j].style.position = "absolute";
			oboxs[j].style.top = minH + "px";
			oboxs[j].style.left = oboxw*index + "px";/*oboxs[j].style.left = oboxs[index].offsetLeft + "px";*/
			hArr[index] += oboxs[j].offsetHeight;					
			/*console.log(minH);*/
			/*console.log(hArr);*/
		}
	}
}
//根据className取元素

function getByClass(parent,cls) {
	var elements = parent.getElementsByTagName('*');
	var result = [];
	for (var i = 0; i < elements.length; i++) {		
		var thisele=elements[i];
		if (thisele.className == cls) {
			result.push(thisele);
		} 
	}
	return result;
}
//根据数组值判断该数的位置
function getMinhIndex(arr,val) {
	for(var i in arr){
		if(arr[i] == val){
			return i;
			//即使有重复的返回第一个值，不会返回一个数组
		}
	}
}
//检测是否具备了滚动加载数据块的条件
function checkScrollSlide() {
	var oparent = document.getElementById('main');
	var oboxs = getByClass(oparent,"box");
	var lastboxH = oboxs[oboxs.length - 1].offsetTop + Math.floor(oboxs[oboxs.length - 1].offsetHeight/2);
	/*混杂模式与标准模式检测方式，兼容*/
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	/*console.log(height);*/
	return lastboxH < (scrollTop + height) ? true : false;
}