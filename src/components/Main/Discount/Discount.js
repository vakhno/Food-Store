import React from 'react'
// styles
import './Discount.sass'
// swiper
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// components
import {Title, Button} from '../../index'
// visual content
import SliderImg from '../../../images/main_six_image.png' 

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function Discount() {
	const discountSLides = [
		{
			title: 'З 9:00 до 13:00 скидка 30%',
			image: {SliderImg},
			text: 'Любое утро будет еще добрее за завтраком в Pasta&Pizza! Каждый день с 9:00 до 13:00 действует скидка -30% на все меню завтраков, а любимый кофе без молока всего за 19 грн. (на выбор 100% арабика либо бленд арабика/рабуста). Акция действует при заказе в заведениях или с самовывозом.',
		},
		{
			title: 'З 9:00 до 13:00 скидка 30%',
			image: {SliderImg},
			text: 'Любое утро будет еще добрее за завтраком в Pasta&Pizza! Каждый день с 9:00 до 13:00 действует скидка -30% на все меню завтраков, а любимый кофе без молока всего за 19 грн. (на выбор 100% арабика либо бленд арабика/рабуста). Акция действует при заказе в заведениях или с самовывозом.',
		},
		{
			title: 'З 9:00 до 13:00 скидка 30%',
			image: {SliderImg},
			text: 'Любое утро будет еще добрее за завтраком в Pasta&Pizza! Каждый день с 9:00 до 13:00 действует скидка -30% на все меню завтраков, а любимый кофе без молока всего за 19 грн. (на выбор 100% арабика либо бленд арабика/рабуста). Акция действует при заказе в заведениях или с самовывозом.',
		},
	]

	return (
		<div className="discount">
			<Title className='discount__title' title='Скидки і акції' subtitle='скористайтесь найкращими пропозиціями' light/>			
			<Swiper
					className='discount__slider'
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					pagination={{ clickable: true }}
					draggable={false}
					autoplay={{ delay: 1500 }}
					direction='vertical'
				>
					{
						discountSLides.map( (slide, index) => {
							return	<SwiperSlide style={{color: 'white'}} key={index}>
										<div className="swiper-slide__title">З 9:00 до 13:00 скидка 30%</div>
										<div className="swiper-slide__content">
											<div className="swiper-slide__image-shadow">
												<img src={SliderImg} alt="Фото скидки/акції"/>	
											</div>
											<div className="swiper-slide__info">
												<p className="swiper-slide__text">
												Любое утро будет еще добрее за завтраком в Pasta&Pizza! Каждый день с 9:00 до 13:00 действует скидка -30% на все меню завтраков, а любимый кофе без молока всего за 19 грн. (на выбор 100% арабика либо бленд арабика/рабуста). Акция действует при заказе в заведениях или с самовывозом.
												</p>
												<Button className="swiper-slide__button" skeleton dark>До акцій і скидок</Button>
											</div>
										</div>	
									</SwiperSlide> 
						})
					}
				</Swiper>
		</div>
	)
}

export default Discount
