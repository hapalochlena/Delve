Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  get '/test-fight', to: 'pages#test_fight'
  get '/about', to: 'pages#about'
  get '/team', to: 'pages#team'
  get '/donate', to: 'pages#donate'

  resources :characters

  resources :journeys, only: [:index]

  resources :games, only: [:create] do
    resources :runs, only: [:create]
  end
                      # edit & update ?


  resources :rooms do
    resources :enemies # do we need this ???????
  end

  # get 'journeys/menu', to: 'journeys#menu'
  # get 'journeys/completed', to: 'journeys#completed'
end
