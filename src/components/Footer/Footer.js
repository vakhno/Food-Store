import React from 'react'
import {Map} from '../index'
import {withScriptjs, withGoogleMap} from 'react-google-maps'

const WrapperMap = withScriptjs(withGoogleMap(Map))

function Footer() {
	const key = 'AIzaSyDHsBvb0Wq3AaQV-vYjxdeSM_16enhTrTk'

	return (
		<div className='footer'>
			<div className="footer__map">
				<WrapperMap 
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
					loadingElement={<div style={{ height: '300px' }}></div>}
					containerElement={<div style={{ height: '300px' }}></div>}
					mapElement={<div style={{ height: '300px' }}></div>}
					// dataForMarkers={this.state.data.devices}
				/>
			</div>
			<div className="footer__info">

			</div>
		</div>
	)
}

export default Footer
