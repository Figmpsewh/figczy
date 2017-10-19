/*
* @Author: asus
* @Date:   2017-09-19 23:13:38
* @Last Modified by:   asus
* @Last Modified time: 2017-10-15 21:01:54
*/
window.onload = function(){
	// banner开始
	let box = document.querySelector('.banner');
	let banner = document.querySelector('.banner-l');
	let bli = banner.querySelectorAll('li');
	let bannerW = parseInt(getComputedStyle(banner,null).width);
	t = setInterval(move,2000);
	let rights = document.querySelector('.icon-r');
	let lefts = document.querySelector('.icon-l');
	next = 0;
	now = 0;
	flag = true;

	function move(){
	next++;
	if(next == bli.length){
		next = 0;
		}
	bli[next].style.left = `${bannerW}px`;
	animate(bli[now],{left:-bannerW});
	animate(bli[next],{left:0},function(){
		flag = true;
	});
		now = next;
	
	}

	function moveL(){
	next--;
	if(next <0){
		next = bli.length-1;
	}
	bli[next].style.left = `${-bannerW}px`;
	animate(bli[now],{left:bannerW});
	animate(bli[next],{left:0},function(){
		flag = true;
	});
		now = next;
	}
 //自动轮播
	box.onmouseover = function(){
    	clearInterval(t);
    }
    box.onmouseout = function(){
    	t=setInterval(move, 2000);
    }
//左右箭头
	rights.onclick = function(){
		if(!flag){
			return;
		}
		move()
		flag = false;
	}
	lefts.onclick = function(){
		if(!flag){
			return;
		}
		moveL()
		flag = false;
	}
}