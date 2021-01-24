import React from 'react'
import './PopularMenu.sass'
import {Button, Title} from '../../../components'

function PopularMenu({menuDishes}) {

	return (
		<div className="menu">
			<div className="menu__wrapper">
				<Title className='menu__title' title='меню' subtitle='найцікавіші страви нашого ресторану' light/>
				<div className="menu__categories">
					{
						menuDishes.slice(0, 4).map( (elem, index) => {					
						return	<div className="menu__category" key={index}>
								<div className="menu__category-title">{elem.title}</div>
								<div className="menu__category-items">
									{elem.dishes.filter( (elem) => elem.type === 'popular').map( (elem, index) => {
										return  <div className="menu__category-item" key={index}>
													<div className="menu__category-item-info">
														<div className="menu__category-item-name">{elem.name}</div>
														<div className="menu__category-item-price">{elem.price}₴</div>
													</div>
													<div className="menu__category-item-description">{elem.description}</div>
												</div>
									})}
								</div>
							</div>
						})
					}
				</div>
				<Button className="menu__button button__solid" light>перейти до повного меню</Button>
			</div>
		</div>
	)
}

export default PopularMenu
