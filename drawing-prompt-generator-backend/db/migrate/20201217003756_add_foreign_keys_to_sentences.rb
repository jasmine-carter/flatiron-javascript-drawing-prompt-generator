class AddForeignKeysToSentences < ActiveRecord::Migration[6.1]
  def change
    add_column :sentences, :noun_id, :integer
    add_column :sentences, :verb_id, :integer
    add_column :sentences, :prompt_id, :integer
    add_column :sentences, :adjective_id, :integer
    remove_column :nouns, :sentence_id
  end
end
