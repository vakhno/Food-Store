import React from 'react'
import './Main.sass'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.min.css'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper'
import MainImage from '../../images/main_first_image.jpg'
import MainImage2 from '../../images/main_second_image.png'
import MainImage3 from '../../images/main_third_image.jpg'
import MainImage4 from '../../images/main_fourth_image.jpg'
import MainImage5 from '../../images/main_fifth_image.jpg'
import Logo from '../../images/logo2.svg'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function main() {
	const mainSlides = [
		{
			image: {MainImage},
			title: 'Чиказька піца з томатами',
		},
		{
			image: {MainImage2},
			title: 'Чорна піца з золотоми пелюстками',
		},
		{
			image: {MainImage3},
			title: 'Піца з хамоном',
		},
		{
			image: {MainImage4},
			title: 'Класична лазанья',
		},
		{
			image: {MainImage5},
			title: 'Равіолі з чорнилами каракатиці',
		},
	]
	return (
<>

<div className="main">
	<div className="main__losung">
		<div className="main__logo">
			<h3>Ресторан</h3>
			<img className='' src={Logo} alt="" width='160'/>
			<p>італійської кухні</p>
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
					console.log(dish.image)
					return <SwiperSlide style={{backgroundImage:`url(${Object.values(dish.image)[0]})`}}>
								<Link to='/dishes'>
									<div className='main__slide-title'>{dish.title}</div>
								</Link>
							</SwiperSlide>
				})
			}
		</Swiper>
		</div>

		<div className="quote">
			<div className="quote__text">UNTIL I DISCOVERED COOKING I WAS NEVER REALLY INTERESTED IN ANYTHING</div>
			<div className="quoute__author">OUR FOUNDER JOHN DALE</div>
			<img src="" alt=""/>
		</div>

		</>
	)
}

export default main
