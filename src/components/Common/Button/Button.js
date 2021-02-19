import React from 'react'
// styles
import './Button.sass'
// classNames
import classNames from 'classnames'

function Button({onClick, className, disabled, outline, skeleton, children, solid, add, type, light, dark}) {
	return (
		<button type={type} disabled={disabled} onClick={onClick} className={classNames('button', className, {
			'button__outline': outline,
			'button__solid': solid,
			'button__add': add,
			'button__skeleton': skeleton,
			'button--light': light,
			'button--dark': dark,
		})}>
			{children}
		</button>
	)
}

export default Button
