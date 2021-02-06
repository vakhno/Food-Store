import React from 'react'
// styles
import './Logo.sass'
// router
import {Link} from 'react-router-dom'

function Logo({image, title, subtitle}) {
	return (
		<Link to='/' className="logo">
			<img className="logo__image" src={image} alt="Логотип ресторану"/>
			<div className="logo__losung">
				<h1 className="logo__title">{title}</h1>
				<p className="logo__subtitle">{subtitle}</p>
			</div>
		</Link>
	)
}

export default Logo
