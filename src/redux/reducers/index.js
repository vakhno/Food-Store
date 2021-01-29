import {combineReducers} from 'redux'

import filter from './filters'
import dishes from './dishes'
import cart from './cart'
import menu from './menu'
import delivery from './delivery'
import deliveryTime from './deliveryTime'

const rootReducer = combineReducers({
	filter,
	dishes,
	cart,
	menu,
	delivery,
	deliveryTime,
})

export default rootReducer