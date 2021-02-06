import React, {useState} from 'react'
import './ReservationCard.sass'
import {Button} from '../index'
import classNames from 'classnames'

function ReservationCard({dark, light}) {
	const [name, setName] = useState('')
	const [nameValid, setNameValid] = useState(false)
	const [surname, setSurname] = useState('')
	const [surnameValid, setSurnameValid] = useState(false)
	const [date, setDate] = useState('')
	const [dateValid, setDateValid] = useState(false)
	const [message, setMessage] = useState('')
	const formValid = Boolean(nameValid && surnameValid && dateValid)

	const valueToState = (e) => {
		const name = e.target.name
		const value = e.target.value

		switch(name){
			case 'name':
				setName(value)
				setNameValid(name.length >= 2)
				break
			case 'surname':
				setSurname(value)
				setSurnameValid(surname.length >= 2)
				break
			case 'date':
				setDate(value)
				setDateValid(date.length)
				break
			case 'message':
				setMessage(value)
				break
			default:
				break
		}
	}

	const submitForm = (e) => {
		e.preventDefault()
		console.log(formValid)
	}

	return (
		<div className={classNames("reservation-card", {
			'reservation-card--light': light,
			'reservation-card--dark': dark
		})}>
			<div className="reservation-card__title">
				Резервування столику
			</div>
			<form onSubmit={submitForm}>
				<div className="reservation-card__data">
					<input type="text" name='name' placeholder='Ім`я' value={name} onChange={valueToState}/>
					<input type="text" name='surname' placeholder='Прізвище' value={surname} onChange={valueToState}/>
				</div>
				<div className="reservation-card__data">
					<input type="datetime-local" name='date' value={date} onChange={valueToState}/>
					<textarea name="message" id="" cols="30" rows="10" placeholder='Повідомлення' onChange={valueToState}>{message}</textarea>
				</div>
					<Button className="reservation-card__button" solid {...light ? {light} : {dark}}>
						Зарезервувати
					</Button>
			</form>
		</div>
	)
}

export default ReservationCard
