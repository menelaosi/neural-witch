import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import PlanetSymbol from './PlanetSymbol';

const MoonSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 2);
	const y = Math.round(point.y - 7);

	return (
		<PlanetSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y}
				a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462
				z
			`}
		/>
	);
};

export default MoonSymbol;
