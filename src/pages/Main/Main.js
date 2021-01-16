import React from 'react'
import './Main.sass'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination, EffectFade} from 'swiper'
import MainImage from '../../images/main_first_image.jpg'
import {Button} from '../../components/DishesButton/DishesButton'

SwiperCore.use([Navigation, Pagination])
SwiperCore.use([EffectFade]);

function main() {
	return (


<div className="main">
		
		<Swiper
		effect="fade"
		loop={true}
		pagination={{ clickable: true }}
		draggable={false}
		>
			<SwiperSlide style={{backgroundImage:`url(${MainImage})`}}>
				{/* <img src={MainImage} alt=""/> */}
				<div className="main__losung">
					<div className="main__h1">111111111</div>
					<div className="main__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
				</div>
	  		</SwiperSlide>
      		<SwiperSlide style={{backgroundImage:`url(${MainImage})`}}>
				{/* <img src={MainImage} alt=""/> */}
				<div className="main__losung">
					<div className="main__h1">22222222222</div>
					<div className="main__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
				</div>
	  		</SwiperSlide>
      		<SwiperSlide style={{backgroundImage:`url(${MainImage})`}}>
				{/* <img src={MainImage} alt=""/> */}
				<div className="main__losung">
					<div className="main__h1">333333333</div>
					<div className="main__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
				</div>
	  		</SwiperSlide>
		</Swiper>
		</div>
	)
}

export default main
