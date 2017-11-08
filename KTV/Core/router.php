<?php
class router{
    static function run(){
        if (!isset($_SERVER['PATH_INFO'])|| $_SERVER['PATH_INFO']=='/'){      //路径信息
            //如果没有给默认值
            $model = 'admin';
            $fn = 'login';
        }else{//如果有，截掉 '/',打散
            $pathinfo=explode('/',substr($_SERVER['PATH_INFO'],1));
            $model = $pathinfo[0];
            $fn = isset($pathinfo[1])?$pathinfo[1]:'index';
            //
        }

        if(file_exists("app/{$model}.php")){ //判断某个文件是否存在
            include 'app/'.$model.'.php';//有就引入要的文件
            //给模块下对应的功能该方法
            if(class_exists($model)){
                //若有调用
                $page = new $model();
                if (method_exists($page,$fn)){
                    $page->$fn();
                }else{
                    include "app/views/404.html";
                }
            }else{
                include "app/views/404.html";
            }
        }else{
            include "app/views/404.html";
        }
    }
}