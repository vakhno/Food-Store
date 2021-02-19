import React, {useEffect} from 'react'
import './Dishes.sass'
import {Categories, DishesSort, DishesBlock, DishesLoadingBlock} from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, setSortBy} from '../../redux/actions/filters'
import {fetchDishes} from '../../redux/actions/dishesRequest'
import {addDisheToCart} from '../../redux/actions/cart'

const categoryItems = [
	{
		title:'Піци',
		category:'pizza'
	}, 
	{
		title:'Десерти', 
		category:'desert'
	}, 
	{
		title:'Паста',
		category:'pasta'
	}, 
	{
		title:'Равіолі', 
		category:'ravioli'
	},
	{
		title:'Салати', 
		category:'salat'
	}, 
	{
		title:'Напої', 
		category:'drink'
	},
]
const sortItems = [
	{
		name: 'популярність', 
		type: 'popular', 
		order: 'desc'
	},
	{
		name: 'ціна', 
		type: 'price', 
		order: 'desc'
	},
	{
		name: 'алфавіт', 
		type: 'name', 
		order: 'asc'
	},
]

function Dishes() {
	const dispatch = useDispatch()
	const dishes =  useSelector( ({dishes}) => dishes.items )
	const cartItems =  useSelector( ({cart}) => cart.items )
	const isLoaded =  useSelector( ({dishes}) => dishes.isLoaded )
	const {category, sortBy} = useSelector(({filter}) => filter)
	console.log(dishes)
	useEffect(() => {
		dispatch(fetchDishes(sortBy, category))
	}, [category, sortBy])

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index))
	}, [])

	const onSelectSortType = React.useCallback((name) => {
		dispatch(setSortBy(name))
	}, [])

	const handleAddDishToCart = (dishInfo) => {
		dispatch(addDisheToCart(dishInfo))
	}

	return (
		<div className="menu-dishes">
			<div className="menu-dishes__container" style={{marginTop:'100px'}}>
				<div className="menu-dishes__options">
					<Categories activeCategory={category} items={categoryItems} selectCategory={onSelectCategory}/>
					<DishesSort activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
				</div>
				<h2 className="menu-dishes__title">Оберіть страви:</h2>
				<div className="menu-dishes__dishes-list">
					{isLoaded ? dishes.map( (elem) => <DishesBlock className="menu-dishes__dishe" onClickAddDish={handleAddDishToCart} addedCount={cartItems[elem.id] && Object.values(cartItems[elem.id]).reduce( (accum, cur) => accum.concat(cur), []).length} key={elem.id} {...elem} light/>) : Array(12).fill(0).map((_, index) => <DishesLoadingBlock key={index}/>)}
				</div>
			</div>
		</div>
	)
}

export default Dishes
