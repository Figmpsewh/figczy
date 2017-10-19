/*
* @Author: asus
* @Date:   2017-09-19 23:13:38
* @Last Modified by:   asus
* @Last Modified time: 2017-10-15 22:17:22
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
	// lefts.onclick = function(){
	// 	if(!flag){
	// 		return;
	// 	}
	// 	moveL()
	// 	flag = false;
	// }

//设计团队轮播
	let design = document.querySelector('.design');
	let active = document.querySelector('.active');
	// console.log(active)
	let activelist = active.querySelectorAll('li');
	let activeW = parseInt(getComputedStyle(active,null).width);
	console.log(activeW)
	let dlj = document.querySelector('.dlj');
	console.log(dlj)
	let drj = document.querySelector('.drj');

function moveS(){
	next++;
	if(next == activelist.length){
		next = 0;
		}
	activelist[next].style.left = `${activeW}px`;
	animate(activelist[now],{left:-activeW});
	animate(activelist[next],{left:0},function(){
		flag = true;
	});
		now = next;
	
	}

	function moveSL(){
	next--;
	if(next <0){
		next = activelist.length-1;
	}
	activelist[next].style.left = `${-activeW}px`;
	animate(activelist[now],{left:activeW});
	animate(activelist[next],{left:0},function(){
		flag = true;
	});
		now = next;
	}
 //自动轮播
	active.onmouseover = function(){
    	clearInterval(t);
    }
    active.onmouseout = function(){
    	t=setInterval(moveS, 4000);
    }
//左右箭头
	drj.onclick = function(){
		if(!flag){
			return;
		}
		moveS()
		flag = false;
	}
	dlj.onclick = function(){
		if(!flag){
			return;
		}
		moveSL()
		flag = false;
	}

//工程案例开始
	let exampled = document.querySelector('.example-d');
	let examplel = document.querySelector('.example-l');
	let exalist = examplel.querySelectorAll('li');
	let btn = document.querySelector('.btn');
	let btnl = document.querySelector('.btn-l');
	let btlist = btnl.querySelectorAll('li');
	let exampleW = parseInt(getComputedStyle(examplel,null).width);

	function moveG(){
	next++;
	if(next == exalist.length){
		next = 0;
	}
	btlist[now].style.background = '#999';
	btlist[next].style.background = '#fff';
	exalist[next].style.left = `${exampleW}px`;
	animate(exalist[now],{left:-exampleW});
	animate(exalist[next],{left:0},function(){
		flag = true;
	});
		now = next;
}
//左边
	function moveGL(){
	next--;
	if(next <0){
		next = exalist.length-1;
	}
	btlist[now].style.background = '#999';
	btlist[next].style.background = '#fff';
	exalist[next].style.left = `${-exampleW}px`;
	animate(exalist[now],{left:exampleW});
	animate(exalist[next],{left:0},function(){
		flag = true;
	});
		now = next;
}

//点击
	for(let i = 0;i<btlist.length;i++){
		btlist[i].onclick = function(){
			if(now==i){return;}
			btlist[now].style.background ='#999';
			btlist[i].style.background ='#fff';
			exalist[i].style.left = `${exampleW}px`;
			animate(exalist[now],{left:-exampleW});
			animate(exalist[i],{left:0});
			now = next = i;
		}
	}
	//时间函数  自动轮播
		exampled.onmouseover = function(){
	    	clearInterval(t);
	    }
	    exampled.onmouseout = function(){
	    	t=setInterval(moveG, 2000);
	    }
}