import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
	border: 1px solid #efefef;
	background: #fff;
	text-align: center;
`

const PoolLogo = styled.div`
	width: 50px;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	padding-top: 10px;

	img {
		height: 50px;
		width: 50px;
		border-radius: 100%;
		border: 1px solid #efefef
	}
`

const PoolName = styled.div`
	padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
	margin: 30px 0 20px 0;
	height: 50px;

	a {
		color: darkblue;
		background: lightblue;
		border-radius: 8px;
		padding: 10px 50px;
		border: 1px solid blue;
		width: 100%;
		text-decoration: none;
	}
`


const PoolsListItem = (props) => {
	return (
		<Card>
			<PoolLogo>
				<img src={props.attributes.image_url} alt={props.attributes.name} />
			</PoolLogo>
			<PoolName>{props.attributes.name}</PoolName>
			<Rating score={props.attributes.avg_score} />

			{/* <div className="pool-score">{props.attributes.avg_score}</div> */}
			<LinkWrapper>
				{/* <a href={`/pools/${props.attributes.slug}`}>View {props.attributes.name}</a> */}
				<Link to={`/pools/${props.attributes.slug}`}>View pool</Link>
			</LinkWrapper>
		</Card>
	)
}

export default PoolsListItem