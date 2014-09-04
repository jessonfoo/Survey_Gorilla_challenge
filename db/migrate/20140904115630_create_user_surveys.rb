class CreateUserSurveys < ActiveRecord::Migration
  def change
    create_table :user_surveys do |us|
      us.belongs_to :survey
      us.belongs_to :user
      us.timestamps
    end
  end
end
