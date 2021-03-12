import React, {memo} from 'react'
// styles
import './Categories.sass'
// propTypes
import PropTypes from 'prop-types'

function Categories({activeCategory, items, selectCategory}) {
	return (
		<div className="categories">
			<div className="categories__wrapper">
			<ul className="categories__list">
				<li className={`categories__item ${activeCategory === null ? "categories__item--active" : ""}`} onClick={() => selectCategory(null)}>Всі</li>
				{items && items.map( (category, index) => {
					return <li className={`categories__item ${category.category === activeCategory ? "categories__item--active" : ""}`} onClick={() => selectCategory(category.category)} key={`${category.title}_${index}`}>{category.title}</li>
				})}
			</ul>
			</div>
		</div>
	)
}

Categories.propTypes = {
	activeCategory: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onClickItem: PropTypes.func,
}

Categories.defaultProps = {
	activeCategory: '',
	items: [],
}

export default memo(Categories)