import React, {useState} from 'react'
// styles
import './Input.sass'
// classNames
import classNames from 'classnames'

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

export default Input
