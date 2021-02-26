import React, {useState, useEffect} from 'react'
// classNames
import classNames from 'classnames'
// propTypes
import PropTypes, { string } from 'prop-types'

function DishesBlockToggles({price, category, toggle1, toggle2, onSelectToggle1, onSelectToggle2, setDishesPrice}) {
	const [activeToggle1, setActiveToggle1] = useState(toggle1[0] ? toggle1[0].num : null)
	const [activeToggle2, setActiveToggle2] = useState(toggle2[0] ? toggle2[0].num : null)
	const pizzaToggle1 = ['тонке', 'традиційне']
	const pizzaToggle2 = [25, 30, 40]
	const drinksToggle1 = [0.5, 1, 2]

	useEffect(() => {
		if(category === 'pizza'){
			onSelectToggle1(pizzaToggle1[toggle1[0].num])
			onSelectToggle2(pizzaToggle2[toggle2[0].num])
		}else if(category === 'drink'){
			onSelectToggle1(drinksToggle1[toggle1[0].num])
		}
	}, [])

	useEffect(() => {
		const toggle1Price = toggle1[0] ? toggle1.find(elem => elem.num === activeToggle1).extraPrice : null
		const toggle2Price = toggle2[0] ? toggle2.find(elem => elem.num === activeToggle2).extraPrice : null

		setDishesPrice(price + toggle1Price + toggle2Price)
	}, [activeToggle1, activeToggle2])

	return (
		<>
			{ 
				category === 'pizza' ?
					<>
						{
							toggle1 &&
							<ul className="dish-block__selector-items">
								{pizzaToggle1.map((toggle, index) => 
									<li 
										onClick={() => (setActiveToggle1(index), onSelectToggle1(pizzaToggle1[index]))} 
										className={ classNames("dish-block__selector-item", { 
											'active': activeToggle1 === index,
											'disabled': !toggle1.some(elem => elem.num === index),
										})} 
										key={toggle}>
										{toggle}
									</li>)}
							</ul>
						}
						{
							toggle2 &&
							<ul className="dish-block__selector-items">
								{pizzaToggle2.map((toggle, index) => 
									<li 
										onClick={() => (setActiveToggle2(index), onSelectToggle2(pizzaToggle2[index]))} 
										className={ classNames("dish-block__selector-item", { 
											'active': activeToggle2 === index,
											'disabled': !toggle2.some(elem => elem.num === index),
										})} 
										key={toggle}>
										{toggle} см.
									</li>)}
							</ul>
						}
					</>
				: category === 'drink' ?
					<>
						<ul className="dish-block__selector-items">
						{drinksToggle1.map((toggle, index) => 
							<li 
								onClick={() => (setActiveToggle1(index), onSelectToggle1(drinksToggle1[index]))} 
								className={ classNames("dish-block__selector-item", { 
									'active': activeToggle1 === index,
									'disabled': !toggle1.some(elem => elem.num === index),
								})} 
								key={toggle}>
								{toggle}
							</li>)}
						</ul>
					</>
				: null
			}
		</>
	)
}

export default DishesBlockToggles
