import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Details from '../components/Details';

export default class DetailsContainer extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			pokemon: {}
		};
	}

	static propTypes = {
		id: PropTypes.string
	};

	static defaultProps = {
		id: 'id не указан',
	};

	fetchData(id) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
			.then((response) => response.json())
			.then(response => response)
			.then((pokemon) => {
				this.setState({
					pokemon
				});
			});
	}

	componentDidMount() {
		let id = this.props.match.params.id;
		this.fetchData(id);
	}

	render() {
		const { pokemon } = this.state;
		return (
			<div>
				<Details pokemon={pokemon} />
			</div>
		);
	}
}
