interface AstrologyLineProps {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	color: string;
};

export default function AstrologyLine({
	x1,
	x2,
	y1,
	y2,
	color,
}: AstrologyLineProps) {
	return (
		<line
			x1={x1}
			x2={x2}
			y1={y1}
			y2={y2}
			color={color}
		/>
	);
};