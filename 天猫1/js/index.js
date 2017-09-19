/*
* @Author: asus
* @Date:   2017-09-18 14:13:02
* @Last Modified by:   asus
* @Last Modified time: 2017-09-19 21:52:59
*/
window.onload = function(){
	let aside = document.getElementsByClassName('nav-left')[0];
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





	//轮播按钮
	// let btt = document.getElementsByClassName('btn')[0];
 //    let list = btt.getElementsByTagName('li');
 //    let lun = document.getElementsByClassName('lunbo-img');
 //        for(let i=0;i<list.length;i++){
 //            list[i].onmouseover=function(){
 //                for(let i=0;i<list.length;i++){
 //                    lun[i].style.display='none';
 //                    list[i].style.background='#98979B';
 //                }
 //                lun[i].style.display='block';
 //                 list[i].style.background='#fff';
 //            }
               
 //        }	
        //方法二,使上一张图片消失，移入显示
    // let now = 0;

    // for(i=0;i<list.length;i++){	
    // 	list[i].onmouseover = function(){
    // 	lun[now].style.display = 'none';
    // 	lun[i].style.display = 'block';
    // 	now=i;
    // 	}
    // }  

		//方法三，       this
		//方法四          闭包函数
	// for(var i = 0; i < list.length; i++){
	// 	list[i].index = i;
	// 	list[i].onclick = (function(i){
	// 		return function(){
	// 			lun[now].style.display = 'none';
	// 			lun[i].style.display = 'block';
	// 			now = i;
	// 		}
	// 	})(i)
	// }
let box = document.getElementsByClassName('nav-box')[0];
let lun = document.getElementsByClassName('lunbo')[0];
let lists = lun.getElementsByTagName('li');
let luno = document.getElementsByClassName('lunbo-img');
let btt = document.getElementsByClassName('btn')[0];
let list = btt.getElementsByTagName('li');
let t = setInterval(move, 2000);
let num=0;

//自动播放
function move(){
	num++;
	if(num ==lists.length){
		num = 0;
	}
	for(let i=0;i<lists.length;i++){
		list[i].style.background='#98979B';
		lists[i].style.display = 'none';
	}
		 list[num].style.background='#fff';
		lists[num].style.display = 'block';
}



//鼠标移入
for(let i = 0;i<list.length;i++){
	list[i].onmouseover = function(){
		for(let j=0;j<list.length;j++){
			lists[j].style.display = 'none';
			list[j].style.background ='#98979B';
		}
		lists[i].style.display = 'block';
		list[i].style.background ='#fff';
	}
}
//时间函数
box.onmouseover = function(){
    	clearInterval(t);
    }
    box.onmouseout = function(){
    	t=setInterval(move, 2000);
    }
}