get '/add_question' do
  @question_id = params[:question_id]
  erb :_question, layout: false
end

get '/add_choice' do
  @choice_id = params[:choice_id]
  erb :_choice, layout: false
end

get '/users/:id/create' do
    erb :_create_survey
end

post '/users/:id/create' do
  survey = Survey.create(name: params[:survey_name], created_by: current_user.username)
  question = ""
  params.each do |key, value|
    if key.include?("question")
      question = Question.create(question: value)
      survey.questions << question
    elsif key.include?("choice")
      question.choices << Choice.new(choice: value)
    end
  end
  redirect "/"
end
