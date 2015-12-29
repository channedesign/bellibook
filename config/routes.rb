Rails.application.routes.draw do

  
  get "games/index"


  get "seven_differences/index"
  get "seven_differences/beach"
  get "seven_differences/paris"
  get "seven_differences/sea"


  resources :memory_cards, except: [:show] do 
    member do
            get 'delete'
        end
  end
  get "memory_cards/character"

  resources :colorings
  
  get 'books/index'
  get 'books/hailey_book'
  get 'books/isabella_book'
  get 'books/robot_book'

  root "home#index"


  
end
