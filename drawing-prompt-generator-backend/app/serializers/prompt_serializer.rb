class PromptSerializer
  include FastJsonapi::ObjectSerializer
  has_many :images


  attribute :user_facing_prompt do |object|
    "#{object.user_facing_prompt}"
  end

end
