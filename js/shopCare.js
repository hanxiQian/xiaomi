function $(id){
	return document.getElementById(id);
}





/////////////nav的下滑效果图片///////////////

for(let i=1;i<$("nav_middle1").children.length;i++){
	$("nav_middle1").children[i].onmouseover=function(){
	// console.log(i);
	$("x1").style.height="228px";
	$("x1").children[i-1].style.transition="all 2s";
	$("x1").children[i-1].style.height="228px";
	}
	$("nav_middle1").children[i].onmouseout=function(){
	$("x1").children[i-1].style.transition="all 2s";
	$("x1").children[i-1].style.height="0px";
	$("x1").style.height="0";
	}
}








<!-- /////////////////nav下拉选框效果/////////-->
$("nav_right1").onmouseover=function(){
	$("nav_right1S").style.border="1px solid red";
	$("x2").style.height="300px";
	$('one').style.opacity="0";
	$('two').style.opacity="0";
}
$("nav_right1").onmouseout=function(){
	// $("nav_right1S").style.border="1px solid red";
	$("x2").style.height="0px";
	$("nav_right1S").style.border="1px solid #e0e0e0";
	$('one').style.opacity="1";
	$('two').style.opacity="1";

}

//////////////高度变化时，各个页面的定位////
