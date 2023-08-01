import { AstrologySymbolProps, ColorSigns } from '@/types/AstrologyTypes';
import React from 'react';
import ZodiacSymbol from './ZodiacSymbol';

const LeoSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 3);
	const y = Math.round(point.y + 4);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -2,-1 -1,0 -2,1 -1,2 0,1 1,2 2,1 1,0 2,-1 1,-2 0,-1 -1,-2 -5,-5 -1,-2 0,-3 1,-2 2,-1 3,-1 4,0 4,1 2,2 1,2 0,3 -1,3 -3,3 -1,2 0,2 1,2 2,0 1,-1 1,-2
				m -13,-5 -2,-3 -1,-2 0,-3 1,-2 1,-1
				m 7,-1 3,1 2,2 1,2 0,3 -1,3 -2,3
			`}
			strokeColor={ColorSigns.ColorLeo}
		/>
	);
};

export default LeoSymbol;
