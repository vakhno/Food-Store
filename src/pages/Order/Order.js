import React, {useState, useEffect} from 'react'
import {Map, Input, Button, OrderItem} from '../../components'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import ModalOrder from '../../pages/Order/ModalOrder'
// styles
import './Order.sass'

function Order() {
	const {items} = useSelector( ({cart}) => cart)
	const orderDishes = Object.values(items).map( dish => Object.values(dish).map( elem => Object.values(elem).map(elem => elem ) ) ) 	
	const {totalPrice} = useSelector( ({cart}) => cart)
	const {register, handleSubmit, getValues, setValues, watch, formState: { isValid, isDirty}, errors} = useForm({  })
	const [destinationAddress, setDestinationAddress] = useState('')
	const [allUserInfo, setAllUserInfo] = useState(null)
	const [formValid, setFormValid] = useState(false)

	const watchApartments = watch("apartment", false)
	const watchStreet = watch("street")
	const watchHouse = watch("house")

	const submitForm = (data) => {
		if (isValid) {  
			setAllUserInfo(data)
			setFormValid(true)
			return true
		}	
		return false
	}

	const closeModal = () => {
		setFormValid(false)
	}

	
	const findDestinationMarker = (data) => {
		return watchStreet && watchHouse ? setDestinationAddress(`Одеса,${watchStreet},${watchHouse}`) : null
	}

	return (
		<div className="order">
			<div className="order__container">
				<div className="order__info-block">
				<div className='destination'>
					<form id="order-sent-form" className='destination__form'>
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
							ref={register({required: watchApartments ? true : false})}
						>
							<option defaultValue="" disabled selected={watchApartments ? false : true} >Парадна</option>
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
									value="toCar"
									defaultChecked
									ref={register({required: false})}
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
									value="toDoors"
									ref={register({required: false})}
								/>
								До дверей
							</label>
						</div>
					<textarea
						name="details" 
						cols="30" 
						rows="5" 
						placeholder="Коментар до адреси..." 
						className={`input input__solid input__light destination__details`}
						ref={register({required: false})}
					/> 
						<Button type="button" onClick= {findDestinationMarker} className="destination__submit" solid light>Знайти місцезнаходження на карті</Button>
					</form>
			<Map  className="destination__map" address={destinationAddress}/>
				</div>
				<div className="order__dish-items">
					{
						orderDishes.map(elem => elem.map( (elem) => <OrderItem id={elem[0].id} categoryId={elem[0].categoryId} name={elem[0].name} image={elem[0].imageUrl} toggle1={elem[0].toggle1} toggle2={elem[0].toggle2} count={elem.length} price={elem[0].price * elem.length}></OrderItem> ))
					}
				</div>
				<div className="details">
					<div className="details__price" style={{color:'white'}}><span>Загальний рахунок: <b>{totalPrice} ₴</b></span></div>
					<Button form="order-sent-form" disabled={totalPrice > 0 ? false : true} onClick={handleSubmit(submitForm)} type='submit' className="order__submit" solid light>Замовити</Button>
				</div>
				</div>
			</div>
			<ModalOrder isOpen={formValid} onClose={closeModal} data={allUserInfo}/>
		</div>
	)
}

export default Order
