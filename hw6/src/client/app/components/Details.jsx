import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

export default class Details extends PureComponent {
		
	static propTypes = {
		pokemon: PropTypes.arrayOf({
			name: PropTypes.string,
			id: PropTypes.number,
			order: PropTypes.number,
			weight: PropTypes.string,
			height: PropTypes.string,
			base_experience: PropTypes.string,
			location_area_encounters: PropTypes.string	
		}),
	};

	static defaultProps = {
		pokemon: {},
	};
	
	render() {
	
		const { pokemon } = this.props;

		return(
			<Table dark hover>
				<thead>
				  <tr>
					<th>Key</th>
					<th>Value</th>          
				  </tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" >Name:</th>
						<td>{this.props.pokemon.name}</td>
						
					</tr>
					<tr>
						<th scope="row" >Id:</th>
						<td>{this.props.pokemon.id}</td>	
					</tr>
					<tr>
						<th scope="row" >Order:</th>
						<td>{this.props.pokemon.order}</td>
					</tr>
					<tr>
						<th scope="row" >Weight:</th>
						<td>{this.props.pokemon.weight}</td>
					</tr>
					<tr>
						<th scope="row" >Height:</th>
						<td>{this.props.pokemon.height}</td>
					</tr>
					<tr>
						<th scope="row" >Base_experience:</th>
						<td>{this.props.pokemon.base_experience}</td>
					</tr>
					<tr>
						<th scope="row" >Location_area_encounters:</th>
						<td>{this.props.pokemon.location_area_encounters}</td>
					</tr>
				</tbody>
			</Table>
		);
	}
}