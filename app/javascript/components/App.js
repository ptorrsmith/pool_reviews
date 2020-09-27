import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Pools from './Pools/Pools'
import Pool from './Pool/Pool'

const App = () => {

	// return (<div>Hi folks!</div>)
	return (
		<Switch>
			<Route exact path="/" component={Pools}/>
			<Route exact path="/pools/:slug" component={Pool} />
		</Switch>
	)

}

export default App