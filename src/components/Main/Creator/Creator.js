import React from 'react'
import './Creator.sass'
import {Link} from 'react-router-dom'
import {Button} from '../../../components'
import Chef from '../../../images/chef.png'

function Creator({paragraphs, name, position}) {
	return (
		<div className="creator">
			<div className="creator__content">
				<div className="creator__image">
					<img src={Chef} alt=""/>
				</div>
				<div className="creator__description">
					{
						paragraphs.map( (paragraph, index) => {
							return index !== 0 ? <p className="creator__subtitle">{paragraph}</p> : <p className="creator__title">{paragraph}</p>
						})
					}
					<div className="creator__subtitle--accent">{name}</div>
					<div className="creator__subtitle">{position}</div>
					<Link>
						<Button className="creator__button" skeleton dark>перейти до меню</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Creator
