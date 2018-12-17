<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
	require('db.php');
	$user=$_POST['user'];
	$pwd=$_POST['pwd'];	
	$search = "SELECT `username` FROM hanxiqian WHERE username='$user'";
//	echo $search;
	//获取记录集
	$res = $conn -> query($search);
//	echo $res -> num_rows;
	if ($res -> num_rows > 0) {
		echo '1';
	}else{
		$sql="insert into hanxiqian(username,userpass) values ('$user','$pwd')";
		echo '0';
		$conn->query($sql);
	}
		$conn->close();
?>	