import { Point } from "@/types/AstrologyTypes";

interface AstrologyLineProps {
	startingPoint: Point;
	endingPoint: Point;
	stroke?: string;
	strokeWidth?: number;
};

export default function AstrologyLine({
	startingPoint,
	endingPoint,
	stroke,
	strokeWidth,
}: AstrologyLineProps) {
	const {
		x: x1,
		y: y1,
	} = startingPoint;
	const {
		x: x2,
		y: y2,
	} = endingPoint;
	return (
		<line
			x1={x1}
			x2={x2}
			y1={y1}
			y2={y2}
			stroke={stroke}
			strokeWidth={strokeWidth}
		/>
	);
};