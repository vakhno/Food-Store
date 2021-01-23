import React from 'react'
import './Button.sass'
import classNames from 'classnames'

function Button({onClick, className, outline, skeleton, children, light, dark, solid}) {
	return (
		<button onClick={onClick} className={classNames('button', className, {
			'button__outline': outline,
			'button__solid': solid,
			'button__skeleton': skeleton,
			'button--light': light,
			'button--dark': dark,
		})}>
			{children}
		</button>
	)
}

export default Button