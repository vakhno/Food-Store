const initialState = {
	items: [],
}

const deliveryDishes = (state = initialState, action) => {
	switch(action.type){
		case 'SET_DELIVERY_DISHES': 
			return {
				...state,
				items: action.payload,
			}
		default: 
			return state
	}
}

export default deliveryDishes