class Adjective < ApplicationRecord
  has_many :sentences
  has_many :prompts, through: :sentences
end
