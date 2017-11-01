<?php
header('Content-type:text/html;charset=utf8');
if ($_SERVER['REQUEST_METHOD']=='GET'){
    // 显示页面 include引进页面
    include '../libs/db.php';
    include '../libs/function.php';
    $cate = new unit();
    $option=$cate->cateTree(0,$mysql,'categ',0);
    include '../template/admain/addCate.html';
}else{
    include '../libs/db.php';
    $pid=$_POST['pid'];
    $cname=$_POST['cname'];
    $sql="insert into categ (pid,cname) values ('{$pid}','{$cname}')";
    $mysql->query($sql);
    if($mysql->affected_rows){
       // echo '<script>alert(1)</script>'; 插入一个脚本
        $message='栏目插入成功';
        $url='addCate.php';
        include 'message.html';
    }else{
        $message='栏目插入失败';
        $url='addCate.php';
        include 'message.html';
    }
}
