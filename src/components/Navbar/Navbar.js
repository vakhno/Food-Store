import React from 'react'
// styles
import './Navbar.sass'
// router
import {NavLink} from 'react-router-dom'

function Navbar() {
	const availablePages = [
		{ 
			title: 'Головна',
			link: '/'
		}, 
		{
			title: 'Меню',
			link: '/dishes'
		}, 
		{ 
			title: 'Контакти',
			link: '/contacts'
		}, 
		{ 
			title:'Корзина',
			link: '/cart'
		}
	]

	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				{
					availablePages.map( (elem, index) => {
						return (
							<NavLink exact to={elem.link} className='navbar__link'> 
								<li className='navbar__item' key={index}>
									{elem.title}
								</li>
							</NavLink>
						)
					})
				}
			</ul>
		</nav>
	)
}

export default Navbar
