import React from 'react'
import './Quote.sass'
import {Title} from '../../../components'
import Signature from '../../../images/signature.svg'

function Quote() {

	return (
		<div className='quote'>
			<Title className='quote__title' title='кулінарія - як любов: в неї або потрібно зануритися з головою, або взагалі не занурюватись' subtitle='Гаррієнт Ванх Хорн' light/>
			<img src={Signature} alt="chef-signature" className='quote__signature' />	
		</div>
	)
}

export default Quote
