export const addDisheToCart = (dish) => ({
	type: 'ADD_DISH_CART',
	payload: dish,
})

export const clearCart = () => ({
	type: 'CLEAR_CART'
})

export const removeCartItem = (id) => ({
	type: 'REMOVE_CART_ITEM',
	payload: id,
})