import React from 'react'
// styles
import './FeatureItem.sass'
// prop-types
import PropTypes from 'prop-types'

function FeatureItem({icon, title, subtitle}) {
	return (
		<div className={`feature`}>
			<div className="feature__icon">{icon}</div>
			<div className="feature__title">{title}</div>
			<div className="feature__subtitle">{subtitle}</div>
		</div>
	)
}

FeatureItem.propTypes = {
	icon: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

FeatureItem.defaultProps = {
	icon: '',
	title: 'Заголовок',
	subtitle: 'Опис',
}

export default FeatureItem
