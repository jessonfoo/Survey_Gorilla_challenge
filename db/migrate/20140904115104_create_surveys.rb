class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |s|
      s.string :name
      s.string :created_by
      s.timestamps
    end
  end
end
