import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import CuspSymbol from './CuspSymbol';

const House5Symbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 2);
	const y = Math.round(point.y - 5);

	return (
		<CuspSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -2.27272725,4.5454545
				m 2.27272725,-4.5454545 4.54545455,0
				m -4.54545455,0.4545454 3.63636365,0
				m -4.0909091,0.4545455 2.2727273,0 1.8181818,-0.4545455 0.9090909,-0.4545454
				m -6.8181818,4.5454545 0.4545454,-0.4545454 1.3636364,-0.4545455 1.36363636,0 1.36363634,0.4545455 0.4545455,0.4545454 0.4545454,0.90909092 0,1.36363638 -0.4545454,1.3636364 -0.9090909,0.9090909 -1.81818185,0.4545454 -1.36363635,0 -0.9090909,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.9090909 0.9090909,0 0,0.9090909 -0.4545455,0 0,-0.45454545 
				m 5,-2.72727275 0.4545455,0.90909092 0,1.36363638 -0.4545455,1.3636364 -0.9090909,0.9090909
				m -0.45454544,-5.4545455 0.90909094,0.4545455 0.4545454,0.9090909 0,1.8181818 -0.4545454,1.3636364 -0.90909094,0.9090909 -0.90909091,0.4545454
			`}
		/>
	);
};

export default House5Symbol;
