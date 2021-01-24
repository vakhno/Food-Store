import React, {useEffect} from 'react'
import './Main.sass'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMainMenuDishes, fetchMainDeliveryDishes} from '../../redux/actions/dishesRequest'
import {addDisheToCart} from '../../redux/actions/cart'
import {Quote, Creator, PopularMenu, Reservation, FirstSlider, Delivery} from '../../components'

function Main() {
	const dispatch = useDispatch()
	const menuDishes = useSelector( ({menu}) => menu.items  )
	const deliveryDishes = useSelector( ({delivery}) => delivery.items  )
	const handleAddDishToCart = (dishInfo) => {
		dispatch(addDisheToCart(dishInfo))
	}
	
	useEffect(() => {
		dispatch(fetchMainMenuDishes())
		dispatch(fetchMainDeliveryDishes())
	}, [])

	return (
		<>	
			<FirstSlider/>
			<Quote/>
			<Creator/>
			<Reservation/>
			<PopularMenu menuDishes={menuDishes}/>
			<Delivery deliveryDishes={deliveryDishes} handleAddDishToCart={handleAddDishToCart}/>
		</>
	)
}

export default Main
