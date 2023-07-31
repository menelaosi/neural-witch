import { Point } from "@/types/AstrologyTypes";

interface AstrologyTextProps {
	text: string;
	point: Point;
	size: string;
	color: string;
};

export default function AstrologyText({
	text,
	point,
	size,
	color,
}: AstrologyTextProps) {
	const {
		x,
		y,
	} = point;
	return (
		<text
			x={x}
			y={y}
			fontSize={size}
			fill={color}
			fontFamily="serif"
			dominantBaseline="central"
		>
			{text}
		</text>
	)
}