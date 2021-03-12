import React, {useState, useEffect} from 'react'
// styles
import './Header.sass'
// router
import {Link, withRouter} from 'react-router-dom'
// components
import {Navbar, Logo, BasketButton} from '../../components'
// visual content
import logoSVG from '../../images/logo2.svg'
// burger menu icons
import {ReactComponent as CloseMenu} from '../../images/closeMenuIcon.svg'
import {ReactComponent as OpenMenu} from '../../images/openMenuIcon.svg'

function Header() {
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
				<Link to='/cart'>
					<BasketButton/>
				</Link>
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
