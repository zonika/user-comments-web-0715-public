$(document).ready(function(){

  var showCommentButton = $('#show_comment'),
    cancelButton = $('#cancel'),
    addCommentForm = $('#add_comment'),
    comNameInput = $('#com_name'),
    comNameVal = '',
    comNameError = $('#com_name_error'),
    comEmailInput = $('#com_email'),
    comEmailVal = '',
    comEmailError = $('#com_email_error'),
    commentInput = $('#comment'),
    commentVal = '',
    commentError = $('#comment_error'),
    postArea = $('#posts'),
    newPost = {
      name: '',
      email: '',
      date: '',
      comment: ''
    },
    efilter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;

    //console.log(showCommentButton,addCommentForm,comNameInput,comNameVal,comNameError,comEmailInput,comEmailVal,comEmailError,commentInput,commentVal,commentError,postArea,newPost);

    addCommentForm.hide(); //initially  hide the comment form.
    $('#add_comment').find('span').hide(); //initailly hide all error messages.

    showCommentButton.click(function(){
      comNameInput.val(''); //clear
      comEmailInput.val(''); //clear
      commentInput.val(''); //clear
      addCommentForm.show(400); //show comment form.
      showCommentButton.hide(); //hide button.
    });

    cancelButton.click(function(){
      addCommentForm.hide(200); //hide form.
      showCommentButton.show(); //show button.
    });

    //create date
    function newDate(){
      var date = new Date(),
        dd = date.getDate(),
        mm = date.getMonth()+1, //January is 0!
        yyyy = date.getFullYear();
      if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
      var fulldate = mm+'/'+dd+'/'+yyyy;
      return fulldate;
    }

    //display comments
    function displayComments() {

      postArea.append('<div class="newcomment">');

      $.each(newPost, function(prop, value){

        postArea.find('.newcomment:last-child').append('<span class="'+prop+'">'+value+'</span>');
        console.log(prop+': '+value);

      }); //end each loop

      console.log('----------');

    }

    //post comment
    addCommentForm.submit(function(){

      //get input
      comNameVal = comNameInput.val();
      comEmailVal = comEmailInput.val();
      commentVal = commentInput.val();

      console.log('new values: '+comNameVal,comEmailVal,commentVal);

      function nameValidate(){
        if(comNameVal < 3){
          comNameError.show();
          comNameInput.addClass('error');
          return false;
        }else{
          comNameError.hide();
          comNameInput.removeClass('error');
          return true;
        }
      }

      function emailValidate(){
        if(efilter.test(comEmailVal)){
          comEmailError.hide();
          comEmailInput.removeClass('error');
          return true;
        }else{
          comEmailError.show();
          comEmailInput.addClass('error');
          return false;
        }
      }

      function commentValidate(){
        if(commentVal < 1){
          commentError.show();
          commentInput.addClass('error');
          return false;
        }else{
          commentError.hide();
          commentInput.removeClass('error');
          return true;
        }
      }

      if(nameValidate() & emailValidate() & commentValidate()){
        newPost.name = comNameVal;
        newPost.email = comEmailVal;
        newPost.date = newDate();
        newPost.comment = commentVal;
        addCommentForm.hide(); //hide comment form.
        showCommentButton.show(); //show button.
        displayComments();
      }

      return false // prevent form from reloading page.
    });

});