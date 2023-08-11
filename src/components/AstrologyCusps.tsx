import { COLLISION_RADIUS, CUSPS_STROKE, DARK_GRAY, FULL_CIRCLE, SYMBOL_AXIS_STROKE, getPointPosition } from '@/lib/AstrologyUtils';
import { LocatedPoint, Point } from '@/types/AstrologyTypes';
import React, { ReactElement } from 'react';
import AstrologyLine from './AstrologySymbols/AstrologyLine';
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
	readonly numbersRadius: number;
	readonly pointRadius: number;
	readonly endDashedLineRadius: number;
	readonly cuspPositions: number[];
	readonly shift: number;
	readonly locatedPoints: LocatedPoint[];
}

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
	key: number,
	point: Point,
): ReactElement {
	const CuspSymbol = cuspSymbols[house];
	return (
		<CuspSymbol
			key={key}
			point={point}
		/>
	);
}

const AstrologyCusps: React.FC<AstrologyCuspsProps> = ({
	point,
	numbersRadius,
	pointRadius,
	endDashedLineRadius,
	cuspPositions,
	shift,
	locatedPoints,
}) => {
	const elements: ReactElement[] = [];
	let strokeWidth = CUSPS_STROKE;
	const startRadius = numbersRadius - COLLISION_RADIUS;
	const dashedLineRadius = pointRadius + (2 * COLLISION_RADIUS);
	let key = 0;
	let startingPoint = point;
	let endingPoint = startingPoint;

	for (let i = 0; i < cuspPositions.length; i++) {
		strokeWidth = i % 3 === 0 ? SYMBOL_AXIS_STROKE : CUSPS_STROKE;
		const cuspPositionAngle = cuspPositions[i] + shift;
		if (isInCollision(cuspPositionAngle, locatedPoints)) {
			startingPoint = getPointPosition(
				point,
				startRadius,
				cuspPositionAngle,
			);
			endingPoint = getPointPosition(
				point,
				pointRadius - COLLISION_RADIUS,
				cuspPositionAngle,
			);
			elements.push(
				<AstrologyLine
					key={key}
					startingPoint={startingPoint}
					endingPoint={endingPoint}
					stroke={DARK_GRAY}
					strokeWidth={strokeWidth}
				/>,
			);

			key++;
			if (dashedLineRadius < endDashedLineRadius) {
				startingPoint = getPointPosition(
					point,
					dashedLineRadius,
					cuspPositionAngle,
				);
				endingPoint = getPointPosition(
					point,
					endDashedLineRadius,
					cuspPositionAngle,
				);
				elements.push(
					<AstrologyLine
						key={key}
						startingPoint={startingPoint}
						endingPoint={endingPoint}
						stroke={DARK_GRAY}
						strokeWidth={strokeWidth}
					/>,
				);
				key++;
			}
		} else {
			startingPoint = getPointPosition(
				point,
				startRadius,
				cuspPositionAngle,
			);
			endingPoint = getPointPosition(
				point,
				endDashedLineRadius,
				cuspPositionAngle,
			);
			elements.push(
				<AstrologyLine
					key={key}
					startingPoint={startingPoint}
					endingPoint={endingPoint}
					stroke={DARK_GRAY}
					strokeWidth={strokeWidth}
				/>,
			);
			key++;
		}

		const cuspStart = cuspPositions[i];
		const cuspEnd = cuspPositions[(i + 1) % 12];
		const gap = cuspEnd - cuspStart > 0 ? cuspEnd - cuspStart : cuspEnd - cuspStart + FULL_CIRCLE;
		const angle = cuspStart + ((gap / 2) % FULL_CIRCLE) + shift;
		const textPosition = getPointPosition(
			point,
			numbersRadius,
			angle,
		);
		elements.push(getCuspSymbol(i, key, textPosition));
		key++;
	}

	return (
		<g>
			{elements}
		</g>
	);
};

export default AstrologyCusps;
