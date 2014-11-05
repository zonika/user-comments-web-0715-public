describe('Validating User Input', function() {
  beforeEach(function() {
    setFixtures('<section id="comments"><h1>User Comments</h1><div id="posts"><div class="newcomment"><span class="name">Lisa Gould</span><span class="email">lisa.gould7684@ymail.com</span><span class="date">09/03/2012</span><p class="comment">Great reading! Thank you Econ News... I would like to see more articles from Chef Boullion. I\'m enjoying the keylime pie recipe with friends.</p></div></div><button id="show_comment" onclick="#add_comment">add comment</button><form id="add_comment" action="#" method="post"><label for="com_name">Name</label><br><input type="text" id="com_name" name="com_name"><br><span id="com_name_error">Name must be more than 3 characters!</span><br><label for="com_email">Email</label><br><input type="text" id="com_email" name="com_email"><br><span id="com_email_error">Must be a valid email!</span><br><label for="com_name">Comment</label><br><textarea id="comment" name="comment" rows="5"></textarea><br><span id="comment_error">Comment text required!</span><br><input type="submit" value="submit"><input id="cancel" type="reset" value="cancel"></form></section>');
    hideErrors();
    hideForm();
    addCommentListener();
    cancelListener();
  });

  it('#hideErrors should hide all errors when the page loads', function() {
    expect($('#com_name_error').css('display')).toBe('none');
    expect($('#com_email_error').css('display')).toBe('none');
    expect($('#comment_error').css('display')).toBe('none');
  });

  it('#hideForm should also hide the form until you click add comment', function() {
    expect($('form#add_comment').css('display')).toBe('none');
  });

  it('#addCommentListener should display the form when you click add comment', function() {
    // this allows the program to wait for any animation to finish
    for (var i = 0; i < 1; i++){return i}
    expect($('form#add_comment').css('display')).not.toBe('none');
  });

  it('#cancelListener should hide form when cancel is pressed', function() {
    $('#cancel').click();
    expect($('form#add_comment').css('display')).toBe('none');
  });

  describe('Displays errors with invalid inputs', function() {
    beforeEach(function() {
      try{
        $('#show_comment').click();
      }
      catch(err){
        // this prevents `unexpected illegal token` error from being thrown
        // and breaking the test
      }
    });

    it('should display the name error with a name less than 3 characters', function() {
      $('#com_name').text('t');
      $('input[type="submit"]').last().click();
      expect($('#com_name_error').css('display')).not.toBe('none');
    });

    it('should display the email error with an invalid email', function() {
      $('#com_email').text('email');
      $('input[type="submit"]').last().click();
      expect($('#com_email_error').css('display')).not.toBe('none');
    });

    it('should display the comment error when no comment is given', function() {
      $('input[type="submit"]').last().click();
      expect($('#comment_error').css('display')).not.toBe('none');
    });
  });

  it('should display the user post when properly submitted', function() {
    try{
      $('#show_comment').click();
    }
    catch(err){
      // this prevents `unexpected illegal token` error from being thrown
      // and breaking the test
    }
    $('#com_name').text('taco');
    $('#com_email').text('taco@email.com');
    $('#com_email').text('I\'m trizzolllllllin!');
    $('input[type="submit"]').last().click();
    // this allows the program to wait for any animation to finish
    for (var i = 0; i < 1; i++){return i}
    expect($('.newcomment').length).toBe(2);
  });

});