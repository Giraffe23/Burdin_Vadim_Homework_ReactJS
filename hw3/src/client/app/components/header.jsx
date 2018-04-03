import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
	    return (<header>
	        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			    <a className="navbar-brand" href="https://reactjs.org/" target= "_blank">
					<img src="./img/react.png" alt="logo"/>
                </a>
		        <ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="https://reactjs.org/docs/introducing-jsx.html" target= "_blank">JSX</a>
					</li>
					<li Name="nav-item">
						<a className="nav-link" href="https://babeljs.io/" target= "_blank">Babel</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
							WEBPACK
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="https://webpack.js.org/concepts/" target= "_blank">Documentation</a>
							<a className="dropdown-item" href="https://webpack.js.org/concepts/loaders/" target= "_blank">Loaders</a>
							<a className="dropdown-item" href="https://webpack.js.org/concepts/modules/" target= "_blank">Modules</a>
						</div>
					</li>
		        </ul>
				<ul className="nav navbar-nav ml-auto">
					<li className="nav-item">
						<form className="form-inline" action="#">
							<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
								Log In
							</button>
						</form>
					</li>
				</ul>
			</nav>
			<div className="container">
				<div className="modal fade" id="myModal">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Learn ReactJS</h4>
								<button type="button" clasNamesName="close" data-dismiss="modal">&times;</button>
							</div>
							<div className="modal-body">
								<div className="container">
									<h2>Log In!</h2>
									<form action="/action_page.php">
										<div className="form-group">
											<label for="email">USERNAME OR EMAIL</label>
											<input type="email" className="form-control" id="email" placeholder="Enter username or email" name="email"/>
										</div>
										<div className="form-group">
											<label for="pwd">PASSWORD</label>
											<input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
										</div>
										<div className="form-check">
											<label className="form-check-label">
												<input className="form-check-input" type="checkbox" name="remember"/> Remember me
											</label>
										</div>
										<button type="submit" className="btn btn-primary">Submit</button>
									</form>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>);
	}
}