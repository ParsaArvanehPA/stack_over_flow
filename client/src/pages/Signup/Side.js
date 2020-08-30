import React from 'react';

const Side = (props) => {
	const { formStatus, changeFormStatus } = props;

	const changeFormToLogin = (e) => {
		e.preventDefault();
		changeFormStatus(false);
	};

	return (
		<div className={'side' + (formStatus ? '' : ' login')}>
			<div className='side__title'>Hello, Friend !</div>
			<p className='side__subtitle'>
				You seem familiar
				<br />
				Have we met before ?!
			</p>
			<div
				className='button button--secondary'
				onClick={changeFormToLogin}>
				SIGN IN
			</div>
		</div>
	);
};

export default Side;
