import React from 'react'
// content loader
import ContentLoader from 'react-content-loader'

function DishesLoadingBlock() {
	return (
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