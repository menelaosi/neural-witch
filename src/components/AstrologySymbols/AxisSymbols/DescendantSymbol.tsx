import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import AxisSymbol from './AxisSymbol';

const DescendantSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x + 22);
	const y = Math.round(point.y - 1);
	return (
		<AxisSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 
				m -11.25,-10.125 0,11.8125
				m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0
			`}
		/>
	);
};

export default DescendantSymbol;
