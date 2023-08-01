import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import PlanetSymbol from './PlanetSymbol';

const MercurySymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 2);
	const y = Math.round(point.y + 7);
	const crownX = x + 6;
	const crownY = y - 16;

	return (
		<PlanetSymbol
			hasSecondPath
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} 4.26011,0
				m -2.13005,-2.98207 0,5.11213
				m 4.70312,-9.7983
				a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315
				z
			`}
			secondPath={`
				m ${crownX},${crownY}
				a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445
			`}
		/>
	);
};

export default MercurySymbol;
