const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

const cart = (state = initialState, action) => {
	// console.log(state.items)
	// console.log(action.payload)
	// console.log(state.items[action.payload])
	switch(action.type){
		case 'ADD_DISH_CART': {
			const newItems = {
					...state.items,
					[action.payload.id]: !state.items[action.payload.id]
					? [action.payload] 
					: [...state.items[action.payload.id], action.payload, ] 
			}
			// console.log(action.payload)
			// console.log(newItems)

			return {
				...state,
				items: newItems,
				// totalCount: [].concat.apply([], Object.values(items)).length,
				totalCount: Object.values(newItems).reduce( (accum, current) => accum.concat(current), []).length,
				totalPrice: Object.values(newItems).reduce( (accum, current) =>  current.reduce( (accum, current) => current.price + accum, 0) + accum, 0)  
			}
		}
		default:
			return state
	}
}

export default cart