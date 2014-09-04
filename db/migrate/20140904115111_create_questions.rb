class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |q|
      q.string :question
      q.timestamps
      q.belongs_to :survey
    end
  end
end
