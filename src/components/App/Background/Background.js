import React from 'react';

import { LinearGradient } from '@vx/gradient';
import _JSXStyle from 'styled-jsx/style';
import { withScreenSize } from '@vx/responsive';

const Background = ({ screenWidth, screenHeight }) => (
	<div className='background'>
		<svg width={screenWidth} height={screenHeight} className='background-svg'>
			<LinearGradient 
				id='gradient' 
				to='#FC466B'
				from='#3F5EFB'
				vertical={false}
			/>
			<rect width={screenWidth} height={screenHeight} className='background-rect' fill="url('#gradient')" />
			<_JSXStyle styleId='background' css={`
				.background {
					position: absolute;
					top: 0;
					left: 0;
					z-index: -1;
				}
			`} />
		</svg>
	</div>
)

export default withScreenSize(Background);