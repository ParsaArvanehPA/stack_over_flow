import React from 'react';

const Side = (props) => {
	const { formStatus, changeFormStatus } = props;

	const changeFormToLogin = (e) => {
		e.preventDefault();
		changeFormStatus(false);
	};

	let title = <React.Fragment>Hello, Friend !</React.Fragment>;
	let subtitle = (
		<React.Fragment>
			You seem familiar;<br />Have we met before ?!
		</React.Fragment>
	);
	let actionTitle = <React.Fragment>SIGN IN</React.Fragment>;

	if (formStatus === false) {
		title = <React.Fragment>Ummm... Hi, Dude !</React.Fragment>;
		subtitle = (
			<React.Fragment>
				Psst! Come over here;<br />Are you new in town ?!
			</React.Fragment>
		);
		actionTitle = <React.Fragment>SIGN UP</React.Fragment>;
	}

	return (
		<div className={'side' + (formStatus ? '' : ' login')}>
			<div className='background-shape'>
				<div className='corner left' />
				<div className='mask left' />
				<div className='corner right' />
				<div className='mask right' />
			</div>

			<div className='side__title'>{title}</div>
			<p className='side__subtitle'>{subtitle}</p>
			<div
				className='button button--secondary'
				onClick={changeFormToLogin}>
				{actionTitle}
			</div>
		</div>
	);
};

export default Side;
