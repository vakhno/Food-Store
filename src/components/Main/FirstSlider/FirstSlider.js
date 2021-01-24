import React from 'react'
import './FirstSlider.sass'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.min.css'
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {SliderLogo} from '../../index'
import {Link} from 'react-router-dom'
import FirstSliderImage from '../../../images/main_first_image.jpg'
import FirstSliderImage2 from '../../../images/main_second_image.png'
import FirstSliderImage3 from '../../../images/main_third_image.jpg'
import FirstSliderImage4 from '../../../images/main_fourth_image.jpg'
import FirstSliderImage5 from '../../../images/main_fifth_image.jpg'

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
			<div className="first-slider__losung">
				<div className="first-slider__logo">
					<SliderLogo title='Ресторан' subtitle='італійської кухні'/>
				</div>
			</div>
			<Swiper
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
										<div className='first-slider__slide-title'>{dish.title}</div>
									</Link>
								</SwiperSlide>
					})
				}
			</Swiper>
		</div>
	)
}

export default FirstSlider
