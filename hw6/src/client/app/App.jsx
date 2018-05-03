import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';


import PokemonsList from './containers/PokemonsContainer';
import Details from './containers/DetailsContainer';

export default class App extends Component {

	render() {

		return (
			<div>
				<Switch>
					<Route exact path="/" component={PokemonsList} />
					<Route path="/details/:id" component={Details} />
				</Switch>
			</div>
		);
	}
}

