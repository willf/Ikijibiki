require 'wordnik'
require 'sinatra'
require 'sinatra/static_assets'
require "sinatra/reloader" if development?

Wordnik.configure do |config|
  config.api_key = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
end

get "/" do
  @words = Wordnik.word.get_random_words("limit"=>50, "hasDictionaryDef" => true).map{|w| w["word"]}
  erb :index
end

