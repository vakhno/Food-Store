import React, {useState, useEffect} from 'react'
import './Order.sass'
import {Map} from '../../components'

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
		<div className="destination-block">
			<form onSubmit={submitForm} className='destination-block__form'>
				<input type="text" name='street' placeholder='Вулиця' className="destination-block__street" value={street} onChange={valueToState}/>
				<input type="text" name='house' placeholder='Дім' className="destination-block__house" value={house} onChange={valueToState}/>
				<input type="text" name='apartment' placeholder='Квартира' className="destination-block__apartment" value={apartment} onChange={valueToState}/>						
				<select id="" name="frontDoor" className="destination-block__frontDoor" value={frontDoor} {...apartment ? {} : {disabled: true}} onChange={valueToState}>
					<option value="" disabled selected>Парадна</option>
					<option value=""></option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
				<div className="destination-block__reception">
					<label>
						<input type="radio" class="" name="delivery" value='toCar' checked={delivery === 'toCar'} onClick={valueToState}/>
						Вийду до машини
					</label>
					<label>
						<input type="radio" class="" name="delivery" value='toDoors' checked={delivery === 'toDoors'} onClick={valueToState}/>
						До дверей
					</label>
				</div>
				<textarea name="details" id="" cols="30" rows="5" placeholder='Коментар до адреси...' className="destination-block__details" value={details} onChange={valueToState}></textarea>

				<button className="destination-block__submit">Підтвердити</button>
			</form>
			<Map className="destination-block__map" address={destinationAddress}/>
		</div>
	)
}

export default Destination
