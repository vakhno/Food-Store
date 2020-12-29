import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './pages/Main/Main'
import Dishes from './pages/Dishes/Dishes'
import Contacts from './pages/Contacts/Contacts'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<Router basename="/Food-Store">
			<Header/>
			<Switch>
				<Route path ='/m' exact component={Main} />
				<Route path ='/' exact component={Dishes} />
				<Route path ='/contacts' component={Contacts} />
			</Switch>
			<Footer/>
		</Router>
	);
}

export default App;
