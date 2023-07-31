import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, SYMBOL_AXIS_STROKE, getPointPosition } from "@/lib/AstrologyUtils";
import { Point } from "@/types/AstrologyTypes";
import AstrologyLine from "./AstrologySymbols/AstrologyLine";

interface AstrologyAxisProps {
	point: Point;
	radius: number;
	cuspPositions: number[];
	shift: number;
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

export default function AstrologyAxis({
	point,
	radius,
	cuspPositions,
	shift,
}: AstrologyAxisProps) {
	const axisRadius = radius + radius / INNER_CIRCLE_RADIUS_RATIO / 4;
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
	}
	return (
		<g>

		</g>
	);
}