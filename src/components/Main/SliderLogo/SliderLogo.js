import React from 'react'
// styles
import './SliderLogo.sass'
// visual content
import Logo from '../../../images/logo2.svg'

function SliderLogo({title, subtitle, className}) {
	return (
		<div className={`slider-logo ${className}`}>
			<div className="slider-logo__wrapper">
				<h3 className='slider-logo__title'>{title}</h3>
				<img className='slider-logo__logo' src={Logo} alt="Логотип ресторану"/>
				<p className='slider-logo__subtitle'>{subtitle}</p>
			</div>
		</div>
	)
}

export default SliderLogo