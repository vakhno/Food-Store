import React from 'react'
import './SliderLogo.sass'
import Logo from '../../../images/logo2.svg'

function SliderLogo({title, subtitle}) {
	return (
		<div className='slider-logo'>
			<div className="slider-logo__wrapper">
				<h3 className='slider-logo__title'>{title}</h3>
				<img className='slider-logo__logo' src={Logo} alt="slider-logo" width='160'/>
				<p className='slider-logo__subtitle'>{subtitle}</p>
			</div>
		</div>
	)
}

export default SliderLogo
