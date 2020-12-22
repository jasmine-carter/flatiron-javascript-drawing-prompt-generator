class PromptSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_facing_prompt
  has_many :images


  attribute :user_facing_prompt do |object|
    "#{object.user_facing_prompt}"
  end
end
