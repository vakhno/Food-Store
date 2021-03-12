import React from 'react'
// styles
import './Button.sass'
// classNames
import classNames from 'classnames'
// prop-types
import PropTypes from 'prop-types'

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

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	outline: PropTypes.bool,
	skeleton: PropTypes.bool,
	solid: PropTypes.bool, 
	add: PropTypes.bool, 
	type: PropTypes.string, 
	light: PropTypes.bool, 
	dark: PropTypes.bool,
}

Button.defaultProps = {
	children: 'натисніть',
	onClick: () => {},
}

export default Button