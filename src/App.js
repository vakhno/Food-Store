import React, {useEffect} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import {Header, Footer} from './components'
import {Main, Dishes, Cart, Order} from './pages'

import {checkDeliveryTime} from './redux/actions/deliveryTime'
import {useSelector, useDispatch} from 'react-redux'

function App() {
	const dispatch = useDispatch()
	let location = useLocation();

	useEffect( () => {
		dispatch(checkDeliveryTime())
	}, [])

	return (
		<>
			<Header/>
					<Route exact path ='/' component={Main} />
					<Switch>
						<div className={`${location.pathname !== '/' ? "content" : ""}`}>
							<Route exact path ='/dishes' component={Dishes} />
							<Route exact path ='/cart' component={Cart} />
							<Route exact path ='/order' component={Order} />
						</div>
					</Switch>
			<Footer/>
		</>
	);
}

export default App;
