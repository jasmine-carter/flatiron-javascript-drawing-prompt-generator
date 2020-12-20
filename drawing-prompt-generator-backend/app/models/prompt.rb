class Prompt < ApplicationRecord
  has_many :sentences
  has_many :nouns, through: :sentences
  has_many :verbs, through: :sentences
  has_many :adjectives, through: :sentences
  has_many :images
  belongs_to :style

  def user_facing_prompt
    self.sentences.first.value
  end

end
