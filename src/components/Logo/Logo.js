import React from 'react'
import './Logo.sass'
import {Link} from 'react-router-dom'

function Logo({image, title, subtitle}) {
	return (
		<Link to='/' className="logo">
			<img className="logo__image" width="82" src={image} alt="Pizza logo" />
			<div className="logo__losung">
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
		</Link>
	)
}

export default Logo
