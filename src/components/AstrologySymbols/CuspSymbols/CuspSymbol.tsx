import { BLACK, CUSPS_STROKE } from '@/lib/AstrologyUtils';
import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologySymbol from '../AstrologySymbol';

const CuspSymbol: React.FC<AstrologySymbolProps> = ({
	point,
	path,
	hasSecondPath,
	secondPath,
}) => (
	<AstrologySymbol
		point={point}
		path={path}
		strokeColor={BLACK}
		strokeWidth={CUSPS_STROKE}
		hasSecondPath={hasSecondPath}
		secondPath={secondPath}
	/>
);

export default CuspSymbol;
