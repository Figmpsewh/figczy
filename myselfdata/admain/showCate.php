<?php
if($_SERVER['REQUEST_METHOD']=='GET'){
    include  '../libs/db.php';
    include  '../libs/function.php';
    $cate = new unit();
    $option=$cate->cateTable($mysql,'categ');
    include '../template/admain/showCate.html';
}