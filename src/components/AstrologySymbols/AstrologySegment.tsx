import { convertShiftInDegrees } from '@/lib/AstrologyUtils';
import { Point } from '@/types/AstrologyTypes';
import React from 'react';

interface AstrologySegmentProps {
	readonly point: Point;
	readonly radius: number;
	readonly angleFrom: number;
	readonly angleTo: number;
	readonly thickness: number;
	readonly lFlag?: number;
	readonly sFlag?: number;
	readonly fill?: string;
	readonly stroke?: string;
	readonly strokeWidth?: number;
}

/**
 * Creates a segment SVG
 * @param AstrologySegmentProps
 * @returns the segment in SVG
 */
const AstrologySegment: React.FC<AstrologySegmentProps> = ({
	point,
	radius,
	angleFrom,
	angleTo,
	thickness,
	lFlag = 0,
	sFlag = 0,
	stroke,
	strokeWidth,
	fill = 'none',
}) => {
	// Some constants for angles in degress and radius minus thickness
	const angleFromShift = convertShiftInDegrees(angleFrom);
	const angleToShift = convertShiftInDegrees(angleTo);
	const radiusMinusThickness = radius - thickness;

	// Some constants for cos and sin for angleFrom and angleTo
	const cosineAngleFromShift = Math.cos(angleFromShift);
	const sineAngleFromShift = Math.sin(angleFromShift);
	const cosineAngleToShift = Math.cos(angleToShift);
	const sineAngleToShift = Math.sin(angleToShift);

	// Define the points for the SVG

	const point1 = {
		x: point.x + (thickness * cosineAngleFromShift),
		y: point.y + (thickness * sineAngleFromShift),
	};

	const point2 = {
		x: radiusMinusThickness * cosineAngleFromShift,
		y: radiusMinusThickness * sineAngleFromShift,
	};

	const point3 = {
		x: point.x + (radius * cosineAngleToShift),
		y: point.y + (radius * sineAngleToShift),
	};

	const point4 = {
		x: radiusMinusThickness * -cosineAngleToShift,
		y: radiusMinusThickness * -sineAngleToShift,
	};

	// Draw the path based on the constants we've created
	return (
		<path
			d={`
				M ${point1.x}, ${point1.y}
				l ${point2.x}, ${point2.y}
				A ${radius}, ${radius},0 ,${lFlag}, ${sFlag}, ${point3.x}, ${point3.y}
				l ${point4.x}, ${point4.y}
				A ${thickness}, ${thickness},0 ,${lFlag}, 1, ${point1.x}, ${point1.y}
			`}
			fill={fill}
			stroke={stroke}
			strokeWidth={strokeWidth}
		/>
	);
};

export default AstrologySegment;
