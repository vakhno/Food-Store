import axios from 'axios'
import {setDishes, setMenuDishes} from './dishes'

export const setLoaded = (value) => ({
	type: 'SET_LOADING',
	payload: value,

})

export const fetchDishes = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false))

	axios.get(`/dishes?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then( ({data}) => {
		dispatch(setDishes(data))
		console.log(data)
	})
}

export const fetchMainMenuDishes = () => (dispatch) => {
	axios.get(`/alldishes`).then( ({data}) => {
		dispatch(setMenuDishes(data))
		console.log(data)
	})
}