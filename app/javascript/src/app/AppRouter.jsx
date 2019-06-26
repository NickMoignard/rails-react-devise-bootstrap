/*
** Application Router
*
*  You can read more about React router here:
*  https://reacttraining.com/react-router/web/guides/philosophy
*/
import React from 'react'
import { connect } from 'react-redux'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'

// App
import history from '../helpers/History'
import FourOFour from './FourOFour'
import HomePage from '../home/HomePage'
import { PrivateRoute } from './PrivateRoute'

// Devise
import DeviseConfirmationsNew from '../devise/confirmations/DeviseConfirmationsNew'
import DeviseConfirmationsShow from '../devise/confirmations/DeviseConfirmationsShow'
import DevisePasswordsEdit from '../devise/passwords/DevisePasswordsEdit'
import DevisePasswordsNew  from '../devise/passwords/DevisePasswordsNew'
import DeviseRegistrationsNew from '../devise/registrations/DeviseRegistrationsNew'
import DeviseSessionsNew from '../devise/sessions/DeviseSessionsNew'
import DeviseUnlocksNew from '../devise/unlocks/DeviseUnlocksNew'
import DeviseUnlocksShow from '../devise/unlocks/DeviseUnlocksShow'

class AppRouter extends React.Component {
  render() {
    const { loggedIn } = this.props
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} authed={loggedIn} />
          <Route path="/users/confirmation/new" component={DeviseConfirmationsNew} />
          <Route path="/users/password/new" component={DevisePasswordsNew} />
          <Route path="/users/sign_in" component={DeviseSessionsNew} />
          <Route path="/users/sign_up" component={DeviseRegistrationsNew} />
          <Route path="/users/unlocks/new" component={DeviseUnlocksNew} />
          <Route path="/users/:userId/confirmation" component={DeviseConfirmationsShow} />
          <Route path="/users/:userId/password/edit" component={DevisePasswordsEdit} />
          <Route path="/users/:userId/unlock" component={DeviseUnlocksShow} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication
  return { loggedIn }
}

export default connect(mapStateToProps)(AppRouter)
