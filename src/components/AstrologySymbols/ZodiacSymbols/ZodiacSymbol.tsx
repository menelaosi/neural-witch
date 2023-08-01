import { POINTS_STROKE } from '@/lib/AstrologyUtils';
import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologySymbol from '../AstrologySymbol';

const ZodiacSymbol: React.FC<AstrologySymbolProps> = ({
	point,
	path,
	hasSecondPath,
	secondPath,
	strokeColor = '#000000',
}) => (
	<AstrologySymbol
		point={point}
		path={path}
		hasSecondPath={hasSecondPath}
		secondPath={secondPath}
		strokeColor={strokeColor}
		strokeWidth={POINTS_STROKE}
	/>
);

export default ZodiacSymbol;
