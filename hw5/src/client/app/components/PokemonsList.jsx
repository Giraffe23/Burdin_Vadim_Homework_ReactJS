import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import Pokemon from './Pokemon';

export default class PokemonsList extends PureComponent {
	
	static propTypes = {
		pokemons: PropTypes.arrayOf({
			url: PropTypes.string,
			name: PropTypes.string,
		}),
		showDesc: PropTypes.func
	};
	
	static defaultProps = {
		pokemons: [],
	};
	
	handleImageClick = (url) => {
		const { showDesc } = this.props;

		if(typeof showDesc === 'function') {
			showDesc(url);
		}
	};

	render() {
		
		const { pokemons, url } = this.props;
		
		return (
			<Table dark hover>
				<thead>
				  <tr>
					<th>#</th>
					<th>Name(Weight)</th>          
					<th>Image(Click On Image)</th>
					<th>URL</th>
				  </tr>
				</thead>
				<tbody>
					{pokemons.map(item => <Pokemon {...item} onImageClick={this.handleImageClick} />)}
				</tbody>
			</Table>
		);
	}
}
