import React from 'react'
import classNames from 'classnames'
import './Title.sass'

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

export default Title
