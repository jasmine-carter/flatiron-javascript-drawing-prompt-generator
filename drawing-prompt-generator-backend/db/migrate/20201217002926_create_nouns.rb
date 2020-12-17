class CreateNouns < ActiveRecord::Migration[6.1]
  def change
    create_table :nouns do |t|
      t.string :value
      t.integer :sentence_id
      t.timestamps
    end
  end
end
