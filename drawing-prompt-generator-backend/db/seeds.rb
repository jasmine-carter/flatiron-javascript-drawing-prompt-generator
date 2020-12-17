Adjective.delete_all
Style.delete_all

adjectives = ["angry", "sad", "depressed", "smelly", "stylish", "overheated", "stressed", "glamorous", "sassy", "bald", "fancy", "fit", "handsome", "chubby", "hairy", "grumpy", "confused", "glittery"]

styles = ["Jo Jo's Bizarre Circus",
  "DragonBall Z",
  "Sailor Moon",
  "The Peanuts",
  "Dilbert",
  "Scary Stores to Tell in the Dark",
  "Art Nouveau",
  "Tex Avery",
  "Old School Disney",
  "Steven Universe",
  "Avatar",
  "Marvel Comics",
  "Piet Mondrian",
  "Dark Souls",
  "Bloodborn",
  "Skyrim",
  "Peppa Pig",
  "Hey Arnold"
]


adjectives.each do |adjective|
  Adjective.create(value: adjective)
end
