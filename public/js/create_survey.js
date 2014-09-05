$(document).ready(function() {
  var question_count = 0
  var choice_count = 0

  $("#add_question").on("click", function(event){
    question_count += 1
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

  $(".question_container").on("click", ".add_choice", function(event){
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

  $(".question_container").on("click", ".delete_choice", function(event){
    button = $(this)
    event.preventDefault()
    $.ajax({
    })
    .done(function(data) {
      button.parent().remove()
    })
    .fail( function() {console.log("fail")} )
  });

  $("#create_button").on("click", function(event) {
    event.preventDefault()
    var form_data = $(".question_container").serialize()
    console.log(form_data)
    $.ajax({
      url: '/users/3/create',
      type: 'POST',
      data: form_data
    })
    .done(function() {
      console.log("success")
    })
    .fail( function() {console.log("fail")} )
  });
});


