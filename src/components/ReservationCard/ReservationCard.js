import React from 'react'
import './ReservationCard.sass'
import {Button} from '../index'
import classNames from 'classnames'

function ReservationCard({dark, light}) {
	return (
		<div className={classNames("reservation-card", {
			'reservation-card--light': light,
			'reservation-card--dark': dark
		})}>
			<div className="reservation-card__title">
				Резервування столику
			</div>
			<form action="">
				<div className="reservation-card__data">
					<input type="text" placeholder='Ім`я'/>
					<input type="text" placeholder='Прізвище'/>
				</div>
				<div className="reservation-card__data">
					<input type="datetime-local"/>
					<textarea name="" id="" cols="30" rows="10" placeholder='Повідомлення'></textarea>
				</div>
					<Button className="reservation-card__button" solid {...light ? {light} : {dark}}>
						Зарезервувати
					</Button>
			</form>
		</div>
	)
}

export default ReservationCard
