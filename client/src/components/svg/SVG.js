import React from 'react';

const SVG = (props) => {
	return (
		<span className={props.className}>
			<img src={props.svg} alt={props.name} />
		</span>
	);
};

export default SVG;
