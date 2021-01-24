import React from 'react'
import './Delivery.sass'
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Button, DishesBlock} from '../../../components'
import { Link } from 'react-router-dom'
import DeliveryBG from '../../../images/delivery.jpg'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function Delivery({deliveryDishes, handleAddDishToCart}) {
	const deliveryListItems = ['На даний момент, доставка поширюється лише на піци та деякі напої', 'Доставка можлива по всій території Одеси', 'Оплата здійснюєтсья за допомогою картки або готівкою', 'Використовуємо термо-сумки, що збергігає температуру страв']
	
	return (
		<div className='delivery' style={{backgroundImage:`url(${DeliveryBG})`}}>
			<div className="delivery__wrapper">
				<div className="delivery__description">
					<div className="delivery__title">Доставка піц онлайн</div>
					<div className="delivery__subtitle">Деякі подробиці, з якими необхідно ознайомитись перед оформленням доставки-онлайн</div>
					<ul className="delivery__list-items">
						{
							deliveryListItems.map( (elem, index) => {
								return <li className="delivery__list-item" key={index}>{elem}</li>
							})
						}
					</ul>
					<Link to='/dishes'>
						<Button className='button__skeleton' dark>Онлайн доставка</Button>
					</Link>
				</div>
				<Swiper
					spaceBetween={80}
					slidesPerView={3}
					loop={true}
					pagination={{ clickable: true }}
					draggable={false}
					autoplay={{ delay: 1500 }}
				>
					{
						deliveryDishes.map(elem =>{
							return <SwiperSlide>
								<DishesBlock onClickAddDish={handleAddDishToCart} id={elem.id} name={elem.name} imageUrl={elem.imageUrl} price={elem.price} types={elem.types} sizes={elem.sizes}/>
							</SwiperSlide>
						})
					}	
				</Swiper>
			</div>
		</div>
	)
}

export default Delivery