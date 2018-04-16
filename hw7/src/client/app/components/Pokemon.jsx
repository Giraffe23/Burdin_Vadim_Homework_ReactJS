import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default class Pokemon extends PureComponent {

	static propTypes = {
		id: PropTypes.number,
		url: PropTypes.string,
		name: PropTypes.string,
	};

	static defaultProps = {
		name: 'Имя не указано',
		url: 'Адресс не указан',
	};

	render() {
		const { id, name, url } = this.props,
			imgStyle = {
				width: 75,
				height: 75,
				WebkitTransition: "all",
				msTransition: "all"
			};

		return (
			<tr>
				<th scope="row" >{id}</th>
				<td>{name}</td>
				<td><Link to={`/details/${id}`}><img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`} style={imgStyle} /></Link></td>
				<td>{url}</td>
			</tr>
		);
	}
}
