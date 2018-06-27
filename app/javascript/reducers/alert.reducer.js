import { alertConstants } from '../constants/alert.constants'

import { Utils } from '../components/Utils'

const initialState = {
  messages: []
}

export function alert(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
          ...state,
          messages: [...state.messages, {
            type: 'success',
            text: action.message,
            id: Utils.genId()
          }]
      }
    case alertConstants.ERROR:
      return {
        ...state,
        messages: [...state.messages, {
          type: 'danger',
          text: action.message,
          id: Utils.genId()
        }]
      }
    case alertConstants.CLEAR:
      return {
        ...state,
        messages: []
      }
    default:
      return state
  }
}
