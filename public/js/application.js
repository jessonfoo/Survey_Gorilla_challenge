$(document).ready(function () {
  $('.survey-content1').hide();
  $('.survey-content2').hide();
  $('#avail-surveys').click(function () {
    $('.survey-content1').slideToggle('slow');
  });

  $('#your-surveys').click(function () {
    $('.survey-content2').slideToggle('slow');
  });
  $('broc-img').show();
  $('#broc-div').click(function () {
    $('.broc-img').rotate({ angle: 0, animateTo: 180, easing: $.easing.easeInOutExpo });
  });
});