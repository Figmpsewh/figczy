/*
* @Author: asus
* @Date:   2017-09-19 14:48:53
* @Last Modified by:   asus
* @Last Modified time: 2017-09-19 22:36:52
*/
window.onload = function(){
	let aside = document.getElementsByClassName('cedaohang')[0];
	let lis = aside.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}


	//轮播
	let box = document.getElementsByClassName('banner')[0];
	let lun = document.getElementsByClassName('banner-list')[0];
	let lists = lun.getElementsByTagName('li');
	let luno = document.getElementsByClassName('lunbo-img');
	let btt = document.getElementsByClassName('btn-list')[0];
	let list = btt.getElementsByTagName('li');
	let lefts = document.getElementsByClassName('banner-left')[0];
	let rights = document.getElementsByClassName('banner-right')[0];
	let t = setInterval(move, 2000);

	let num = 0;
//右边
	function move(){
	num++;
	if(num ==lists.length){
		num = 0;
	}
	for(let i=0;i<lists.length;i++){
		list[i].style.background='#000';
		lists[i].style.display = 'none';
	}
		list[num].style.background='#e1dfdf';
		lists[num].style.display = 'block';
}
//左边
	function moveL(){
	num--;
	if(num<0){
		num=lists.length-1;
	}
	for(let i=0;i<lists.length;i++){
		lists[i].style.display = 'none';
		list[i].style.background ='#e1dfdf';
	}
		lists[num].style.display = 'block';
		list[num].style.background ='#000';
}

//点击
	for(let i = 0;i<list.length;i++){
		list[i].onclick = function(){
			for(let j=0;j<list.length;j++){
				lists[j].style.display = 'none';
				list[j].style.background ='#e1dfdf';
			}
			lists[i].style.display = 'block';
			list[i].style.background ='#000';
			num = i;
		}
	}
//时间函数
	box.onmouseover = function(){
    	clearInterval(t);
    }
    box.onmouseout = function(){
    	t=setInterval(move, 2000);
    }
//左右箭头
rights.onclick = function(){
	move()
}
lefts.onclick = function(){
	moveL()
}
//鼠标移入
// for(let i = 0;i<list.length;i++){
// 	list[i].onmouseover = function(){
// 		for(let j=0;j<list.length;j++){
// 			list[j].style.background ='#000';
// 		}
// 		list[i].style.background ='#e1dfdf';
// 	}
// }

}