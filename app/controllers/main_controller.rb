require 'open-uri'
require 'json'

class MainController < ApplicationController

  def index
  	@data = JSON.parse(open("http://compass.pr.gov/compass/delitos/location?lnglat=-66.05898857116699,18.427990549260358&dist=0.1").read)
  end
end
