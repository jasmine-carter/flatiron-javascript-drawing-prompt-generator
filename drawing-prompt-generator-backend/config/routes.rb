Rails.application.routes.draw do
  resources :descriptions
  resources :verbs
  resources :styles
  resources :nouns
  resources :prompts
  resources :images
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
