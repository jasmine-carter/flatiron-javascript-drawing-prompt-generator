class ImagesController < ApplicationController


  def index
    #binding.pry
    images = Image.all.sample(4)
    render json: ImageSerializer.new(images).serialized_json
    end

end
