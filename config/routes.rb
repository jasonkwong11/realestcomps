Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#index'

  post '/properties', to: 'properties#create'
  get '/property' => "properties#show" 

  post '/comments', to: 'comments#create'

  get '/search', to: 'properties#show', as: 'home'

  resources :properties, only: [:show, :create, :update, :destroy] do 
    resources :comps, only: [:index, :show]
  end
end
