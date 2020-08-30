import React, { Component } from 'react';
import LandingSVG from '../../components/svg/LandingSVG';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='container'>
					<div className='header__navigation'>
						<a className='header__navigation__logo' href='/'>
							Stack Over Flow
						</a>

						<ul className='header__navigation__links'>
							<li>
								<a href='/'>Main Page</a>
							</li>
							<li>
								<a href='/forum'>Forum</a>
							</li>
							<li>
								<a href='/about'>About Us</a>
							</li>
						</ul>

						<a
							className='header__navigation__action'
							href='/signup'>
							<button>Let's Go!</button>
						</a>
					</div>

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
	}
}

export default Header;
