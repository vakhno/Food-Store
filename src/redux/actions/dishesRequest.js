import axios from 'axios'
import {setDishes} from './dishes'

export const setLoaded = (value) => ({
	type: 'SET_LOADING',
	payload: value,

})

export const fetchDishes = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false))

	axios.get(`http://localhost:3001/dishes?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then( ({data}) => {
		dispatch(setDishes(data))
	})
}