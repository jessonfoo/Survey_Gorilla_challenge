class SurveyResult < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :survey
end
