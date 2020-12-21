class ImagesController < ApplicationController


  def index
    #binding.pry
    images = Image.all.sample(4)
    render json: images.to_json(:include=> {
      :prompt => {:only => :sentences }
      })
  end

end
