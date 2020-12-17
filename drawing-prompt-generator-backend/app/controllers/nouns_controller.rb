class NounsController < ApplicationController
  belongs_to :description
  has_many :prompts, through: :descriptions
end
