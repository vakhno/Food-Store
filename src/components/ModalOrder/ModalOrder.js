import React from 'react'
// styles
import './ModalOrder.sass'
// components
import {Portal, Title, Button} from '../../components/'

function ModalOrder({isOpen, onClose, data}) {
	return (
		<>
			{
				isOpen &&
				<Portal>
					<div className='sub-window'>
						<div className="sub-window__content">
							<Title title={`Дякуємо ${data.name}!`} subtitle='найближчим часом ми з вами зв`яжемось' dark/>
							<Button onClick={onClose} solid dark>закрити</Button>
						</div>
					</div>
				</Portal>
			}
		</>
	)
}

export default ModalOrder
