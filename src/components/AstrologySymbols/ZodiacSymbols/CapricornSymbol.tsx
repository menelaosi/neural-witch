import { AstrologySymbolProps, ColorSigns } from '@/types/AstrologyTypes';
import React from 'react';
import ZodiacSymbol from './ZodiacSymbol';

const CapricornSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 9);
	const y = Math.round(point.y - 3);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} 1.8047633,-3.6095267 4.5119084,9.0238168
				m -4.5119084,-7.2190534 4.5119084,9.0238167 2.707145,-6.3166717 4.5119084,0 2.707145,-0.9023817 0.9023817,-1.8047633 0,-1.8047634 -0.9023817,-1.8047633 -1.8047634,-0.9023817 -0.9023816,0 -1.8047634,0.9023817 -0.9023817,1.8047633 0,1.8047634 0.9023817,2.707145 0.9023817,1.80476336 0.9023817,2.70714504 0,2.707145 -1.8047634,1.8047633
				m 1.8047634,-16.2428701 -0.9023817,0.9023817 -0.9023817,1.8047633 0,1.8047634 1.8047634,3.6095267 0.9023816,2.707145 0,2.707145 -0.9023816,1.8047634 -1.8047634,0.9023816
			`}
			strokeColor={ColorSigns.ColorCapricorn}
		/>
	);
};

export default CapricornSymbol;
