import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	padding: 50px 100px 50px 0;

	font-size: 20px;

	img {
		height: 60px;
		width: 60px;
		border-radius: 100%;
		border: 1px solid rgba(0,0,0,0.1);
		margin-bottom: -8px;
	}

	h1 {
		// font-size: 30px;
	}
`

const TotalReviews = styled.div`
	font-size: 18px;
	padding: 10px 0;
`

const TotalOutOf = styled.div`
	font-size: 18px;
	font-weight: bold;
	padding: 10px 0;

`



const Header = (props) => {

	const {name, image_url, avg_score} = props.attributes
	const reviews = props.reviews


	return (
		<Wrapper>
			<h1><img src={image_url} alt={name} />{name}</h1>
			<div>
	<TotalReviews>{reviews.length} reviews</TotalReviews>
	<div className="starRating">TODO</div>
				<TotalOutOf>{avg_score} out of 5</TotalOutOf>
			</div>
		</Wrapper>
	)
}

export default Header