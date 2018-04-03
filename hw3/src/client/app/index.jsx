import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
	render() {
	    return <div><Header /><Main /><Footer /></div>;
	}
}

ReactDOM.render(<App />, document.body);
