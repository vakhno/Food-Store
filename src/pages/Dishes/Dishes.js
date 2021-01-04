import React, {useEffect} from 'react'
import {DishesHeader, Categories, DishesSort, DishesBlock} from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory} from '../../redux/actions/filters'
import {fetchDishes} from '../../redux/actions/dishesRequest'

const categoryItems = ['Мясные', 'Вегатерисанские', 'Гриль', 'Острые', 'Закрытые' ]
const sortItems = [
	{name: 'популярности', type: 'popular'},
	{name: 'цене', type: 'price'},
	{name: 'алфавиту', type: 'alphabet'},
]

function Dishes() {
	const dispatch = useDispatch()
	const dishes =  useSelector( ({dishes}) => dishes.items )

	useEffect(() => {
		dispatch(fetchDishes())
	}, [])
	
	const onSelectCategory = (index) => {
		dispatch(setCategory(index))
	}
	// const onSelectCategory = React.useCallback((index) => {
	// 	dispatch(setCategory(index))
	// })



	return (
<div className="wrapper">
		<DishesHeader />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories items={categoryItems}
						onClickItem={onSelectCategory}/>
						<DishesSort items={sortItems}/>
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{dishes && dishes.map( (elem) => <DishesBlock key={elem.id} {...elem}/>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dishes
