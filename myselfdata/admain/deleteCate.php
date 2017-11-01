<?php
include '../libs/db.php';
$cid = $_GET['cid'];
$sql = "select * from categ where pid={$cid}";
if($mysql->query($sql)->fetch_assoc()){
    $message = '存在子栏目';
    $url = 'showCate.php';
    include 'message.html';
    exit();
}
$sql = "delete from categ where cid={$cid}";
$mysql->query($sql);
if ($mysql->affected_rows){
    $message = '删除成功';
    $url = 'showCate.php';
    include 'message.html';
}else{
    $message = '删除失败';
    $url = 'showCate.php';
    include 'message.html';
}