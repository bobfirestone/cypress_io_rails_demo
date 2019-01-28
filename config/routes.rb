Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  resources :posts

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index]
      get '/posts/:slug', to: 'posts#show', as: 'post'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "homepage#index"
end
