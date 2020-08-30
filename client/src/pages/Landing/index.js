import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import '../../styles/landing.css';

class Landing extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Main />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Landing;
