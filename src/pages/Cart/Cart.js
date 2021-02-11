import React from 'react'
// styles
import './Cart.sass'
// components
import {Button, Title, CartItem} from '../../components'
// redux
import {clearCart, removeCartItem, plusCartItem, minusCartItem} from '../../redux/actions/cart'
import {useSelector, useDispatch} from 'react-redux'
// router
import {Link} from 'react-router-dom'
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
// visual content
import Basket from '../../images/basket.svg'

function Cart() {
	const {totalPrice, totalCount, items } = useSelector( ({cart}) => cart)
	const addedDishes = Object.values(items).map( dish => Object.values(dish).map( elem => Object.values(elem).map(elem => elem ) ) ) 	
	const dispatch = useDispatch()

	const onClearCart = () => {
		if(window.confirm('Очистить корзину')){
			dispatch(clearCart())
		}
	}

	const onRemoveCartItem = (id) => {
		if(window.confirm('Удалить?')){
			dispatch(removeCartItem(id))
		}
	}

	const onPlusCartItem = (id) => {
		dispatch(plusCartItem(id))
	}

	const onMinusCartItem = (id) => {
		dispatch(minusCartItem(id))
	}

	return (
		<div className="cart">
			<div className="cart__container">
				{
					totalCount ? 
					<div className="cart__content">
						<div className="cart__top-info">
							<h2 className="cart__title">
								<FontAwesomeIcon icon={faShoppingBasket}/>
								Кошик
							</h2>
							<Button className="cart__clear-button" solid light onClick={onClearCart}>
								<FontAwesomeIcon icon={faTrashAlt}/>
								Очистити кошик
							</Button>
						</div>
						<div className="cart__list">
							{
								addedDishes.map(elem => elem.map( (elem) => <CartItem id={elem[0].id} categoryId={elem[0].categoryId} name={elem[0].name} image={elem[0].imageUrl} type={elem[0].type} size={elem[0].size} count={elem.length} price={elem[0].price * elem.length} removeDish={onRemoveCartItem} plusCartItem={onPlusCartItem} minusCartItem={onMinusCartItem} ></CartItem> ))
							}
						</div>
						<div className="cart__bottom-info">
							<div className="cart__details">
								<span> Всього страв: <b>{totalCount} шт.</b> </span>
								<span> Сума замовлення: <b>{totalPrice} ₴</b> </span>
							</div>
							<div className="cart__order-buttons">
								<Link to="/dishes" className="button__back-button">
									<Button solid light>
										<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
										До меню
									</Button>
								</Link>
								<Link to="/order">
									<Button className='cart__pay-button' solid light>Сплатити зараз</Button>
								</Link>
							</div>
						</div>
					</div>
					:
					<div className="cart-empty">
						<Title className='cart-empty__title' title='Кошик пустий' subtitle='Вірогідно всього, ви ще не обрали бажані страви. Для того, щоб замовити страви, перейдіть на сторінку "Меню"' light/>
						<img className='cart-empty__image' src={Basket} alt="Empty cart" />
						<Link to="/dishes">
							<Button className='cart-empty__image' solid light>Перейти до меню</Button>
						</Link>
					</div>
				}
			</div>
		</div>
	)
}

export default Cart
