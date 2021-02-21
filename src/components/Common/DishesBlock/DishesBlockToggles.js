import React, {useState, useEffect} from 'react'
// classNames
import classNames from 'classnames'

function DishesBlockToggles({category, toggle1, toggle2, onSelectToggle1, onSelectToggle2}) {
	const [activeToggle1, setActiveToggle1] = useState(toggle1[0])
	const [activeToggle2, setActiveToggle2] = useState(toggle2[0])
	const pizzaToggle1 = ['тонке', 'традиційне']
	const pizzaToggle2 = [25, 30, 40]
	const drinksToggle1 = [0.5, 1, 2]

	useEffect(() => {
		if(category === 'pizza'){
			onSelectToggle1(pizzaToggle1[toggle1[0]])
			onSelectToggle2(pizzaToggle2[toggle2[0]])
		}else if(category === 'drink'){
			onSelectToggle1(drinksToggle1[toggle1[0]])
		}
	}, [])

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
											'disabled': !toggle1.includes(index),
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
											'disabled': !toggle2.includes(index),
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
									'disabled': !toggle1.includes(index),
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
