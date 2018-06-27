/*
** Application Router
*
*  You can read more about React router here : https://reacttraining.com/react-router/web/guides/philosophy
*/
import React from 'react'
import { Router, Route } from 'react-router'

// App
import { history } from '../helpers/history'
import HomePage from '../views/HomePage'
import { PrivateRoute } from '../components/PrivateRoute'

// Devise
import DeviseConfirmationsNew from '../views/devise/confirmations/DeviseConfirmationsNew'
import DeviseConfirmationsShow from '../views/devise/confirmations/DeviseConfirmationsShow'
import DevisePasswordsEdit from '../views/devise/passwords/DevisePasswordsEdit'
import DevisePasswordsNew  from '../views/devise/passwords/DevisePasswordsNew'
import DeviseRegistrationsNew from '../views/devise/registrations/DeviseRegistrationsNew'
import DeviseSessionsNew from '../views/devise/sessions/DeviseSessionsNew'
import DeviseUnlocksNew from '../views/devise/unlocks/DeviseUnlocksNew'
import DeviseUnlocksShow from '../views/devise/unlocks/DeviseUnlocksShow'

export const AppRouter = ({ component: Component, ...rest }) => (
  <Router history={history}>
    <div>
      <PrivateRoute exact path='/' component={HomePage} />
      <Route path="/users/confirmation/new" component={DeviseConfirmationsNew} />
      <Route path="/users/password/new" component={DevisePasswordsNew} />
      <Route path="/users/sign_in" component={DeviseSessionsNew} />
      <Route path="/users/sign_up" component={DeviseRegistrationsNew} />
      <Route path="/users/unlocks/new" component={DeviseUnlocksNew} />
      <Route path="/users/:userId/confirmation" component={DeviseConfirmationsShow} />
      <Route path="/users/:userId/password/edit" component={DevisePasswordsEdit} />
      <Route path="/users/:userId/unlock" component={DeviseUnlocksShow} />
    </div>
  </Router>
)
