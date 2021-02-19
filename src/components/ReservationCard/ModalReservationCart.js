import React from 'react'
// styles
import './ModalReservationCart.sass'
// components
import {Portal, Button, Title} from '../index'

function ModalReservationCart({isOpen, onClose}) {
	return (
		
		<>
			{
				isOpen &&
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
