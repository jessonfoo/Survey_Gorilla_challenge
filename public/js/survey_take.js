$(document).ready(function(){
  $(".container").on("click", ".other-survey", function(event) {
    event.preventDefault();
    // formData = $(this).serialize();
    // console.log(formData);
    // debugger
    var request = $.ajax({url: $(this).attr("href"), type: "GET", context: this})
    request.done(function(serverData) {
      console.log("success");
      console.log(serverData);
      cleanup();
      $(".container").append(serverData)
    })
    request.fail(function() {
      console.log("fail");
    })
  })

  $(".container").on("click", ".submit", function(event) {
    event.preventDefault();
    var answers = $(".poll-form");
    var formData = $(".poll-form").children().serialize();
    request = $.ajax({url: $(this).attr("href"), type: "GET", context: this, data: formData})
    request.done(function(message) {
      console.log("success");
      cleanup();
      console.log(message)
      $(".container").append(message);
    })
    request.fail(function() {
      console.log("fail");
    })
  })
})

function cleanup() {
  $(".survey-container").remove();
  $(".survey-result").remove();
  $(".message").remove();
  $('.taken-message').remove();
}
