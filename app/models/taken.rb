class Taken < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :user
end
