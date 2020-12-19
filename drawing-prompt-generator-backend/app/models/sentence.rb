class Sentence < ApplicationRecord
  belongs_to :prompt
  belongs_to :noun
  belongs_to :verb
  belongs_to :adjective

  def structure(adjective, noun, verb, style)
    self.value = "A #{adjective.value} #{noun.value}, #{verb.value} in the style of #{style.value}"
  end

end
