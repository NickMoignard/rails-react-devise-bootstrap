import { userConstants } from '../constants/user.constants'
import { Utils } from '../components/Utils'

export function users(state = {}, action) {
  switch (action.type) {
    /*
    ** User Delete
    */
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error.message }
          }

          return user
        })
      }
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      }
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      }
    /*
    ** User Fetch
    */
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      }
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      }
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      }
    /*
    ** User password update
    */
    case userConstants.CHANGE_PASSWORD_FAILURE:
      // Camelize all the keys and delete underscore keys
      for (var key in action.error) {
        action.error[Utils.camelize(key)] = action.error[key]
        delete action.error[key]
      }
      return {
        errors: action.error
      }
    default:
      return state
  }
}
