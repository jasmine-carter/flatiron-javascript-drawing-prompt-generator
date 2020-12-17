class Noun < ApplicationRecord
  has_many :sentences
  has_many :prompts, through: :sentences

  def self.random_noun
    value = Noun.randomizer.sample
    Noun.create(value: value)
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
