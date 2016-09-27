Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'properties#search'
  post '/search', to: 'properties#zillow'
  get 'property' => "properties#show" 

  get '/', to: 'properties#show', as: 'home'

  resources :properties, only: [:show, :create, :update, :destroy] do 
    resources :comps, only: [:index, :show]
  end
end
