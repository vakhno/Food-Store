import React, {useEffect, useState, memo} from 'react'
// google-map
import { GoogleMap, Marker, Polygon, withScriptjs, withGoogleMap } from 'react-google-maps'
// area style
import mapStyle from './MapStyle'
// marker
import iconRestaurant from '../../images/restaurant-marker.svg'
import iconDestination from '../../images/destination-marker.svg'
// axios
import axios from 'axios'
// prop-types
import PropTypes from 'prop-types'

function Map({className, address}) {
	const key = 'AIzaSyDHsBvb0Wq3AaQV-vYjxdeSM_16enhTrTk'
	let baseURL = `https://maps.googleapis.com/maps/api/geocode/json?key=`
	const [deliveryPlace, setDeliveryPlace] = useState({lat: 0, lng: 0})
	const mapInfo = {
		mapCenter: {
			lat: 46.45412,
			lng: 30.738760
		},
		defaultZoom: 10,
		selectedMarker: null,
	}
	const restaurantMarker=[
		{
			lat: 46.48437, 
			lng: 30.73685,
		}, 
		{
			lat: 46.43718, 
			lng: 30.71541,
		},
	]


	const deliveryArea = [
		{ lat: 30.727317, lng: 46.370594}, 
		{ lat: 30.725429, lng: 46.377582}, 
		{ lat: 30.721652, lng: 46.374976}, 
		{ lat: 30.718390, lng: 46.377463}, 
		{ lat: 30.713241, lng: 46.373792}, 
		{ lat: 30.711696, lng: 46.374621}, 
		{ lat: 30.707232, lng: 46.374384}, 
		{ lat: 30.705344, lng: 46.375805}, 
		{ lat: 30.703456, lng: 46.374147}, 
		{ lat: 30.702598, lng: 46.374739}, 
		{ lat: 30.703799, lng: 46.380068}, 
		{ lat: 30.709292, lng: 46.381134}, 
		{ lat: 30.709292, lng: 46.381726}, 
		{ lat: 30.711352, lng: 46.381490}, 
		{ lat: 30.713069, lng: 46.382555}, 
		{ lat: 30.715301, lng: 46.383266}, 
		{ lat: 30.713584, lng: 46.387354}, 
		{ lat: 30.715987, lng: 46.394458}, 
		{ lat: 30.712382, lng: 46.407243}, 
		{ lat: 30.718734, lng: 46.408190}, 
		{ lat: 30.719592, lng: 46.406296}, 
		{ lat: 30.721137, lng: 46.406533}, 
		{ lat: 30.719764, lng: 46.411978}, 
		{ lat: 30.721309, lng: 46.415765}, 
		{ lat: 30.697448, lng: 46.427362}, 
		{ lat: 30.694529, lng: 46.430911}, 
		{ lat: 30.704658, lng: 46.441558}, 
		{ lat: 30.694015, lng: 46.446999}, 
		{ lat: 30.682942, lng: 46.451494}, 
		{ lat: 30.682199, lng: 46.457185}, 
		{ lat: 30.688722, lng: 46.459993}, 
		{ lat: 30.691796, lng: 46.460639}, 
		{ lat: 30.706387, lng: 46.460934}, 
		{ lat: 30.706558, lng: 46.469861}, 
		{ lat: 30.705443, lng: 46.473053}, 
		{ lat: 30.708018, lng: 46.480264}, 
		{ lat: 30.708962, lng: 46.485583}, 
		{ lat: 30.712652, lng: 46.489425}, 
		{ lat: 30.714197, lng: 46.492793}, 
		{ lat: 30.717030, lng: 46.495747}, 
		{ lat: 30.718918, lng: 46.497224}, 
		{ lat: 30.723124, lng: 46.497165}, 
		{ lat: 30.732394, lng: 46.493325}, 
		{ lat: 30.734711, lng: 46.492025}, 
		{ lat: 30.737286, lng: 46.491079}, 
		{ lat: 30.738573, lng: 46.491493}, 
		{ lat: 30.741406, lng: 46.490134}, 
		{ lat: 30.746899, lng: 46.485201}, 
		{ lat: 30.746512, lng: 46.484581}, 
		{ lat: 30.747370, lng: 46.483606}, 
		{ lat: 30.748786, lng: 46.483458}, 
		{ lat: 30.748915, lng: 46.483636}, 
		{ lat: 30.750846, lng: 46.483399}, 
		{ lat: 30.749301, lng: 46.473440}, 
		{ lat: 30.753979, lng: 46.473026}, 
		{ lat: 30.752649, lng: 46.467676}, 
		{ lat: 30.756483, lng: 46.459383}, 
		{ lat: 30.759034, lng: 46.457231}, 
		{ lat: 30.764398, lng: 46.445197}, 
		{ lat: 30.765471, lng: 46.442861}, 
		{ lat: 30.760836, lng: 46.440731}, 
		{ lat: 30.757575, lng: 46.440495}, 
		{ lat: 30.757060, lng: 46.438484}, 
		{ lat: 30.760836, lng: 46.432095}, 
		{ lat: 30.761866, lng: 46.429729}, 
		{ lat: 30.763326, lng: 46.428930}, 
		{ lat: 30.765729, lng: 46.427658}, 
		{ lat: 30.762467, lng: 46.425854}, 
		{ lat: 30.760665, lng: 46.423902}, 
		{ lat: 30.759635, lng: 46.423547}, 
		{ lat: 30.759892, lng: 46.423369}, 
		{ lat: 30.758047, lng: 46.420973}, 
		{ lat: 30.761952, lng: 46.419642}, 
		{ lat: 30.760922, lng: 46.417156}, 
		{ lat: 30.758347, lng: 46.418695}, 
		{ lat: 30.756631, lng: 46.417630}, 
		{ lat: 30.759034, lng: 46.415026}, 
		{ lat: 30.757832, lng: 46.414316}, 
		{ lat: 30.757146, lng: 46.414553}, 
		{ lat: 30.756287, lng: 46.413724}, 
		{ lat: 30.758347, lng: 46.412896}, 
		{ lat: 30.755601, lng: 46.411239}, 
		{ lat: 30.755515, lng: 46.410351}, 
		{ lat: 30.755429, lng: 46.406860}, 
		{ lat: 30.751996, lng: 46.399875}, 
		{ lat: 30.748305, lng: 46.395969}, 
		{ lat: 30.747275, lng: 46.391529}, 
		{ lat: 30.747189, lng: 46.389990}, 
		{ lat: 30.748043, lng: 46.389483}, 
		{ lat: 30.748772, lng: 46.388743}, 
		{ lat: 30.750274, lng: 46.388329}, 
		{ lat: 30.749673, lng: 46.388092}, 
		{ lat: 30.747914, lng: 46.387500}, 
		{ lat: 30.746970, lng: 46.386730}, 
		{ lat: 30.746326, lng: 46.386760}, 
		{ lat: 30.745296, lng: 46.385102}, 
		{ lat: 30.743780, lng: 46.382879}, 
		{ lat: 30.740857, lng: 46.380340}, 
		{ lat: 30.731736, lng: 46.373289}, 
		{ lat: 30.727759, lng: 46.370610},
		{ lat: 30.727317, lng: 46.370594},  
	]	
	

	useEffect(() => {
		address && axios.get(`${baseURL}${key}&address=${address}`).then( ({data}) => {
			setDeliveryPlace(prevState => ({
                ...prevState,
                lat: +data.results[0].geometry.location.lng.toFixed(5),
				lng: +data.results[0].geometry.location.lat.toFixed(5)
            }))
		}).catch( (error) =>{
			console.log(`error=${error}`)
		})
	}, [address])

	const MapComponent = withScriptjs(withGoogleMap( () =>  
			<GoogleMap
				defaultZoom={mapInfo.defaultZoom}
				defaultCenter={mapInfo.mapCenter}
				defaultOptions={{styles: mapStyle}}
			>
				{
					restaurantMarker.map( (coord, index) => {
					return	<Marker
								key={index}
								position={{lat: coord.lat, lng: coord.lng}}
								icon={{url: iconRestaurant}}
							/>
					})
				}
				{
					address && 
					<Marker
						position={{lat: deliveryPlace.lng, lng: deliveryPlace.lat}}
						icon={{url: iconDestination}}
					/>
				}
				<Polygon
					path={
						deliveryArea.map( coord => {return {lat: coord.lng, lng: coord.lat}})
					}
					options={{
						fillColor: "#fe5f1e",
						fillOpacity: 0.4,
						strokeColor: "red",
						strokeOpacity: 1,
						strokeWeight: 1
					}} 
				/>
			</GoogleMap>
	))

	return (
		<MapComponent
			googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
			loadingElement={<div style={{ height: '100%', width: '100%' }}></div>}
			containerElement={<div style={{ height: 'auto', width: '100%' }} className={className}></div>}
			mapElement={<div style={{ height: '100%', width: '100%' }}></div>}
		/>
	)
}

Map.propTypes = {
	className: PropTypes.string, 
	address: PropTypes.string.isRequired,
}

Map.defaultProps = {
	className: '', 
	address: '',
}

export default memo(Map)