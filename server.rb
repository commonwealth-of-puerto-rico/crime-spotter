#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'

set :public_folder, 'public'

get '/assets/*' do
  send_file File.join('assets', params[:splat][0])
end

get '/' do
  send_file File.join(settings.public_folder, 'crime.html')
end
