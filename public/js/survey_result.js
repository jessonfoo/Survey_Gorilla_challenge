$(document).ready(function(){
  $(".container").on("click", ".my-survey", function(event) {
    event.preventDefault();
    var request = $.ajax({url: $(this).attr("href"), type: "GET", context: this})
    request.done(function(serverData) {
      console.log("success");
      console.log(serverData);
      cleanup();
      $(".container").append(serverData);
    })
    request.fail(function() {
      console.log("fail");
    })
  })
})


