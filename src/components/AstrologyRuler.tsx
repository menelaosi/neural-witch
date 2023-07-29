import { CUSPS_STROKE, DARK_GRAY, getPointPosition } from "@/lib/AstrologyUtils";
import AstrologyCircle from "./AstrologySymbols/AstrologyCircle";
import AstrologyLine from "./AstrologySymbols/AstrologyLine";

interface AstrologyRulerProps {
	x: number;
	y: number;
	startRadius: number;
	endRadius: number;
	startAngle: number;
};

function getRulerPositions(
	x: number,
	y: number,
	startRadius: number,
	endRadius: number,
	startAngle: number,
) {
	let rayRadius = endRadius;
	const radiusRatio = Math.abs((endRadius - startRadius) / 2);

	let halfRayRadius = (startRadius <= endRadius)
		? rayRadius - radiusRatio
		: rayRadius + radiusRatio;
	const resultArray = [];
	for (let i = 0, start = 0, step = 5; i < 72; i++) {
		const angle = start + startAngle;
		const startPosition = getPointPosition(
			x,
			y,
			startRadius,
			angle,
		);

		const endPositionStartRadius = (i % 2 === 0)
			? rayRadius
			: halfRayRadius;
			
		const endPosition = getPointPosition(
			x,
			y,
			endPositionStartRadius,
			angle,
		);
		resultArray.push(
			<AstrologyLine
				x1={startPosition.x}
				y1={startPosition.y}
				x2={endPosition.x}
				y2={endPosition.y}
				stroke={DARK_GRAY}
				strokeWidth={CUSPS_STROKE}
				key={i}
			/>
		);
		
		start += step;
	}
	return resultArray;
}

export default function AstrologyRuler({
	x,
	y,
	startRadius,
	endRadius,
	startAngle,
}: AstrologyRulerProps) {
	const rulerPositions = getRulerPositions(
		x,
		y,
		startRadius,
		endRadius,
		startAngle,
	);
	return (
		<g>
			{rulerPositions}
			<AstrologyCircle
				centerX={x}
				centerY={y}
				radius={startRadius}
				stroke={DARK_GRAY}
				strokeWidth={CUSPS_STROKE}
			/>
		</g>
	);
}