import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Main, Dishes, Contacts} from './pages'

function App() {
	const [dishes, setDishes] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/Food-Store/db.json')
		.then((resp) => resp.json())
		.then(json => setDishes(json.pizzas))
	}, [])

	console.log(dishes)

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
