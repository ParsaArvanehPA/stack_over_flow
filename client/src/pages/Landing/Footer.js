import React, { Component } from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__foreground'>
				<span className='footer__foreground__text'>
					What Are You Waiting for? <strong>Join us Now!</strong>
				</span>

				<a href='/signup'>
					<button>Let's Go!</button>
				</a>
			</div>

			<div className='footer__background' />
		</div>
	);
};

export default Footer;
