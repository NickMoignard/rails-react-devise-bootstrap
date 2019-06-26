import deviseConstants from '../constants'

const initialState = {
  loggingIn: false,
  loggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case deviseConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      }
    case deviseConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case deviseConstants.LOGIN_FAILURE:
      return {}
    case deviseConstants.LOGOUT:
      return {}
    default:
      return state
  }
}
