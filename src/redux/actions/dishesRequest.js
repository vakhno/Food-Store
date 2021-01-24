import axios from 'axios'
import {setDishes, setMenuDishes, setDeliveryDishes} from './dishes'

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

export const fetchMainDeliveryDishes = () => (dispatch) => {
	axios.get(`/dishes`).then( ({data}) => {
		dispatch(setDeliveryDishes(data))
		console.log(data)
	})
}