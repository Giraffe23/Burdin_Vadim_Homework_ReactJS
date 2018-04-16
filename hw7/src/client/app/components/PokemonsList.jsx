import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import Pokemon from './Pokemon';

export default class PokemonsList extends PureComponent {

	static propTypes = {
		pokemons: PropTypes.arrayOf({
			id: PropTypes.number,
			name: PropTypes.string,
			url: PropTypes.string
		})
	};

	static defaultProps = {
		pokemons: []
	};

	render() {

		const { pokemons } = this.props;

		return (
			<Table dark hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Image(Click On Image)</th>
						<th>URL</th>
					</tr>
				</thead>
				<tbody>
					{pokemons.map(item => <Pokemon {...item} />)}
				</tbody>
			</Table>
		);
	}
}
