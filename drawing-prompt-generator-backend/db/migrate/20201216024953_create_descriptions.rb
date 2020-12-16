class CreateDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :descriptions do |t|
      t.references :prompt, null: false, foreign_key: true

      t.timestamps
    end
  end
end
