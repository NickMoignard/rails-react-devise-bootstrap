import { alertActions } from '../../alert/actions'
import { deviseConstants } from '../constants'
import { history } from '../../helpers/History'
import { sessionService } from './services'

const login = (email, password) => {
  const request = user => {
    return { type: deviseConstants.LOGIN_REQUEST, user }
  }
  const success = user => {
    return { type: deviseConstants.LOGIN_SUCCESS, user }
  }
  const failure = error => {
    return { type: deviseConstants.LOGIN_FAILURE, error }
  }

  return dispatch => {
    dispatch(request({ email }))

    sessionService.login(email, password)
      .then(
        user => {
          dispatch(success(user))
          dispatch(alertActions.success('Login successfull'))
          history.push('/')
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error('Login failure'))
        }
      )
  }
}

const logout = () => {
  sessionService.logout()
  return { type: deviseConstants.LOGOUT }
}

export const sessionActions = {
  login,
  logout
}
