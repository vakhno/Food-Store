import React from 'react'
// styles
import './FeatureItem.sass'

function FeatureItem({icon, title, subtitle}) {
	return (
		<div className={`feature`}>
			<div className="feature__icon">{icon}</div>
			<div className="feature__title">{title}</div>
			<div className="feature__subtitle">{subtitle}</div>
		</div>
	)
}

export default FeatureItem
