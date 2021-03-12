import React, {useEffect} from 'react'
// react-router-dom
import {Route, Switch, useLocation} from 'react-router-dom'
// components
import {Header, Footer} from './components'
// pages
import {Main, Dishes, Cart, Order} from './pages'
// redux
import {checkDeliveryTime} from './redux/actions/deliveryTime'
import {useDispatch} from 'react-redux'

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
					<div className={`${location.pathname !== '/' ? "content" : ""}`}>
						<Switch>
							<Route exact path ='/dishes' component={Dishes} />
							<Route exact path ='/cart' component={Cart} />
							<Route exact path ='/order' component={Order} />
						</Switch>
					</div>
			<Footer/>
		</>
	);
}

export default App;
