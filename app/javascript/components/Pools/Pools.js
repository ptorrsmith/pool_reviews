import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import PoolsListItem from './PoolsListItem'

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
		// .then( resp => console.log(resp) )
		.then( resp => {
			setPools(resp.data.data)
		} )
		.catch( resp => console.log(resp) )
	}, [pools.length])

	const grid = pools.map( item => {
	return (
		<PoolsListItem
			key={item.attributes.name}
			attributes={item.attributes}
		/>)
	})

	return (
		// <Fragment>  // use a div for now
		<div className="home">
			<div className='header'>
				<h1>Pool Reviews</h1>
				<div className="subheader">Find a good place to swim</div>
			</div>
			<div className="grid">
				{grid}
			</div>
		</div>
		// </Fragment>

	)

}



export default Pools