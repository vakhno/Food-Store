import {combineReducers} from 'redux'

import filter from './filters'
import dishes from './dishes'
import cart from './cart'
import menu from './menu'

const rootReducer = combineReducers({
	filter,
	dishes,
	cart,
	menu,
})

export default rootReducer