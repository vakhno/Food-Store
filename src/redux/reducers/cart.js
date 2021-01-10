const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

const placeNewDish = (state, payload) => {
	let lengthDishesTypes = Object.keys(state.items[payload.id]).length
	let	sameTypeIndex = Object.values(state.items[payload.id]).findIndex( elem => elem[0].type === payload.type && elem[0].size === payload.size)

	if(sameTypeIndex !== -1){
		state.items[payload.id][`${payload.id}.${++sameTypeIndex}`].push(payload)
	}else{
		state.items[payload.id][`${payload.id}.${++lengthDishesTypes}`] = [payload]
	}

	return state.items[payload.id]
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
					? {[action.payload.id+0.1]: [action.payload]} 
					: placeNewDish(state, action.payload) 
			}
	
			return {
				...state,
				items: newItems,
				totalPrice: calculateTotalPrice(newItems),
				totalCount: calculateTotalCount(newItems),
			}
		}
		default:
			return state
	}
}

export default cart


// const initialState = {
// 	items: {},
// 	totalPrice: 0,
// 	totalCount: 0,
// }

// const cart = (state = initialState, action) => {
// 	switch(action.type){
// 		case 'ADD_DISH_CART': {
// 			const currentItems = !state.items[action.payload.id] 
// 			? [action.payload] 
// 			: [...state.items[action.payload.id], action.payload, ] 
			
// 			const newItems = {
// 					...state.items,
// 					[action.payload.id]: !state.items[action.payload.id] 
// 					? [action.payload] 
// 					: [...state.items[action.payload.id], action.payload, ] 
// 				}
// 				return {
// 					...state,
// 					items: newItems,
// 					// totalCount: [].concat.apply([], Object.values(items)).length,
// 					totalCount: Object.values(newItems).reduce( (accum, current) => accum.concat(current), []).length,
// 					totalPrice: Object.values(newItems).reduce( (accum, current) =>  current.reduce( (accum, current) => current.price + accum, 0) + accum, 0)  
// 				}
// 			}
// 			default:
// 				return state
// 		}
// 	}
// 	export default cart