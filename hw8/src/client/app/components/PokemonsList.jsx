import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'reactstrap';

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

		const { pokemons, onLoadClick } = this.props;

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
				<tr><td colspan="4"><Button onClick={onLoadClick} outline color="success" size="lg" block>Load pokemons</Button></td></tr>
				<tr><td colspan="4"><a href="http://localhost:2323/pokemons" target="_blank" style={{ textDecoration: 'none' }} > <Button outline color="secondary" size="lg" block>Show billboard</Button></a></td></tr>
			</Table >
		);
	}
}
