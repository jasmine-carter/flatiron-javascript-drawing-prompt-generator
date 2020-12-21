class ImagesController < ApplicationController


  def index
    images = Image.all
    render json: {test: "You did it!"}
  end

end
