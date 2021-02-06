import React from 'react'
// styles
import './Delivery.sass'
// swiper
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// components
import {DishesBlock, Map, Title, Button} from '../../../components'
// visual content
import DeliveryBG from '../../../images/delivery.jpg'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function Delivery({deliveryDishes, handleAddDishToCart}) {
	const deliveryListItems = ['На даний момент, доставка поширюється лише на піци та деякі напої', 'Доставка можлива по всій території Одеси', 'Оплата здійснюєтсья за допомогою картки або готівкою', 'Використовуємо термо-сумки, що збергігає температуру страв']
	
	return (
		<div className='delivery'>
			<Title className='delivery__title' title='Доставка' subtitle='скористайтесь найкращими пропозиціями' light/>
			<div className='delivery__content' style={{backgroundImage:`url(${DeliveryBG})`}}>
				<div className="delivery__wrapper">
					<div className="delivery__map">
						<Map />
						<Button solid light>Перейти до меню</Button>
					</div>
					<Swiper
						spaceBetween={20}
						slidesPerView={3}
						loop={true}
						pagination={{ clickable: true }}
						draggable={false}
						autoplay={{ delay: 1500 }}
					>
						{
							deliveryDishes.map(elem =>{
								return	<SwiperSlide>
											<DishesBlock onClickAddDish={handleAddDishToCart} id={elem.id} name={elem.name} imageUrl={elem.imageUrl} price={elem.price} types={elem.types} sizes={elem.sizes} dark/>
										</SwiperSlide>
							})
						}	
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default Delivery