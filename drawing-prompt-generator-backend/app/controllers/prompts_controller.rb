class PromptsController < ApplicationController

  def index
    prompts = Prompt.all
    render json: {test: "success!"}
  end

  def create
    #if no values are provided, create random prompt
    #else create prompts based on values from user
    verb = Verb.random_verb
    noun = Noun.random_noun
    adjective = Adjective.random_adjective#find or create when user submitted
    style = Style.random_style
    prompt = Prompt.create(style: style)
    sentence = Sentence.create(prompt: prompt, value: "A #{adjective.value} #{noun.value}, #{verb.value} in the style of #{style.value}", noun_id: noun.id, verb_id: verb.id, adjective_id: adjective.id)
    render json: prompt.sentences.first
  end


end
