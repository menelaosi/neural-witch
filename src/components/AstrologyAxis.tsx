import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, SYMBOL_AXIS_STROKE, getPointPosition } from '@/lib/AstrologyUtils';
import { Point } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologyLine from './AstrologySymbols/AstrologyLine';

interface AstrologyAxisProps {
	readonly point: Point;
	readonly radius: number;
	readonly cuspPositions: number[];
	readonly shift: number;
}

function getAxisElement(
	startingPoint: Point,
	endingPoint: Point,
) {
	return (
		<AstrologyLine
			startingPoint={startingPoint}
			endingPoint={endingPoint}
			stroke={DARK_GRAY}
			strokeWidth={SYMBOL_AXIS_STROKE}
		/>

	);
}

const AstrologyAxis: React.FC<AstrologyAxisProps> = ({
	point,
	radius,
	cuspPositions,
	shift,
}) => {
	const axisRadius = radius + (radius / INNER_CIRCLE_RADIUS_RATIO / 4);
	if (cuspPositions) {
		for (let i = 0; i < cuspPositions.length; i++) {
			const shiftPosition = cuspPositions[i] + shift;
			const startPosition = getPointPosition(
				point,
				radius,
				shiftPosition,
			);
			const endPosition = getPointPosition(
				point,
				axisRadius,
				shiftPosition,
			);
			getAxisElement(startPosition, endPosition);
		}
	}

	return (
		<g />
	);
};

export default AstrologyAxis;
