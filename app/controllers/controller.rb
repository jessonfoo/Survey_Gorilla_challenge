
get '/' do
  if signed_in?
    redirect "/users/#{current_user.id}"
  end
  @surveys = Survey.all
  erb :index
end


get '/signin' do
  erb :signin
end

post '/signin' do
  @user = User.find_by(username: params[:username])
  if @user
    session[:user_id] = @user.id
    redirect "/users/#{current_user.id}"
  else
    redirect '/'
  end
end

get '/signup' do
  erb :signup, layout: false
end

post '/signup' do
  @user = User.create(params)
  session[:user_id] = @user.id
  redirect '/'
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end

get '/users/:id' do
  if signed_in?
    @my_surveys = Survey.where(created_by: current_user.username)
  end
  @other_surveys = Survey.all.select { |survey| survey.created_by != current_user.username }
  erb :temp_homepage
end

get '/surveys/:survey_id' do
  redirect "/surveys/#{params[:survey_id]}/result"
end

# fill survey
get '/surveys/:survey_id/take' do
  @survey_being_taken = Survey.find(params[:survey_id])
  @questions = @survey_being_taken.questions
  @question_number = 1
  erb :survey_take, layout: false
end

# submit survey
get '/surveys/:survey_id/submit' do
  params.each do |key, value|
    if key.include?("question")
      question_id = key.gsub("question", "").to_i
      SurveyResult.create(choice: value, question_id: question_id, survey_id: params[:survey_id])
    end
  end
  erb :survey_take_success_message, layout: false
end

# see survey result
get '/surveys/:survey_id/result' do
  @survey = Survey.find(params[:survey_id])
  erb :survey_result, layout: false
end



