class Noun < ApplicationRecord
  belongs_to :prompt

  def self.random_noun(prompt)
    value = Noun.randomizer.sample
    Noun.create(value: value, prompt: prompt.id)
  end


  def self.randomizer
    options = []
    options << Faker::Games::SuperMario.character
    options << Faker::Games::Zelda.character
    options << Faker::Games::Pokemon.name
    options << Faker::Movies::StarWars.character
    options << Faker::TvShows::Simpsons.character
    options << Faker::JapaneseMedia::DragonBall.character
    options << Faker::Movies::LordOfTheRings.character
    options << Faker::Creature::Animal.name
    options << Faker::Creature::Animal.name
    options << Faker::Creature::Animal.name
  end

end
