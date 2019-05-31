import { alertActions } from '../../alert/actions'
import { deviseConstants } from '../constants'
import { history } from '../../helpers/History'
import { registrationService } from './services'

const register = (user) => {
  const request = (user) => ({ type: deviseConstants.REGISTER_REQUEST, user })
  const success = (user) => ({ type: deviseConstants.REGISTER_SUCCESS, user })
  const failure = (error) => {
    return { type: deviseConstants.REGISTER_FAILURE, errors: error }
  }

  return dispatch => {
    dispatch(request(user))

    registrationService.register(user)
      .then(() => {
        dispatch(success())
        history.push('/users/sign_in')
        dispatch(alertActions.success('Registration successfull'))
      })
      .catch(error => {
        dispatch(failure(error))
        dispatch(alertActions.error('Registration failed'))
      })
  }
}

export const registrationActions = {
  register
}
