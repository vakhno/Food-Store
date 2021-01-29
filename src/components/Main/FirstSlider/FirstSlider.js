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
import FirstSliderImage6 from '../../../images/main_six_image.png'
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function FirstSlider() {
	const mainSlides = [
		{
			image: {FirstSliderImage},
			title: 'Чиказька піца з томатами',
		},
		{
			image: {FirstSliderImage6},
			title: 'Скидки і акції',
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











// import React, {useState, useEffect} from 'react'
// import './FirstSlider.sass'
// import 'swiper/swiper-bundle.css'
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/effect-fade/effect-fade.min.css'
// import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import {SliderLogo} from '../../index'
// import {Link} from 'react-router-dom'
// import FirstSliderImage from '../../../images/main_first_image.jpg'
// import FirstSliderImage2 from '../../../images/main_second_image.png'
// import FirstSliderImage3 from '../../../images/main_third_image.jpg'
// import FirstSliderImage4 from '../../../images/main_fourth_image.jpg'
// import FirstSliderImage5 from '../../../images/main_fifth_image.jpg'
// import FirstSliderImage6 from '../../../images/main_six_image.png'

// SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

// function FirstSlider() {
// 	const [windowWidth, setWindowWidth] = useState(window.outerWidth)
// 	const [imageUrl, setImageUrl] = useState()

// 	useEffect( () => {
// 		window.addEventListener('resize', (e) => setWindowWidth(e.target.outerWidth))
// 		changeImage()
// 	}, [])

// 	const changeImage = (imageObj) => {
// 		if (windowWidth >= 1400) {
// 			setImageUrl(0)
// 		}
	
// 		if (windowWidth < 1399 || windowWidth >= 900) {
// 			setImageUrl(1)
// 		}
	
// 		if (windowWidth < 899) {
// 			setImageUrl(2)
// 		}
// 	}

// 	const mainSlides = [
// 		{
// 			image: [
// 				{desktopUrl: FirstSliderImage},
// 				{tabletUrl: FirstSliderImage},
// 				{mobileUrl: FirstSliderImage},
// 			],
// 			title: 'Чиказька піца з томатами',
// 		},
// 		{
// 			image: [
// 				{desktopUrl: FirstSliderImage6},
// 				{tabletUrl: FirstSliderImage6},
// 				{mobileUrl: FirstSliderImage6},
// 			],
// 			title: 'Скидки і акції',
// 		},
// 		{
// 			image: [
// 				{desktopUrl: FirstSliderImage2},
// 				{tabletUrl: FirstSliderImage2},
// 				{mobileUrl: FirstSliderImage2},
// 			],
// 			title: 'Чорна піца з золотоми пелюстками',
// 		},
// 		{
// 			image: [
// 				{desktopUrl: FirstSliderImage3},
// 				{tabletUrl: FirstSliderImage3},
// 				{mobileUrl: FirstSliderImage3},
// 			],
// 			title: 'Піца з хамоном',
// 		},
// 		{
// 			image: [
// 				{desktopUrl: FirstSliderImage4},
// 				{tabletUrl: FirstSliderImage4},
// 				{mobileUrl: FirstSliderImage4},
// 			],
// 			title: 'Класична лазанья',
// 		},
// 		{
// 			image: [
// 				{desktopUrl: FirstSliderImage5},
// 				{tabletUrl: FirstSliderImage5},
// 				{mobileUrl: FirstSliderImage5},
// 			],
// 			title: 'Равіолі з чорнилами каракатиці',
// 		},
// 	]

// 	return (
// 		<div className="first-slider">
// 			<div className="first-slider__losung">
// 				<div className="first-slider__logo">
// 					<SliderLogo title='Ресторан' subtitle='італійської кухні'/>
// 				</div>
// 			</div>
// 			<Swiper
// 				effect="fade"
// 				loop={true}
// 				pagination={{ clickable: true }}
// 				draggable={false}
// 				autoplay={{ delay: 2000 }}
// 			>
// 				{
// 					mainSlides.map( (dish, index) => {
// 						const bgImage = dish.imageUrl
// 						console.log( Object.values(dish.image).map(elem => Object.values(elem).map( elem => console.log(elem))) )
// 						// console.log(   Object.values(dish.image)[imageUrl]   )
// 						// return  <SwiperSlide style={{backgroundImage:`url(${Object.values(dish.image)[imageUrl]})`}} key={index}>
// 						// 			<Link to='/dishes'>
// 						// 				<div className='first-slider__slide-title'>{dish.title}</div>
// 						// 			</Link>
// 						// 		</SwiperSlide>
// 					})
// 				}
// 			</Swiper>
// 		</div>
// 	)
// }

// export default FirstSlider
