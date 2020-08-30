import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footer__foreground'>
					<span className='footer__foreground__text'>
						What Are You Waiting for? Join us Now!
					</span>

					<a href='/signup'>
						<button>Sign Up</button>
					</a>
				</div>

				<div className='footer__background' />
			</div>
		);
	}
}

export default Footer;
