import React from 'react'
// styles
import './Navbar.sass'
// router
import {NavLink} from 'react-router-dom'

function Navbar({desktopResolution, menuStatus, closeMenuClick}) {
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
			title:'Корзина',
			link: '/cart'
		}
	]

	return (
		<nav className={`${desktopResolution ? 'navbar' : 'navbar--mobile'} ${menuStatus ? 'navbar--active' : ''}`}>
			<ul className='navbar__list'>
				{
					availablePages.map( (elem, index) => {
						return (
							<NavLink exact to={elem.link} className='navbar__link' onClick={closeMenuClick}> 
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
