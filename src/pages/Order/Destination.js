import React, {useState, useEffect} from 'react'
import './Order.sass'
import {Map, Input, Button} from '../../components'

function Destination() {
	const [street, setStreet] = useState('')
	const [house, setHouse] = useState('')
	const [apartment, setApartment] = useState('')
	const [frontDoor, setFrontDoor] = useState('')
	const [details, setDetails] = useState('')
	const [delivery, setDelivery] = useState('toCar')
	const [destinationAddress, setDestinationAddress] = useState('')

	const valueToState = (e) =>{
		const name = e.target.name
		const value = e.target.value
		
		switch(name){
			case 'street':
				setStreet(value)
				break
			case 'house':
				setHouse(value)
				break
			case 'apartment':
				setApartment(value)
				break
			case 'frontDoor':
				setFrontDoor(value)
				break
			case 'details':
				setDetails(value)
				break
			case 'delivery':
				setDelivery(value)
				break
			default:
				break
		}
	}

	const submitForm = (e) => {
		e.preventDefault()
		return (street && house) ? setDestinationAddress(`Одеса,${street},${house}`) : null 		
	}

	return (
		<>
			<form onSubmit={submitForm} className='destination-block__form'>
				<Input tag='input' type="text" name='street' placeholder='Вулиця' className="destination-block__street" value={street} onChange={valueToState} solid light/>
				<Input tag='input' type="text" name='house' placeholder='Дім' className="destination-block__house" value={house} onChange={valueToState} solid light/>
				<Input tag='input' type="number" min="1" step="1" name='apartment' placeholder='Квартира' className="destination-block__apartment" value={apartment} onChange={valueToState} solid light/>
				<Input tag='select' name='frontDoor' className="destination-block__frontDoor" value={frontDoor} disabled={apartment ? false : true} onChange={valueToState} solid light>
					<option value="" disabled selected>Парадна</option>
					<option value=""></option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</Input>
				<div className="destination-block__reception">
					<Input tag='radio' type="radio" name="delivery" value='toCar' checked={delivery === 'toCar'} onClick={valueToState} solid light>Вийду до машини</Input>
					<Input tag='radio' type="radio" name="delivery" value='toDoors' checked={delivery === 'toDoors'} onClick={valueToState} solid light>До дверей</Input>
				</div>
				<Input tag='textarea' name="details" cols="30" rows="5" placeholder='Коментар до адреси...' className="destination-block__details" value={details} onChange={valueToState} solid light/>
				<Button className="destination-block__submit" solid light>Знайти місцезнаходження на карті</Button>
			</form>
			<Map className="destination-block__map" address={destinationAddress}/>
		</>
	)
}

export default Destination
