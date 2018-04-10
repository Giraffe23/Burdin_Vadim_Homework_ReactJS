import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonsList from '../components/PokemonsList';

export default class PokemonsContainer extends PureComponent {
	
	constructor(props) {
		
		super(props);

		this.state = {
			pokemons: [],
			weight: '',
			loading : false
		};
	}

	componentWillMount() {
		
		this.setState({
			loading: true
		});

		fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
		.then(response => response.json())
		.then(response => response = response.results)
		.then(pokemons => {
			this.setState({
				loading: false,
				pokemons
			});
		});	
	}
	
	handleDesc = (url) => {
		
		let { desc, pokemons, name } = this.state;
		
		this.setState({
			loading: true
		});
		
		fetch(url)
		.then(response => response.json())
		.then(response => response.weight)
		.then(weight => {
			this.setState({
				loading: false,
				weight,
				pokemons: pokemons.map(item => item.url == url ? 
					item = {url : item.url, name : item.name += ` >>> POKEMONS WEIGHT: ${weight}<<<`} : item)
			});
		});
		
	}

	render() {
		
		const { loading, pokemons } = this.state;
		
		return (
			<div>
				{ loading ? 'Идет загрузка' : <PokemonsList showDesc={this.handleDesc} pokemons={pokemons} /> }
			</div>
		);
	}
	
}