import { userConstants } from '../constants/user.constants'

export function confirmation(state = {}, action) {
  switch (action.type) {
    case userConstants.CONFIRMATION_REQUEST:
      return { confirming: true }
    case userConstants.CONFIRMATION_SUCCESS:
      return {}
    case userConstants.CONFIRMATION_FAILURE:
      return { errors: action.errors }
    default:
      return state
  }
}
