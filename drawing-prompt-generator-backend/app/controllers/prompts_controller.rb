class PromptsController < ApplicationController

  def index
    prompts = Prompt.all
    render json: {test: "success!"}
  end

  def create
    #binding.pry
    if params["noun"].present?
      noun = Noun.find_or_create_by(value: params["noun"])
      verb = Verb.find_or_create_by(value: params["verb"])
      adjective = Adjective.find_or_create_by(value: params["adjective"])
      style = Style.find_or_create_by(value: params["style"])
      prompt = Prompt.create(style: style)
      sentence = Sentence.create(prompt: prompt, value: "A #{adjective.value} #{noun.value}, #{verb.value} in the style of #{style.value}", noun_id: noun.id, verb_id: verb.id, adjective_id: adjective.id)
      binding.pry
      render json: prompt.to_json(:include => {
        :sentences => {:only => [:value]}
        })

    else
      verb = Verb.random_verb
      noun = Noun.random_noun
      adjective = Adjective.random_adjective
      style = Style.random_style
      prompt = Prompt.create(style: style)
      sentence = Sentence.create(prompt: prompt, value: "A #{adjective.value} #{noun.value}, #{verb.value} in the style of #{style.value}", noun_id: noun.id, verb_id: verb.id, adjective_id: adjective.id)
      render json: prompt.to_json(:include => {
        :sentences => {:only => [:value]}
        })

    end
  end


end
