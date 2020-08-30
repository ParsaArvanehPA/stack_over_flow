import React from 'react';

import '../../styles/standard_nav.css';

const StandardNav = () => {
	return (
		<div className='header__navigation'>
			<a className='header__navigation__logo' href='/'>
				Stack Over Flow
			</a>

			<ul className='header__navigation__links'>
				<li>
					<a href='/'>Home Page</a>
				</li>
				<li>
					<a href='/forum'>Forum</a>
				</li>
				<li>
					<a href='/about'>About Us</a>
				</li>
			</ul>

			<a className='header__navigation__action' href='/signup'>
				<button>Sign Up</button>
			</a>
		</div>
	);
};

export default StandardNav;
