Rails.application.routes.draw do
  # ~~~~ Application API ~~~~
  #
  # Declare all your resources in the `:api` scope.
  # The API scope calls controllers executing requested actions from the UI.
  # (Create a post, delete a user, and so on ...).
  #
  # Frontend routes are defined in the JavaScript application's router.
  # @see get '*path' at the bottom of this file.
  #
  # `scope :api, module: :api ...` instead of `namespace :api, ...` in order to
  # keep named routes without the `_api_` part.
  # (`new_user_session_path` instead of `new_api_user_session_path`).
  scope :api, module: :api, constraints: { format: 'json' } do
    # We are defining the controllers paths avoding to search them from an `api`
    # folder.
    devise_for :users, controllers: {
      confirmations: 'devise/confirmations',
      passwords: 'devise/passwords',
      registrations: 'devise/registrations',
      sessions: 'sessions',
      unlocks: 'devise/unlocks'
    }

    # ~~~~ Application Resources ~~~~
    resources :users
  end

  # ~~~~ Devise URL overrides ~~~~
  #
  # Override the Devise confirmation URL so that it doesn't include the `/api/`
  # part of the URL since the `devise_for` is included in the `:api` scope.
  # (See above)
  get '/users/:id/confirmation', to: 'home#index', as: :confirmation
  get '/users/:id/password/edit', to: 'home#index', as: :edit_password
  get '/users/:id/unlock', to: 'home#index', as: :unlock

  # Application root is required.
  root to: 'home#index'

  # Forward everything else to the JavaScript application router
  get '*path', to: 'home#index'
end
