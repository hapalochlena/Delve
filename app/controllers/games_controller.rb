class GamesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    @game = Game.new
    @character = Character.find(1) # Seeded character with ID = 1
    @game.character = @character
    @game.save
  end
end
