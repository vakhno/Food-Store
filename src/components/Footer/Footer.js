import React from 'react'
// styles
import './Footer.sass'
// visual content
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTripadvisor} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	const info = [
		{
			title: 'Наша адреса',
			type: 'text',
			data: [
				{
					image: <FontAwesomeIcon icon={faMapMarkerAlt}/>,
					text: 'Одеса, вул. Дерибасівська, 18'
				},
				{
					image: <FontAwesomeIcon icon={faMapMarkerAlt}/>,
					text: 'Одеса, вул. Академіка Філатова, 31'
				},
			]
		},
		{
			title: 'Наші сторінки',
			type: 'link',
			data: [
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
		},
		{
			title: 'Наші контакти',
			type: 'text',
			data: [
				{
					image: <FontAwesomeIcon icon={faPhone}/>,
					text: '094 863 68 87'
				},
				{
					image: <FontAwesomeIcon icon={faPhone}/>,
					text: '095 576 51 51'
				},
				{
					image: <FontAwesomeIcon icon={faGoogle}/>,
					text: 'pizza@gmail.com'
				}
			]
		}
	]

	return (
		<div className='footer'>
			<div className="footer__info">
				<div className="footer__about">
					{info.map( (block, index) => {
						return	<div className="footer__about-block" key={index}>
									<div className="footer__about-block-title">{block.title}</div>
									<div className="footer__about-block-data">
										{
											block.type === 'link' ?  
												block.data.map( (link, index) => {
													return	<a className='footer__about-block-data-social-link' href={link.url} key={`${link.alt}_${index}`}> 
																{link.image}
															</a>
												})
											:
												block.data.map( (info, index) => {
													return <div className='footer__about-block-data-info' key={index}>{info.text}</div>
												})
										}
									</div>
								</div>
					})}
				</div>
			</div>
			<div className="footer__co">
				Copyright ©2021 created by Vakhno
			</div>
		</div>
	)
}

export default Footer
