import { COLLISION_RADIUS, FULL_CIRCLE, INDOOR_CIRCLE_RADIUS_RATIO, getPointPosition } from '@/lib/AstrologyUtils';
import { Point } from '@/types/AstrologyTypes';
import React, { ReactElement } from 'react';
import House10Symbol from './AstrologySymbols/CuspSymbols/House10Symbol';
import House11Symbol from './AstrologySymbols/CuspSymbols/House11Symbol';
import House12Symbol from './AstrologySymbols/CuspSymbols/House12Symbol';
import House1Symbol from './AstrologySymbols/CuspSymbols/House1Symbol';
import House2Symbol from './AstrologySymbols/CuspSymbols/House2Symbol';
import House3Symbol from './AstrologySymbols/CuspSymbols/House3Symbol';
import House4Symbol from './AstrologySymbols/CuspSymbols/House4Symbol';
import House5Symbol from './AstrologySymbols/CuspSymbols/House5Symbol';
import House6Symbol from './AstrologySymbols/CuspSymbols/House6Symbol';
import House7Symbol from './AstrologySymbols/CuspSymbols/House7Symbol';
import House8Symbol from './AstrologySymbols/CuspSymbols/House8Symbol';
import House9Symbol from './AstrologySymbols/CuspSymbols/House9Symbol';

interface AstrologyCuspsProps {
	readonly point: Point;
	readonly radius: number;
	readonly cuspPositions: number[];
	readonly shift: number;
}
/* Helpers
function isInCollision(
	angle: number,
	locatedPoints: LocatedPoint[],
): boolean {
	const collisionRadius = COLLISION_RADIUS / 2;
	for (let i = 0; i < locatedPoints.length; i++) {
		if ((Math.abs(locatedPoints[i].angle - angle) <= collisionRadius)
		|| (FULL_CIRCLE - Math.abs(locatedPoints[i].angle - angle) <= collisionRadius)
		) {
			return true;
		}
	}

	return false;
}

function getDashedLinesPositions(
	point: Point,
	angle: number,
	startRadius: number,
	endRadius: number,
	obstacleRadius: number,
	obstacles: LocatedPoint[],
): Point[] {
	const results: Point[] = [];
	const defaultStartPosition = getPointPosition(
		point,
		startRadius,
		angle,
	);
	const defaultEndPosition = getPointPosition(
		point,
		endRadius,
		angle,
	);
	let modifiedPosition = point;

	const a = obstacleRadius - COLLISION_RADIUS;
	const b = obstacleRadius + (2 * COLLISION_RADIUS);

	if (isInCollision(angle, obstacles)) {
		modifiedPosition = getPointPosition(
			point,
			a,
			angle,
		);
		results.push(
			defaultStartPosition,
			modifiedPosition,
		);
		if (b < endRadius) {
			modifiedPosition = getPointPosition(
				point,
				b,
				angle,
			);
			results.push(
				modifiedPosition,
				defaultEndPosition,
			);
		}
	} else {
		results.push(
			defaultStartPosition,
			defaultEndPosition,
		);
	}

	return results;
} */

const cuspSymbols = [
	House1Symbol,
	House2Symbol,
	House3Symbol,
	House4Symbol,
	House5Symbol,
	House6Symbol,
	House7Symbol,
	House8Symbol,
	House9Symbol,
	House10Symbol,
	House11Symbol,
	House12Symbol,
];

function getCuspSymbol(
	house: number,
	point: Point,
): ReactElement {
	const CuspSymbol = cuspSymbols[house];
	return <CuspSymbol point={point} />;
}

const AstrologyCusps: React.FC<AstrologyCuspsProps> = ({
	point,
	radius,
	cuspPositions,
	shift,
}) => {
	const numbersRadius = (radius / INDOOR_CIRCLE_RADIUS_RATIO) + COLLISION_RADIUS;
	const elements: ReactElement[] = [];
	// Slet strokeWidth = CUSPS_STROKE;
	// Get dashed lines
	for (let i = 0; i < cuspPositions.length; i++) {
		/* SstrokeWidth = i % 3 === 0 ? SYMBOL_AXIS_STROKE : CUSPS_STROKE;
		const lines = getDashedLinesPositions(
			point,
			0,
			0,
			0,
			0,
			[],
		); */
		// Do something to get these lines but what?
		const cuspStart = cuspPositions[i];
		const cuspEnd = cuspPositions[(i + 1) % 12];
		const gap = cuspEnd - cuspStart > 0 ? cuspEnd - cuspStart : cuspEnd - cuspStart + FULL_CIRCLE;
		const angle = cuspStart + ((gap / 2) % FULL_CIRCLE) + shift;
		const textPosition = getPointPosition(
			point,
			numbersRadius,
			angle,
		);
		elements.push(getCuspSymbol(i, textPosition));
	}

	return (
		<g>
			{elements}
		</g>
	);
};

export default AstrologyCusps;
