import React from 'react'
// styles
import './Header.sass'
// router
import {Link, withRouter} from 'react-router-dom'
// components
import {Button, Navbar, Logo} from '../../components'
// redux
import {useSelector} from 'react-redux'
// visual content
import logoSVG from '../../images/logo2.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHryvnia} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";


function Header() {
	const {totalPrice, totalCount} = useSelector(({cart}) => cart)

	return (
		<div className="header">
			<div className="header__container">
				<div className="header__logo">
					<Logo image={logoSVG} title='PASTA & PIZZA' subtitle='італійська кухня'/>
				</div>
				<Navbar/>
				<div className="header__cart">
					<Link to='/cart'>
						<Button solid dark>
							<span>{totalPrice}</span><FontAwesomeIcon icon={faHryvnia}/>
							<div className="button__delimiter"></div>
							<FontAwesomeIcon icon={faShoppingBasket}/>
							<span>{totalCount}</span>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Header)
