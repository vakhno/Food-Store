import React, {useState} from 'react'
import './Header.sass'
import {Link, withRouter} from 'react-router-dom'
import {Button} from '../../components'
import logoSVG from '../../images/logo2.svg'
import {useSelector} from 'react-redux'
import {Navbar, Logo, HeaderContacts} from '../index'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHryvnia} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import MainImage from '../../images/main_first_image.jpg'
import MainImage2 from '../../images/main_second_image.png'
import MainImage3 from '../../images/main_third_image.jpg'
import MainImage4 from '../../images/main_fourth_image.jpg'
import MainImage5 from '../../images/main_fifth_image.jpg'
function Header({location}) {
	const {totalPrice, totalCount} = useSelector(({cart}) => cart)
	const ifMainPage = location.pathname === '/'

	return (
		<div className="header">
			<div className="header__wrapper">
			{/* {ifMainPage ? <HeaderContacts/> : ''} */}
			<div className="header__container">
				<Logo image={logoSVG} title='Ресторан' subtitle='італійської кухні'/>
				<Navbar/>
				<div className="header__cart">
					<Link to='/cart'>
						<Button className="button__solid" dark>
						<span>{totalPrice}</span><FontAwesomeIcon icon={faHryvnia}/>
						<div className="button__delimiter"></div>
						<FontAwesomeIcon icon={faShoppingBasket}/>
						<span>{totalCount}</span>
						</Button>
					</Link>
				</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Header)
