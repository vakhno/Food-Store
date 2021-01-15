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
				<div className="wrapper content">
					<Switch>
						<Route exact path ='/' component={Main} />
						<Route exact path ='/dishes' component={Dishes} />
						<Route exact path ='/cart' component={Cart} />
						<Route exact path ='/contacts' component={Contacts} />
					</Switch>
				</div>
			<Footer/>
		</Router>
	);
}

export default App;
