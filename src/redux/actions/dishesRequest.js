import axios from 'axios'
import {setDishes} from './dishes'

export const fetchDishes = () => (dispatch) => {
	axios.get('http://localhost:3001/dishes').then( ({data}) => {
		dispatch(setDishes(data))
	})
}