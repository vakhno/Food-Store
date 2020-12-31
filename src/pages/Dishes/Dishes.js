import React from 'react'
import {DishesHeader, Categories, DishesSort, DishesBlock} from '../../components'



function Dishes({items}) {
	return (
<div className="wrapper">
		<DishesHeader />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories items={[
							'Мясные',
							'Вегатерисанские',
							'Гриль',
							'Острые',
							'Закрытые',
						]}/>
						<DishesSort items={[
							{name: 'популярности', type: 'popular'},
							{name: 'цене', type: 'price'},
							{name: 'алфавиту', type: 'alphabet'},
						]}/>
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{items.map( (elem) => <DishesBlock key={elem.id} {...elem}/>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dishes
