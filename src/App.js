import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Main, Dishes, Contacts} from './pages'

function App() {
	
	return (
		<Router basename="/Food-Store">
			<Header/>
				<Route path ='/m' exact component={Main} />
				<Route path ='/' exact component={Dishes} />
				<Route path ='/contacts' component={Contacts} />
			<Footer/>
		</Router>
	);
}

export default App;
