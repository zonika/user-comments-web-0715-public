$(document).ready(function(){

	//navigation effects
	var navLinks = $('nav').find('a');
	
	//mouseOn
	function mouseOn(){
		$(this).animate({'color':'#f00'},10).animate({'color':'#000'},600);
	}
	
	//mouseOff
	function mouseOff(){
		$(this).animate({'color':'#000'},200).animate({'color':'#f00'});
	}
	
	//apply
	navLinks.hover(mouseOn,mouseOff);

});