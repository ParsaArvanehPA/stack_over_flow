import React from 'react';
import ScrollArrow from './components/nav/ScrollArrow';

const App = (props) => {
	return (
		<div id='app'>
			{props.children}
			<ScrollArrow />
		</div>
	);
};

export default App;
