import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import CuspSymbol from './CuspSymbol';

const House7Symbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 4);
	const y = Math.round(point.y - 4);

	return (
		<CuspSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -0.9090909,2.7272727
				m 6.8181818,-2.7272727 -0.4545454,1.3636363 -0.909091,1.3636364 -1.8181818,2.2727273 -0.90909088,1.36363633 -0.45454546,1.36363637 -0.45454545,1.8181818
				m 0.90909091,-3.63636362 -0.90909091,1.81818182 -0.45454546,1.8181818
				m 4.09090905,-6.8181818 -2.72727268,2.72727272 -0.90909091,1.36363637 -0.45454546,0.90909091 -0.45454545,1.8181818 0.90909091,0
				m -1.36363641,-8.1818182 1.36363641,-1.3636363 0.90909091,0 2.27272728,1.3636363
				m -3.63636365,-0.9090909 1.36363637,0 2.27272728,0.9090909 m -4.5454546,0 0.90909095,-0.4545454 1.36363637,0 2.27272728,0.4545454 0.9090909,0 0.4545455,-0.4545454 0.4545454,-0.9090909
			`}
		/>
	);
};

export default House7Symbol;
