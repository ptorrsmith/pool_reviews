import React, { useState, useEffect } from 'react'
import axios from 'axios'

// stateless component
// const Pools = () => {
// return <div>This is the Pools#index view for our app</div>
// }
const Pools = () => {
	const [pools, setPools] = useState([])

	useEffect( () => {
		// get all our pools from the api
		// update pools in our state
		// use Axios  yarn add axios

		axios.get('/api/v1/pools.json')
		.then( resp => console.log(resp) )
		.catch( resp => console.log(resp) )
	}, [pools.length])

	return (
		<div>This is the Pools#index view for our app.</div>
	)

}



export default Pools