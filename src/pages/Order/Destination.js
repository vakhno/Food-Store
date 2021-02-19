import React, {useState, useEffect} from 'react'
import './Order.sass'
import {Map, Input, Button} from '../../components'
import {useForm} from 'react-hook-form'

const defaultValues = {
	delivery: "toCar",
}

function Destination({checkValid}) {
	const {register, handleSubmit, getValues, formState: { isValid}, errors} = useForm({ defaultValues })
	const [destinationAddress, setDestinationAddress] = useState('')

	const submitForm = data => {
		// e.preventDefault()
		// console.log(register())
		console.log(data)
		return isValid ? setDestinationAddress(`Одеса,${data.street},${data.house}`) : null
		// return (name && telephone && street && house) ? setDestinationAddress(`Одеса,${street},${house}`) : null 		
	}

	return (
		<div className='destination'>
			<form onSubmit={handleSubmit(submitForm)} className='destination__form'>

				<input 
					type="text"
					name='name' 
					placeholder='Ім`я' 
					className={`input input__solid input__light destination__name ${errors.name ? 'input__error' : ''}`} 
					ref={register({required: true})}
				/>
				<input 
					type="tel"
					name='telephone' 
					placeholder='Номер телефону' 
					className={`input input__solid input__light destination__telephone ${errors.telephone ? 'input__error' : ''}`} 
					ref={register({required: true})}
				/>
				<input 
					type="text" 
					name='street' 
					placeholder='Вулиця' 
					className={`input input__solid input__light destination__street ${errors.street ? 'input__error' : ''}`}
					ref={register({required: true})}
				/>
				<input 
					type="text" 
					name='house' 
					placeholder='Дім' 
					className={`input input__solid input__light destination__house ${errors.house ? 'input__error' : ''}`}
					ref={register({required: true})}
				/>
				<input 
					type="number" 
					name="apartment" 
					placeholder='Квартира' 
					className={`input input__solid input__light destination__apartment ${errors.apartment ? 'input__error' : ''}`}
					ref={register({required: false})}
				/>
				<select 
					name='frontDoor' 
					className={`input input__solid input__light destination__frontDoor ${errors.frontDoor ? 'input__error' : ''}`}
					disabled={getValues("apartment") ? false : true} 
					ref={register({required: getValues("apartment") ? true : false})}
				>
					<option value="" disabled selected>Парадна</option>
					<option value=""></option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
				<div className="destination__reception">
					<label 
						className={`label label--light`}
					>
						<input 
							type="radio"
							className={`input`} 
							name="delivery" 
							defaultValue="toCar"
							// checked="checked" 
							defaultChecked={getValues("delivery") === 'toCar'}
						/>
						Вийду до машини
					</label>
					<label 
						className={`label label--light`}
					>
						<input 
							type="radio"
							className={`input`} 
							name="delivery"
							defaultValue="toDoors" 
							// checked="checked"
							defaultChecked={getValues("delivery") === 'toDoors'}
						/>
						До дверей
					</label>
				</div>
			<input 
				type="textarea"
				name="details" 
				cols="30" 
				rows="5" 
				placeholder="Коментар до адреси..." 
				className={`input input__solid input__light destination__details`}
			/> 
				<input
				onClick= {() => console.log(getValues("delivery"))}
				/>
				{/* <Button className="destination__submit" solid light>Знайти місцезнаходження на карті</Button> */}
			</form>
			<Map  className="destination__map" address={destinationAddress}/>
		</div>
	)
}

export default Destination








// import React, {useState, useEffect} from 'react'
// import './Order.sass'
// import {Map, Input, Button} from '../../components'

// function Destination({checkValid}) {
// 	const [name, setName] = useState('')
// 	const [validName, setValidName] = useState(false)
// 	const [telephone, setTelephone] = useState('')
// 	const [validTelephone, setValidTelephone] = useState(false)
// 	const [street, setStreet] = useState('')
// 	const [validStreet, setValidStreet] = useState(false)
// 	const [house, setHouse] = useState('')
// 	const [validHouse, setValidHouse] = useState(false)
// 	const [apartment, setApartment] = useState('')
// 	const [frontDoor, setFrontDoor] = useState('')
// 	const [details, setDetails] = useState('')
// 	const [delivery, setDelivery] = useState('toCar')
// 	const [destinationAddress, setDestinationAddress] = useState('')

// 	const [isFieldsValid, setIsFieldsValid] = useState(false)

// 	const valueToState = (e) => {
// 		const targetName = e.target.name
// 		const targetValue = e.target.value

// 		console.log(name.length)

// 		switch(targetName){
// 			case 'name':
// 				setName(targetValue)
// 				setValidName(name.length >= 2)
// 				break
// 			case 'telephone':
// 				setTelephone(targetValue)
// 				setValidTelephone(telephone.length >= 2)
// 				break
// 			case 'street':
// 				setStreet(targetValue)
// 				setValidStreet(street.length >= 2)
// 				break
// 			case 'house':
// 				setHouse(targetValue)
// 				setValidHouse(house.length >= 0)
// 				break
// 			case 'apartment':
// 				setApartment(targetValue)
// 				break
// 			case 'frontDoor':
// 				setFrontDoor(targetValue)
// 				break
// 			case 'details':
// 				setDetails(targetValue)
// 				break
// 			case 'delivery':
// 				setDelivery(targetValue)
// 				break
// 			default:
// 				break
// 		}
// 	}

// 	useEffect(() => {
// 		console.log(name, telephone, street, house)
// 		setIsFieldsValid(validName && validTelephone && validStreet && validHouse)
// 		console.log(isFieldsValid)
// 	}, [name, telephone, street, house])

// 	const submitForm = (e) => {
// 		e.preventDefault()
// 		console.log(isFieldsValid)
// 		return (name && telephone && street && house) ? setDestinationAddress(`Одеса,${street},${house}`) : null 		
// 	}

// 	return (
// 		<div className='destination'>
// 			<form onSubmit={submitForm} className='destination__form'>
// 				<Input tag='input' type="text" name='name' placeholder='Ім`я' className="destination__name" value={name} onChange={valueToState} solid light/>
// 				<Input tag='tel' type="tel" name='telephone' placeholder='Номер телефону' className="destination__telephone" value={telephone} onChange={valueToState} solid light/>
// 				<Input tag='input' type="text" name='street' placeholder='Вулиця' className="destination__street" value={street} onChange={valueToState} solid light/>
// 				<Input tag='input' type="text" name='house' placeholder='Дім' className="destination__house" value={house} onChange={valueToState} solid light/>
// 				<Input tag='input' type="number" min="1" step="1" name='apartment' placeholder='Квартира' className="destination__apartment" value={apartment} onChange={valueToState} solid light/>
// 				<Input tag='select' name='frontDoor' className="destination__frontDoor" value={frontDoor} disabled={apartment ? false : true} onChange={valueToState} solid light>
// 					<option value="" disabled selected>Парадна</option>
// 					<option value=""></option>
// 					<option value="1">1</option>
// 					<option value="2">2</option>
// 					<option value="3">3</option>
// 					<option value="4">4</option>
// 					<option value="5">5</option>
// 					<option value="6">6</option>
// 				</Input>
// 				<div className="destination__reception">
// 					<Input tag='radio' type="radio" name="delivery" value='toCar' checked={delivery === 'toCar'} onClick={valueToState} solid light>Вийду до машини</Input>
// 					<Input tag='radio' type="radio" name="delivery" value='toDoors' checked={delivery === 'toDoors'} onClick={valueToState} solid light>До дверей</Input>
// 				</div>
// 				<Input tag='textarea' name="details" cols="30" rows="5" placeholder='Коментар до адреси...' className="destination__details" value={details} onChange={valueToState} solid light/>
// 				<Button className="destination__submit" solid light>Знайти місцезнаходження на карті</Button>
// 			</form>
// 			<Map className="destination__map" address={destinationAddress}/>
// 		</div>
// 	)
// }

// export default Destination
