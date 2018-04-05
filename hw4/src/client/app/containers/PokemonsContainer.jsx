import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonsList from '../components/PokemonsList';

export default class PokemonsContainer extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			pokemons: [],
			loading: false
		};
	}

	componentWillMount() {
		this.setState({
			loading: true
		});

		fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
		.then(response => response.json())
		.then(response => response = response.results)
		.then(response => {
			this.setState({
				loading: false,
				response
			});
		});
	
	}

	render() {
		const { loading, response } = this.state;
		return (
		  <div>
			{ loading ? 'Идет загрузка' : <PokemonsList pokemons={response}/> }
		  </div>
		);
	}
}