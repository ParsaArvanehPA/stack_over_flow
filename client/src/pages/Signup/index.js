import React, { useState } from 'react';

import StandardNav from '../../components/nav/StandardNav';
import Main from './Main';
import Side from './Side';

import '../../styles/signup.css';

const Signup = () => {
	const [ formStatus, setFormStatus ] = useState(true);

	const changeFormStatus = (toSignup) => {
		setFormStatus(!formStatus);
	};

	return (
		<div id='signup'>
			<div className='wrapper'>
				<div className='header'>
					<StandardNav />
				</div>
				<div className={'container' + (formStatus ? '' : ' login')}>
					<Main formStatus={formStatus} />
					<Side
						formStatus={formStatus}
						changeFormStatus={changeFormStatus}
					/>
				</div>
			</div>
		</div>
	);
};

export default Signup;
