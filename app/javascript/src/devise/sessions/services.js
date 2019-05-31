import { ApiUtils } from '../../helpers/ApiUtils'

const login = (email, password) => {
  return fetch('/api/users/sign_in', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: { email, password } })
  })
  .then(ApiUtils.checkStatus)
  .then(response => response.json())
}

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

export const sessionService = {
  login,
  logout
}
