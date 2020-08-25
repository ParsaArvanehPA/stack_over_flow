import React from 'react';
import InputBox from './InputBox';

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

const Left = (props) => {
	return (
		<div className='left'>
			<div className='left__title'>Join Us Now !</div>
			<InputBox type='text' name='username' placeholder='Username' icon={<PersonIcon />} />
			<InputBox type='email' name='email' placeholder='Email' icon={<EmailIcon />} />
			<InputBox type='password' name='password' placeholder='Password' icon={<LockIcon />} />
			<div className='button button--primary'>SIGN UP</div>
		</div>
	);
};

export default Left;
