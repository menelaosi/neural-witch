import { BLACK, POINTS_STROKE } from '@/lib/AstrologyUtils';
import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologySymbol from '../AstrologySymbol';

const PlanetSymbol: React.FC<AstrologySymbolProps> = ({
	point,
	path,
	hasSecondPath,
	secondPath,
}) => (
	<AstrologySymbol
		point={point}
		path={path}
		strokeColor={BLACK}
		strokeWidth={POINTS_STROKE}
		hasSecondPath={hasSecondPath}
		secondPath={secondPath}
	/>
);

export default PlanetSymbol;
