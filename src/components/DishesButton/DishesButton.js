import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

function DishesButton({onClick, className, outline, children}) {
	return (
		<Link to='/m'>
		<button className={classNames('button', className, {
			'button--outline': outline,
		})}>
			{children}
		</button>
		</Link>
	)
}

export default DishesButton
