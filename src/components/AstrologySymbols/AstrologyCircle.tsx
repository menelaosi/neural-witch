interface CircleProps {
	centerX: number;
	centerY: number;
	radius: number;
}
export default function AstrologyCircle({
	centerX,
	centerY,
	radius,
}: CircleProps) {
	const circleRadius = radius / 8;
	return (
		<circle
			cx={centerX}
			cy={centerY}
			radius={circleRadius}
			fill="none"
		/>
	);
};