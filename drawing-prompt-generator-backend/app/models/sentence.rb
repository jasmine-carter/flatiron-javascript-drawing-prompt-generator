class Sentence < ApplicationRecord
  belongs_to :prompt
  belongs_to :noun
  belongs_to :verb
  belongs_to :adjective
end
