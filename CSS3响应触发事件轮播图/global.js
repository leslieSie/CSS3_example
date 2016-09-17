num=0;
var last=$(".last");
var next=$(".next");
//last button click
last.on("click",function(){
	num--;
	var rotateNum=num*(-120);
	var trans="translateZ(-182px) rotateY("+rotateNum+"deg)";
	$(".icon-cards__content").css("transform",trans);
	$(".icon-cards__content").css("transition","all 2s");

});

//next button click
next.on("click",function(){
	num++;
	var rotateNum=num*(-120);
	var trans="translateZ(-182px) rotateY("+rotateNum+"deg)";
	$(".icon-cards__content").css("transform",trans);
	$(".icon-cards__content").css("transition","all 2s");
})