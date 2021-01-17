import React from 'react'
import './HeaderContacts.sass'
import Phone from '../../images/phone.svg'
import Location from '../../images/pin.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTripadvisor} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

function HeaderContacts() {
	const socialLinks = [
		{
			image: <FontAwesomeIcon icon={faTwitter}/>,
			url: 'https://twitter.com/?lang=ua',
			alt: 'Twitter',
		},
		{
			image: <FontAwesomeIcon icon={faInstagram}/>,
			url: 'https://www.instagram.com/?hl=ua',
			alt: 'Instagram',
		},
		{
			image: <FontAwesomeIcon icon={faTripadvisor}/>,
			url: 'https://www.tripadvisor.com/',
			alt: 'Tripadvisor',
		},
		{
			image: <FontAwesomeIcon icon={faFacebook}/>,
			url: 'https://uk-ua.facebook.com/',
			alt: 'Facebook',
		},
	]

	return (
		<div className="header-contacts">
			<div className="header-contacts__locations">
				<div className="header-contacts__location">
					<FontAwesomeIcon className="header-contacts__logo" icon={faMapMarkerAlt}/>
					<div className="header-contacts__title">Одеса, вул. Дерибасівська, 99</div>
				</div>
				<div className="header-contacts__location">
					<FontAwesomeIcon className="header-contacts__logo fa-rotate-90" icon={faPhone}/>
					<div className="header-contacts__title">+095 34 56 789</div>
				</div>
			</div>
			<div className="header-contacts__social">
				{
					socialLinks.map( socialLink => {
						return <a href={socialLink.url} className='header-contacts__social-link' key={socialLink.alt}> 
									{socialLink.image}
								</a>
					})
				}
			</div>
		</div>
	)
}

export default HeaderContacts
