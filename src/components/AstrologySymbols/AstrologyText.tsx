import { Point } from '@/types/AstrologyTypes';
import React from 'react';

interface AstrologyTextProps {
	readonly text: string;
	readonly point: Point;
	readonly size: string | number;
	readonly color: string;
}

const AstrologyText: React.FC<AstrologyTextProps> = ({
	text,
	point,
	size,
	color,
}) => {
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
			fontFamily='serif'
			dominantBaseline='central'
		>
			{text}
		</text>
	);
};

export default AstrologyText;
