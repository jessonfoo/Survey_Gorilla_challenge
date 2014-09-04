class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |c|
      c.string :choice
      c.timestamps
      c.belongs_to :question
    end
  end
end
