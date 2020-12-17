class PromptsController < ApplicationController


  def create
    #if no values are provided, create random prompt
    #else create prompts based on values from user
    verb = Verb.randomizer
    noun = Noun.random_noun
    adjective = Adjective.random_adjective#find or create when user submitted
  end


end
