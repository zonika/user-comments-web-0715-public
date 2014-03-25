$(document).ready(function(){

	var loginLink = $('#login'),
		logoutLink = $('#logout'),
		signUpLink = $('#signup'),
		userLoginForm = $('#user_login'),
		usernameInput = $('#username'),
		usernameVal = '',
		passwordInput = $('#password'),
		passwordVal = '',
		subscriptionsLink = $('.subscriptions_link'),
		subscriptions = $('#subscriptions'),
		
		loggedIn = false;
		//with no backend currently to check their input against a database & for sake of an example we will manually set the var logged in to true or false.
		
		userLoginForm.hide(); //hide login form.
		loginLink.show(); //show login link.
		logoutLink.hide(); //hide logout link.
		subscriptionsLink.hide(); //hide subscriptions link in the navbar.
		subscriptions.hide(); //hide their subscriptions.
	
	loginLink.click(function(){
		userLoginForm.toggle(400);
	});
	
	logoutLink.click(function(){
		userLoginForm.hide(); //hide login form.
		loginLink.show(); //show login link.
		logoutLink.hide(); //hide logout link.
		subscriptionsLink.hide(200); //hide subscriptions link in the navbar.
		subscriptions.hide(200); //hide their subscriptions.
		loggedIn = false;
	});
	
	userLoginForm.submit(function(){
	
		//assume we match user login on backend and the match comes up true. We can manually change logged in to true to simulate this.
		
		loggedIn = true;
		
		if(loggedIn === true){
			userLoginForm.hide(); //hide login form.
			loginLink.hide(); //hide login link.
			logoutLink.show(); //show logout link.
			subscriptionsLink.show(200); //show subscriptions link in the navbar.
			subscriptions.show(200); //show their subscriptions.
		}else{
			userLoginForm.hide(); //hide login form.
			loginLink.show(); //show login link.
			logoutLink.hide(); //hide logout link.
			subscriptionsLink.hide(200); //hide subscriptions link in the navbar.
			subscriptions.hide(200); //hide their subscriptions.
			loggedIn = false;
		}
		
		return false; //prevents form from submitting data until we have the backend in place.
	});

});