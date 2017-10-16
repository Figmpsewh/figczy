/*
* @Author: asus
* @Date:   2017-10-16 17:27:44
* @Last Modified by:   asus
* @Last Modified time: 2017-10-16 22:00:45
*/
$(function(){
	let lis = $('ul>li');
	let maskimg = $('div.mask>img')
	let i;
	lis.on('click',function(){
		i = $(this).index();
		let src = $('img',this).attr('src');
		maskimg.attr('src',src)
		$('div.mask').addClass('active')
	})
	$('div.close').click(function(){
		$('div.mask').removeClass('active')
	})

	$('div.btnL').click(function(){
		// for(let i = 0;i<lis.length;++i){
		// 	let ade = $('img',lis[i+1]).attr('src');
		// 	maskimg.attr('src',ade)
		// }
		if(i<=0){
			return
		}
		let ade = $('img',lis[--i]).attr('src');
			maskimg.attr('src',ade)
	})
	$('div.btnR').click(function(){
		if(i>=lis.length-1){
			return
		}
		let adc = $('img',lis[++i]).attr('src');
			maskimg.attr('src',adc)
	})
})
