const initialState = {
	items: [],
	isLoaded: false
}

const dishes = (state = initialState, action) => {
	switch(action.type){
		case 'SET_DISHES': 
			return {
				...state,
				items: action.payload,
				isLoaded: true,
			}
		default: 
			return state
	}
}

export default dishes