import { combineReducers } from 'redux'

import { alert } from './alert.reducer'
import { authentication } from './authentication.reducer'
import { confirmation } from './confirmation.reducer'
import { registration } from './registration.reducer'
import { resendConfirmation } from './resend_confirmation.reducer'
import { users } from './users.reducer'
import { unlock } from './unlock.reducer'

const rootReducer = combineReducers({
  alert,
  authentication,
  confirmation,
  registration,
  resendConfirmation,
  users,
  unlock
})

export default rootReducer
