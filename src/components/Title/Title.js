import React from 'react'
// styles
import './Title.sass'
// classNames
import classNames from 'classnames'
// prop-types
import PropTypes from 'prop-types'

function Title({title, subtitle, light, dark, className}) {
	return (
		<div className={classNames('title', className, {
			'title--light': light,
			'title--dark': dark,
		})}>
			<div className="title__title">{title}</div>
			<div className="title__subtitle">{subtitle}</div>
		</div>
	)
}

Title.propTypes = {
	title: PropTypes.string.isRequired, 
	subtitle: PropTypes.string.isRequired, 
	light: PropTypes.bool, 
	dark: PropTypes.bool, 
	className: PropTypes.string.isRequired,
}

Title.defaultProps = {
	title: 'Заголовок', 
	subtitle: 'Опис',
	className: '', 
}

export default Title
