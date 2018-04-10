import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
	
	static propTypes = {
		url: PropTypes.string,
		name: PropTypes.string,
		onImageClick: PropTypes.func
	};
	
	static defaultProps = {
		name: 'Имя не указано',
		url: 'Адресс не указан',
	};
	
	clickHandler = (event) => {
		const { onImageClick, url } = this.props;

		if(typeof onImageClick === 'function') {
			onImageClick(url);
		}
	};
	
	render() {
		const { name, url } = this.props,
		imgStyle = {
			width: 75,
			height: 75,
			WebkitTransition: "all",
			msTransition: "all"
		};
			
	{/*--Определяем номер картинки--*/}
		
		const num = url.split(/\D+/)[2];
			
		return( 
			<tr>
				<th scope="row" >{num}</th>
				<td>{ name }</td>
				<td><img onClick={this.clickHandler} src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${num}.png?raw=true`} style={imgStyle}/></td>
				<td>{ url }</td>
			</tr>	
		);
	}
}
