interface CircleProps {
	centerX: number;
	centerY: number;
	radius: number;
	stroke: string;
	strokeWidth: number;
	fill?: string;
}
export default function AstrologyCircle({
	centerX,
	centerY,
	radius,
	stroke,
	strokeWidth,
	fill = "none",
}: CircleProps) {
	const circleRadius = radius / 8;
	return (
		<circle
			cx={centerX}
			cy={centerY}
			radius={circleRadius}
			stroke={stroke}
			strokeWidth={strokeWidth}
			fill={fill}
		/>
	);
};