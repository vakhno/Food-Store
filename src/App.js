import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header, Footer} from './components'
import {Main, Dishes, Contacts, Cart, Order} from './pages'

import {checkDeliveryTime} from './redux/actions/deliveryTime'
import {useSelector, useDispatch} from 'react-redux'

function App() {
	const dispatch = useDispatch()

	useEffect( () => {
		dispatch(checkDeliveryTime())
	}, [])

	return (
		<Router basename="/Food-Store">
			<Header/>
					<Route exact path ='/' component={Main} />
					<Switch>
						<div className="wrapper content">
							<Route exact path ='/dishes' component={Dishes} />
							<Route exact path ='/cart' component={Cart} />
							<Route exact path ='/order' component={Order} />
							<Route exact path ='/contacts' component={Contacts} />
						</div>
					</Switch>
			<Footer/>
		</Router>
	);
}

export default App;
