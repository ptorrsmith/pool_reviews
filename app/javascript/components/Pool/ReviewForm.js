import React, {Fragment} from 'react'
import styled from 'styled-components'
// import Header from './Header'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'


const RatingContainer = styled.div`
	text-align: center;
	border-radius: 4px;
	font-size: 20px;
	padding: 40px 0 10px 0;
	border: 1px solid #e6e6e6;
	margin: 20px 0;
	padding: 20px;
	background: #fff;
`

const RatingTitleText = styled.div`
	// background: white;
	font-size: 20px;
	padding-bottom: 20px;
	font-weight: bold;

`

const RatingBox = styled.div`
	background: white;
	display: flex;
	justify-content: center;
	flex-direction: row-reverse;
	position: relative;
	margin-top:12px;

	input {
		display: none;
	}

	label {
		cursor: pointer;
		width: 40px;
		height: 40px;
		background-image: url("data:image/svg+xml;charset=UTF8, ${Gray}");
		background-repeat: no-repeat;
		background-position: center;
		background-size: 70%;

	}

	input:checked ~ label, input:checked ~ label ~ label {
		background-image: url("data:image/svg+xml;charset=UTF8, ${Selected}");
	}

	input:not(:checked) ~ label:hover, input:checked:hover ~ label ~ label {
		background-image: url("data:image/svg+xml;charset=UTF8, ${Hover}");
	}
	`


const Field =styled.div`
	border-radius: 4px;

	input {
		width: 95%;
		min-height: 30px;
		border-radius: 4px;
		border: 1px solid #e6e6e6;
		margin: 0 0 12px 0;
		padding: 12px;
	}

	textarea {
		width: 100%;
		min-height: 180px;
		border-radius: 4px;
		border: 1px solid #e6e6e6;
		margin: 12px 0;
		padding: 12px;
	}

`

const Wrapper =styled.div`
	background: #000;
	padding: 20px;
	height: 100vh;
	padding-top: 100px;
`

const SubmitBtn =styled.button`
	color: #eee	;
	background: #55bb33;
	width: 100%;
	padding: 20px;
	padding: 12px;
	font-size: 18px;
	cursor: pointer;
	transition: ease-in-out 0.1s;
	border: 1px solid #fff;
	border-radius: 4px;

	&:hover {
		background: #fff;
		color: #000;
		border: 1px solid #fff;
	}

`

const Headline = styled.div`
	padding: 20px;
	text-align: center;
	font-size: 23px;
	font-weight: bold;
	color: #fff;
	// border: 1px solid black;
`






const ReviewForm = (props) => {

	const ratingOptions = [5,4,3,2, 1].map( (score, index) => {
		return (
			<Fragment key={score}>
				<input type='radio' value={score} checked={props.review.score == score} name="rating" onChange={ () => console.log('selected:', score)} id={`rating-${score}`} />
				<label onClick={props.setRating.bind(this, score)}></label>
			</Fragment>
		)
	})

	return (
		<Wrapper>
			<form onSubmit={props.handleSubmit}>
			<Headline>Been to {props.attributes.name}? Share your review.</Headline>
				{/* <Field>
					<input type='text' name='title' placeholder='Review title' value={props.review.name} onChange={props.handleChange} />
				</Field> */}
				<Field>
					<input type='text' name='title' placeholder='title...' value={props.review.title} onChange={props.handleChange} />
				</Field>
				<Field>
					<input type='text' name='description' placeholder='Your review...' value={props.review.description} onChange={props.handleChange} />
				</Field>
				<Field>
					<RatingContainer>
						<RatingTitleText>Rate this pool</RatingTitleText>
						<RatingBox>
							{ratingOptions}
						</RatingBox>
					</RatingContainer>
				</Field>
				<SubmitBtn type="submit">Submit review</SubmitBtn>
			</form>


		</Wrapper>
	)

}

export default ReviewForm
