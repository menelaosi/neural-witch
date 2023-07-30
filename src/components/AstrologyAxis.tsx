import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, SYMBOL_AXIS_STROKE, getPointPosition } from "@/lib/AstrologyUtils";
import { Point } from "@/types/AstrologyTypes";
import AstrologyLine from "./AstrologySymbols/AstrologyLine";

interface AstrologyAxisProps {
	x: number;
	y: number;
	radius: number;
	cusps: [];
	shift: number;
}

function getAxisElement(
	startPosition: Point,
	endPosition: Point,
) {
	return (
		<AstrologyLine
			x1={startPosition.x}
			y1={startPosition.y}
			x2={endPosition.x}
			y2={endPosition.y}
			stroke={DARK_GRAY}
			strokeWidth={SYMBOL_AXIS_STROKE}
		/>
		
	);
}

export default function AstrologyAxis({
	x,
	y,
	radius,
	cusps,
	shift,
}: AstrologyAxisProps) {
	const axisRadius = radius + radius / INNER_CIRCLE_RADIUS_RATIO / 4;
	for (let i = 0; i < cusps.length; i++) {
		const shiftPosition = cusps[i] + shift;
		const startPosition = getPointPosition(
			x,
			y,
			radius,
			shiftPosition,
		);
		const endPosition = getPointPosition(
			x,
			y,
			axisRadius,
			shiftPosition,
		);
	}
	return (
		<g>

		</g>
	);
}