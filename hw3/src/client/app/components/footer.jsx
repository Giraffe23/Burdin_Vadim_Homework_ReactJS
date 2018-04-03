import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
	    return <footer className="">
			<ul className=" navbar navbar-dark bg-dark pagination pagination-lg justify-content-center">
				<li className="page-item"><a className="page-link" href="#">Previous</a></li>
				<li className="page-item"><a className="page-link" href="#">1</a></li>
				<li className="page-item active "><a className="page-link" href="#">2</a></li>
				<li className="page-item"><a className="page-link" href="#">3</a></li>
				<li className="page-item"><a className="page-link" href="#">Next</a></li>
			</ul>
		Name</footer>;
	}
}