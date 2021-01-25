import React from 'react'
import './Reservation.sass'
import ReservationBG from '../../../images/reservation.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {Button, Title} from '../../../components'

function Reservation() {
	const workInfo = [
		{
			icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faPhone}/>,	
			title: '095 222 81 56',
			text: 'Дзвінки приймаються цілодобово. Оплата дзвінків здійснюється за наш кошт.'
		},
		{
			icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faMapMarkerAlt}/>,
			title: 'Одеса, вул. Дерибасівська, 20',
			text: 'Перш ніж приходити до ресторану, подзвоніть та переконайтесь, що є вільні місця.'
		},
		{
			icon: <FontAwesomeIcon className="reservation__info-title-logo" icon={faClock}/>,	
			title: 'Відкрито з 10:00 до 22:00',
			text: 'Ресторан працює кожний день, крім неділі.'
		}
	]

	return (
		<div className="reservation">
			<Title className='reservation__title' title='Резервування' subtitle='зарезервуйте столик на майбутнэ' light/>
			<div className="reservation__container" style={{backgroundImage:`url(${ReservationBG})`}}>
			<div className="reservation__wrapper">
				<div className="reservation__info-blocks">
					{
						workInfo.map( (elem, index) => {
							return  <div className="reservation__info-block" key={index}>
										<div className="reservation__info-title">
											{elem.icon}{elem.title}
										</div>
										<div className="reservation__info-description">
											{elem.text}
										</div>
									</div>
						})
					}
				</div>
				<div className="reservation__table">
					<div className="reservation__table-title">
						Резервування столику
					</div>
					<form action="">
						<div className="reservation__table-data">
							<input type="text" placeholder='Ім`я'/>
							<input type="text" placeholder='Прізвище'/>
						</div>
						<div className="reservation__table-data">
							<input type="datetime-local"/>
							<textarea name="" id="" cols="30" rows="10" placeholder='Повідомлення'></textarea>
						</div>
							<Button className="reservation__table-button button__solid" dark>
								Зарезервувати
							</Button>
					</form>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Reservation
