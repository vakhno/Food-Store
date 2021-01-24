import React from 'react'
import './Quote.sass'
import {Title} from '../../../components'
import Signature from '../../../images/signature.svg'

function Quote() {

	return (
		<div className='quote'>
			<Title className='quote__title' title='перед тим, як відкрити для себе кулінарію, мене ніколи нічого не цікавило' subtitle='наш шеф-кухар Дейл Ернхардт' light/>
			<img src={Signature} alt="chef-signature" className='quote__signature' />	
		</div>
	)
}

export default Quote
