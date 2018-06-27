import { userConstants } from '../constants/user.constants'

export function unlock(state = {}, action) {
  switch (action.type) {
    case userConstants.UNCLOCK_REQUEST:
      return { unlocking: true }
    case userConstants.UNCLOCK_SUCCESS:
      return {}
    case userConstants.UNCLOCK_FAILURE:
      return { errors: action.errors }
    default:
      return state
  }
}
