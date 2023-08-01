import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import PlanetSymbol from './PlanetSymbol';

const UranusSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 5);
	const y = Math.round(point.y - 7);
	const bodyX = x + 7;
	const bodyY = y + 14.5;

	return (
		<PlanetSymbol
			hasSecondPath
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y}  0,10.23824
				m 10.23633,-10.32764 0,10.23824
				m -10.26606,-4.6394 10.23085,0
				m -5.06415,-5.51532 0,11.94985
			`}
			secondPath={`
				m ${bodyX},${bodyY}
				a 1.8384377,1.8384377 0 0 1 -1.83844,1.83843 1.8384377,1.8384377 0 0 1 -1.83842,-1.83843 1.8384377,1.8384377 0 0 1 1.83842,-1.83844 1.8384377,1.8384377 0 0 1 1.83844,1.83844
				z
			`}
		/>
	);
};

export default UranusSymbol;
