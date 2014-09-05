$(document).ready(function(){
  $(".left-nav").on("click", ".my-survey", function(event) {
    event.preventDefault();
    var request = $.ajax({
      url: $(this).attr("href"),
      type: "GET",
      context: this})
    request.done(function(serverData) {
      console.log("success");
      console.log(serverData);
      cleanup();
      // $(".container").append(serverData);
      $('.render_survey').css("visibility", "visible")
      $(".render_survey").append(serverData);
    })
    request.fail(function() {
      console.log("fail");
    })
  })
})


