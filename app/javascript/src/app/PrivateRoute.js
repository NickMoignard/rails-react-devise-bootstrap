import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  console.log('rest', rest)
  return (
    <Route {...rest} render={props => {
      console.log('props', props)
      return (
        authed
          ? <Component {...props} />
          : <Redirect to={{
                pathname: '/users/sign_in',
                state: { from: props.location }
              }}
            />
      )
    }} />
  )
}
