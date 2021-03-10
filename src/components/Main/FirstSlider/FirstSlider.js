import React from 'react'
// styles
import './FirstSlider.sass'
// swiperJS
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// components
import {SliderLogo} from '../../index'
// router
import {Link} from 'react-router-dom'
// visual content
import FirstSliderImage from '../../../images/main_first_image.jpg'
import FirstSliderImage2 from '../../../images/main_second_image.png'
import FirstSliderImage3 from '../../../images/main_third_image.jpg'
import FirstSliderImage4 from '../../../images/main_fourth_image.jpg'
import FirstSliderImage5 from '../../../images/main_fifth_image.jpg'
import FirstSliderImage6 from '../../../images/main_six_image.png'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function FirstSlider() {
	const mainSlides = [
		{
			image: {FirstSliderImage},
			title: 'Чиказька піца з томатами',
		},
		{
			image: {FirstSliderImage2},
			title: 'Чорна піца з золотоми пелюстками',
		},
		{
			image: {FirstSliderImage3},
			title: 'Піца з хамоном',
		},
		{
			image: {FirstSliderImage4},
			title: 'Класична лазанья',
		},
		{
			image: {FirstSliderImage5},
			title: 'Равіолі з чорнилами каракатиці',
		},
	]

	return (
		<div className="first-slider">
			<SliderLogo title='Ресторан' subtitle='італійської кухні' className='first-slider__logo'/>
			<Swiper
				className='first-slider__slider'
				effect="fade"
				loop={true}
				pagination={{ clickable: true }}
				draggable={false}
				autoplay={{ delay: 2000 }}
			>
				{
					mainSlides.map( (dish, index) => {
						return  <SwiperSlide style={{backgroundImage:`url(${Object.values(dish.image)[0]})`}} key={index}>
									<Link to='/dishes'>
										<div className='swiper-slide__title'>{dish.title}</div>
									</Link>
								</SwiperSlide>
						
					})
				}
			</Swiper>
		</div>
	)
}

export default FirstSlider