class CreateSurveyResults < ActiveRecord::Migration
  def change
    create_table :survey_results do |r|
      r.string :choice
      r.integer :survey_id
      r.integer :question_id

      r.timestamps
    end
  end
end
