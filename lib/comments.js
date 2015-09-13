'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here
function hideErrors(){
  $('#com-name-error').css('display','none');
  $('#com-email-error').css('display','none');
  $('#comment-error').css('display','none');
}
function hideForm(){
  $('form#add-comment').css('display','none');
}
function addCommentListener() {
  $("#show-comment-form").click(function(){
    $('form#add-comment').css('display','block');
  })
}
function cancelListener(){
  $('#cancel').click(function(){
    $('form#add-comment').css('display','none');
  })
}
function submitCommentListener(){
  $('input:submit').click(function(){
    nameValidator();
    emailValidator();
    commentValidator();
    addComment();
  })
}
function nameValidator() {
  if ($('#comment-name').val().length < 3 ){
    $('#com-name-error').show();
  }
}
function emailValidator() {
  if (!$('#com-email').val().match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/)){
    $('#com-email-error').show();
  }
}
function commentValidator() {
  if ($('#comment').val().length == 0){
    $('#comment-error').show();
  }
}
function addComment() {
  var text = $('textarea#comment').val();
  $('div#posts').append("<div class='newcomment'><p class='comment'>" + text + "</p></div>");
  $('textarea#comment').reset
}
