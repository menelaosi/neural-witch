import { CUSPS_STROKE, DARK_GRAY, getPointPosition } from '@/lib/AstrologyUtils';
import { Point } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologyCircle from './AstrologySymbols/AstrologyCircle';
import AstrologyLine from './AstrologySymbols/AstrologyLine';

interface AstrologyRulerProps {
	readonly point: Point;
	readonly startRadius: number;
	readonly endRadius: number;
	readonly startAngle: number;
}

function getRulerPositions(
	point: Point,
	startRadius: number,
	endRadius: number,
	startAngle: number,
) {
	const rayRadius = endRadius;
	const radiusRatio = Math.abs((endRadius - startRadius) / 2);

	const halfRayRadius = (startRadius <= endRadius)
		? rayRadius - radiusRatio
		: rayRadius + radiusRatio;
	const resultArray = [];
	for (let i = 0, start = 0, step = 5; i < 72; i++) {
		const angle = start + startAngle;
		const startingPoint = getPointPosition(
			point,
			startRadius,
			angle,
		);

		const endPositionStartRadius = (i % 2 === 0)
			? rayRadius
			: halfRayRadius;

		const endingPoint = getPointPosition(
			point,
			endPositionStartRadius,
			angle,
		);

		resultArray.push(
			<AstrologyLine
				key={i}
				startingPoint={startingPoint}
				endingPoint={endingPoint}
				stroke={DARK_GRAY}
				strokeWidth={CUSPS_STROKE}
			/>,
		);

		start += step;
	}

	return resultArray;
}

const AstrologyRuler: React.FC<AstrologyRulerProps> = ({
	point,
	startRadius,
	endRadius,
	startAngle,
}) => {
	const rulerPositions = getRulerPositions(
		point,
		startRadius,
		endRadius,
		startAngle,
	);
	return (
		<g>
			{rulerPositions}
			<AstrologyCircle
				point={point}
				radius={startRadius}
				stroke={DARK_GRAY}
				strokeWidth={CUSPS_STROKE}
			/>
		</g>
	);
};

export default AstrologyRuler;
