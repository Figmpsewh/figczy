/*
* @Author: asus
* @Date:   2017-10-16 23:02:09
* @Last Modified by:   asus
* @Last Modified time: 2017-10-16 23:21:18
*/
$(function(){
	let lis = $('.examplel>li');
	console.log(lis)
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