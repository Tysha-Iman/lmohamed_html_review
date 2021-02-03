console.log("hello")

var $one = $("#j1");
var $two = $("#j1_p");
var $three = $("#j2");
var $four = $("#j3");
var $five = $("#j3_p");


$one.on("click", function(){
	$(this).hide();
	$two.show();})
$two.on("click", function(){
	$(this).hide();
	$three.show();})
$three.on("click", function(){
	$(this).hide();
	$four.show();})
$four.on("click", function(){
	$(this).hide();
	$five.show();})
$five.on("click", function(){
	$(this).hide();
	$one.show();})
$one.on("click", function(){
	$(this).hide();
	$two.show();})
