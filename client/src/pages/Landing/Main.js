import React from 'react';
import LandingSVG from '../../components/svg/LandingSVG';

const Main = () => {
	return (
		<div className='main'>
			<div className='main__feature'>
				<div className='main__feature__icon'>
					<LandingSVG
						name='MainFeatureFast'
						className='main__feature__icon__foreground'
					/>
					<LandingSVG
						name='MainFeatureBackground'
						className='main__feature__icon__background'
					/>
				</div>

				<span className='main__feature__title'>Simple & Fast</span>

				<span className='main__feature__description'>
					You will adapt to site easily and learn how to use it just
					as well
				</span>
			</div>

			<div className='main__feature'>
				<div className='main__feature__icon'>
					<LandingSVG
						name='MainFeatureCommunity'
						className='main__feature__icon__foreground'
					/>
					<LandingSVG
						name='MainFeatureBackground'
						className='main__feature__icon__background'
					/>
				</div>

				<span className='main__feature__title'>Forum</span>

				<p className='main__feature__description'>
					Communicate with other users and ask them to help you solve
					your problems
				</p>
			</div>

			<div className='main__feature'>
				<div className='main__feature__icon'>
					<LandingSVG
						name='MainFeatureSecurity'
						className='main__feature__icon__foreground'
					/>
					<LandingSVG
						name='MainFeatureBackground'
						className='main__feature__icon__background'
					/>
				</div>

				<span className='main__feature__title'>Secure</span>

				<p className='main__feature__description'>
					Don't worry about anything, We keep your data safe and
					encrypted
				</p>
			</div>

			<div className='main__feature'>
				<div className='main__feature__icon'>
					<LandingSVG
						name='MainFeatureFree'
						className='main__feature__icon__foreground'
					/>
					<LandingSVG
						name='MainFeatureBackground'
						className='main__feature__icon__background'
					/>
				</div>

				<span className='main__feature__title'>Free</span>

				<p className='main__feature__description'>
					Every single feature in Stack Over Flow is completely free
					and always will be
				</p>
			</div>
		</div>
	);
};

export default Main;
