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
		console.log(data)
		return isValid ? setDestinationAddress(`Одеса,${data.street},${data.house}`) : null
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
			</form>
			<Map  className="destination__map" address={destinationAddress}/>
		</div>
	)
}

export default Destination
