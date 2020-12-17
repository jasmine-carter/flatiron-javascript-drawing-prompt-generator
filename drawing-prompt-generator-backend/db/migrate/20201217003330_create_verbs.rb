class CreateVerbs < ActiveRecord::Migration[6.1]
  def change
    create_table :verbs do |t|
      t.string :value
      t.timestamps
    end
  end
end
