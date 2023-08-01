import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import PlanetSymbol from './PlanetSymbol';

const ChironSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x + 3);
	const y = Math.round(point.y + 5);
	const headY = y - 13;

	return (
		<PlanetSymbol
			hasSecondPath
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y}
				a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 
				z
			`}
			secondPath={`
				m ${x},${headY} -3.942997,4.243844 4.110849,3.656151
				m -4.867569,-9.009468 0,11.727251
			`}
		/>
	);
};

export default ChironSymbol;
