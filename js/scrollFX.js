$(document).ready(function(){
	
	//set nav links to scroll to anchor link id.
	$('nav').find('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});
	
	$('button').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('onclick') ).offset().top
	    }, 500);
	    return false;
	});
	
});