interface AstrologySegmentProps {
	x: number;
	y: number;
	radius: number;
	angleFrom: number;
	angleTo: number;
	thickness: number;
	lFlag?: number;
	sFlag?: number;
};

/**
 * Converts from radians to degrees
 * @param {number} angle - The angle in radians to convert to degrees
 * @returns {number} angle in degrees
 */
function convertShiftInDegrees(angle: number): number {
	return ((180 - angle) % 360) * Math.PI / 180;
}

/**
 * Creates a segment SVG
 * @param AstrologySegmentProps
 * @returns the segment in SVG
 */
export default function AstrologySegment({
	x,
	y,
	radius,
	angleFrom,
	angleTo,
	thickness,
	lFlag = 0,
	sFlag = 0,
}: AstrologySegmentProps) {
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
		x: x + thickness * cosineAngleFromShift,
		y: y + thickness * sineAngleFromShift,
	};
	
	const point2 = {
		x: radiusMinusThickness * cosineAngleFromShift,
		y: radiusMinusThickness * sineAngleFromShift,
	};

	const point3 = {
		x: x + radius * cosineAngleToShift,
		y: radius * sineAngleToShift,
	};

	const point4 = {
		x: radiusMinusThickness * -cosineAngleFromShift,
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
			fill="none"
		/>
	);
};