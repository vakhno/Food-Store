import React, {useState, useEffect} from 'react'
// styles
import './DishesBlock.sass'
// classNames
import classNames from 'classnames'
// propTypes
import PropTypes from 'prop-types'
// components
import {Button} from '../../index'
import DishesBlockToggles from './DishesBlockToggles'

function DishesBlock({id, name, category, imageUrl, price, toggle1, toggle2, onClickAddDish, light, dark, className}) {
	const [dishesPrice, setDishesPrice] = useState(price)
	const [choosenToggle1, setChoosenToggle1] = useState(toggle1[0])
	const [choosenToggle2, setChoosenToggle2] = useState(toggle2[0])

	const onAddDish = () => {
		const dishInfo = {
			id,
			name, 
			imageUrl,
			category,
			price: dishesPrice,
			toggle1: choosenToggle1,
			toggle2: choosenToggle2,
		}
		onClickAddDish(dishInfo)
	}

	useEffect(() => {
		console.log(dishesPrice)
	}, [dishesPrice])

	return (
		<div className={classNames('dish-block', className, {
			'dish-block--light': light,
			'dish-block--dark': dark,
		})}>
		<div className="dish-block__wrapper-image">
			<img
				className="dish-block__image"
				src={imageUrl}
				alt="dishes-image"
			/>
		</div>
		<h4 className="dish-block__title">{name}</h4>
		<div className="dish-block__selector">
			<DishesBlockToggles category={category}	price={price} toggle1={toggle1} toggle2={toggle2} onSelectToggle1={setChoosenToggle1} onSelectToggle2={setChoosenToggle2} setDishesPrice={setDishesPrice}/>
		</div>
		<div className="dish-block__bottom">
			<div className="dish-block__price">{dishesPrice} ₴</div>
			<Button onClick={onAddDish} className="" add {...light ? {light} : {dark}}>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
						fill="white"
					/>
				</svg>
				Додати
			</Button>
		</div>
	</div>
	)
}

DishesBlock.propTypes = {
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	toggle1: PropTypes.arrayOf(PropTypes.number).isRequired,
	toggle2: PropTypes.arrayOf(PropTypes.number).isRequired,
	onClickAddDish: PropTypes.func,
	addedCount: PropTypes.number,
}

DishesBlock.defaultProps = {
	name: '------',
	imageUrl: '',
	price: 0,
	toggle1: [],
	toggle2: [],
}

export default DishesBlock
