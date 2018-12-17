function $(id){
	return document.getElementById(id);
}





/////////////nav的下滑效果图片///////////////

for(let i in $("nav_middle1").children){
	$("nav_middle1").children[i].onmouseover=function(){
	// console.log(i);
	$("x1").style.height="228px";
	$("x1").children[i].style.transition="all 2s";
	$("x1").children[i].style.height="228px";
	}
	$("nav_middle1").children[i].onmouseout=function(){
	$("x1").children[i].style.transition="all 2s";
	$("x1").children[i].style.height="0px";
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


// <!-- ////////////手机电话卡侧栏效果/////// --
///////////////?问题:划过图片不变，要变成x3_1/////////
for(let i in $("body1").children){
	$("body1").children[i].onmouseover=function(){
		$('x3').style.width="993px";
	}
	$("body1").children[i].onmouseout=function(){
		$('x3').style.width="0px";
	}
}



/////////span出现////////////////////////
// let spanDom=document.createElementByTageName("span");
// $("_right").appendChild(spanDom);
// $("box22").onmouseover=function(){
// 	$("box22").transorm="translateZ(5px),translateY(-3px)"
// 	spanDom.style.transorm="translateY(76px)";
// 	spanDom.style.transition="all 1s";
// }
// $("box22").onmouseout=function(){

// }
