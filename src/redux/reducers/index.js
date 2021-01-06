import {combineReducers} from 'redux'

import filter from './filters'
import dishes from './dishes'
import cart from './cart'


const rootReducer = combineReducers({
	filter,
	dishes,
	cart,
})

export default rootReducer