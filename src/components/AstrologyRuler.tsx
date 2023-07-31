import { CUSPS_STROKE, DARK_GRAY, getPointPosition } from "@/lib/AstrologyUtils";
import { Point } from "@/types/AstrologyTypes";
import AstrologyCircle from "./AstrologySymbols/AstrologyCircle";
import AstrologyLine from "./AstrologySymbols/AstrologyLine";

interface AstrologyRulerProps {
	point: Point;
	startRadius: number;
	endRadius: number;
	startAngle: number;
};

function getRulerPositions(
	point: Point,
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
				startingPoint={startingPoint}
				endingPoint={endingPoint}
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
	point,
	startRadius,
	endRadius,
	startAngle,
}: AstrologyRulerProps) {
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
}