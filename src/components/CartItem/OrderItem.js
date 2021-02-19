import React from 'react'
// styles
import './CartItem.sass'

function OrderItem({ name, category, image, toggle1, toggle2, count, price }) {
console.log(toggle1, toggle2)
	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img className="pizza-block__image" src={image} alt="Фото обранної страви"/>
			</div>
			<div className="cart__item-info">
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
			<div className="cart__item-count">
				<b>{count}</b>
			</div>
			<div className="cart__item-price">
				<b>{price} ₴</b>
			</div>	
		</div>
	)
}
export default OrderItem
