import React from 'react'
import {Button} from '../../components/'
import {useSelector, useDispatch} from 'react-redux'

function Details({isValid}) {
	const {totalPrice} = useSelector( ({cart}) => cart)

	return (
		<div className="details">
			<div className="details__price" style={{color:'white'}}>Загальний рахунок: <span>{totalPrice}</span></div>
			<Button className="order__submit" solid light>Замовити</Button>
		</div>
	)
}

export default Details
