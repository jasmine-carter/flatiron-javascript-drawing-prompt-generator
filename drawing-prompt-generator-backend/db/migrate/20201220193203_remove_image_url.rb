class RemoveImageUrl < ActiveRecord::Migration[6.1]
  def change
    remove_column :prompts, :image_url
  end
end
