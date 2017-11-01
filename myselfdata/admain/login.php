<?php
header('Content-type:text/html;charset=utf8');
if($_SERVER['REQUEST_METHOD']=='GET'){
	//判断打开方式，get则打开页面
	include '../template/admain/login.html';
}else{
	//验证
	$userr = $_POST['user'];
	$passr = $_POST['pass'];
	$mysql = new mysqli('localhost','root','','mybussniss',3306);
	if($mysql->connect_errno){
		echo '数据库连接失败，失败信息'.$mysql->connect_errno;
 		exit;
	}
	$mysql->query('set names utf8');
	$sql='select * from bussinsslist';
	$result = $mysql->query($sql);
	$arr=$result->fetch_all(MYSQL_ASSOC);

	for($i=0;$i<count($arr);$i++){
		if($arr[$i]['uname']==$userr && $arr[$i]['upass']==$passr){
			// echo 'sucess';
			header('Location:main.php');
			exit;
		}
	}
	// echo '用户名不存在';
	$message='登录失败';
	$url='login.php';
	include 'message.html';
}
?>