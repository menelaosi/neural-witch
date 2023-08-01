import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import CuspSymbol from './CuspSymbol';

const House11Symbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 3);
	const y = Math.round(point.y - 3);
	const xPosition = x + 6;

	return (
		<CuspSymbol
			hasSecondPath
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -2.28795747,7.7790553 0.91518297,0
				m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553
				m 3.20314038,-9.6094213 -2.7455489,9.6094213
				m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915
				m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915
			`}
			secondPath={`
				m ${xPosition},${y} -2.28795747,7.7790553 0.91518297,0
				m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553
				m 3.20314038,-9.6094213 -2.7455489,9.6094213
				m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915
				m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915
			`}
		/>
	);
};

export default House11Symbol;
