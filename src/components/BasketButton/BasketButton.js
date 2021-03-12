import React from 'react'
import './BasketButton.sass'
// redux
import {useSelector} from 'react-redux'
// visual content
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHryvnia} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

function BasketButton() {
	const {totalPrice, totalCount} = useSelector( ({cart}) => cart )

	return (
		<div className="basket-button">
			<span className="basket-button__text">{totalPrice}</span>
			<FontAwesomeIcon icon={faHryvnia} className="basket-button__icon"/>
			<div className="delimiter-vertical"></div>
			<FontAwesomeIcon icon={faShoppingBasket} className="basket-button__icon"/>
			<span className="basket-button__text">{totalCount}</span>
		</div>
	)
}

export default BasketButton
