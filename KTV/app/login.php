<?php
class login{
    function index(){
        include 'app/views/login.html';
    }
    function check(){
        $user = $_REQUEST['user'];
        $pass = $_REQUEST['pass'];
        $mysql = new mysqli('localhost','root',
            '','ktv',3306);
        $data = $mysql->query("select * from admin where username='{$user}'")->fetch_all(1);
//        var_dump($data);
//        exit();
        for($i=0;$i<count($data);$i++){
            if($data[$i]['password']==$pass){
                echo 'ok';
                exit;
            }
        }
        echo 'error';
    }
}