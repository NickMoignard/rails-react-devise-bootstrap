import { userConstants } from '../constants/user.constants'
import { userService } from '../services/user.service'
import { alertActions } from './alert.actions'
import { history } from '../helpers/history'

export const userActions = {
  changePassword,
  confirm,
  delete: _delete,
  getAll,
  login,
  logout,
  register,
  resendConfirmation,
  resendUnlock,
  sendPasswordInstructions,
  unlock
}

function changePassword(user) {
  return dispatch => {
    dispatch(request({ user }))

    userService.changePassword(user)
      .then(
        user => {
          dispatch(success(user))
          dispatch(alertActions.success('Password changed successfully'))
          history.push('/users/sign_in')
        },
        error => {
          dispatch(failure(error.errors))
          dispatch(alertActions.error('Something prevented the password update'))
        }
      )
  }

  function request(user) {
    return { type: userConstants.CHANGE_PASSWORD_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.CHANGE_PASSWORD_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.CHANGE_PASSWORD_FAILURE, error }
  }
}

function confirm(token) {
  return dispatch => {
    dispatch(request({ token }))

    userService.confirm(token)
      .then(
        user => {
          dispatch(success(user))
          history.push('/users/sign_in')
          dispatch(alertActions.success('Confirmation successfull'))
        },
        error => {
          dispatch(failure(error.error))
          dispatch(alertActions.error(error.error))
        }
      )
  }

  function request(user) {
    return { type: userConstants.CONFIRMATION_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.CONFIRMATION_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.CONFIRMATION_FAILURE, error }
  }
}

// Prefixed function name with underscore because delete is a reserved word in
// javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id))

    userService.delete(id)
      .then(
        user => {
          dispatch(success(id))
        },
        error => {
          dispatch(alertActions.error('Something prevented to delete this user'))
          dispatch(failure(id, error))
        }
      )
  }

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id }
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id }
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error }
  }
}

function getAll() {
  return dispatch => {
    dispatch(request())

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      )
  }

  function request() {
    return { type: userConstants.GETALL_REQUEST }
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users }
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error }
  }
}

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }))

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user))
          dispatch(alertActions.success('Login successfull'))
          history.push('/')
        },
        error => {
          dispatch(failure(error.error))
          dispatch(alertActions.error(error.error))
        }
      )
  }

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT }
}

function register(user) {
  return dispatch => {
    dispatch(request(user))

    userService.register(user)
      .then(
        user => {
          dispatch(success())
          history.push('/users/sign_in')
          dispatch(alertActions.success('Registration successfull'))
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error('Registration failed'))
        }
      )
  }

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, errors: error.errors }
  }
}

function resendConfirmation(user) {
  return dispatch => {
    dispatch(request(user))

    userService.resendConfirmation(user)
      .then(
        user => {
          dispatch(success())
          history.push('/users/sign_in')
          dispatch(alertActions.success('You will receive an email with instructions for how to confirm your email address in a few minutes.'))
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error('Something prevented resending the confirmation email'))
        }
      )
  }

  function request(user) {
    return { type: userConstants.CONFIRMATION_RESEND_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.CONFIRMATION_RESEND_SUCCESS, user }
  }
  function failure(error) {
    return {
      type: userConstants.CONFIRMATION_RESEND_FAILURE,
      errors: error.errors
    }
  }
}

function resendUnlock(user) {
  return dispatch => {
    dispatch(request(user))

    userService.resendUnlock(user)
      .then(
        user => {
          dispatch(success())
          history.push('/users/sign_in')
          dispatch(alertActions.success('You will receive an email with instructions for how to unlock your account in a few minutes.'))
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error('Something prevented resending the unlock instructions email'))
        }
      )
  }

  function request(user) {
    return { type: userConstants.UNLOCK_RESEND_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.UNLOCK_RESEND_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.UNLOCK_RESEND_FAILURE, errors: error.errors }
  }
}

function sendPasswordInstructions(email) {
  return dispatch => {
    dispatch(request(email))

    userService.sendResetPasswordInstructions(email)
      .then(
        user => {
          dispatch(success())
          history.push('/users/sign_in')
          dispatch(alertActions.success('You will receive an email with instructions for how to change your password in a few minutes.'))
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error('Something prevented sending the password instructions email'))
        }
      )
  }

  function request(email) {
    return { type: userConstants.PASSWORD_RESET_REQUEST, email }
  }
  function success(email) {
    return { type: userConstants.PASSWORD_RESET_SUCCESS, email }
  }
  function failure(error) {
    return { type: userConstants.PASSWORD_RESET_FAILURE, errors: error.errors }
  }
}

function unlock(token) {
  return dispatch => {
    dispatch(request({ token }))

    userService.unlock(token)
      .then(
        user => {
          dispatch(success(user))
          history.push('/users/sign_in')
          dispatch(alertActions.success('Your account has been unlocked successfully. Please sign in to continue.'))
        },
        error => {
          dispatch(failure(error.error))
          history.push('/users/sign_in')
          dispatch(alertActions.error('Something prevented to unlock your account.'))
        }
      )
  }

  function request(user) {
    return { type: userConstants.UNCLOCK_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.UNCLOCK_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.UNCLOCK_FAILURE, error }
  }
}
