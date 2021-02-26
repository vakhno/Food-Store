import React from 'react'
// styles
import './Delivery.sass'
// components
import {Map, Title, FeatureItem} from '../../../components/'
// visual content
import {ReactComponent as Clock} from '../../../images/delivery-clock.svg'
import {ReactComponent as Deliveryman} from '../../../images/delivery-deliveryman.svg'
import {ReactComponent as Package} from '../../../images/delivery-package.svg'
import {ReactComponent as CreditCard} from '../../../images/delivery-credit-card.svg'

function Delivery() {
	const featureItems = [
		{
			icon: <Package/>,
			title: 'Упаковка',
			subtitle: 'При доставці використовуємо термо-сумки, щоб ваші страви залишались теплими'
		},
		{
			icon: <Clock/>,
			title: 'Замовлення',
			subtitle: 'Приймаємо замовлення з 9:00 до 22:00'
		},
		{
			icon: <Deliveryman/>,
			title: 'Доставка',
			subtitle: 'Можемо доставити замовлення до будь-якого куточку Одеси'
		},
		{
			icon: <CreditCard/>,
			title: 'Оплата',
			subtitle: 'Оплата може здійснюватись як готівкою, так і безготівковими способами'
		}
	]

	return (
		<div className="delivery">
			<div className="delivery__map">
				<Map />
			</div>
			<div className="delivery__content">
				<Title className="delivery__title" title='Доставка' subtitle='швидка та якіска доставка' light/>
				<div className="delivery__features">
					{
						featureItems.map( (elem, index) => {
							return <FeatureItem icon={elem.icon} title={elem.title} subtitle={elem.subtitle} key={`${elem.title}_${index}`}/>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Delivery
