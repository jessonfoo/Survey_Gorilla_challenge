$(document).ready(function () {
  $('.left-nav a').click(function() {
    $('.render_survey').css("visibility", "visible")
  });

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

  $("#sign_up").on("click", function(event) {
    event.preventDefault();
    $.ajax({url: $(this).attr("href"),
    type: "GET"
    })
    .done(function(data) {
      cleanup()
      $('.render_survey').css("visibility", "visible")
      $(".render_survey").append(data);
    })
    .fail(function() {
      console.log("fail");
    })
  })

  $("#sign_in").on("click", function(event) {
    event.preventDefault();
    $.ajax({url: $(this).attr("href"),
    type: "GET"
    })
    .done(function(data) {
      cleanup()
      $('.render_survey').css("visibility", "visible")
      $(".render_survey").append(data);
    })
    .fail(function() {
      console.log("fail");
    })
  })
});
