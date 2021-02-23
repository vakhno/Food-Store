import axios from 'axios'
import {setDishes, setDeliveryDishes} from './dishes'

export const setLoaded = (value) => ({
	type: 'SET_LOADING',
	payload: value,

})

export const fetchDishes = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false))

	axios.get(`/menudishes?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then( ({data}) => {
		dispatch(setDishes(data))
	})
}

export const fetchMainDeliveryDishes = () => (dispatch) => {
	axios.get(`/menudishes?popular=true`).then( ({data}) => {
		dispatch(setDeliveryDishes(data))
	})
}