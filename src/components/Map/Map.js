import React from 'react'
import mapStyle from './MapStyle'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import iconMarker from '../../images/map-marker.svg'

function Map() {
	const mapInfo = {
		mapCenter: {
			lat: 46.48412,
			lng: 30.738760
		},
		defaultZoom: 14,
		selectedMarker: null,
	}
	const restarauntMarker=[{lat: 46.48452, lng: 30.73689}]


	return (
		<GoogleMap
			defaultZoom={mapInfo.defaultZoom}
			defaultCenter={mapInfo.mapCenter}
			defaultOptions={{styles: mapStyle}}
		>
			{
				restarauntMarker.map( (coord, index) => {
				return	<Marker
							key={index}
							position={{lat: coord.lat, lng: coord.lng}}
							icon={{url: iconMarker}}
						/>
				})
			}
		</GoogleMap>
	)
}

export default Map
