import { authHeader } from '../helpers/auth.headers'
import { FormCsrf } from '../components/FormCsrf'

export const userService = {
  changePassword,
  confirm,
  delete: _delete,
  getAll,
  getById,
  login,
  logout,
  register,
  resendConfirmation,
  resendUnlock,
  sendResetPasswordInstructions,
  unlock,
  update
}

function changePassword(user) {
  const token = FormCsrf.csrfToken()
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-Token': token
    },
    body: JSON.stringify({
      user: {
        password: user.password,
        password_confirmation: user.passwordConfirmation,
        reset_password_token: user.resetPasswordToken
      }
    }),
    credentials: 'same-origin'
  }

  return fetch('/api/users/password', requestOptions).then(handleResponse)
}

function confirm(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return fetch(
           '/api/users/confirmation?confirmation_token=' + token,
           requestOptions
         ).then(handleResponse)
}

// Prefixed function name with underscore because delete is a reserved word in
// javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }

  return fetch('/api/users/' + id, requestOptions).then(handleResponse)
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch('/api/users', requestOptions).then(handleResponse)
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch('/api/users/' + _id, requestOptions).then(handleResponse)
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: { email, password } })
  }

  return fetch('/api/users/sign_in', requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged
        // in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      }

      return user
    })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: user })
  }

  return fetch('/api/users', requestOptions).then(handleResponse)
}

function resendConfirmation(user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: user })
  }

  return fetch('/api/users/confirmation', requestOptions).then(handleResponse)
}

function resendUnlock(user) {
  const token = FormCsrf.csrfToken()
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-Token': token
    },
    body: JSON.stringify({
      user: {
        email: user.email
      }
    })
  }

  return fetch('/api/users/unlock', requestOptions).then(handleResponse)
}

function sendResetPasswordInstructions(email) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: { email: email } })
  }

  return fetch('/api/users/password', requestOptions).then(handleResponse)
}

function unlock(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return fetch(
           '/api/users/unlock?unlock_token=' + token,
           requestOptions
         ).then(handleResponse)
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      ...authHeader(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(user)
  }

  return fetch('/api/users/' + user.id, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  if (!response.ok) {
    return response.json().then(body => Promise.reject(body))
  }

  return response.status === 204 ? response : response.json()
}
