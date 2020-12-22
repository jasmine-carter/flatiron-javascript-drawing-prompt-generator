class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :url
  belongs_to :prompt
end
