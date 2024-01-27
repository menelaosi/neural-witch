import { Point } from '@/types/AstrologyTypes';
import React from 'react';

interface CircleProps {
	readonly point: Point;
	readonly radius: number;
	readonly stroke: string;
	readonly strokeWidth: number;
	readonly fill?: string;
}
const AstrologyCircle: React.FC<CircleProps> = ({
	point,
	radius,
	stroke,
	strokeWidth,
	fill = 'none',
}) => {
	const {
		x,
		y,
	} = point;
	return (
		<circle
			cx={x}
			cy={y}
			radius={radius}
			stroke={stroke}
			strokeWidth={strokeWidth}
			fill={fill}
		/>
	);
};

export default AstrologyCircle;
