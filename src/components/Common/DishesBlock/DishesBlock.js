import React, {useState} from 'react'
import './DishesBlock.sass'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {Button} from '../../index'

function DishesBlock({id, name, imageUrl, price, types, sizes, onClickAddDish, light, dark}) {
	const [activeType, setActiveType] = useState(types[0])
	const availableTypes = ['тонкое', 'традиционное']
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
		<div className={classNames('pizza-block', {
			'pizza-block--light': light,
			'pizza-block--dark': dark,
		})}>
		<img
			className="pizza-block__image"
			src={imageUrl}
			alt="dishes-image"
		/>
		<h4 className="pizza-block__title">{name}</h4>
		<div className="pizza-block__selector">
			<ul>
				{availableTypes.map((type, index) => 
					<li 
						onClick={() => onSelectType(index)} 
						className={classNames({ 
							'active': activeType === index,
							'disabled': !types.includes(index),
						})} 
						key={type}>
						{type}
					</li>)}
			</ul>
			<ul>
			{availableSizes.map((size, index) => 
					<li 
						onClick={() => onSelectSize(index)} 
						className={classNames({ 
							'active': activeSize === index,
							'disabled': !sizes.includes(index),
						})} 
						key={size}>
						{size} см.
					</li>)}
			</ul>
		</div>
		<div className="pizza-block__bottom">
			<div className="pizza-block__price">от {price} ₽</div>
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
				Добавить
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