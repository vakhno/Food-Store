import React, {useEffect} from 'react'
import {DishesHeader, Categories, DishesSort, DishesBlock, DishesLoadingBlock} from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, setSortBy} from '../../redux/actions/filters'
import {fetchDishes} from '../../redux/actions/dishesRequest'

const categoryItems = ['Мясные', 'Вегатерисанские', 'Гриль', 'Острые', 'Закрытые' ]
const sortItems = [
	{name: 'популярности', type: 'popular', order: 'desc'},
	{name: 'цене', type: 'price', order: 'desc'},
	{name: 'алфавиту', type: 'name', order: 'asc'},
]

function Dishes() {
	const dispatch = useDispatch()
	const dishes =  useSelector( ({dishes}) => dishes.items )
	const isLoaded =  useSelector( ({dishes}) => dishes.isLoaded )
	const {category, sortBy} = useSelector(({filter}) => filter)

	useEffect(() => {
		dispatch(fetchDishes(sortBy, category))
	}, [category, sortBy])

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index))
	}, [])

	const onSelectSortType = React.useCallback((name) => {
		dispatch(setSortBy(name))
	}, [])

	return (
<div className="wrapper">
		<DishesHeader />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories activeCategory={category} items={categoryItems}
						selectCategory={onSelectCategory}/>
						<DishesSort activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{isLoaded ? dishes.map( (elem) => <DishesBlock key={elem.id} {...elem}/>) : Array(12).fill(0).map((_, index) => <DishesLoadingBlock key={index}/>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dishes
