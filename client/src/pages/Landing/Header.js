import React from 'react';

import StandardNav from '../../components/nav/StandardNav';

import LandingSVG from '../../components/svg/LandingSVG';

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<StandardNav />

				<div className='header__text'>
					<span className='header__text__title'>
						Enjoy Communicating!
					</span>
					<p className='header__text__description'>
						We've developed a friendly environment for you to
						<br />
						freely share you problems with other members
						<br />
						and ask for their help.
					</p>
				</div>
			</div>
			<div className='header__background'>
				<LandingSVG
					name='HeaderBackgroundTop'
					className='header__background__top'
				/>

				<LandingSVG
					name='HeaderBackgroundRings'
					className='header__background__rings'
				/>

				<LandingSVG
					name='HeaderBackgroundIllustration'
					className='header__background__illustration'
				/>
			</div>
		</div>
	);
};

export default Header;
