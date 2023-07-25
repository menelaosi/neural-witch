import { CollisionRadius, SymbolScale } from "../settings/HoroscopeSettings";
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
	const positionX = point.x + ((CollisionRadius / ration) * SymbolScale);
	const positionY = point.y - CollisionRadius * SymbolScale;
	for(let i = 0; i < texts.length; i++) {
		result.push({
			text: texts[i],
			x: positionX,
			y: positionY + CollisionRadius / ration * SymbolScale * i,
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
 * @return {boolean}
 */
function isCollision(circle1: Point, circle2: Point): boolean {
	const xVector = circle1.x - circle2.x;
	const yVector = circle1.y - circle2.y;
	const magnitude = Math.sqrt(xVector ** 2 + yVector ** 2);
	const totalRadii = circle1.radius! + circle2.radius!;
	return magnitude <= totalRadii;
};