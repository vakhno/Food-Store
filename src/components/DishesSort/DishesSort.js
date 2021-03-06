import React, {useState, useEffect, useRef, memo} from 'react'
// styles
import './DishesSort.sass'
// prop-types
import PropTypes from 'prop-types'

function DishesSort({items, onClickSortType, activeSortType}) {
	const [visiblePopup, setVisiblePopup] = useState(false)
	const activeSortLabel = items.find(elem => elem.type === activeSortType).name
	const sortRef = useRef()

	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup)
	}

	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath());
		if(!path.includes(sortRef.current)){
			setVisiblePopup(false)
		}
	}  

	const onSelectItem = (index) => {
		onClickSortType(index)
		setVisiblePopup(false)
	}

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick)
	}, [])  

	return (
		<div ref={sortRef} className="sort">
			<div className="sort__selection">
				<svg className={ visiblePopup ? 'rotated' : ''}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="white"
					/>
				</svg>
				<span className="sort__title">Сортування за:</span>
				<span className="sort__category" onClick={toggleVisiblePopup}>{activeSortLabel}</span>
			</div>
			{visiblePopup && <div className="sort__popup">
				<ul className="sort__popup-items">
					{items && items.map( (elem, index) => {
						return <li onClick={() => onSelectItem(elem)} className={`sort__popup-item ${activeSortType === index ? 'active' : ''}`} key={`${elem.type}_${index}`}>{elem.name}</li>
					})}
				</ul>
			</div>}
		</div>
	)
}

DishesSort.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onClickSortType: PropTypes.func.isRequired, 
	activeSortType: PropTypes.string.isRequired,
}

DishesSort.defaultProps = {
	items: [],
	activeSortType: 0,
}

export default memo(DishesSort)