import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
	
    static propTypes = {
        url: PropTypes.string,
        name: PropTypes.string,
    };
	
    static defaultProps = {
        name: 'Имя не указано',
        url: 'Адресс не указан',
    };
	
    render() {
        let { name, url } = this.props,
		    imgStyle = {
				width: 75,
				height: 75,
				WebkitTransition: "all",
				msTransition: "all"
			};
			
		{/*--Определяем номер картинки--*/}
		
        let num = url.split(/\D+/)[2];
		
        return( 
			<tr>
				<th scope="row">{num}</th>
				<td>{ name.toUpperCase() }</td>
				<td><img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${ num }.png?raw=true`} style={imgStyle}/></td>
			</tr>
        );
    }
}
