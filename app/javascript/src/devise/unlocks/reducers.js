import { unlockConstants } from './constants'

export function unlock(state = {}, action) {
  switch (action.type) {
    case unlockConstants.UNCLOCK_REQUEST:
      return { unlocking: true }
    case unlockConstants.UNCLOCK_SUCCESS:
      return {}
    case unlockConstants.UNCLOCK_FAILURE:
      return { errors: action.errors }
    default:
      return state
  }
}
