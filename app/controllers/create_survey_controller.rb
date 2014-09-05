get '/users/:id/create' do
  erb :create_survey
end

get '/add_question' do
  @question_id = params[:question_id]
  erb :_question, layout: false
end

get '/add_choice' do
  @choice_id = params[:choice_id]
  erb :_choice, layout: false
end

post '/users/:id/create' do
  survey = Survey.create(name: params[:survey_name])

  ##NEED TO ADD CREATED BY

  question = ""
  params.each do |key, value|
    if key.include?("question")
      question = Question.create(question: value)
      survey.questions << question
    elsif key.include?("choice")
      question.choices << Choice.new(choice: value)
    end
  end
end
