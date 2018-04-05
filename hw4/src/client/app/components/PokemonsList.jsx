import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import Pokemon from './Pokemon';

export default class PokemonsList extends PureComponent {
	
	static propTypes = {
		pokemons: PropTypes.arrayOf({
			url: PropTypes.string,
			name: PropTypes.string,
		})
	};
	
	static defaultProps = {
		pokemons: [],
	};

	render() {
		
		const{pokemons} = this.props;
	
		return (
			<Table dark hover>
				<thead>
				  <tr>
					<th>#</th>
					<th>Name</th>          
					<th>Image</th>
				  </tr>
				</thead>
				<tbody>
					{pokemons.map(item => <Pokemon {...item} />)}
				</tbody>
			</Table>
		);
	}
}
