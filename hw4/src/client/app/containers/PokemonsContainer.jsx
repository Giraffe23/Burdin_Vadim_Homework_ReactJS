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
		.then(pokemons => {
			this.setState({
				loading: false,
				pokemons
			});
		});
	
	}

	render() {
		const { loading, response, pokemons } = this.state;
		return (
		  <div>
			{ loading ? 'Идет загрузка' : <PokemonsList pokemons={pokemons}/> }
		  </div>
		);
	}
}