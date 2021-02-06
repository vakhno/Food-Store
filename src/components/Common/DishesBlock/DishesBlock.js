import React, {useState} from 'react'
// styles
import './DishesBlock.sass'
// classNames
import classNames from 'classnames'
// propTypes
import PropTypes from 'prop-types'
// components
import {Button} from '../../index'

function DishesBlock({id, name, imageUrl, price, types, sizes, onClickAddDish, light, dark, className}) {
	const [activeType, setActiveType] = useState(types[0])
	const availableTypes = ['тонке', 'традиційне']
	const [activeSize, setActiveSize] = useState(sizes[0])
	const availableSizes = [25, 30, 40]

	const onSelectType = (index) => {
		setActiveType(index)
	}

	const onSelectSize = (index) => {
		setActiveSize(index)
	}

	const onAddDish = () => {
		const dishInfo = {
			id,
			name, 
			imageUrl,
			price,
			size: availableSizes[activeSize],
			type: availableTypes[activeType],
		}
		onClickAddDish(dishInfo)
	}

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
			<ul className="dish-block__selector-items">
				{availableTypes.map((type, index) => 
					<li 
						onClick={() => onSelectType(index)} 
						className={ classNames("dish-block__selector-item", { 
							'active': activeType === index,
							'disabled': !types.includes(index),
						})} 
						key={type}>
						{type}
					</li>)}
			</ul>
			<ul className="dish-block__selector-items">
			{availableSizes.map((size, index) => 
					<li 
						onClick={() => onSelectSize(index)} 
						className={ classNames("dish-block__selector-item", { 
							'active': activeSize === index,
							'disabled': !sizes.includes(index),
						})} 
						key={size}>
						{size} см.
					</li>)}
			</ul>
		</div>
		<div className="dish-block__bottom">
			<div className="dish-block__price">{price} ₴</div>
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
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	onClickAddDish: PropTypes.func,
	addedCount: PropTypes.number,
}

DishesBlock.defaultProps = {
	name: '------',
	imageUrl: '',
	price: 0,
	types: [],
	sizes: [],
}

export default DishesBlock