class User < ActiveRecord::Base
  has_many :user_surveys
  has_many :surveys, through: :user_surveys
end
