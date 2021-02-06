import React from 'react'
// map content
import Map from './Map'
import {withScriptjs, withGoogleMap} from 'react-google-maps'

function WrappedMap() {
	const key = 'AIzaSyDHsBvb0Wq3AaQV-vYjxdeSM_16enhTrTk'
	const FinalMap = withScriptjs(withGoogleMap(Map))

	return (
		<FinalMap
			googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
			loadingElement={<div style={{ height: '100%', width: '100%' }}></div>}
			containerElement={<div style={{ height: '100%', width: '100%' }}></div>}
			mapElement={<div style={{ height: '100%', width: '100%' }}></div>}
		/>
	)
}

export default WrappedMap
