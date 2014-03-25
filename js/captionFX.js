$(document).ready(function(){
	
	//Animate image captions to appear on mouseover.
	
	var figcaptionHeight;
	
	function mouseOn() {
		figcaptionHeight = $(this).find('figcaption').height();
		$(this).find('figcaption').animate({bottom:(figcaptionHeight + 20)});
	}
	
	function mouseOff() {
		$(this).find('figcaption').animate({bottom:0});
	}
	
	$('figure').hover(mouseOn,mouseOff);

});