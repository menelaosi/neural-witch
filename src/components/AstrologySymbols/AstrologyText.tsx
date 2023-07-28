interface AstrologyTextProps {
	text: string;
	x: number;
	y: number;
	size: string;
	color: string;
};

export default function AstrologyText({
	text,
	x,
	y,
	size,
	color,
}: AstrologyTextProps) {
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