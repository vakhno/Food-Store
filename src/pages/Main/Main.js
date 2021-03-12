import React, {useEffect} from 'react'
// styles
import './Main.sass'
// styles for swiper
import 'swiper/swiper-bundle.css'
// redux
import {useSelector, useDispatch} from 'react-redux'
import {fetchMainDeliveryDishes} from '../../redux/actions/dishesRequest'
import {addDisheToCart} from '../../redux/actions/cart'
// components
import {Quote, Creator, Reservation, FirstSlider, Delivery, Menu} from '../../components'

function Main() {
	const dispatch = useDispatch()
	const menuDishes = useSelector( ({delivery}) => delivery.items  )

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
			<Reservation/>
			<Delivery />
			<Menu menuDishes={menuDishes} handleAddDishToCart={handleAddDishToCart}/>
		</>
	)
}

export default Main
