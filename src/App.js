import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Main, Dishes, Contacts, Cart} from './pages'

function App() {
	const dispatch = useDispatch()

	return (
		<Router basename="/Food-Store">
			<div className="wrapper">
			<Header/>
			<div className="content">
				<Route path ='/' exact component={Main} />
				<Route path ='/dishes' exact component={Dishes} />
				<Route path ='/cart' exact component={Cart} />
				<Route path ='/contacts' component={Contacts} />
			</div>
			<Footer/>
			</div>
		</Router>
	);
}

export default App;
