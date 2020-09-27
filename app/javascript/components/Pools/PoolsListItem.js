import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const PoolsListItem = (props) => {
	return (
		<div className="card">
			<div className="pool-logo">
				<img src={props.attributes.image_url} alt={props.attributes.name} />
			</div>
			<div className="pool-name">{props.attributes.name}</div>
			<div className="pool-score">{props.attributes.avg_score}</div>
			<div className="pool-link">
				{/* <a href={`/pools/${props.attributes.slug}`}>View {props.attributes.name}</a> */}
				<Link to={`/pools/${props.attributes.slug}`}>View {props.attributes.name}</Link>
			</div>
		</div>
	)
}

export default PoolsListItem