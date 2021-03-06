import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'

function Portal({children}) {
	let portalElement = document.createElement('div')
	
	useEffect(() => {
		document.body.appendChild(portalElement)

		return () => {
			document.body.appendChild(portalElement)
		}
	}, [portalElement])

	return (
		ReactDOM.createPortal(children, portalElement)
	)
}

export default Portal