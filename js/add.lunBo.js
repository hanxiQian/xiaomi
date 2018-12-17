
//1、自动播放
//currIndex：当前图片的下标
let currIndex = 0;
var myTimer = null;

function autoPlay(){	
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//1、改变数据（图片序号）
		currIndex=currIndex+1;
		//2、边界处理
		if(currIndex>=5 || currIndex<0){
			currIndex = 0;
		}
		//3、改变外观
		showImg();
	},1000);	
}

//2、停止
function stop(){
	if(myTimer!=null){
		window.clearInterval(myTimer);
		myTimer = null;
	}
}

//3、跳转指定的图片
function goImg(transIndex){//2
	//1、改变数据（图片序号）
	currIndex=transIndex;//2
	//2、边界处理
	if(currIndex>=5 || currIndex<0){
		currIndex = 0;
	}
	//3、改变外观
	showImg();
}

function showImg(){
	
	//3、改变外观
	//1)、改图片
	let imgs = $("box").children;
	// console.log(imgs);
	for(let i=0;i<imgs.length-1;i++){
		imgs[i].style.zIndex = 0;
	}
	imgs[currIndex].style.zIndex = 1;
	//2)、改豆豆
	let lis = $("box").lastElementChild.children;
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = "white";
	}
	lis[currIndex].style.backgroundColor = "red";
	//改span
	// let spa = $("body1").firstElementChild.nextSiblingElement.children;
	// for(let i=0;i<spa.length;i++){
	// 	spa[i].style.backgroundColor = "white";
	// }
	// spa[currIndex].style.backgroundColor = "gray";
}

window.onload = function(){
	//1、自动播放
	autoPlay();
	//2、鼠标放上，停止播放
	$("box").onmouseover = stop;

	//3、鼠标离开，继续播放
	$("box").onmouseout = autoPlay;
	
	//4、点击豆豆，跳转到对应图片
	let lis = $("box").lastElementChild.children;
	
	//5.点击Span对应到对应的图片
	// let spa = $("body1").firstElementChild.nextSiblingElement.children;

	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);
		lis[i].onclick = function(){
			goImg(parseInt(this.getAttribute("index")));
		};
	}

}	
