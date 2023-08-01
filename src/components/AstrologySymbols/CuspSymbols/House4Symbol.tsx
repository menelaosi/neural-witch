import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import CuspSymbol from './CuspSymbol';

const House4Symbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x + 1);
	const y = Math.round(point.y - 4);

	return (
		<CuspSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -2.28678383,7.7750651 0.91471356,0
				m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651
				m 3.20149736,-9.6044922 -2.74414057,9.6044922
				m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0
			`}
		/>
	);
};

export default House4Symbol;
