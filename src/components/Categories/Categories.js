import React, {useState, memo} from 'react'

const Categories = memo(function Categories({items, onClickItem}) {
	const [activeCategory, setActiveCategory] = useState(null);

	const selectCategory = (index) => {
		setActiveCategory(index)
		onClickItem(index)
	}

	return (
		<div className="categories">
		<ul>
			<li className={activeCategory === null ? "active" : ""} onClick={() => {selectCategory(null)}}>Все</li>
			{items && items.map( (name, index) => {
				return <li className={index === activeCategory ? "active" : ''} onClick={() => selectCategory(index)} key={`${name}_${index}`}>{name}</li>
			})}
		 </ul>
	</div>
	)
})

export default Categories