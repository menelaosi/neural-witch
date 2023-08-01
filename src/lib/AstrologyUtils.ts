import { Point } from '@/types/AstrologyTypes';

export const WHITE = '#ffffff'; // BACKGROUND_RULER
export const DARK_GRAY = '#333333'; // LINE_COLOR AND CIRCLE_COLOR AND SYMBOL_AXIS_FONT_COLOR
export const BLACK = '#000000'; // SIGNS_COLOR AND POINTS_COLOR AND CUSPS_FONT_COLOR
export const POINTS_TEXT_SIZE = 8;
export const POINTS_STROKE = '1.8';
export const SIGNS_STROKE = '1.5';
export const MARGIN = 50;
export const PADDING = 18;
export const INDOOR_CIRCLE_RADIUS_RATIO = 2;
export const INNER_CIRCLE_RADIUS_RATIO = 8;
export const RULER_RADIUS = 4;
export const SYMBOL_AXIS_STROKE = 1.6;
export const CUSPS_STROKE = 1;
export const COLLISION_RADIUS = 10;

const SHIFT_IN_DEGREES = 180;

/**
 * Converts from radians to degrees
 * @param {number} angle - The angle in radians to convert to degrees
 * @returns {number} angle in degrees
 */
export function convertShiftInDegrees(angle: number): number {
	return ((SHIFT_IN_DEGREES - angle) % 360) * Math.PI / SHIFT_IN_DEGREES;
}

export function radiansToDegree(radians: number): number {
	return radians * 180 / Math.PI;
}

export function getPointPosition(
	point: Point,
	radius: number,
	angle: number,
): Point {
	const angleInRadians = convertShiftInDegrees(angle);
	const x = point.x + (radius * Math.cos(angleInRadians));
	const y = point.y + (radius * Math.sin(angleInRadians));
	return {
		x,
		y,
	};
}
