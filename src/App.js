import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header, Footer} from './components'
import {Main, Dishes, Contacts, Cart} from './pages'

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
					<Switch>
						<Route exact path ='/' component={Main} />
						<div className="wrapper content">
							<Route exact path ='/dishes' component={Dishes} />
							<Route exact path ='/cart' component={Cart} />
							<Route exact path ='/contacts' component={Contacts} />
						</div>
					</Switch>
			<Footer/>
		</Router>
	);
}

export default App;
