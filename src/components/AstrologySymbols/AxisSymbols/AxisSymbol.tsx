import { DARK_GRAY, SYMBOL_AXIS_STROKE } from '@/lib/AstrologyUtils';
import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologySymbol from '../AstrologySymbol';

const AxisSymbol: React.FC<AstrologySymbolProps> = ({
	point,
	path,
}) => (
	<AstrologySymbol
		point={point}
		path={path}
		strokeColor={DARK_GRAY}
		strokeWidth={SYMBOL_AXIS_STROKE}
	/>
);

export default AxisSymbol;
