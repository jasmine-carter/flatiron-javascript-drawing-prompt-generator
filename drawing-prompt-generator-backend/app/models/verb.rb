class Verb < ApplicationRecord
  has_many :sentences
  has_many :prompts, through: :sentences

  def self.random_verb
    Verb.all.sample
  end

end
