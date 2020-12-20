Adjective.delete_all
Style.delete_all
Verb.delete_all

adjectives = ["angry", "sad", "depressed", "smelly", "stylish", "overheated", "stressed", "glamorous", "sassy", "bald", "fancy", "fit", "handsome", "chubby", "hairy", "grumpy", "confused", "glittery"]

styles = ["Jo Jo's Bizarre Circus",
  "DragonBall Z",
  "Sailor Moon",
  "The Peanuts",
  "Dilbert",
  "Scary Stories to Tell in the Dark",
  "Art Nouveau",
  "Tex Avery",
  "Old School Disney",
  "Steven Universe",
  "Avatar",
  "Marvel Comics",
  "Piet Mondrian",
  "Dark Souls",
  "Bloodborne",
  "Skyrim",
  "Peppa Pig",
  "Hey Arnold"
]

verbs = [
  "skipping",
  "knitting",
  "screaming",
  "sobbing",
  "laughing",
  "dancing",
  "leaning",
  "writing",
  "kicking",
  "baking",
  "cooking",
  "diving",
  "flying",
  "running",
  "sailing",
  "drawing",
  "typing",
  "sleeping",
  "crying",
  "laughing"

]

adjectives.each do |adjective|
  Adjective.create(value: adjective)
end

styles.each do |style|
  Style.create(value: style)
end

verbs.each do |verb|
  Verb.create(value: verb)
end
