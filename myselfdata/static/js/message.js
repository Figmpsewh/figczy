$(function(){
    let span =document.querySelector('span');
    // console.log(span)
    let a=document.querySelector('a');
    let t=setInterval(move,1000);
    function move() {
        span.innerText-=1;
        if (span.innerText==0){
            clearInterval(t);
            location.href=a.href;
        }
    }
})