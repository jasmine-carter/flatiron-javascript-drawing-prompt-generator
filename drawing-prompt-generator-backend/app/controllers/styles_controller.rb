class StylesController < ApplicationController

  def self.random_style
    value = Style.all.sample.value
  end

end
