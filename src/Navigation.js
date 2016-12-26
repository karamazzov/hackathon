'use strict';

import React from 'react';

class Navigation extends React.Component {

	render(){

		return(

			<nav className="navbar navbar-light navigation">

				<div className="container">

					<a className="navbar-brand">
            		{this.props.appName.toLowerCase()}
          			</a>

				</div>

			</nav>

		);

	};

}

export default Navigation;