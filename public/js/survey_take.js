$(document).ready(function(){
  $(".left-nav").on("click", ".other-survey", function(event) {
    event.preventDefault();
    var request = $.ajax({
      url: $(this).attr("href"),
      type: "GET", context: this
    })
    request.done(function(serverData) {
      cleanup()
      $(".render_survey").append(serverData)
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
      $(".container").append(message);
    })
    request.fail(function() {
      console.log("fail");
    })
  })
})

function cleanup() {
  $(".survey-container").remove()
  $(".inputfields").remove()
  $(".survey-result").remove();
  $(".message").remove();
}
