class CreateNouns < ActiveRecord::Migration[6.1]
  def change
    create_table :nouns do |t|
      t.string :value
      t.references :prompt, null: false, foreign_key: true

      t.timestamps
    end
  end
end
