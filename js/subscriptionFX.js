$(document).ready(function(){
	
	//find all arrows
	var arrows = $('#subscriptions').find('.arrow');
	
	//arrow click
	arrows.click(function(){
		$(this).toggleClass('up').toggleClass('down'); //switch up/down arrow.
		$(this).next().next().slideToggle(); //hide article below the arrow clicked.
	});
	
});