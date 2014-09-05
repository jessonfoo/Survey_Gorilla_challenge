class CreateSurveyResults < ActiveRecord::Migration
  def change
    create_table :survey_results do |r|
      r.string :choice
      r.belongs_to :survey
      r.integer :question_id

      r.timestamps
    end
  end
end
