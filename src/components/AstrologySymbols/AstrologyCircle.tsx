import { Point } from "@/types/AstrologyTypes";

interface CircleProps {
	point: Point;
	radius: number;
	stroke: string;
	strokeWidth: number;
	fill?: string;
}
export default function AstrologyCircle({
	point,
	radius,
	stroke,
	strokeWidth,
	fill = "none",
}: CircleProps) {
	const {
		x,
		y,
	} = point;
	const circleRadius = radius / 8;
	return (
		<circle
			cx={x}
			cy={y}
			radius={circleRadius}
			stroke={stroke}
			strokeWidth={strokeWidth}
			fill={fill}
		/>
	);
};