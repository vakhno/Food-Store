import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Main, Dishes, Contacts} from './pages'


function App() {
	const [dishes, setDishes] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/Food-Store/db.json').then( ({data}) => {
			setDishes(data.pizzas)
		})
	}, [])

	return (
		<Router basename="/Food-Store">
			<Header/>
				<Route path ='/m' exact component={Main} />
				<Route path ='/' exact render={() => <Dishes items={dishes}/>} />
				<Route path ='/contacts' component={Contacts} />
			<Footer/>
		</Router>
	);
}

export default App;
