function $(id){
	return document.getElementById(id);
}
$("x1_last").onclick=function(){
	$("box_box1").style.display="none";
	$("box_box").style.display="block";
	$("x1_last").style.color="#f56600";
	$("x1_first").onclick=function(){
		$("box_box1").style.display="block";
		$("box_box").style.display="none";
		$("x1_last").style.color="#666666";
	}
}

$("x3_first").onclick=function(){
	$("box_box2").style.display="block";
	$("box_box1").style.display="none";
	$("box_box").style.display="none";
	$("x1_middle").onclick=function(){
		$("box_box2").style.display="none";
		$("box_box1").style.display="none";
		$("box_box").style.display="block";
		$("x1_first").onclick=function(){
			$("box_box").style.display="none";
			$("box_box2").style.display="none";
			$("box_box1").style.display="block";
		}
	}

}



$("third").onclick=function(){
	$("box_box1").style.display="none";
	$("box_box").style.display="none";
	$("box_box2").style.display="block";
	$("x1_middle").onclick=function(){
			$("box_box2").style.display="none";
			$("box_box1").style.display="none";
			$("box_box").style.display="block";
		}
		$("x1_first").onclick=function(){
			$("box_box").style.display="none";
			$("box_box2").style.display="none";
			$("box_box1").style.display="block";
		}
}


$("x3_first").onclick=function(){
	$("box_box2").style.display="block";
 	$("box_box1").style.display="none";
 	$("box_box").style.display="none";
 	$("x3_first1").onclick=function(){
 		$("box_box2").style.display="none";
 		$("box_box1").style.display="block";
 		$("box_box").style.display="none";
 	}
}


$("x5").onclick=function(){
	location.href="reg.html";
}