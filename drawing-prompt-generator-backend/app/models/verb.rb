class Verb < ApplicationRecord
  has_many :sentences
  has_many :prompts, through: :sentences

  def self.random_verb
    value = Faker::Verb.ing_form
    Verb.create(value: value)
  end
  
end
