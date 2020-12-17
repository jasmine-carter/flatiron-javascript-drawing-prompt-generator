class SentencesController < ApplicationController
  belongs_to :prompt
  has_many :nouns
end
