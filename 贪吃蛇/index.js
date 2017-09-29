/*
* @Author: asus
* @Date:   2017-09-29 15:33:01
* @Last Modified by:   asus
* @Last Modified time: 2017-09-29 22:19:56
*/
function Snake(){
	this.sence = document.querySelector('div.sence');
	this.snake = ['0_0','1_0','2_0','3_0','4_0'];
	//方向属性
	this.direction = 39;
	this.flag = {'0_0':true,'1_0':true,'2_0':true}	;
	this.food='';
}
function color(){
        let arr=[]
        for(let i=0;i<3;i++){
        	arr.push(Math.round(Math.random()*255))
        }
        let str1=arr.join();
        	str='rgb('+str1+')';
            return str;
        } 
//方法
Snake.prototype={
	start:function(){
		this.drawLine();
		this.drawSnake();
		this.move();
		this.key();
		this.dropfood();
	},
	drawLine:function(){
		for(let i = 0;i<20;i++){
			for(let j=0;j<20;j++){
				this.sence.innerHTML+=`<div class="block" id="${i}_${j}"></div>`;
			}

		}
	},
	drawSnake:function(){
		this.snake.forEach(element=>{
			document.getElementById(element).classList.add('hot');
		})
	},
	move:function(){
		//加头  去尾巴
		//
		//
		//新头取决于旧头的位置和方向
		//
		//
		// let old = this.snake[this.snake.length-1];
		// let arr = old.split('_');
		// let newt = `${arr[0]*1+1}_${arr[1]*1}`;
		// this.snake.push(newt);
		// let weiba = this.snake.shift();
		// document.getElementById(weiba).classList.remove('hot');
		// this.drawSnake();


		let that = this;
		this.t = setInterval(function(){
			let oldt = that.snake[that.snake.length-1];
			let arr = oldt.split('_');
			let newt = '';
			if(that.direction == 37){				//
				newt = `${arr[0]*1}_${arr[1]*1-1}`;
			}else if(that.direction == 38){			//
				newt = `${arr[0]*1-1}_${arr[1]}`;
			}else if(that.direction == 39){			//
				newt = `${arr[0]}_${arr[1]*1+1}`;
			}
			else if(that.direction == 40){			//
				newt = `${arr[0]*1+1}_${arr[1]}`;
			}
			let newarr = newt.split('_');
			if(newarr[1]<0 || newarr[1]>19 || newarr[0]<0 || newarr[0]>19 || that.snake.includes(newt)){
				clearInterval(that.t);
				alert('game over');
				return;
			}

			that.snake.push(newt);
			that.flag[newt] =true;
			// let weiba = that.snake.shift();
			// delete that.flag[weiba];
			// document.getElementById(weiba).classList.remove('hot');
			// that.drawSnake();
			 if(newt!==that.food){
	                let weiba=that.snake.shift();
	                delete that.flag[weiba];
	                document.getElementById(weiba).classList.remove('hot'); 

                }else{
			        document.getElementById(that.food).style.background=''; 
			        that.dropfood();
                }
                that.drawSnake();
		},500)
	},
	key:function(){

		document.onkeydown = function(e){
			let keyCode = e.keyCode;
			if(Math.abs(keyCode-this.direction)==2){   //控制不能朝反方向运动
				return;
			}
			this.direction=keyCode;
		}.bind(this);
	},
	dropfood:function(){
		let x = Math.floor(Math.random()*20);
		let y = Math.floor(Math.random()*20);

		do{
			x = Math.floor(Math.random()*20);
			y = Math.floor(Math.random()*20);
		} while(this.flag[`${x}_${y}`])


		this.food =`${x}_${y}`;

		// document.getElementById(this.food).style.background='red';
		let fosd = document.getElementById(this.food);
		fosd.style.background = color();
	}
	// long:function(){

	// }
}