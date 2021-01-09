const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}
// elem.type === payload.type && elem.size === payload.size
const placeNewDish = (state, payload) => {
	console.log(state.items[payload.id])
	console.log(payload)
	console.log(Object.values(state.items[payload.id]).filter( elem => elem.some(elem => elem.type === payload.type && elem.size === payload.size)))
	if(Object.values(state.items[payload.id]).every( elem => elem.every(elem => elem.type === payload.type && elem.size === payload.size))){
		console.log(1)
		let lengthDishesTypes = Object.keys(state.items[payload.id]).length
		let k = Object.values(state.items[payload.id]).map( (elem, index) => elem[0].type === payload.type && elem[0].size === payload.size ? index : null)  

		if(k){
			state.items[payload.id][`${payload.id}.${++k[0]}`].push(payload)
			return state.items[payload.id]
		}else{
			return  {...state.items[payload.id], [payload.id+(++lengthDishesTypes/10)]: [payload]}
		}
	}else{
		console.log(2)
		return [...state.items[payload.id], payload]
	}

	// return [...state.items[payload.id], payload]
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
			console.log('---------------------')
			console.log(newItems)
			// console.log(newItems['1'])
			// console.log(newItems['1']['1.1'])

			return {
				...state,
				items: newItems,
				// totalCount: [].concat.apply([], Object.values(items)).length,
				// totalCount: Object.values(newItems).reduce( (accum, current) => accum.concat(current), []).length,
				// totalPrice: Object.values(newItems).reduce( (accum, current) =>  current.reduce( (accum, current) => current.price + accum, 0) + accum, 0)  
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