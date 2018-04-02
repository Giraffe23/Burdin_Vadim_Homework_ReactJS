import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
	    return (<header>
	        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			    <a class="navbar-brand" href="https://reactjs.org/" target= "_blank">
					<img src="./img/react.png" alt="logo"/>
                </a>
		        <ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="https://reactjs.org/docs/introducing-jsx.html" target= "_blank">JSX</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://babeljs.io/" target= "_blank">Babel</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
							WEBPACK
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item" href="https://webpack.js.org/concepts/" target= "_blank">Documentation</a>
							<a class="dropdown-item" href="https://webpack.js.org/concepts/loaders/" target= "_blank">Loaders</a>
							<a class="dropdown-item" href="https://webpack.js.org/concepts/modules/" target= "_blank">Modules</a>
						</div>
					</li>
		        </ul>
				<ul class="nav navbar-nav ml-auto">
					<li class="nav-item">
						<form class="form-inline" action="#">
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
								Log In
							</button>
						</form>
					</li>
				</ul>
			</nav>
			<div class="container">
				<div class="modal fade" id="myModal">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">Learn ReactJS</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">
								<div class="container">
									<h2>Log In!</h2>
									<form action="/action_page.php">
										<div class="form-group">
											<label for="email">USERNAME OR EMAIL</label>
											<input type="email" class="form-control" id="email" placeholder="Enter username or email" name="email"/>
										</div>
										<div class="form-group">
											<label for="pwd">PASSWORD</label>
											<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
										</div>
										<div class="form-check">
											<label class="form-check-label">
												<input class="form-check-input" type="checkbox" name="remember"/> Remember me
											</label>
										</div>
										<button type="submit" class="btn btn-primary">Submit</button>
									</form>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>);
	}
}