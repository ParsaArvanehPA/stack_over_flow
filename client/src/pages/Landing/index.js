import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import '../../styles/landing.css';

const Landing = () => {
	return (
		<div id='landing'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default Landing;
