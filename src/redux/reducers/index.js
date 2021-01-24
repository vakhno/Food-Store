import {combineReducers} from 'redux'

import filter from './filters'
import dishes from './dishes'
import cart from './cart'
import menu from './menu'
import delivery from './delivery'

const rootReducer = combineReducers({
	filter,
	dishes,
	cart,
	menu,
	delivery,
})

export default rootReducer