import React, { userState } from 'react';

import Left from './Left';
import Right from './Right';

import '../../styles/signup.css';

const Signup = (props) => {
	return (
		<div className='wrapper'>
			<Left />
			<Right />
		</div>
	);
};

export default Signup;
