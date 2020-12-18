class Style < ApplicationRecord
  has_many :prompts

  def self.random_style
    Style.all.sample
  end
end
