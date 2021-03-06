const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

const placeNewCategoryDish = (state, payload) => {
	let lengthDishesTypes = Object.keys(state.items[payload.id]).length
	let	sameTypeIndex = Object.values(state.items[payload.id]).findIndex( elem => {
			if(payload.toggle1 && payload.toggle2){
				return elem[0].toggle1 === payload.toggle1 && elem[0].toggle2 === payload.toggle2
			}else if(payload.toggle1){
				return elem[0].toggle1 === payload.toggle1
			}
			return true
		})

	if(sameTypeIndex !== -1){
		payload.categoryId = +`${payload.id}.${++sameTypeIndex}`
		state.items[payload.id][`${payload.id}.${sameTypeIndex}`].push(payload)
	}else{
		payload.categoryId = +`${payload.id}.${++lengthDishesTypes}`
		state.items[payload.id][`${payload.id}.${lengthDishesTypes}`] = [payload]
	}

	return state.items[payload.id]
}

const placeNewDish = (payload) => {
	payload.categoryId = +payload.id+0.1 
	return {[payload.id+0.1]: [payload]}
}

const calculateTotalPrice = (items) => {
	return Object.values(items).reduce( (accum, cur) => Object.values(cur).reduce( (accum, cur) => Object.values(cur).reduce( (accum, cur) => cur.price + +accum, 0) + +accum, 0 ) + +accum, 0)
}

const calculateTotalCount = (newItems) => {
	return Object.values(newItems).reduce( (accum, current) => accum.concat(Object.values(current).reduce( (accum, current) => accum.concat(Object.values(current)), []) ), []).length
}

const cart = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_DISH_CART': {
			const newItems = {
					...state.items,
					[action.payload.id]: !state.items[action.payload.id]
					? placeNewDish(action.payload)
					: placeNewCategoryDish(state, action.payload) 
			}

			return {
				...state,
				items: newItems,
				totalPrice: calculateTotalPrice(newItems),
				totalCount: calculateTotalCount(newItems),
			}
		}
		case 'CLEAR_CART':
			return {
				...state,
				items: {},
				totalPrice: 0,
				totalCount: 0,
			}
		case 'REMOVE_CART_ITEM':{
			const newItems = {
				...state.items,
			}
			delete newItems[Math.trunc(action.payload)][action.payload]

			return {
				...state,
				items: newItems,
				totalPrice: calculateTotalPrice(newItems),
				totalCount: calculateTotalCount(newItems),
			}
		}
		case 'PLUS_CART_ITEM':{
			const newItems = {
				...state.items,
			}
			
			if (newItems[Math.trunc(action.payload)][action.payload].length < 99){
				newItems[Math.trunc(action.payload)][action.payload].push(newItems[Math.trunc(action.payload)][action.payload][0])
				return {
					...state,
					items: newItems,
					totalPrice: calculateTotalPrice(newItems),
					totalCount: calculateTotalCount(newItems),
				}
			}
		}
		case 'MINUS_CART_ITEM':{
			const newItems = {
				...state.items,
			}

			if (newItems[Math.trunc(action.payload)][action.payload].length > 1){
				newItems[Math.trunc(action.payload)][action.payload].splice(0, 1)
				return {
					...state,
					items: newItems,
					totalPrice: calculateTotalPrice(newItems),
					totalCount: calculateTotalCount(newItems),
				}
			}
		}
		default:
			return state
	}
}

export default cart
