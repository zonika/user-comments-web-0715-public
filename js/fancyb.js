$(document).ready(function(){
	
	//add attribute
	$('#top_stories figure a').attr({ rel:'g1'}); // the rel="g1" attribute inside the links lets fancybox know they are all part of the same gallery and hence allows us to use the navigation arrows to switch between images.
	
	//Fancy Options
	var fancyOps = {
		padding:0,
		overlayOpacity:.8,
		overlayColor:'#a0c2dd',
		transitionIn:'elastic',
 		transitionOut:'elastic',
		speedIn:600, 
		speedOut:200
	}//make sure there is no terminal comma unlike css always ends with semi-colon
	
	//call the plugin to activate
	$('#top_stories figure a').fancybox(fancyOps);

});