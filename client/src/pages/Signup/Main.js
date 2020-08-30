import React from 'react';
import InputBox from './InputBox';

import { BsPerson as PersonIcon } from 'react-icons/bs';
import { AiOutlineMail as EmailIcon } from 'react-icons/ai';
import { BiLockAlt as LockIcon } from 'react-icons/bi';
import { FaGoogle as GoogleIcon } from 'react-icons/fa';

const Main = (props) => {
	const { formStatus } = props;

	const addGrayClassToAllButtons = (e) => {
		for (let button of e.target.parentNode.getElementsByClassName('button'))
			button.classList.add('button--gray');
	};

	const removeGrayClassFromAllButtons = (e) => {
		for (let button of e.target.parentNode.getElementsByClassName('button'))
			button.classList.remove('button--gray');
	};

	let formTitle = <React.Fragment>Join Us Now !</React.Fragment>;
	let actionTitle = <React.Fragment>SIGN UP</React.Fragment>;
	let googleTitle = <React.Fragment>Sign up with Google</React.Fragment>;

	if (formStatus === false) {
		formTitle = <React.Fragment>Welcome Back !</React.Fragment>;
		actionTitle = <React.Fragment>SIGN IN</React.Fragment>;
		googleTitle = <React.Fragment>Sign in with Google</React.Fragment>;
	}

	return (
		<div className={'main' + (formStatus ? '' : ' login')}>
			<div className='main__title'>{formTitle}</div>
			<InputBox
				type='text'
				name='username'
				placeholder='Username'
				icon={<PersonIcon />}
			/>
			{(formStatus === undefined || formStatus !== false) && (
				<InputBox
					type='email'
					name='email'
					placeholder='Email'
					icon={<EmailIcon />}
				/>
			)}
			<InputBox
				type='password'
				name='password'
				placeholder='Password'
				icon={<LockIcon />}
			/>
			<div className='button button--primary'>{actionTitle}</div>

			<hr className='with-text' text='or' />

			<div
				className='button button--google'
				onMouseEnter={addGrayClassToAllButtons}
				onMouseLeave={removeGrayClassFromAllButtons}>
				<GoogleIcon className='icon' />
				{'  '}
				{googleTitle}
			</div>
		</div>
	);
};

export default Main;
