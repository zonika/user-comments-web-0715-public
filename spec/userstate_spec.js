describe("Validating User Input", function() {
  
  beforeEach(function() {
    setFixtures('<div id="wrapper">'
    + '<h1>Validation</h1>'
    + '<form id="add_user_data">'
    + '<label for="user_name">Name:</label>'
    + '<input type="text" id="user_name" name="user_name" placeholder="username">'
    + '<span id="user_name_error">Name must be more than 3 characters!</span>'
    + '<label for="user_age">Age:</label>'
    + '<input type="text" id="user_age" name="user_age" placeholder="age">'
    + '<span id="user_age_error">Age must be a number!</span>'
    + '<label for="user_ph">Phone:</label>'
    + '<input type="tel" id="user_ph" name="user_ph" placeholder="phone">'
    + '<span id="user_ph_error">Phone must be valid (555-555-5555)!</span>'
    + '<label for="user_email">Email:</label>'
    + '<input type="email" id="user_email" name="user_email" placeholder="email">'
    + '<span id="user_email_error">Email must be valid!</span>'
    + '<input type="submit" value="update">'
    + '</form><ul id="display_data"></ul>'
    + '<div id="clear_box"><button id="clear">clear</button></div></div>');

    var user = {
      name: '',
      age: '',
      phone: '',
      email: ''
    };

    checkUserInput(user);
  });
      
  it ("should validate a name's length is longer than three.", function() {
    $('#user_name').val("ta");
    $("[type='submit']").click();
    expect($("#user_name_error").css("display")).not.toBe("none");
    $('#user_name').val("taco");
    $("[type='submit']").click();
    expect($("#user_name_error").css("display")).toBe("none");
  });

  it ("should validate an age is a number.", function() {
    $('#user_age').val("12e");
    $("[type='submit']").click();
    expect($("#user_age_error").css("display")).not.toBe("none");
    $('#user_age').val(123);
    $("[type='submit']").click();
    expect($("#user_age_error").css("display")).toBe("none");
  });

  it ("should validate that a phone number that's formatted as 555-555-5555.", function() {
    $('#user_ph').val("123-4567843");
    $("[type='submit']").click();
    expect($("#user_ph_error").css("display")).not.toBe("none");
    $('#user_ph').val("123-456-7843");
    $("[type='submit']").click();
    expect($("#user_ph_error").css("display")).toBe("none");
  });

  it ("should validate that a user's email looks real", function() {
    $('#user_email').val("taco");
    $("[type='submit']").click();
    expect($("#user_email_error").css("display")).not.toBe("none");
    $('#user_email').val("taco@bell.com");
    $("[type='submit']").click();
    expect($("#user_email_error").css("display")).toBe("none");
  });

  describe("Displaying the user data if all the information is correct", function(){
    it("should display the user info in a ul with lis", function() {
      $("li").remove();
      $('#user_name').val("taco");
      $('#user_age').val(123);
      $('#user_ph').val("123-456-7843");
      $('#user_email').val("taco@bell.com");
      $("[type='submit']").click();
      expect($("li").length).toBe(4)
    });

    it("should clear the user display data and user inputs when clear is clicked", function() {
      $("li").remove();
      $('#user_name').val("taco");
      $('#user_age').val(123);
      $('#user_ph').val("123-456-7843");
      $('#user_email').val("taco@bell.com");
      $("[type='submit']").click();
      $("#clear").click();
      expect($("li").length).toBe(0)
      expect($('#user_name').val()).toBe("")
      expect($('#user_age').val()).toBe("")
      expect($('#user_ph').val()).toBe("")
      expect($('#user_email').val()).toBe("")
    });
  });
});