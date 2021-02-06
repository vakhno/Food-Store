import React from 'react'
// styles
import './Quote.sass'
// components
import {Title} from '../../../components'
// visual content
import Signature from '../../../images/signature.svg'

function Quote() {
	return (
		<div className='quote'>
			<div className="quote__wrapper">
				<Title className='quote__title' title='кулінарія - як любов: в неї або потрібно зануритися з головою, або взагалі не занурюватись' subtitle='Гаррієнт Ванх Хорн' light/>
				<img src={Signature} alt="Підпис автора цитати" className='quote__signature' />	
			</div>
		</div>
	)
}

export default Quote
