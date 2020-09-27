import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import PoolsListItem from './PoolsListItem'
import styled from 'styled-components'

const Home = styled.div`
	text-align: center;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
`

const Header = styled.div`
	padding: 100px 100px 10px 0;

	h1 {
		font-size: 42px;
	}

`

const Subheader = styled.div`
	font-weight: 300;
	font-size: 26px;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	width: 100%;
	padding: 20px;
`


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
		// .then( resp => {
		// 	setPools(resp.data.data)
		// } )
		.then( resp => setPools(resp.data.data) )
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
		<Home>
			<Header>
				<h1>Pool Reviews</h1>
				<Subheader>Find a good place to swim</Subheader>
			</Header>
			<Grid>
				{grid}
			</Grid>
		</Home>
		// </Fragment>

	)

}



export default Pools