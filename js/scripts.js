console.log("hello")

var $one = $("#j1");
var $two = $("#j1_p");
var $three = $("#j2");
var $four = $("#j3");
var $five = $("#j3_p");
var $boxes = $(".box");


$one.on("click", function(){
	$(this).hide();
	$two.show();
	$boxes.css("background-color","#CD5C5C");
	$boxes.css("color","white");
})

$two.on("click", function(){
	$(this).hide();
	$three.show();
	$boxes.css("background-color","#ACD07A");

})

$three.on("click", function(){
	$(this).hide();
	$four.show();
	$boxes.css("background-color","#E6CEE7");
	$boxes.css("color","#F08080");
})

$four.on("click", function(){
	$(this).hide();
	$five.show();
	$boxes.css("background-color","#947995");
	$boxes.css("color","white");
})

$five.on("click", function(){
	$(this).hide();
	$one.show();
	$boxes.css("background-color","#FFF5EF");
	$boxes.css("color","#F08080");
})

$one.on("click", function(){
	$(this).hide();
	$two.show();
})
