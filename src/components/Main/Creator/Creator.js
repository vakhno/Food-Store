import React from 'react'
// styles
import './Creator.sass'
// router
import {Link} from 'react-router-dom'
// components
import {Button} from '../../../components'
// visual content
import Chef from '../../../images/chef.png'

function Creator() {
	const paragraphs = ['«В основі цінностей нашого ресторану лежить відданість традиціям, експериментальність і відкритість','Наше завдання - подарувати українським гурманам, надзвичайні гастрономічні відчуття традиційної італійської кухні, з доданням експериметнальних інгридієнтів.','Я радий, що можу поділитись своїм досвідом роботи у найкращих ресторанах Европи та Північної Америки, працюючи в команді надзвичайних кухарів, працюючи в команді професіоналів».'] 
	const name = 'Магнус Веттерхольм' 
	const position = 'Магнус Веттерхольм, засновник ресторану'

	return (
		<div className="creator">
			<div className="creator__wrapper">
				<div className="creator__image-wrapper">
					<img src={Chef} alt="Фото засновника ресторану"/>
				</div>
				<div className="creator__description">
					{
						paragraphs.map( (paragraph, index) => {
							return <p className={index !== 0 ? "creator__subtitle" :  "creator__title"} key={index}>{paragraph}</p>
						})
					}
					<div className="creator__subtitle--accent">{name}</div>
					<div className="creator__subtitle">{position}</div>
					<Link to='/dishes' className="creator__button">
						<Button skeleton dark>перейти до меню</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Creator
