import React from 'react'
// content loader
import ContentLoader from 'react-content-loader'

function DishesLoadingBlock() {
	return (
		// <ContentLoader 
		// 	speed={2}
		// 	width={280}
		// 	height={460}
		// 	viewBox="0 0 280 460"
		// 	backgroundColor="#f3f3f3"
		// 	foregroundColor="#ecebeb">
		// 	<circle cx="132" cy="142" r="115" /> 
		// 	<rect x="0" y="273" rx="6" ry="0" width="280" height="26" /> 
		// 	<rect x="0" y="310" rx="6" ry="0" width="280" height="84" /> 
		// 	<rect x="0" y="418" rx="6" ry="0" width="91" height="31" /> 
		// 	<rect x="137" y="408" rx="25" ry="0" width="140" height="46" />
		// </ContentLoader>
		<ContentLoader 
			speed={2}
			width={320}
			height={490}
			viewBox="0 0 320 490"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="0" rx="0" ry="0" width="320" height="490" />
		</ContentLoader>
	)
}

export default DishesLoadingBlock