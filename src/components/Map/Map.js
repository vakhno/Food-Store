import React from 'react'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'

function Map() {
	const mapInfo = {
		key: 'AIzaSyDHsBvb0Wq3AaQV-vYjxdeSM_16enhTrTk',
		mapCenter: {
			lat: 48.125835,
			lng: 31.740809
		},
		defaultZoom: 4,
		selectedMarker: null,
	}
	return (
		<GoogleMap
		defaultZoom={mapInfo.defaultZoom}
		defaultCenter={mapInfo.mapCenter}
		>
			{/* {this.getMarkers()} */}
		</GoogleMap>
	)
}

export default Map
