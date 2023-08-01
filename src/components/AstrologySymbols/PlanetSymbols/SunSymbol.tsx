import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import PlanetSymbol from './PlanetSymbol';

const SunSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 1);
	const y = Math.round(point.y - 8);

	return (
		<PlanetSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -2.18182,0.727268 -2.181819,1.454543 -1.454552,2.18182 -0.727268,2.181819 0,2.181819 0.727268,2.181819 1.454552,2.18182 2.181819,1.454544 2.18182,0.727276 2.18181,0 2.18182,-0.727276 2.181819,-1.454544 1.454552,-2.18182 0.727268,-2.181819 0,-2.181819 -0.727268,-2.181819 -1.454552,-2.18182 -2.181819,-1.454543 -2.18182,-0.727268 -2.18181,0
				m 0.727267,6.54545 -0.727267,0.727276 0,0.727275 0.727267,0.727268 0.727276,0 0.727267,-0.727268 0,-0.727275 -0.727267,-0.727276 -0.727276,0
				m 0,0.727276 0,0.727275 0.727276,0 0,-0.727275 -0.727276,0
			`}
		/>
	);
};

export default SunSymbol;
