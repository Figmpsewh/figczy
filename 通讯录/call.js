/*
* @Author: asus
* @Date:   2017-09-26 10:34:27
* @Last Modified by:   asus
* @Last Modified time: 2017-09-27 19:52:50
*/
window.addEventListener('load', function(){
	let dl = document.querySelector('dl');
	let info = [
		{name:'安妮',tell:'12345',py:'anni'},
		{name:'西瓜',tell:'11111',py:'xigua'},
		{name:'贝壳',tell:'222222',py:'beike'},
		{name:'托尼',tell:'44444',py:'tuoni'},
		{name:'鸵鸟',tell:'6734534',py:'tuoniao'},
		{name:'大象',tell:'31322131',py:'daxiang'},
		{name:'老虎',tell:'2124124',py:'laohu'},
		{name:'狮子',tell:'14141',py:'shizi'},
		{name:'狗熊',tell:'12312',py:'gouxiong'},
		{name:'熊猫',tell:'88888',py:'xiongmao'},
		{name:'瑞雯',tell:'66666',py:'ruiwen'},
		{name:'艾希',tell:'99999',py:'aixi'},
		{name:'王鹏',tell:'44444478',py:'wangpeng'}
	];
	render(info)
function render(data){
	dl.innerHTML = '';
	//按照首字母对数据进行处理
	let obj = {};
	data.forEach(function(element){
		let first = element.py.charAt(0).toUpperCase();   //取拼音的首字母
		if(!obj[first]){
			obj[first] = [];		
		}
		obj[first].push(element);
	})

    let char = Object.keys(obj).sort();
    char.forEach(element=>{
    	dl.innerHTML+= `<dt>${element}</dt>`
    	obj[element].forEach(value=>{
    		dl.innerHTML +=`<dd><a herf="${value.tell}">${value.name}</a></dd>`
    	})
     })

	}

})