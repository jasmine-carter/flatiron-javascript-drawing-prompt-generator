class ImageSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :prompt

  attributes :url

  attribute :image_caption do |object|
    "#{object.prompt.user_facing_prompt}"
  end
end
