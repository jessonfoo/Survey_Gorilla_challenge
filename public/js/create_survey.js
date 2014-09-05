$(document).ready(function() {
  var question_count = 0
  var choice_count = 0

  $(".render_survey").on("click", "#add_question", function(event){
    question_count += 1
    console.log(1)
    event.preventDefault()
    $.ajax({
      url: '/add_question',
      type: 'GET',
      data: {question_id: question_count}
    })
    .done(function(data) {
      $(".question_container").append(data)
    })
    .fail( function() {console.log("fail")} )
  });

  $(".render_survey").on("click", ".add_choice", function(event){
    choice_count += 1
    button = $(this)
    event.preventDefault()
    $.ajax({
      url: '/add_choice',
      type: 'GET',
      data: {choice_id: choice_count}
    })
    .done(function(data) {
      button.parent().append(data)
    })
    .fail( function() {console.log("fail")} )
  });

  $(".render_survey").on("click", "#delete_choice", function(event){
    button = $(this)
    event.preventDefault()
    $.ajax({
    })
    .done(function(data) {
      button.parent().remove()
    })
    .fail( function() {console.log("fail")} )
  });

  $(".render_survey").on("click", "#delete_question", function(event){
    button = $(this)
    event.preventDefault()
    $.ajax({
    })
    .done(function(data) {
      button.parent().parent().remove()
    })
    .fail( function() {console.log("fail")} )
  });

  $("#create_survey").on("click", function(event){
    event.preventDefault()
    $.ajax({
      url: $("#create_form").attr("action"),
      type: 'GET'
    })
    .done(function(data) {
      cleanup();
      $('.render_survey').css("visibility", "visible")
      $(".render_survey").append(data);
    })
    .fail( function() {console.log("fail")} )
  });
});


