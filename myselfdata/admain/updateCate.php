<?php
header('Content-type:text/html;charset=utf8');
if($_SERVER['REQUEST_METHOD']=='GET'){
    include '../libs/db.php';
    include '../libs/function.php';
    $cid=$_GET['cid'];
    $obj = new unit();
    $str = $obj->cateTree(0,$mysql,'categ',0,$cid);//获取栏目
    $cname=$obj->selectOne($mysql,'categ',$_GET['cid'],'cname');
    include '../template/admain/updateCate.html';
}else{
    include '../libs/db.php';
    $pid=$_POST['pid'];
    $cname=$_POST['cname'];
    $cid=$_POST['cid'];
    $sql="update categ set cname='{$cname}',pid={$pid} where cid='{$cid}'";
    $mysql->query($sql);
    if($mysql->affected_rows){
        // echo '<script>alert(1)</script>'; 插入一个脚本
        $message='栏目修改成功';
        $url='showCate.php';
        include 'message.html';
    }else{
        $message='栏目修改失败';
        $url='showCate.php';
        include 'message.html';
    }
}