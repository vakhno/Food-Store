import React from 'react'
import './Quote.sass'
import {Title} from '../../../components'
import Signature from '../../../images/signature.svg'

function Quote({title, subtitle}) {
	return (
		<div className='quote'>
			<Title className='quote__title' title={title} subtitle={subtitle} light/>
			<img src={Signature} alt="chef-signature" className='quote__signature' />	
		</div>
	)
}

export default Quote
