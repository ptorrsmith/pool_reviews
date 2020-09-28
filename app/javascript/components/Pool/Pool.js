import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import Review from './Review'

const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
	background: white;
	height: 100vh;
	overflow: scroll;

	&:last-child {
		background: #000;
	}
`

const Main = styled.div`
	padding-left: 50px;
`



const Pool = (props) => {
	const [pool, setPool] = useState({})
	const [review, setReview] = useState({})
	const [loaded, setLoaded] = useState(false)

	useEffect( () => {
		// console.log(props) // here we find slug is in match params
		const slug = props.match.params.slug
		// api/v1/pools/freyberg-pool-33m
		// pools/freyberg-pool-33m
		const url = `/api/v1/pools/${slug}`
		axios.get(url)
		// .then( resp => console.log(resp) )
		.then( resp => {
			setPool(resp.data)
			setLoaded(true)
		} )
		.catch( resp => console.log(resp) )

	}, []	)

	const handleChange = (e) => {
		e.preventDefault()
		// console.log('name: ', e.target.name, 'value: ', e.target.value)
		const new_review = Object.assign({}, review, {[e.target.name]: e.target.value})
		// debugger
		setReview(new_review) // this returns new object based on review with target name/value applied

		console.log('review', review, 'new_review', new_review)


	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// submit review to api/v1/pools/pool_id

		const csrfToken = document.querySelector('[name=csrf-token]').content
		axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

		const pool_id = pool.data.id
		axios.post('/api/v1/reviews', {review, pool_id})
		.then( resp => {
			// console.log(resp)
			// debugger
			// add new (updated?) review to our reviews array so not need to do another api call
			// so will add to pool.reviews

			const included = [...pool.included, resp.data.data]
			// console.log('included: ', included)
			setPool({...pool, included})
			// debugger
			setReview({title: '', description: '', score: 0})
			// debugger


		})
		.catch( resp => console.log(resp))

	}

	const setRating = (score, e) => {
		e.preventDefault()

		// debugger

		setReview({...review, score})

	}

	// THE following fails because trying to interate over inclued before actually loaded (and has content)
	// const reviews = pool.included.map( (item, index) => {
	// 	return (
	// 		<Review
	// 			key={index}
	// 			attributes={item.attributes}
	// 		/>
	// 	)
	// })

	let reviews
		if (loaded && pool.included) {
			reviews = pool.included.map( (item, index) => {
				// console.log('mapping: ', item)
				return (
					<Review
						key={index}
						attributes={item.attributes}
					/>
				)
			})
		}
	// return <div>This is the Pools#show view for our app</div>
	return (
		<Wrapper>
			{ // the loaded && is to not render until loaded is set to true, after api call and set state
				loaded &&
				<Fragment>
					<Column>
						<Main>
								<Header
									attributes={pool.data.attributes}
									reviews={pool.included}
								/>
							{/* <div className="reviews">[reviews]</div> */}
							{reviews}
						</Main>
					</Column>
					<Column>
						<ReviewForm
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							attributes={pool.data.attributes}
							review={review}
							setRating={setRating}
						/>
					</Column>
				</Fragment>
			}
		</Wrapper>
	)
}

export default Pool