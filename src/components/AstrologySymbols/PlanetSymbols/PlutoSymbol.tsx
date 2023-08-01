import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import PlanetSymbol from './PlanetSymbol';

const PlutoSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x + 5);
	const y = Math.round(point.y - 5);
	const headX = x - 2.3;

	return (
		<PlanetSymbol
			hasSecondPath
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y}
				a 5.7676856,5.7676856 0 0 1 -2.88385,4.99496 5.7676856,5.7676856 0 0 1 -5.76768,0 5.7676856,5.7676856 0 0 1 -2.88385,-4.99496
				m 5.76771,13.93858 0,-8.17088
				m -3.84512,4.32576 7.69024,0
			`}
			secondPath={`
				m ${headX},${y}
				a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448
				z
			`}
		/>
	);
};

export default PlutoSymbol;
