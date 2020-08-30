import React from 'react';

import StandardNav from '../../components/nav/StandardNav';
import Left from './Left';
import Right from './Right';

import '../../styles/signup.css';

const Signup = (props) => {
	return (
		<div id='signup'>
			<div className='wrapper'>
				<div className='header'>
					<StandardNav />
				</div>
				<Left />
				<Right />
			</div>
		</div>
	);
};

export default Signup;
