class AddStyleForeignKeyToPrompts < ActiveRecord::Migration[6.1]
  def change
    add_column :prompts, :style_id, :integer
  end
end
