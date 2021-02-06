import React, {useEffect} from 'react'
import 'swiper/swiper-bundle.css'
import './Main.sass'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMainMenuDishes, fetchMainDeliveryDishes} from '../../redux/actions/dishesRequest'
import {addDisheToCart} from '../../redux/actions/cart'
import {Quote, Creator, PopularMenu, Reservation, FirstSlider, Delivery, Discount} from '../../components'

function Main() {
	const dispatch = useDispatch()
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
			<Discount/>
			<Reservation/>
			{/* <PopularMenu menuDishes={menuDishes}/> */}
			<Delivery deliveryDishes={deliveryDishes} handleAddDishToCart={handleAddDishToCart}/>
		</>
	)
}

export default Main
