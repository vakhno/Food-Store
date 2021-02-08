import React from 'react'
// styles
import './ModalReservationCart.sass'
// components
import {Portal, Button, Title} from '../index'

function ModalReservationCart({isOpen, onClose}) {
	const check = () => {
		console.log(1111111)
	}
	return (
		
		<>
			{
				isOpen &&
				{check} 
				&&
				<Portal>
					<div className='sub-window'>
						<div className="sub-window__content">
							<Title title='Дякуємо' subtitle='найближчим часом ми з вами зв`яжемось' dark/>
							<Button onClick={onClose} solid dark>закрити</Button>
						</div>
					</div>
				</Portal>
			}
		</>
	)
}

export default ModalReservationCart
