import React, {useState} from 'react'
// styles
import './ReservationCard.sass'
// components
import {Button, ModalReservationCard} from '../index'
// classNames
import classNames from 'classnames'

function ReservationCard({dark, light}) {
	const [name, setName] = useState('')
	const [nameValid, setNameValid] = useState(false)
	const [surname, setSurname] = useState('')
	const [surnameValid, setSurnameValid] = useState(false)
	const [date, setDate] = useState('')
	const [dateValid, setDateValid] = useState(false)
	const [telephone, setTelephone] = useState('')
	const [telephoneValid, setTelephoneValid] = useState(false)
	const [formValid, setFormValid] = useState(false)
	// const formValid = Boolean(nameValid && surnameValid && dateValid && telephoneValid)

	const valueToState = (e) => {
		const name = e.target.name
		const value = e.target.value

		switch(name){
			case 'name':
				setName(value)
				setNameValid(value.length >= 2)
				break
			case 'surname':
				setSurname(value)
				setSurnameValid(value.length >= 2)
				break
			case 'date':
				setDate(value)
				setDateValid(Boolean(value))
				break
			case 'telephone':
				setTelephone(value)
				setTelephoneValid(value.length >= 10)
				break
			default:
				break
		}
	}

	const submitForm = (e) => {
		e.preventDefault()

		setFormValid(Boolean(nameValid && surnameValid && dateValid && telephoneValid))
		console.log(formValid)
	}

	const closeForm = () => {
		setName('')
		setSurname('')
		setDate('')
		setTelephone('')
		setNameValid(false) 
		setSurnameValid(false)
		setDateValid(false)
		setTelephoneValid(false)

		setFormValid(false)
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
					<input type="tel"  name='telephone' placeholder='Телефон' value={date} value={telephone} onChange={valueToState}/>
				</div>
					<Button className="reservation-card__button" solid {...light ? {light} : {dark}}>
						Зарезервувати
					</Button>
			</form>
			<ModalReservationCard isOpen={formValid} onClose={closeForm}/>
		</div>
	)
}

export default ReservationCard
