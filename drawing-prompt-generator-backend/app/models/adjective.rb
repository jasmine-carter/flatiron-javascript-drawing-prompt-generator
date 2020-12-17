class Adjective < ApplicationRecord
  has_many :sentences
  has_many :prompts, through: :sentences
  validates :value, uniqueness: true


  def self.random_adjective
    Adjective.all.sample.value
  end

end
