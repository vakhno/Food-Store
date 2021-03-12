const currentHour = +new Date().toLocaleTimeString().slice(0,-3).split(':')[0]
const startWork = 9
const endWork = 22

const deliveryTime = (state = currentHour, action) => {
	switch(action.type){
		case 'CHECK_DELIVERY_TIME':
			return (state > startWork && state < endWork ? true : false)
		default :
			return false
		}
}
// console.log(currentHour > startWork && currentHour < endWork ? true : false)

export default deliveryTime