import { deviseConstants } from '../constants'

export function password(state = {}, action) {
  switch (action.type) {
    case deviseConstants.PASSWORD_RESET_REQUEST:
      return { reseting: true }
    case deviseConstants.PASSWORD_RESET_SUCCESS:
      return {}
    case deviseConstants.PASSWORD_RESET_FAILURE:
      return { errors: action.error }
    default:
      return state
  }
}
