import React, {useEffect} from 'react'
import 'swiper/swiper-bundle.css'
import './Main.sass'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMainDeliveryDishes} from '../../redux/actions/dishesRequest'
import {addDisheToCart} from '../../redux/actions/cart'
import {Quote, Creator, Reservation, FirstSlider, Delivery, Discount} from '../../components'

function Main() {
	const dispatch = useDispatch()
	const deliveryDishes = useSelector( ({delivery}) => delivery.items  )

	const handleAddDishToCart = (dishInfo) => {
		dispatch(addDisheToCart(dishInfo))
	}

	useEffect(() => {
		dispatch(fetchMainDeliveryDishes())
	}, [])

	return (
		<>	
			<FirstSlider/>
			<Quote/>
			<Creator/>
			<Discount/>
			<Reservation/>
			<Delivery deliveryDishes={deliveryDishes} handleAddDishToCart={handleAddDishToCart}/>
		</>
	)
}

export default Main
