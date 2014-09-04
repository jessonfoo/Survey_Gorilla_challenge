class Survey < ActiveRecord::Base
  # Remember to create a migration!
  has_many :user_surveys
  has_many :users, through: :user_surveys
  has_many :questions
end
