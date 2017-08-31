Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } {
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show, :new]
    resources :bookings, only: [:create, :destroy]
    #FOR NEW SPOT form -> , :new]
    #FOR SPOT EDIT FORM -> , :edit]
    #FOR DELETING SPOT -> , :destroy]
  }

end
