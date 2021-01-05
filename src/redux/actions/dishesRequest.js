import axios from 'axios'
import {setDishes} from './dishes'

export const setLoaded = (value) => ({
	type: 'SET_LOADING',
	payload: value,

})

export const fetchDishes = () => (dispatch) => {
	dispatch(setLoaded(false))

	axios.get('http://localhost:3001/dishes').then( ({data}) => {
		dispatch(setDishes(data))
	})
}