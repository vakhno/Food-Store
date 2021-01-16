import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header, Footer} from './components'
import {Main, Dishes, Contacts, Cart} from './pages'

function App() {
	const dispatch = useDispatch()

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
