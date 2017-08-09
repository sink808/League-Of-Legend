$(document).ready(function(){
  $('.cell').hover(
  function() {
    $(this).find('.caption').slideDown(200);
  }, function() {
    $(this).find('.caption').slideUp(200);
  }
);

});