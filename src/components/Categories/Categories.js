import React, {useState, memo} from 'react'
import PropTypes from 'prop-types'

const Categories = memo(function Categories({activeCategory, items, onClickItem, selectCategory}) {
	return (
		<div className="categories">
		<ul>
			<li className={activeCategory === null ? "active" : ""} onClick={() => selectCategory(null)}>Все</li>
			{items && items.map( (name, index) => {
				return <li className={index === activeCategory ? "active" : ''} onClick={() => selectCategory(index)} key={`${name}_${index}`}>{name}</li>
			})}
		 </ul>
	</div>
	)
})

Categories.propTypes = {
	activeCategory: PropTypes.number,
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickItem: PropTypes.func,
}

Categories.defaultProps = {
	activeCategory: null,
	items: [],
}

export default Categories