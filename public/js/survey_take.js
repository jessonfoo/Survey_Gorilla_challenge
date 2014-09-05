$(document).ready(function(){
  $(".left-nav").on("click", ".other-survey", function(event) {
    event.preventDefault();
    var request = $.ajax({
      url: $(this).attr("href"),
      type: "GET"
    })
    request.done(function(serverData) {
      cleanup();
      $(".render_survey").append(serverData)
    })
    request.fail(function() {
      console.log("fail");
    })
  })

  $(".render_survey").on("click", ".submit", function(event) {
    event.preventDefault();
    var answers = $(".poll-form");
    var formData = $(".poll-form").children().serialize();
    request = $.ajax({
      url: $(this).attr("href"),
      type: "GET",
      data: formData
    })

    request.done(function(message) {
      console.log("success");
      cleanup();
      console.log(message)
      $('.render_survey').css("visibility", "visible");
      $(".render_survey").append(message);
    })
    request.fail(function() {
      console.log("fail");
    })
  })
})

function cleanup() {
  $(".create_survey_header").remove();
  $(".question_container").remove();
  $(".success_message").remove();
  $(".survey-container").remove();
  $(".inputfields").remove();
  $(".survey-result").remove();
  $(".message").remove();
  $('.taken-message').remove();
}

