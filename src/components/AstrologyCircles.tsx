import { DARK_GRAY } from '@/lib/AstrologyUtils';
import { Point } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologyCircle from './AstrologySymbols/AstrologyCircle';

interface AstrologyCirclesProps {
	readonly point: Point;
	readonly radius: number;
	readonly thickness: number;
	readonly backgroundRadius: number;
}

const AstrologyCircles: React.FC<AstrologyCirclesProps> = ({
	point,
	radius,
	thickness,
	backgroundRadius,
}) => (
	<g id='circles'>
		<AstrologyCircle
			point={point}
			radius={thickness}
			stroke={DARK_GRAY}
			strokeWidth={2}
		/>
		<AstrologyCircle
			point={point}
			radius={radius}
			stroke={DARK_GRAY}
			strokeWidth={2}
		/>
		<AstrologyCircle
			point={point}
			radius={backgroundRadius}
			stroke={DARK_GRAY}
			strokeWidth={2}
		/>
	</g>
);

export default AstrologyCircles;
