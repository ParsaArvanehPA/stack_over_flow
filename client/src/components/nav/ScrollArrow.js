import React, { useState } from 'react';

import { RiArrowDropUpLine as UpArrowIcon } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';

const ScrollArrow = () => {
	const [ showScroll, setShowScroll ] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<IconContext.Provider
			value={{
				className : 'scrollTop',
				size      : '6rem'
			}}>
			<UpArrowIcon
				onClick={scrollTop}
				style={{ display: showScroll ? 'flex' : 'none' }}
			/>
		</IconContext.Provider>
	);
};

export default ScrollArrow;
