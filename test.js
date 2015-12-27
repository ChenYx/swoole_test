$(function(){
	$('.emotion').qqFace({
		id : 'facebox', //表情盒子的ID
		assign:'content', //给那个控件赋值
		path:'face/'	//表情存放的路径
	});
});
//查看结果
function replace_em(str){
	str = str.replace(/\</g,'&lt;');
	str = str.replace(/\>/g,'&gt;');
	str = str.replace(/\n/g,'<br/>');
	str = str.replace(/\[em_([0-9]*)\]/g,'<img src="face/$1.gif" border="0" />');
	return str;
}
var exampleSocket = new WebSocket("ws://192.168.80.70:9502");
exampleSocket.onopen = function (event) {

};
exampleSocket.onmessage = function (event) {
    data = replace_em(event.data);
    data = '<p>'+data+'</p>';
    $('#box').append(data);
}
$(document).ready(function(){
   $('.sub_btn').click(function(){
       exampleSocket.send( $('#content').val());
       $('#content').val('');
   });
});
$(document).keypress(function(e) {  
    // 回车键事件  
       if(e.which == 13) {  
   $(".sub_btn").click();  
       }  
}); 
