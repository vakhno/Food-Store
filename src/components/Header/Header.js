import React, {useState, useEffect} from 'react'
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
// burger menu icons
import {ReactComponent as CloseMenu} from '../../images/closeMenuIcon.svg'
import {ReactComponent as OpenMenu} from '../../images/openMenuIcon.svg'

function Header() {
	const {totalPrice, totalCount} = useSelector(({cart}) => cart)
	const [desktopResolution, setDesktopResolution] = useState(null)
	const [menuStatus, setMenuStatus] = useState(false)

	const checkWindowWidth = () => {
		if(window.innerWidth <= 920){
			setDesktopResolution(false)
		}else{
			setDesktopResolution(true)
			setMenuStatus(false)
		}
	}

	const checkClickOutMenuArea = (e) =>{
		if(menuStatus && (!e.target.classList.contains('burger') || !e.target.classList.contains('navbar--mobile'))){
			setMenuStatus(false)
		}
	}

	const closeMenuClick = () => {
		setMenuStatus(false)
	}

	useEffect(() => {
		checkWindowWidth()
		
		window.addEventListener('click', checkClickOutMenuArea );

        return () => {
            window.removeEventListener('click', checkClickOutMenuArea );
        } 
	})

	window.addEventListener('resize', checkWindowWidth)
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__logo">
					<Logo image={logoSVG} title={`${desktopResolution ? 'PASTA & PIZZA' : ''}`} subtitle={`${desktopResolution ? 'італійська кухня' : ''}`}/>
				</div>
				<Navbar desktopResolution={desktopResolution} menuStatus={menuStatus} closeMenuClick={closeMenuClick}/>
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
				{
					!desktopResolution &&
					<div className="burger">
						{
							menuStatus ? <CloseMenu className="burger__icon" onClick={() => setMenuStatus(false)}/> : <OpenMenu className="burger__icon" onClick={() => setMenuStatus(true)}/>
						}
					</div>
				}
			</div>
		</div>
	)
}

export default withRouter(Header)
