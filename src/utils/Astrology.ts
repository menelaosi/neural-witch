import { COLLISION_RADIUS } from "../settings/HoroscopeSettings";
interface Point {
	x: number;
	y: number;
	text?: string;
	radius?: number;
};

function getPointPosition(cX: number, cY: number, radius: number, angle: number): Point {
	const angleInRadians = degreeToRadians(180 - angle);
	const xPosition = cX + radius * Math.cos(angleInRadians);
	const yPosition = cY + radius * Math.sin(angleInRadians);
	return {x:xPosition, y:yPosition};
};

function degreeToRadians(degrees: number): number {
	return degrees * Math.PI / 180;
};

function radiansToDegrees(radians: number): number {
	return radians * 180 / Math.PI;
};

function getDescriptionPosition(point: Point, texts: string[]): Point[] {
	const ration = 1.4;
	const result: Point[] = [];
	const positionX = point.x + (COLLISION_RADIUS / ration);
	const positionY = point.y - COLLISION_RADIUS;
	for(let i = 0; i < texts.length; i++) {
		result.push({
			text: texts[i],
			x: positionX,
			y: positionY + COLLISION_RADIUS / ration * i,
		});
	}

	return result;
};

export interface AstrologyData {
	planets: string[];
	cusps: string[];
}
	
/**
 * Check circle collision between two objects 
 * @param {Object} circle1, {x:123, y:123, r:50}
 * @param {Object} circle2, {x:456, y:456, r:60}
 * @return {boolean} if it's a collision or not
 */
function isCollision(circle1: Point, circle2: Point): boolean {
	const xVector = circle1.x - circle2.x;
	const yVector = circle1.y - circle2.y;
	const magnitude = Math.sqrt(xVector ** 2 + yVector ** 2);
	const totalRadii = circle1.radius! + circle2.radius!;
	return magnitude <= totalRadii;
};

/**
 * Get the astrological sign for the point in a circle
 * @param {number} point - angle of point in the circle
 * @returns {number} 1 for Aries to 12 for Pisces (though we should change to enums)
 */
function getSign(point: number): number {
	return Math.floor(calculateAngle(point) / 30) + 1;
};

/**
 * Calculates the angle for the sign or house
 * @param {number} point - angle of point in the circle
 * @returns {number} the angle offset by 2π radians
 */
function calculateAngle(point: number): number {
	return point % radiansToDegrees(2 * Math.PI);
};

function getHouseNumber(point: number): number {
	const cusps = [1, 2, 3]; // TODO: This is very wrong and just being done to get this code down
	const angle = calculateAngle(point);
	const length = cusps.length;
	for (let i = 0; i < length; i++) {
		if ((angle >= cusps[i] && angle < cusps[(i % (length - 1)) + 1]) ||
		(cusps[i] > cusps[(i % (length - 1)) + 1])) {
			return i + 1;
		}
	}
	return -1; // Or throw an error
}

/**
 * Checks if the planet is in retrograde
 * @param {number} speed the speed of the planet
 * @returns {boolean} If speed is negative, true, else false
 */
function isRetrograde(speed: number): boolean {
	return speed < 0;
};

/**
 * Converts to degrees, minutes, and seconds
 * @param {number} d - number to convert to degrees, minutes, and seconds
 * @returns a string with the degrees minutes and seconds
 */
function toDMS(d: number): string {
	d += 0.5 / 3600 / 10000;
	const degrees = Math.floor(d);
	d = (d - degrees) * 60;
	const minutes = Math.floor(d);
	d = (d - minutes) * 60;
	const seconds = Math.floor(d);

	return degrees + "° " + minutes + "' " + seconds;
}