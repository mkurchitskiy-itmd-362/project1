// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
$(document).ready(function () {
  $("#contact-form").click(function () {
    alert("Thank you for subcribing, time to ride or died!");
  });
}); 