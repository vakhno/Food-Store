import React, {useState} from 'react'

function Categories({items}) {
	const [activeCategory, setActiveCategory] = useState(null);

	const selectCategory = (index) => {
		setActiveCategory(index)
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
}

export default Categories