import React from 'react';
import InputBox from './InputBox';

import { BsPerson as PersonIcon } from 'react-icons/bs';
import { AiOutlineMail as EmailIcon } from 'react-icons/ai';
import { BiLockAlt as LockIcon } from 'react-icons/bi';
import { FaGoogle as GoogleIcon } from 'react-icons/fa';

const Left = () => {
	const addGrayClassToAllButtons = (e) => {
		for (let button of e.target.parentNode.getElementsByClassName('button'))
			button.classList.add('button--gray');
	};

	const removeGrayClassFromAllButtons = (e) => {
		for (let button of e.target.parentNode.getElementsByClassName('button'))
			button.classList.remove('button--gray');
	};

	return (
		<div className='left'>
			<div className='left__title'>Join Us Now !</div>
			<InputBox
				type='text'
				name='username'
				placeholder='Username'
				icon={<PersonIcon />}
			/>
			<InputBox
				type='email'
				name='email'
				placeholder='Email'
				icon={<EmailIcon />}
			/>
			<InputBox
				type='password'
				name='password'
				placeholder='Password'
				icon={<LockIcon />}
			/>
			<div className='button button--primary'>SIGN UP</div>

			<hr className='with-text' text='or' />

			<div
				className='button button--google'
				onMouseEnter={addGrayClassToAllButtons}
				onMouseLeave={removeGrayClassFromAllButtons}>
				<span>
					<GoogleIcon />
				</span>{' '}
				Signup with Google
			</div>
		</div>
	);
};

export default Left;
