import React from 'react'
import './Creator.sass'
import {Link} from 'react-router-dom'
import {Button} from '../../../components'
import Chef from '../../../images/chef.png'

function Creator() {
	const paragraphs = ['«В основі цінностей нашого ресторану лежить відданість традиціям, експериментальність і відкритість','Наше завдання - подарувати українським гурманам, надзвичайні гастрономічні відчуття традиційної італійської кухні, з доданням експериметнальних інгридієнтів.','Я радий, що можу поділитись своїм досвідом роботи у найкращих ресторанах Европи та Північної Америки, працюючи в команді надзвичайних кухарів, працюючи в команді професіоналів».'] 
	const name = 'Магнус Веттерхольм' 
	const position = 'Магнус Веттерхольм, засновник ресторану'

	return (
		<div className="creator">
			<div className="creator__content">
				<div className="creator__image">
					<img src={Chef} alt="chef-photo"/>
				</div>
				<div className="creator__description">
					{
						paragraphs.map( (paragraph, index) => {
							return <p className={index !== 0 ? "creator__subtitle" :  "creator__title"} key={index}>{paragraph}</p>
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
