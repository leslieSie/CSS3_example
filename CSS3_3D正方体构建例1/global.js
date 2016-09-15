var x=0;
var y=0;
var box=$("#box");
$('#btn1').on("click",function(){
	var value=90+x*90;
	box.css("-webkit-transform","rotateX("+value+"deg)");
	x++;
});
$('#btn2').on("click",function(){
	var value=y*90+90;
	box.css("-webkit-transform","rotateY("+value+"deg)");
	y++;
});
$('#btn3').on("click",function(){
	y--;
	var value=y*90;
	box.css("-webkit-transform","rotateX("+value+"deg)");

});
$('#btn4').on("click",function(){
	x--;
	var value=x*90;
	box.css("-webkit-transform","rotateX("+value+"deg)");
	
});