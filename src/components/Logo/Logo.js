import React from 'react'
// styles
import './Logo.sass'
// router
import {Link} from 'react-router-dom'
// prop-types
import PropTypes from 'prop-types'

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

Logo.propsTypes = {
	image: PropTypes.instanceOf(Element).isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

Logo.defaultProps = {
	image: '',
	title: 'Заголовок',
	subtitle: 'Опис',
}

export default Logo
