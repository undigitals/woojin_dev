import { combineReducers } from 'redux'

import itemQuantity from './quantity.reducer'
import authReducer from './auth.reducer'
import errorReducer from './error.reducer'

export default combineReducers({
	itemQuantity,
	auth: authReducer,
	errors: errorReducer
})
