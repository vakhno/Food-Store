import React, {useState, use} from 'react'
// styles
import './Order.sass'
// components
import Destination from '../Order/Destination'
import Contacts from '../Order/Contacts'

import {BrowserRouter as Router, Switch, Route, useHistory, Link, useRouteMatch} from 'react-router-dom'

function Order() {


	return (
		<div className="order">
			<div className="order__container">
				
				<details className="order__info-block" close>
					<summary className="order__block-title">Контакті дані</summary>
					{/* <div className="order__step-info"> */}
					<div className="destination-block">
						<Contacts/>
					</div>
					{/* </div> */}
				</details>

				<details className="order__info-block" open>
					<summary className="order__block-title">Адреса</summary>
					<div className="destination-block">
						<Destination/>
					</div>
				</details>

				<details className="order__info-block" open>
					<summary className="order__block-title">Деталі замовлення</summary>
					<div className="destination-block">
				
					</div>
				</details>

			</div>
		</div>
	)
}

export default Order










// import React from 'react'
// import './Order.sass'
// import Destination from './Destination'
// import ClientData from './ClientData'
// import OrderData from './OrderData'
// import {BrowserRouter as Router, Switch, Route, useHistory, Link, useRouteMatch} from 'react-router-dom'

// function Order() {
// 	let match = useRouteMatch();
// 	let history = useHistory()
// 	let name = false
// 	console.log(match)
// 	console.log(history)
// 	return (
// 		<>
// 		<Router basename='Food-Store/'>
// 		<div className="order__way" style={{color:'white'}}>
// 			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati ducimus possimus rem atque veniam vel ut numquam aut ratione impedit, veritatis deserunt? Ratione vitae nam incidunt, error maiores ab.
// 			Accusamus modi eaque commodi pariatur eius, inventore ratione ab dolorum cumque eveniet. Officiis deleniti mollitia est dolorem odit, explicabo ab, dolores accusamus eius nisi, quas debitis voluptatum recusandae? Voluptatem, quibusdam.
// 		</div>
// 			<Link to={`${match.url}/client-data`}>
// 				<button>wwwwwwwww</button>
// 			</Link>
// 			<Link to={`${match.url}/dishes-data`}>
// 				<button>111111111</button>
// 			</Link>
// 			<div className="order__part">
// 					<Switch>
// 						<Route exact path={`${match.path}`} component={Destination}/>
// 						<Route exact path={`${match.path}/client-data`} component={ClientData}/>
// 						<Route exact path={`${match.path}/dishes-data`} component={OrderData}/>
// 					</Switch>
					
// 			</div>
// 		</Router>
// 		</>
// 	)
// }

// export default Order