import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import AxisSymbol from './AxisSymbol';

const MediumCoeliSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x + 19);
	const y = Math.round(point.y - 4);
	return (
		<AxisSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 
				m 0,-10.5428881 4.016338,10.5428881
				m -17.57148,-9.0367612 0,10.5428881
				m 4.016338,-10.5428881 -4.016338,10.5428881
				m 4.016338,-10.5428881 0,10.5428881
			`}
		/>
	);
};

export default MediumCoeliSymbol;
