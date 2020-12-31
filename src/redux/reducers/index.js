import {combineReducers} from 'redux'

import filterReducer from './filters'
import dishesReducer from './dishes'

const rootReducer = combineReducers({
	filter: filterReducer,
	dishes: dishesReducer,
})

export default rootReducer