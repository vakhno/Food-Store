const initialState = {
	items: [],
}

const menuDishes = (state = initialState, action) => {
	switch(action.type){
		case 'SET_MENU_DISHES': 
			return {
				...state,
				items: action.payload,
			}
		default: 
			return state
	}
}

export default menuDishes