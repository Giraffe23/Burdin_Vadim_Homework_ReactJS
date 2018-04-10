import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PokemonsList from './containers/PokemonsContainer';

class App extends Component {
	render() {
		return <div><PokemonsList /></div>;
	}
}

ReactDOM.render(<App />, document.body);
