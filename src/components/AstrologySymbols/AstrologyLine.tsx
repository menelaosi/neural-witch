import { Point } from '@/types/AstrologyTypes';
import React from 'react';

interface AstrologyLineProps {
	readonly startingPoint: Point;
	readonly endingPoint: Point;
	readonly stroke?: string;
	readonly strokeWidth?: number;
}

const AstrologyLine: React.FC<AstrologyLineProps> = ({
	startingPoint,
	endingPoint,
	stroke,
	strokeWidth,
}) => {
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

export default AstrologyLine;
