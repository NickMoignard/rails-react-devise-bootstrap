import { userConstants } from '../constants/user.constants'

export function resendConfirmation(state = {}, action) {
  switch (action.type) {
    case userConstants.CONFIRMATION_RESEND_REQUEST:
      return {}
    case userConstants.CONFIRMATION_RESEND_SUCCESS:
      return {}
    case userConstants.CONFIRMATION_RESEND_FAILURE:
      return { errors: action.errors }
    default:
      return state
  }
}
