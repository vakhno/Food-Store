import React from 'react'
import './Footer.sass'
import {Map} from '../index'
import {withScriptjs, withGoogleMap} from 'react-google-maps'
import {ReservationCard} from '../index'

function Footer() {
	const key = 'AIzaSyDHsBvb0Wq3AaQV-vYjxdeSM_16enhTrTk'
	const WrappedMap = withScriptjs(withGoogleMap(Map))
	
	return (
		<div className='footer'>
			<div className="footer__map">
				<WrappedMap 
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
					loadingElement={<div style={{ height: '100%', width: '100%' }}></div>}
					containerElement={<div style={{ height: '100%', width: '100%' }}></div>}
					mapElement={<div style={{ height: '100%', width: '100%' }}></div>}
					// dataForMarkers={''}
				/>
				<ReservationCard dark/>
			</div>
			<div className="footer__info">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eaque molestiae nesciunt facilis illo iure in sed adipisci sunt repellat enim vitae possimus quisquam explicabo? Error impedit quasi nostrum unde.
			Temporibus illo tenetur aut cupiditate eos, illum labore voluptate neque molestiae fuga inventore eveniet eaque adipisci modi minima ipsum distinctio dignissimos, at officia explicabo harum libero tempora facilis amet. Enim?
			Dolore dolorum nam aliquam sit recusandae et aut quis, tempora consequuntur ipsa, omnis eos doloremque impedit ratione libero, odio fugit alias vel optio laudantium error? Iusto at aspernatur vero praesentium!
			</div>
		</div>
	)
}

export default Footer
