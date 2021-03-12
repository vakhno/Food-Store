import React from 'react'
// styles
import './OrderItem.sass'

function OrderItem({ name, category, image, toggle1, toggle2, count, price }) {
	return (
		<div className="order-item">
			<div className="order-item__image">
				<img src={image} alt="Фото обранної страви"/>
			</div>
			<div className="order-item__info">
				<h3>{name}</h3>
				{
					category === 'pizza' ?
						<>
							<p>{toggle1} тісто, {toggle2} см.</p>
						</>
					: category === 'drink' ?
						<>
							<p>об'єм {toggle1} л.</p>
						</>
					: null
				}
			</div>
			<div className="order-item__quantity-dishes">
				{count}
			</div>
			<div className="order-item__price">
				{price} ₴
			</div>	
		</div>
	)
}
export default OrderItem
