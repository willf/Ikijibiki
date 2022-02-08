require 'wordnik'
require 'sinatra'
require 'sinatra/static_assets'
require "sinatra/reloader" if development?

Wordnik.configure do |config|
  config.api_key = "YOUR_KEY"
end

get "/" do
  @words = Wordnik.word.get_random_words("limit"=>50, "hasDictionaryDef" => true).map{|w| w["word"]}
  erb :index
end

