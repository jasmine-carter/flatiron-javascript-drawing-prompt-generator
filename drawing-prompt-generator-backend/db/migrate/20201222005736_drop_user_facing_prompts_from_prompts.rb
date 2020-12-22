class DropUserFacingPromptsFromPrompts < ActiveRecord::Migration[6.1]
  def change
    remove_column :prompts, :user_facing_prompt, :string
  end
end
