import React from 'react'
// styles
import './Menu.sass'
// router
import {Link} from 'react-router-dom'
// swiper
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// components
import {DishesBlock, Title, Button} from '../../../components/'
// visual content
import MenuBG from '../../../images/menu.jpg'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function Menu({menuDishes, handleAddDishToCart}) {
	const menuListItems = ['На даний момент, доставка поширюється лише на піци та деякі напої', 'Доставка можлива по всій території Одеси', 'Оплата здійснюєтсья за допомогою картки або готівкою', 'Використовуємо термо-сумки, що збергігає температуру страв']
	
	return (
		<div className='menu'>
			<Title className='menu__title' title='Меню' subtitle='оберіть бажану страву' light/>
			<div className='menu__content' style={{backgroundImage:`url(${MenuBG})`}}>
				<div className="menu__wrapper">
					<Swiper
						spaceBetween={20}
						slidesPerView={4}
						loop={true}
						pagination={{ clickable: true }}
						draggable={false}
						autoplay={{ delay: 1500 }}
						breakpoints={{
							240: {
								slidesPerView: 1,
								spaceBetween: 60
							},
							660: {
								slidesPerView: 2
							},
							980: {
								slidesPerView: 3
							},
							1280: {
								slidesPerView: 4
							}
						}}
					>
						{
							menuDishes.map( (elem, index) =>{
								return	<SwiperSlide key={`${elem.name}_${index}`}>
											<DishesBlock onClickAddDish={handleAddDishToCart} id={elem.id} name={elem.name} imageUrl={elem.imageUrl} price={elem.price} types={elem.types} sizes={elem.sizes} dark/>
										</SwiperSlide>
							})
						}	
					</Swiper>
				</div>
			</div>
				<Button solid light className="menu__button">
					<Link to="/dishes">
						Перейти до меню
					</Link>
				</Button>
			
		</div>
	)
}

export default Menu