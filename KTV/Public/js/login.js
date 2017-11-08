$(function(){
    let user = $('#user');
    let pass = $('#pass');
    let sub = $(':submit');
    // let form = $('form');
    sub.on('click',function(){
        let data = {user:user.val(),pass:pass.val()};
        console.log(data);
        // form.serializeArray();
        // form.serialize();
        $.ajax({
            url:'/KTV/index.php/login/check',
            data:data,
            // method:"post",
            success:function(data){
                if(data=='ok'){
                    alert('success');
                }else if(data=='error'){
                    alert('fail');
                }
            }
        })
        return false;//除去按钮默认样式
    })
})