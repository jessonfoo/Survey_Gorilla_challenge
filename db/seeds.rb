require 'faker'

5.times do
  User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Address.country)
end

User.all.each do |user|
  5.times do
    user.surveys << Survey.create(name: Faker::Commerce.department, created_by: user.username)
  end
end

Survey.all.each do |survey|
  5.times do
    survey.questions << Question.create(question: Faker::Commerce.product_name + "?")
  end
end

Question.all.each do |question|
  question.choices << Choice.create(choice: "bad")
  question.choices << Choice.create(choice: "good")
  question.choices << Choice.create(choice: "great")
  question.choices << Choice.create(choice: "excellent")
end
