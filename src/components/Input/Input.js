import React from 'react'
// styles
import './Input.sass'
// classNames
import classNames from 'classnames'
// prop-types
import PropTypes from 'prop-types'

function Input({tag, type, placeholder, name, className, value, cols, rows, checked, disabled, onClick, onChange, children, solid, skeleton, dark, light, ref}) {
	let outputInput = null

	if(tag === 'input'){
		outputInput = <input type={type} placeholder={placeholder} ref={ref} className={classNames('input', className, {
			'input--dark': dark,
			'input--light': light,
			'input__solid': solid,
			'input__skeleton': skeleton,
		})} name={name} value={value} onChange={onChange} onClick={onClick}/>
	}else if(tag === 'tel'){
		outputInput = <input type={type} placeholder={placeholder} ref={ref} className={classNames('input', className, {
			'input--dark': dark,
			'input--light': light,
			'input__solid': solid,
			'input__skeleton': skeleton,
		})} name={name} value={value} onChange={onChange} onClick={onClick}/>
	}else if(tag === 'select'){
		outputInput = <select className={classNames('input', className, {
			'input--dark': dark,
			'input--light': light,
			'input__solid': solid,
			'input__skeleton': skeleton,
		})} name={name} value={value} disabled={disabled} onChange={onChange} onClick={onClick}>{children}</select>
	}else if(tag === 'textarea'){
		outputInput = <textarea type={type} placeholder={placeholder} cols={cols} rows={rows} className={classNames('input', className, {
			'input--dark': dark,
			'input--light': light,
			'input__solid': solid,
			'input__skeleton': skeleton,
		})} name={name} value={value} onChange={onChange} onClick={onClick}/>
	}else if(tag === 'radio'){
		outputInput = <label className={classNames('label', className, {
			'label--dark': dark,
			'label--light': light,
		})}><input type={type} className={classNames('input', className, {
			'input--dark': dark,
			'input--light': light,
		})} name={name} value={value} checked={checked} onChange={onChange} onClick={onClick}/>{children}</label>
	}

	return (
		outputInput
	)
}

Input.propTypes = {
	tag: PropTypes.string.isRequired, 
	type: PropTypes.string, 
	placeholder: PropTypes.string, 
	name: PropTypes.string, 
	className: PropTypes.string, 
	value: PropTypes.string, 
	cols: PropTypes.number, 
	rows: PropTypes.number, 
	checked: PropTypes.bool, 
	disabled: PropTypes.bool, 
	onClick: PropTypes.func, 
	onChange: PropTypes.func, 
	children: PropTypes.node, 
	solid: PropTypes.bool, 
	skeleton: PropTypes.bool, 
	dark: PropTypes.bool, 
	light: PropTypes.bool, 
}

Input.defaultProps = {
	tag: 'input', 
}

export default Input
