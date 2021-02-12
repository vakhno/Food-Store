import React, {useState} from 'react'
import './Order.sass'
import {Input, Button} from '../../components/'

function Contacts() {
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [telephone, setTelephone] = useState('')

	const valueToState = (e) => {
		const name = e.target.name
		const value = e.target.value

		switch(name){
			case 'name':
				setName(value)
				break
			case 'surname':
				setSurname(value)
				break
			case 'telephone':
				setTelephone(value)
				break
			default:
				break
		}
	}

	const submitForm = (e) => {
		e.preventDefault()
	}

	return (
			<form onSubmit={submitForm} style={{display:'flex'}}>
				<Input tag='input' type="text" name='name' placeholder='Ім`я' className="" value={name} onChange={valueToState} solid light/>
				<Input tag='input' type="text" name='surname' placeholder='Прізвище' className="" value={surname} onChange={valueToState} solid light/>
				<Input tag='input' type="number" name='telephone' placeholder='Номер телефону' className="" value={telephone} onChange={valueToState} solid light/>
				<Button className="destination-block__submit" solid light>Підтвердити</Button>
			</form>
	)
}

export default Contacts
