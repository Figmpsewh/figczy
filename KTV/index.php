<?php
/**
 * 后台
 * 用户管理       商店管理       游戏管理    歌曲
 * user        shop             game     song
 *
 * add delate
 * uploade show
 *
 *localhost/KTV/index.php/
 * localhost/KTV/index.php/shop/add
 * localhost/KTV/index.php/game/add
 */
//include 'Core/Debug.php';
include 'Core/router.php';
router::run();//分发请求
?>