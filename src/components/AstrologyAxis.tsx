import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, SYMBOL_AXIS_STROKE, getPointPosition } from '@/lib/AstrologyUtils';
import { Axis, Point } from '@/types/AstrologyTypes';
import React, { ReactElement } from 'react';
import AstrologyLine from './AstrologySymbols/AstrologyLine';
import AscendantSymbol from './AstrologySymbols/AxisSymbols/AscendantSymbol';
import DescendantSymbol from './AstrologySymbols/AxisSymbols/DescendantSymbol';
import ImmumCoeliSymbol from './AstrologySymbols/AxisSymbols/ImmumCoeliSymbol';
import MediumCoeliSymbol from './AstrologySymbols/AxisSymbols/MediumCoeliSymbol';

interface AstrologyAxisProps {
	readonly point: Point;
	readonly radius: number;
	readonly cuspPositions: number[];
	readonly shift: number;
}

function getAxisLine(
	startingPoint: Point,
	endingPoint: Point,
): ReactElement {
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
	const elements: ReactElement[] = [];
	for (let i = 0; i < 10; i += 3) {
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
		elements.push(getAxisLine(startPosition, endPosition));
		let textPosition = point;
		switch (i) {
			case Axis.Ascendant:
				textPosition = getPointPosition(
					point,
					axisRadius + 20,
					shiftPosition,
				);
				elements.push(
					<AscendantSymbol point={textPosition} />,
				);
				break;
			case Axis.ImmumCoeli:
				textPosition = getPointPosition(
					point,
					axisRadius + 2,
					shiftPosition,
				);
				elements.push(
					<ImmumCoeliSymbol point={textPosition} />,
				);
				break;
			case Axis.Descendant:
				textPosition = getPointPosition(
					point,
					axisRadius + 10,
					shiftPosition,
				);
				elements.push(
					<DescendantSymbol point={textPosition} />,
				);
				break;
			case Axis.Midheaven:
				textPosition = getPointPosition(
					point,
					axisRadius + 10,
					shiftPosition,
				);
				elements.push(
					<MediumCoeliSymbol point={textPosition} />,
				);
				break;
			default:
				break;
		}
	}

	return (
		<g>
			{elements}
		</g>
	);
};

export default AstrologyAxis;
