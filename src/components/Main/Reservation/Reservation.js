import React from 'react'
// styles
import './Reservation.sass'
// components
import {Title, ReservationCard} from '../../../components'
// visual content
import ReservationBG from '../../../images/reservation.jpg'
// svg icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";

function Reservation() {
	const workInfo = [
		[
			{
				icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faPhone}/>,	
				title: '094 863 68 87',
				text: 'Дзвінки приймаються цілодобово. Оплата дзвінків здійснюється за наш кошт.'
			},
			{
				icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faMapMarkerAlt}/>,
				title: 'Одеса, вул. Дерибасівська, 18',
				text: 'Перш ніж приходити до ресторану, подзвоніть та переконайтесь, що є вільні місця.'
			},
			{
				icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faClock}/>,	
				title: 'Відкрито з 10:00 до 23:00',
				text: 'Ресторан працює кожний день, крім неділі.'
			}
		],
		[
			{
				icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faPhone}/>,	
				title: '095 576 51 51',
				text: 'Дзвінки приймаються цілодобово. Оплата дзвінків здійснюється за наш кошт.'
			},
			{
				icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faMapMarkerAlt}/>,
				title: 'Одеса, вул. Академіка Філатова, 31',
				text: 'Перш ніж приходити до ресторану, подзвоніть та переконайтесь, що є вільні місця.'
			},
			{
				icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faClock}/>,	
				title: 'Відкрито з 09:00 до 22:00',
				text: 'Ресторан працює кожний день, крім неділі.'
			}
		]
	]

	return (
		<div className="reservation">
			<Title className='reservation__title' title='Резервування' subtitle='зарезервуйте столик на майбутнэ' light/>
			<div className="reservation__bg" style={{backgroundImage:`url(${ReservationBG})`}}/>
			<div className="reservation__info-wrapper">
				<div className="reservation__info-blocks">
					{
						workInfo.map( (elem, index) => {
							return	<div className="reservation__info-block" key={index}>
										{elem.map( (elem, index) => {
											return  <div className="reservation__info" key={index}>
														<div className="reservation__info-title">
															{elem.icon}{elem.title}
														</div>
														<div className="reservation__info-description">
															{elem.text}
														</div>
													</div>
										})}
									</div>	
						})
						
					}
				</div>
				<ReservationCard light/>
			</div>
		</div>
	)
}

export default Reservation
