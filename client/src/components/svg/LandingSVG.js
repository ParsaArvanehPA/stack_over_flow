import React, { Component } from 'react';

import HeaderBackgroundTop from '../../assets/svg/landing_page/header_background_top.svg';
import HeaderBackgroundRings from '../../assets/svg/landing_page/header_background_rings.svg';
import HeaderBackgroundIllustration from '../../assets/svg/landing_page/header_background_illustration.svg';
import MainFeatureBackground from '../../assets/svg/landing_page/feature_background.svg';
import MainFeatureFast from '../../assets/svg/landing_page/feature_fast.svg';
import MainFeatureCommunity from '../../assets/svg/landing_page/feature_community.svg';
import MainFeatureSecurity from '../../assets/svg/landing_page/feature_security.svg';
import MainFeatureFree from '../../assets/svg/landing_page/feature_free.svg';
import SVG from './SVG';

function LandingSVG(props) {
	let svg = {};

	switch (props.name) {
		case 'HeaderBackgroundTop':
			svg = HeaderBackgroundTop;
			break;
		case 'HeaderBackgroundRings':
			svg = HeaderBackgroundRings;
			break;
		case 'HeaderBackgroundIllustration':
			svg = HeaderBackgroundIllustration;
			break;
		case 'MainFeatureBackground':
			svg = MainFeatureBackground;
			break;
		case 'MainFeatureFast':
			svg = MainFeatureFast;
			break;
		case 'MainFeatureCommunity':
			svg = MainFeatureCommunity;
			break;
		case 'MainFeatureSecurity':
			svg = MainFeatureSecurity;
			break;
		case 'MainFeatureFree':
			svg = MainFeatureFree;
			break;
		default:
			console.error('ERROR: ' + props.name + ' cannot be found !');
			return 'Missing SVG';
	}

	return <SVG {...props} svg={svg} />;
}

export default LandingSVG;
